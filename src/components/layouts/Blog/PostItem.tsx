import Link from 'next/link'
import { useMemo } from 'react'
import Icon from '~/components/elements/Icon'
import { IPost } from '~/types/blogTypes'

export interface Props {
  post: IPost
}

const PostItem = ({ post }: Props) => {
  const subtitle = useMemo(() => post?.subtitle?.rich_text[0]?.plain_text, [post])
  const preface = useMemo(() => post?.preface?.rich_text[0]?.plain_text, [post])

  return (
    <Link href={`/posts/${(post.slug as any).formula.string}`}>
      <article className="group hover:cursor-pointer">
        <h3 className="font-bold text-[1.375rem] text-gray-1000 group-hover:text-primary">
          {post.title.title[0]?.plain_text}
        </h3>
        {subtitle && <h4 className="text-[1.0625rem] text-gray-600">{subtitle}</h4>}
        {preface && <p className="break-words text-[1rem] font-medium mt-4">{preface}</p>}
        <div className="flex items-center mt-4 space-x-1 w-fit hover:cursor-pointer group-hover:text-primary">
          <p className="text-[1rem] font-bold">Read more</p>
          <Icon name="smallArrowRight" style="w-5 h-5 translate-y-0.5" />
        </div>
      </article>
    </Link>
  )
}

export default PostItem
