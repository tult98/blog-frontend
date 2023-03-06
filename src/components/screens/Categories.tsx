import { useMutation, useQuery } from '@apollo/client'
import { ColumnDef, Row } from '@tanstack/react-table'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import BaseLayout from '~/components/layouts/Dashboard/BaseLayout'
import DataTable from '~/components/widgets/DataTable'
import { ICategory, IMeta } from '~/models/category'
import { DELETE_CATEGORY } from '~/mutations/category'
import { GET_CATEGORIES } from '~/queries/category'
import { modalState } from '~/recoil/atoms/modalState'
import {
  notificationState,
  NOTIFICATION_TYPE,
} from '~/recoil/atoms/notificationState'
import { DASHBOARD_PREFIX } from '~/utils/settings'

const Categories = () => {
  const router = useRouter()
  const setNotification = useSetRecoilState(notificationState)
  const [modalInfo, setModalInfo] = useRecoilState(modalState)
  const { loading, error, data } =
    useQuery<{ getCategories: { categories: ICategory[]; meta: IMeta } }>(
      GET_CATEGORIES,
    )
  const [deleteCategory, results] = useMutation(DELETE_CATEGORY, {
    refetchQueries: [{ query: GET_CATEGORIES }, 'getCategories'],
  })

  const columns = useMemo<ColumnDef<ICategory>[]>(
    () => [
      {
        accessorKey: 'title',
        header: 'Title',
      },
      {
        accessorKey: 'description',
        header: 'Description',
      },
    ],
    [],
  )

  const onCloseModal = useCallback(() => {
    const modalElement = document.getElementById('global-modal')
    if (modalElement) {
      modalElement.click()
    }
  }, [])

  useEffect(() => {
    if (!error) {
      return
    }
    setNotification({
      isShow: true,
      type: NOTIFICATION_TYPE.DANGEROUS,
      title: 'Failed to get list of categories',
      autoClose: true,
    })
  }, [error])

  useEffect(() => {
    if (results.loading) {
      setModalInfo({
        ...modalInfo,
        isLoading: true,
      })
    }
  }, [results.loading])

  useEffect(() => {
    if (results.error) {
      setNotification({
        isShow: true,
        type: NOTIFICATION_TYPE.DANGEROUS,
        title: 'Failed to delete the selected category.',
        autoClose: true,
      })
      setModalInfo({
        ...modalInfo,
        isLoading: false,
      })
      onCloseModal()
    }
  }, [results.error])

  useEffect(() => {
    if (results.data) {
      setNotification({
        isShow: true,
        type: NOTIFICATION_TYPE.INFORMING,
        title: 'The selected category is deleted.',
        autoClose: true,
      })
      setModalInfo({
        ...modalInfo,
        isLoading: false,
      })
      onCloseModal()
    }
  }, [results.data])

  const onPressDetails = (row: Row<ICategory>) => {
    router.push(`${DASHBOARD_PREFIX}/categories/${row.original.slug}`)
  }

  const onPressDelete = (row: Row<ICategory>) => {
    setModalInfo({
      title: 'Delete this category?',
      message: `Are you sure to delete ${row.original.title} category?`,
      onConfirm: () => onConfirmDelete(row),
    })
  }

  const onConfirmDelete = (row: Row<ICategory>) => {
    deleteCategory({
      variables: { id: row.original.id },
    })
  }

  return (
    <BaseLayout title="TuLamThings | Categories">
      <div className="flex flex-col space-y-4">
        <Link
          href={`${DASHBOARD_PREFIX}/categories/create`}
          className="self-end btn btn-primary btn-outline"
        >
          New category
        </Link>
        <DataTable
          columns={columns}
          data={data?.getCategories?.categories ?? []}
          enableSelection={true}
          enableAction={true}
          loading={loading}
          onPressDetails={onPressDetails}
          onPressDelete={onPressDelete}
        />
      </div>
    </BaseLayout>
  )
}

export default Categories
