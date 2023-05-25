import { SearchBox } from 'react-instantsearch-hooks-web'
import Icon from '~/components/elements/Icon'
import LoadingIcon from '~/components/elements/LoadingIcon'

const SearchBar = () => {
  return (
    <SearchBox
      placeholder="Type here to search"
      submitIconComponent={({ classNames }) => <Icon name="search" style={classNames.submitIcon!} />}
      loadingIconComponent={({ classNames }) => <LoadingIcon style={classNames.loadingIcon} />}
      classNames={{
        root: 'col-span-2 overflow-hidden border border-gray-300 rounded whitespace-nowrap',
        form: 'relative w-full h-full py-3',
        input: 'pl-12 pr-4 rounded input input-bordered focus:outline-none min-w-[15rem] lg:min-w-[30rem] w-full',
        submitIcon: 'w-6 h-6 absolute top-1/2 -translate-y-1/2 left-2 text-[#3E34F3]',
        loadingIcon: 'w-6 h-6 absolute top-1/2 -translate-y-1/2 left-2 text-[#3E34F3]',
      }}
    />
  )
}

export default SearchBar
