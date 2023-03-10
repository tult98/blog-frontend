import { ApolloCache, DefaultContext, MutationFunctionOptions, OperationVariables } from '@apollo/client'
import { ChangeEvent, useCallback, useState } from 'react'
import { ICategory } from '~/models/category'

type OPERATOR = 'create' | 'update'

interface Props {
  category?: ICategory
  isSubmitting?: boolean
  operator: OPERATOR
  onSubmit: (
    options: MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>> | undefined,
  ) => void
}

const CategoryForm = ({ category, isSubmitting, operator, onSubmit }: Props) => {
  const [errors, setErrors] = useState<Record<string, string>>()
  const [categoryInput, setCategoryInput] = useState<Omit<ICategory, 'id' | 'slug'>>({
    title: category?.title ?? '',
    description: category?.description ?? '',
  })

  const onChangeText = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCategoryInput({
      ...categoryInput,
      [event.target.name]: event.target.value,
    })
  }

  const onValidateText = (name: string, value: string, shouldUpdateState = true) => {
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

  const onSubmitForm = useCallback(() => {
    let errors = onValidateText('title', categoryInput.title, false)
    errors = onValidateText('description', categoryInput.description, false)
    if (Object.keys(errors)?.length) {
      setErrors(errors)
      return
    }
    onSubmit({
      variables:
        operator === 'create' // create new category
          ? { input: categoryInput }
          : { id: category!.id, input: categoryInput },
    })
  }, [operator, categoryInput])

  return (
    <div className="flex flex-col w-full">
      <div className="w-full form-control">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          type="text"
          placeholder="Title"
          className="w-full input input-bordered focus:outline-none"
          name="title"
          value={categoryInput?.title ?? ''}
          onChange={onChangeText}
          onBlur={(event: ChangeEvent<HTMLInputElement>) => onValidateText(event.target.name, event.target.value)}
        />
        {errors?.title && <p className="mt-2 text-sm text-red-500">{errors?.title}</p>}
      </div>

      <div className="w-full form-control">
        <label className="label">
          <span className="label-text">Slug</span>
        </label>
        <input
          type="text"
          placeholder="Slug"
          className="w-full input input-bordered focus:outline-none"
          name="slug"
          value={categoryInput?.title ? categoryInput.title.toLowerCase().split(' ').join('-') : ''}
          disabled
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          className="h-24 textarea textarea-bordered focus:outline-none"
          placeholder="Description"
          name="description"
          value={categoryInput?.description}
          onChange={onChangeText}
          onBlur={(event: ChangeEvent<HTMLTextAreaElement>) => onValidateText(event.target.name, event.target.value)}
        ></textarea>
        {errors?.description && <p className="mt-2 text-sm text-red-500">{errors?.description}</p>}
      </div>
      <div className="self-end mt-8 space-x-2">
        <button className={`btn btn-primary ${isSubmitting ? 'loading btn-disabled' : ''}`} onClick={onSubmitForm}>
          {operator === 'update' ? 'Update' : 'Create'}
        </button>
      </div>
    </div>
  )
}

export default CategoryForm
