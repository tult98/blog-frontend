import Icon from '~/components/elements/Icon'

interface Props {
  onPressDetails: () => void
  onPressDelete: () => void
}

const RowAction = ({ onPressDelete, onPressDetails }: Props) => {
  return (
    <div className="space-x-4">
      <button className="gap-2 btn btn-primary btn-sm" onClick={onPressDetails}>
        <Icon name="edit" style="w-5 h-5" />
        Edit/Details
      </button>
      <button
        className="gap-2 btn btn-secondary btn-sm"
        onClick={onPressDelete}
      >
        <Icon name="close" style="w-5 h-5" />
        Remove
      </button>
    </div>
  )
}

export default RowAction
