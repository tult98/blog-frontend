import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useMemo } from 'react'
import IndeterminateCheckbox from '~/components/widgets/DataTable/IndeterminateCheckbox'
import RowAction from '~/components/widgets/DataTable/RowAction'

interface Props<TData> {
  columns: ColumnDef<TData, any>[]
  data: TData[]
  enableSelection?: boolean
  enableAction?: boolean
}

const DataTable = <TData extends object>({
  columns,
  data,
  enableAction,
  enableSelection,
}: Props<TData>) => {
  const allColumns = useMemo<ColumnDef<TData>[]>(() => {
    if (!columns) {
      return []
    }
    const allColumns = [...columns]
    if (enableAction) {
      allColumns.push({
        id: 'actions',
        cell: ({ row }) => <RowAction row={row} />,
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

  const { getHeaderGroups, getRowModel } = useReactTable({
    data,
    columns: allColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="w-full overflow-x-auto">
      <table className="table w-full">
        <thead>
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
