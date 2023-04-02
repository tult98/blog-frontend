import Image from 'next/image'
import { IPost } from '~/models/article'
import { formatTimeFromUTC } from '~/utils/dateUtils'

interface Props {
  post: IPost
}

const Post = ({ post }: Props) => {
  return (
    <div>
      <div className="relative w-full h-40 mb-6">
        <Image src={post.cover_image} alt="" className="rounded" fill={true} />
      </div>
      <p className="text-[#959DAA] uppercase mb-1 tracking-[0.125em] text-sm leading-5">
        {formatTimeFromUTC(new Date(post.updated_at), 'MMMM dd, yyyy')}
      </p>
      <p className="mb-2 text-xl font-bold">{post.title}</p>
      <div className="flex">
        <a
          href=""
          className="inline-block m-1 px-1.5 py-px uppercase border border-[#d9cfff] hover:bg-[#ebe6ff80] hover:border-[#7156d9] rounded text-[#3f20ba] leading-[18px] text-xs"
        >
          {post.category?.title}
        </a>
      </div>
      <p className="pt-4 pb-6 text-sm leading-[1.5] text-[#959DAA]">{post.preface}</p>
    </div>
  )
}

export default Post
