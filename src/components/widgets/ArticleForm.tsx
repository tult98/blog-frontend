import { useMutation } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'
import Input from '~/components/Input'
import FileInput from '~/components/Input/FileInput'
import MarkdownEditor from '~/components/widgets/MarkdownEditor'
import { ArticleFormData, ArticleInstance, articleSchema } from '~/models/article'
import { CREATE_ARTICLE } from '~/mutations/article'
import { CREATE_PRESIGNED_URLS } from '~/mutations/file'
import { notificationState, NOTIFICATION_TYPE } from '~/recoil/atoms/notificationState'
import { IMAGE_EXTENSIONS } from '~/utils/fileUtils'

const ArticleForm = () => {
  const setNotificationInfo = useSetRecoilState(notificationState)
  const [mutate, { data, loading, error }] =
    useMutation<{ createPresignedUrls: { presignedUrls: string[] } }>(CREATE_PRESIGNED_URLS)
  const [createArticleFunction, {}] = useMutation<{ createArticle: ArticleInstance }>(CREATE_ARTICLE)

  const [coverUrl, setCoverUrl] = useState<string>()
  const [isCoverUploading, setIsCoverUploading] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ArticleFormData>({
    mode: 'onBlur',
    resolver: yupResolver(articleSchema),
  })
  const [watchTitle, watchContent, watchThumbnail] = watch(['title', 'content', 'thumbnail'])

  const onChangeMarkdown = (value: string) => {
    setValue('content', value)
  }

  const onSubmit = (data: ArticleFormData) => {}

  useEffect(() => {
    if ((watchThumbnail as FileList)?.length) {
      mutate({
        variables: {
          filenames: [(watchThumbnail as FileList)[0].name],
        },
      })
    }
  }, [watchThumbnail])

  useEffect(() => {
    ;(async () => {
      if (!data) {
        return
      }
      try {
        setIsCoverUploading(true)
        const { presignedUrls } = data.createPresignedUrls
        const results = await fetch(presignedUrls[0], {
          method: 'PUT',
          body: (watchThumbnail as FileList)[0],
        })
        const returnedUrl = results.url.split('?')[0]
        setIsCoverUploading(false)
        setCoverUrl(returnedUrl)
        setNotificationInfo({
          isShow: true,
          type: NOTIFICATION_TYPE.INFORMING,
          title: 'Your file has been uploaded to S3',
          autoClose: true,
        })
      } catch (e: any) {
        setIsCoverUploading(false)
        setNotificationInfo({
          isShow: true,
          type: NOTIFICATION_TYPE.DANGEROUS,
          title: 'Cannot upload your file.',
          message: 'Fail to upload your file to S3',
          autoClose: true,
        })
      }
    })()
  }, [data])

  useEffect(() => {
    if (error) {
      setNotificationInfo({
        isShow: true,
        type: NOTIFICATION_TYPE.DANGEROUS,
        title: 'Cannot upload your file.',
        message: 'Fail to create presigned URL.',
        autoClose: true,
      })
    }
  }, [error])

  return (
    <div className="flex flex-col w-full pb-12 space-y-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          id="title"
          label="Title"
          placeholder="Enter your title"
          inputStyle="w-full input input-bordered focus:outline-none"
          register={register('title')}
          error={errors?.title}
        />
        <FileInput
          label="Cover image"
          accept={IMAGE_EXTENSIONS}
          register={register('thumbnail')}
          error={errors?.thumbnail}
          isUploading={loading || isCoverUploading}
        />
        <Input
          type="text"
          id="preface"
          label="Preface"
          placeholder="Describe about the article shortly"
          inputStyle="w-full input input-bordered focus:outline-none"
          register={{ ...register('preface') }}
          error={errors?.preface}
        />
        <div className="form-control">
          <label className="label">
            <span className="label-text">Content</span>
          </label>
          <MarkdownEditor value={watchContent} onChange={onChangeMarkdown} />
          {errors?.content && <p className="error-message">{errors?.content?.message}</p>}
        </div>
        <div className="self-end mt-8">
          <button className="btn btn-primary" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default ArticleForm
