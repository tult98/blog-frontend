import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { ICategory } from '~/models/category'
import { GET_CATEGORY_BY_SLUG } from '~/queries/category'
import {
  notificationState,
  NOTIFICATION_TYPE,
} from '~/recoil/atoms/notificationState'

interface Props {
  slug: string
}

const CategoryDetails = ({ slug }: Props) => {
  const [category, setCategory] = useState<ICategory>()
  const setNotification = useSetRecoilState(notificationState)
  // @ts-expect-error
  const { loading, error, data } = useQuery<{ getCategoryBySlug: ICategory }>(
    GET_CATEGORY_BY_SLUG,
    {
      variables: { slug },
    },
  )

  useEffect(() => {
    if (!data) {
      return
    }
    setCategory(data.getCategoryBySlug)
  }, [data])

  useEffect(() => {
    if (!error) {
      return
    }
    setNotification({
      isShow: true,
      type: NOTIFICATION_TYPE.DANGEROUS,
      title: 'Failed at getting the category',
      autoClose: true,
    })
  }, [error, setNotification])

  return (
    <div className="flex flex-col w-full max-w-3xl">
      <div className="w-full form-control">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          type="text"
          placeholder="Title"
          className="w-full input input-bordered focus:outline-none"
          value={category?.title ?? ''}
        />
      </div>

      <div className="w-full form-control">
        <label className="label">
          <span className="label-text">Slug</span>
        </label>
        <input
          type="text"
          placeholder="Slug"
          className="w-full input input-bordered focus:outline-none"
          value={category?.slug ?? ''}
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          className="h-24 textarea textarea-bordered focus:outline-none"
          placeholder="Description"
          value={category?.description}
        ></textarea>
      </div>
      <div className="self-end mt-8 space-x-2">
        <button className="btn btn-active btn-primary">Update</button>
        <button className="btn btn-error">Delete</button>
      </div>
    </div>
  )
}

export default CategoryDetails
