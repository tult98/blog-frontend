import { ChangeEvent, useEffect, useState } from 'react'
import Input from '~/components/Input'
import FileInput from '~/components/Input/FileInput'
import MarkdownEditor from '~/components/widgets/MarkdownEditor'
import { ArticleInput } from '~/models/article'
import { IMAGE_EXTENSIONS } from '~/utils/fileUtils'

const ArticleForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>()
  const [articleInput, setArticleInput] = useState<Partial<ArticleInput>>()
  const [coverImage, setCoverImage] = useState<File>()

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

  const onValidate = (name: string, value: string, shouldUpdateState = true) => {
    const newErrors = { ...errors }
    if (!value) {
      newErrors[name] = 'This field is required.'
    } else {
      delete newErrors[name]
    }
    if (shouldUpdateState) {
      setErrors(newErrors)
    }
    return newErrors
  }

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setArticleInput({
      ...articleInput,
      [event.target.name]: event.target.value,
    })
  }

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

  return (
    <div className="flex flex-col w-full pb-12 space-y-4">
      <Input
        type="text"
        name="title"
        id="title"
        value={articleInput?.title ?? ''}
        label="Title"
        placeholder="Enter your title"
        inputStyle="w-full input input-bordered focus:outline-none"
        onValidate={(event: ChangeEvent<HTMLInputElement>) => onValidate(event.target.name, event.target.value)}
        onChange={onChange}
        error={errors?.title}
      />
      <FileInput label="Cover image" accept={IMAGE_EXTENSIONS} onChange={onSelectImage} />
      <Input
        type="text"
        name="slug"
        id="slug"
        value={articleInput?.slug ?? ''}
        label="Slug"
        placeholder="Slug will be updated base on the title"
        inputStyle="w-full input input-bordered focus:outline-none"
        isDisable={true}
        onValidate={(event: ChangeEvent<HTMLInputElement>) => onValidate(event.target.name, event.target.value)}
        onChange={onChange}
      />
      <Input
        type="text"
        name="Preface"
        id="preface"
        value={articleInput?.preface ?? ''}
        label="Preface"
        placeholder="Describe about the article shortly"
        inputStyle="w-full input input-bordered focus:outline-none"
        onValidate={(event: ChangeEvent<HTMLInputElement>) => onValidate(event.target.name, event.target.value)}
        onChange={onChange}
        error={errors?.preface}
      />
      <div className="form-control">
        <label className="label">
          <span className="label-text">Content</span>
        </label>
        <MarkdownEditor markdown={articleInput?.content ?? ''} onChange={onChangeMarkdown} />
      </div>
      <div className="self-end mt-8">
        <button className="btn btn-primary">Create</button>
      </div>
    </div>
  )
}

export default ArticleForm
