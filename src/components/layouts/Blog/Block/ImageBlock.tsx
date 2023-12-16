import { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import Image from 'next/image'
import { useMemo } from 'react'

const ImageBlock = ({ block }: { block: ImageBlockObjectResponse }) => {
  const imageUrl = useMemo(
    () => (block.image.type === 'file' ? block.image.file.url : block.image.external.url),
    [block.image],
  )

  const imageInfo = useMemo(() => {
    const pattern = /\?w=(\d+)&h=(\d+)/

    const match = imageUrl.match(pattern)

    if (match) {
      const width = parseInt(match[1])
      const height = parseInt(match[2])

      return { width, height }
    }
    return { width: 0, height: 0 }
  }, [imageUrl])

  return (
    <figure className="flex flex-col py-6">
      <Image
        alt=""
        src={imageUrl}
        width={imageInfo.width}
        height={imageInfo.height}
        style={{ width: '100%', height: 'auto' }}
        sizes="(min-width: 740px) 644px, 91.9vw"
      />
      {!!block.image.caption.length && (
        <figcaption className="self-center mt-2 text-sm text-gray-500">{block.image.caption[0].plain_text}</figcaption>
      )}
    </figure>
  )
}

export default ImageBlock
