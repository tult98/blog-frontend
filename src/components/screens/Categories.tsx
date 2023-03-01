import { useQuery } from '@apollo/client'
import { ColumnDef } from '@tanstack/react-table'
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

const Categories = () => {
  // @ts-expect-error
  const { loading, error, data } =
    useQuery<{ getCategories: { categories: ICategory[]; meta: IMeta } }>(
      GET_CATEGORIES,
    )
  const setNotification = useSetRecoilState(notificationState)

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

  return (
    <BaseLayout title="TuLamThings | Categories">
      <DataTable
        columns={columns}
        data={data?.getCategories?.categories ?? []}
        enableSelection={true}
        enableAction={true}
      />
    </BaseLayout>
  )
}

export default Categories
