import Image from 'next/image'
import { IPost } from '~/models/post'
import { formatTimeFromUTC } from '~/utils/dateUtils'

interface Props {
  post: IPost
}

const Post = ({ post }: Props) => {
  return (
    <div>
      <Image
        src={post.cover_image}
        layout="intrinsic"
        alt="cover image"
        width={880}
        height={400}
        className="rounded-lg"
      />
      <article className="flex flex-col items-center p-4 text-slate-600">
        <div className="max-w-screen-md">
          <h1 className="mt-2 text-xl font-bold text-slate-900">
            {post.title}
          </h1>
          <p className="text-sm text-slate-400">
            {post.category && (
              <span className="mr-1">
                In{' '}
                <span className="underline decoration-sky-500 text-slate-700 hover:cursor-pointer">
                  {post.category?.title}
                </span>
              </span>
            )}
            {post.tags?.length && (
              <span>
                Tags{' '}
                <span className="underline decoration-sky-500 text-slate-700 hover:cursor-pointer">
                  {post.tags?.map((tag) => tag.name).join(',')}
                </span>
              </span>
            )}
            <span className="ml-1">
              {formatTimeFromUTC(new Date(post.updated_at), 'MMMM-dd-yyyy')}
            </span>
          </p>
          <p className="my-3.5">{post.content}</p>
        </div>
      </article>
    </div>
  )
}

export default Post
