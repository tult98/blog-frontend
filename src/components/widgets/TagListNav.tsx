import Link from 'next/link'
import { TagEntity } from '~/models/tag'

const TagListNav = ({ tags }: { tags: TagEntity[] }) => {
  return (
    <nav className="flex flex-wrap w-full mb-8 max-w-[1220px] px-10">
      {tags.map((tag) => (
        <Link
          className="p-1 border whitespace-nowrap border-[#d9cfff] rounded uppercase text-[#3f20ba] py-1.5 px-3 m-1"
          key={tag.id}
          href={`/tags/${tag.attributes.slug}`}
        >
          {tag.attributes.name}
        </Link>
      ))}
    </nav>
  )
}

export default TagListNav
