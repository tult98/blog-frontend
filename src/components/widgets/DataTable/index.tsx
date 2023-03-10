import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  Row,
  useReactTable,
} from '@tanstack/react-table'
import { useMemo } from 'react'
import LoadingIndicator from '~/components/elements/LoadingIndicator'
import IndeterminateCheckbox from '~/components/widgets/DataTable/IndeterminateCheckbox'
import RowAction from '~/components/widgets/DataTable/RowAction'
import Pagination from '~/components/widgets/Pagination'

interface Props<TData> {
  columns: ColumnDef<TData, any>[]
  data: TData[]
  enableSelection?: boolean
  enableAction?: boolean
  loading: boolean
  onPressDetails?: (row: Row<TData>) => void
  onPressDelete?: (row: Row<TData>) => void
}

const DataTable = <TData extends object>({
  columns,
  data,
  enableAction,
  enableSelection,
  loading,
  onPressDetails,
  onPressDelete,
}: Props<TData>) => {
  const allColumns = useMemo<ColumnDef<TData>[]>(() => {
    if (!columns) {
      return []
    }
    const allColumns = [...columns]
    if (enableAction && onPressDetails && onPressDelete) {
      allColumns.push({
        id: 'actions',
        cell: ({ row }) => (
          <RowAction onPressDetails={() => onPressDetails(row)} onPressDelete={() => onPressDelete(row)} />
        ),
      })
    }
    if (enableSelection) {
      allColumns.unshift({
        id: 'select',
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      })
    }
    return allColumns
  }, [enableAction, enableSelection, columns])

  const { getHeaderGroups, getRowModel, getState, getPageCount } = useReactTable({
    data,
    columns: allColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="flex flex-col w-full space-y-4 overflow-x-auto">
      <table className="table w-full">
        <thead>
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {loading && (
        <div className="relative w-full min-h-[64px]">
          <LoadingIndicator positionStyle="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      )}
      {!getPageCount() && !loading && (
        <div className="relative w-full min-h-[64px] text-center">
          <p className="italic">There is no data to display</p>
        </div>
      )}
      {!!getPageCount() && (
        <div className="self-end">
          <Pagination currentPage={getState().pagination.pageIndex + 1} totalPage={getPageCount()} />
        </div>
      )}
    </div>
  )
}

export default DataTable
