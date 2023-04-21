interface Props {
  currentPage: number
  totalPage: number
  pageRangeDisplayed?: number
}

const Pagination = ({ currentPage, totalPage, pageRangeDisplayed = 5 }: Props) => {
  const pagination = () => {
    const items = []
    if (totalPage < pageRangeDisplayed) {
      for (let index = 1; index <= totalPage; index++) {
        items.push(index)
      }
      return items
    }
    let leftSide = 1
    let rightSide = totalPage
    if (currentPage - Math.floor(pageRangeDisplayed / 2) < leftSide) {
      // do nothing
    } else {
      leftSide =
        totalPage - pageRangeDisplayed + 1 < currentPage - Math.floor(pageRangeDisplayed / 2)
          ? totalPage - pageRangeDisplayed + 1
          : currentPage - Math.floor(pageRangeDisplayed / 2)
    }
    for (let index = leftSide; index <= rightSide; index++) {
      if (items.length >= pageRangeDisplayed) {
        break
      }
      items.push(index)
    }
    return items
  }

  const items = pagination()

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-row items-center space-x-4">
        {items.map((item) => (
          <p className={`font-bold ${currentPage === item ? 'text-[#7156d9]' : ''}`} key={item}>
            {Number(item)}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Pagination
