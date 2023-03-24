import { yupResolver } from '@hookform/resolvers/yup'
import { ChangeEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '~/components/Input'
import FileInput from '~/components/Input/FileInput'
import MarkdownEditor from '~/components/widgets/MarkdownEditor'
import { ArticleInput, articleSchema } from '~/models/article'
import { IMAGE_EXTENSIONS } from '~/utils/fileUtils'

type FormData = {
  title: string
  thumbnail: string
  slug: string
  preface: string
  content: string
}

const ArticleForm = () => {
  // const [errors, setErrors] = useState<Record<string, string>>()
  const [articleInput, setArticleInput] = useState<Partial<ArticleInput>>()
  // @ts-expect-error
  const [coverImage, setCoverImage] = useState<File>()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'all', resolver: yupResolver(articleSchema) })

  useEffect(() => {
    let slug = ''
    if (articleInput?.title) {
      slug = articleInput.title.trim().toLowerCase().split(' ').join('-')
    }
    setArticleInput({
      ...articleInput,
      slug,
    })
  }, [articleInput?.title])

  const onChangeMarkdown = (value?: string, event?: ChangeEvent<HTMLTextAreaElement>) => {
    if (value) {
      setArticleInput({
        ...articleInput,
        content: value,
      })
    } else if (event) {
      setArticleInput({
        ...articleInput,
        content: event.target.value,
      })
    }
  }

  const onSelectImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setCoverImage(event.target.files[0])
    }
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
        <FileInput label="Cover image" accept={IMAGE_EXTENSIONS} onChange={onSelectImage} />
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
          <MarkdownEditor markdown={articleInput?.content ?? ''} onChange={onChangeMarkdown} />
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
