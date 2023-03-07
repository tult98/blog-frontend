import { useMutation } from '@apollo/client'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import CategoryForm from '~/components/widgets/CategoryForm'
import { ICategory } from '~/models/category'
import { UPDATE_CATEGORY } from '~/mutations/category'
import {
  notificationState,
  NOTIFICATION_TYPE,
} from '~/recoil/atoms/notificationState'

interface Props {
  category: ICategory
}

const CategoryDetails = ({ category }: Props) => {
  const setNotification = useSetRecoilState(notificationState)
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

  return (
    <div className="flex flex-col w-full max-w-3xl">
      <CategoryForm
        operator="update"
        isSubmitting={mutation.loading}
        category={category}
        onSubmit={mutate}
      />
    </div>
  )
}

export default CategoryDetails
