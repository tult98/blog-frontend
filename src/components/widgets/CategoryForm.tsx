import { ApolloCache, DefaultContext, MutationFunctionOptions, OperationVariables } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Input from '~/components/Input'
import { categorySchema, ICategory } from '~/models/category'

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
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Omit<ICategory, 'id'>>({
    mode: 'onBlur',
    resolver: yupResolver(categorySchema),
    defaultValues: category,
  })
  const watchTitle = watch('title')

  useEffect(() => {
    if (watchTitle) {
      setValue('slug', watchTitle.toLowerCase().trim().split(' ').join('-'))
    }
  }, [watchTitle])

  const onSubmitForm = (data: Omit<ICategory, 'id'>) => {
    const categoryInput = { title: data.title, description: data.description }
    onSubmit({
      variables:
        operator === 'create' // create new category
          ? { input: categoryInput }
          : { id: category!.id, input: categoryInput },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col w-full">
      <div className="w-full form-control">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <Input
          type="text"
          id="title"
          placeholder="Title"
          inputStyle="input focus:outline-none input-bordered"
          register={register('title')}
          error={errors?.title}
        />
      </div>
      <div className="w-full form-control">
        <label className="label">
          <span className="label-text">Slug</span>
        </label>
        <Input
          type="text"
          id="slug"
          placeholder="Slug is auto generated based on the title"
          inputStyle="input input-bordered focus:outline-none"
          isDisable={true}
          register={register('slug')}
          error={errors?.slug}
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          className="h-24 textarea textarea-bordered focus:outline-none"
          placeholder="Description"
          {...register('description')}
        ></textarea>
        {errors?.description && <p className="mt-2 text-sm text-red-500">{errors?.description?.message}</p>}
      </div>
      <div className="self-end mt-8 space-x-2">
        <button type="submit" className={`btn btn-primary ${isSubmitting ? 'loading btn-disabled' : ''}`}>
          {operator === 'update' ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  )
}

export default CategoryForm
