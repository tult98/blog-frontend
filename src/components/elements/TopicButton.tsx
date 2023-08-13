import Link from 'next/link'

const TopicButton = ({ name, url }: { name: string; url: string }) => {
  return (
    <div className="py-[3px] px-3  bg-decorative/[.33] rounded-lg mr-2 mb-2 inline-block scale-[0.99] hover:bg-decorative/50 hover:scale-[1.06] hover:cursor-pointer">
      <Link href={url}>{name}</Link>
    </div>
  )
}

export default TopicButton
