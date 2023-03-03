import Icon from '~/components/elements/Icon'

interface Props {
  currentPage: number
  totalPage: number
  siblingCount?: number
}

const Pagination = ({ currentPage, totalPage }: Props) => {
  return (
    <div className="flex flex-row items-center space-x-2">
      <p className="ml-2">
        Page{' '}
        <strong>
          {currentPage} of {totalPage}
        </strong>
      </p>
      <div className="flex flex-row items-center btn-group">
        <button
          className={`btn hover:btn-active ${
            currentPage === 1 ? 'btn-disabled' : ''
          }`}
        >
          <Icon name="doubleChevronLeft" style="w-4 h-4" />
        </button>
        <button
          className={`btn hover:btn-active ${
            currentPage === 1 ? 'btn-disabled' : ''
          }`}
        >
          <Icon name="chevronLeft" style="w-4 h-4" />
        </button>
        <button className="btn hover:btn-active">{currentPage}</button>
        <button
          className={`btn hover:btn-active ${
            currentPage === totalPage ? 'btn-disabled' : ''
          }`}
        >
          <Icon name="doubleChevronRight" style="w-4 h-4" />
        </button>
        <button
          className={`btn hover:btn-active ${
            currentPage === totalPage ? 'btn-disabled' : ''
          }`}
        >
          <Icon name="chevronRight" style="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default Pagination
