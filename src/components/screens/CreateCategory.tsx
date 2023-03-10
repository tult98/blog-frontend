import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import CategoryForm from '~/components/widgets/CategoryForm'
import { CREATE_CATEGORY } from '~/mutations/category'
import { GET_CATEGORIES } from '~/queries/category'
import { notificationState, NOTIFICATION_TYPE } from '~/recoil/atoms/notificationState'
import { DASHBOARD_PREFIX } from '~/utils/settings'

const CreateCategory = () => {
  const [createCategory, { loading, error, data }] = useMutation(CREATE_CATEGORY, {
    refetchQueries: [{ query: GET_CATEGORIES }, 'getCategories'],
  })
  const setNotification = useSetRecoilState(notificationState)
  const router = useRouter()

  useEffect(() => {
    if (data) {
      setNotification({
        isShow: true,
        type: NOTIFICATION_TYPE.INFORMING,
        title: 'The category has been created.',
        autoClose: true,
      })
      router.push(`${DASHBOARD_PREFIX}/categories`)
    }
  }, [data])

  useEffect(() => {
    if (error) {
      setNotification({
        isShow: true,
        type: NOTIFICATION_TYPE.DANGEROUS,
        title: 'Failed to create the category.',
        autoClose: true,
      })
    }
  }, [error])

  return (
    <div className="w-full max-w-3xl">
      <CategoryForm operator="create" isSubmitting={loading} onSubmit={createCategory} />
    </div>
  )
}

export default CreateCategory
