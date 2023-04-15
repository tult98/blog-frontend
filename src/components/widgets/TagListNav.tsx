import Link from 'next/link'

const tags = ['react', 'frontend', 'something']

const TagListNav = () => {
  return (
    <nav className="flex flex-wrap mb-8">
      {tags.map((tag) => (
        <Link
          className="p-1 border whitespace-nowrap border-[#d9cfff] rounded uppercase text-[#3f20ba] py-1.5 px-3 m-1"
          key={tag}
          href={tag}
        >
          {tag}
        </Link>
      ))}
    </nav>
  )
}

export default TagListNav
