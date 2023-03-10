import Icon from '~/components/elements/Icon'

const SearchBar = () => {
  return (
    <div className="relative flex flex-row items-center">
      <input placeholder="Search" className="py-2 pl-8 pr-4 text-gray-400 border border-gray-400 rounded-md" />
      <Icon name="search" style="w-6 h-6 absolute left-2 text-gray-400" />
    </div>
  )
}

export default SearchBar
