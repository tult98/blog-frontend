import { useQuery } from '@apollo/client'
import { ColumnDef, Row } from '@tanstack/react-table'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { useSetRecoilState } from 'recoil'
import BaseLayout from '~/components/layouts/Dashboard/BaseLayout'
import DataTable from '~/components/widgets/DataTable'
import { ICategory, IMeta } from '~/models/category'
import { GET_CATEGORIES } from '~/queries/category'
import {
  notificationState,
  NOTIFICATION_TYPE,
} from '~/recoil/atoms/notificationState'
import { DASHBOARD_PREFIX } from '~/utils/settings'

const Categories = () => {
  const { loading, error, data } =
    useQuery<{ getCategories: { categories: ICategory[]; meta: IMeta } }>(
      GET_CATEGORIES,
    )
  const setNotification = useSetRecoilState(notificationState)
  const router = useRouter()

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

  useEffect(() => {
    if (!error) {
      return
    }
    setNotification({
      isShow: true,
      type: NOTIFICATION_TYPE.DANGEROUS,
      title: 'Failed at getting categories',
    })
  }, [error])

  const onPressDetails = (row: Row<ICategory>) => {
    router.push(`${DASHBOARD_PREFIX}/categories/${row.original.slug}`)
  }

  // @ts-expect-error
  const onPressDelete = (row: Row<ICategory>) => {
    // TODO: display the confirm modal
  }

  return (
    <BaseLayout title="TuLamThings | Categories">
      <DataTable
        columns={columns}
        data={data?.getCategories?.categories ?? []}
        enableSelection={true}
        enableAction={true}
        loading={loading}
        onPressDetails={onPressDetails}
        onPressDelete={onPressDelete}
      />
    </BaseLayout>
  )
}

export default Categories
