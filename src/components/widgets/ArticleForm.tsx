import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Input from '~/components/Input'
import FileInput from '~/components/Input/FileInput'
import MarkdownEditor from '~/components/widgets/MarkdownEditor'
import { ArticleData, articleSchema } from '~/models/article'
import { IMAGE_EXTENSIONS } from '~/utils/fileUtils'

const ArticleForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ArticleData>({
    mode: 'onBlur',
    resolver: yupResolver(articleSchema),
  })
  const watchContent = watch('content')
  const watchTitle = watch('title')

  useEffect(() => {
    setValue('slug', watchTitle?.toLowerCase().trim().split(' ').join('-'))
  }, [watchTitle])

  const onChangeMarkdown = (value: string) => {
    setValue('content', value)
  }

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className="flex flex-col w-full pb-12 space-y-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          id="title"
          label="Title"
          placeholder="Enter your title"
          inputStyle="w-full input input-bordered focus:outline-none"
          register={register('title', { required: true })}
          error={errors?.title}
        />
        <FileInput
          label="Cover image"
          accept={IMAGE_EXTENSIONS}
          register={register('thumbnail')}
          error={errors?.thumbnail}
        />
        <Input
          type="text"
          id="slug"
          label="Slug"
          placeholder="Slug will be updated base on the title"
          inputStyle="w-full input input-bordered focus:outline-none"
          isDisable={true}
          register={register('slug', { required: true })}
          error={errors?.slug}
        />
        <Input
          type="text"
          id="preface"
          label="Preface"
          placeholder="Describe about the article shortly"
          inputStyle="w-full input input-bordered focus:outline-none"
          register={{ ...register('preface', { required: true }) }}
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
