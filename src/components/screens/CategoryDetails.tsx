import { useMutation, useQuery } from '@apollo/client'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import LoadingIndicator from '~/components/elements/LoadingIndicator'
import CategoryForm from '~/components/widgets/CategoryForm'
import { ICategory } from '~/models/category'
import { UPDATE_CATEGORY } from '~/mutations/category'
import { GET_CATEGORY_BY_SLUG } from '~/queries/category'
import {
  notificationState,
  NOTIFICATION_TYPE,
} from '~/recoil/atoms/notificationState'

interface Props {
  slug: string
}

const CategoryDetails = ({ slug }: Props) => {
  const setNotification = useSetRecoilState(notificationState)
  const { loading, error, data } = useQuery<{ getCategoryBySlug: ICategory }>(
    GET_CATEGORY_BY_SLUG,
    {
      variables: { slug },
    },
  )
  const [mutate, mutation] = useMutation(UPDATE_CATEGORY)

  useEffect(() => {
    if (mutation.error) {
      setNotification({
        isShow: true,
        type: NOTIFICATION_TYPE.DANGEROUS,
        title: 'Failed to update the category.',
        autoClose: true,
      })
    }
  }, [mutation.error])

  useEffect(() => {
    if (mutation.data) {
      setNotification({
        isShow: true,
        type: NOTIFICATION_TYPE.INFORMING,
        title: 'The category has been updated.',
        autoClose: true,
      })
    }
  }, [mutation.data])

  useEffect(() => {
    if (!error) {
      return
    }
    setNotification({
      isShow: true,
      type: NOTIFICATION_TYPE.DANGEROUS,
      title: 'Failed to get the category',
      autoClose: true,
    })
  }, [error, setNotification])

  if (loading) {
    return (
      <LoadingIndicator positionStyle="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    )
  }

  return (
    <div className="flex flex-col w-full max-w-3xl">
      <CategoryForm
        operator="update"
        isSubmitting={mutation.loading}
        category={data?.getCategoryBySlug}
        onSubmit={mutate}
      />
    </div>
  )
}

export default CategoryDetails
