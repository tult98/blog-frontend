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
      <label
        htmlFor="global-modal"
        className="btn btn-sm btn-secondary"
        onClick={onPressDelete}
      >
        <Icon name="close" style="w-5 h-5" />
        Remove
      </label>
    </div>
  )
}

export default RowAction
