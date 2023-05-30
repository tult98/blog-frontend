import { Hits, PoweredBy } from 'react-instantsearch-hooks-web'
import { useSetRecoilState } from 'recoil'
import SearchBar from '~/components/layouts/BlogHeader/SearchBar'
import Hit from '~/components/widgets/Hit'
import { searchModalState } from '~/recoil/atoms/searchModalState'

const SearchModal = () => {
  const setModalState = useSetRecoilState(searchModalState)

  const onClose = () => {
    setModalState({
      isOpen: false,
    })
  }

  return (
    <div className="absolute top-[3%] max-w-[1000px] max-h-[600px] rounded-md z-20 bg-white">
      <div className="flex flex-row pb-2 w-full space-x-2 p-3 border-b border-[#807ea34d]">
        <SearchBar style="grow" />
        <button
          type="button"
          onClick={onClose}
          className="px-2 border border-white  hover:border-[#807ea34d] rounded-[3px]"
        >
          Cancel
        </button>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-2">
          <Hits
            hitComponent={Hit}
            classNames={{
              root: 'bg-white max-h-[400px] overflow-y-auto min-h-[40px]',
              item: 'list-none mb-0',
              list: 'hit-list',
            }}
          />
          <div>
            <p>title</p>
            <p>Description</p>
          </div>
        </div>
        <PoweredBy classNames={{ root: 'w-36 absolute bottom-1.5 right-6' }} />
      </div>
    </div>
  )
}

export default SearchModal
