import { Row } from '@tanstack/react-table'
import Icon from '~/components/elements/Icon'

interface Props<IData> {
  row: Row<IData>
}

// @ts-expect-error
const RowAction = <IData extends object>({ row }: Props<IData>) => {
  return (
    <div className="space-x-4">
      <button className="gap-2 btn btn-primary btn-sm">
        <Icon name="edit" style="w-5 h-5" />
        Edit/Details
      </button>
      <button className="gap-2 btn btn-secondary btn-sm">
        <Icon name="close" style="w-5 h-5" />
        Remove
      </button>
    </div>
  )
}

export default RowAction
