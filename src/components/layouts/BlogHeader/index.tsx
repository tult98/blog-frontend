import Link from 'next/link'
import Logo from '~/components/elements/Logo'
import Navigation from '../PortfolioHeader/Navigation'
import SearchBar from './SearchBar'

const categories = [
  { id: '1', title: 'Technology' },
  { id: '2', title: 'Design' },
  { id: '3', title: 'English' },
  { id: '4', title: 'Lifestyle' },
]

const BlogHeader = () => {
  const renderItems = () => {
    return (
      <div className="w-full text-center text-slate-900">
        {categories.map((category) => (
          <li
            className="w-full py-4 hover:bg-gray-200 hover:cursor-pointer focus:bg-gray-200"
            key={category.id}
          >
            {category.title}
          </li>
        ))}
        <Link href="/portfolio">
          <a className="w-full py-4 hover:bg-gray-200 hover:cursor-pointer focus:bg-gray-200">
            About me
          </a>
        </Link>
        <li className="w-full py-4 hover:bg-gray-200 hover:cursor-pointer focus:bg-gray-200">
          Contact me
        </li>
      </div>
    )
  }

  return (
    <>
      <div className="fixed top-0 z-10 flex flex-row items-center justify-between w-full h-16 px-6 bg-gray-100 shadow">
        <Logo shouldFillLogo={true} />
        <SearchBar />
        <Navigation
          iconColor="text-gray-600"
          backgroundColor="bg-gray-100"
          items={renderItems()}
          onSwitchSection={() => console.log('1111')}
        />
      </div>
    </>
  )
}

export default BlogHeader
