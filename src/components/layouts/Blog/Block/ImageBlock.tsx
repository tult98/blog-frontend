import { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import Image from 'next/image'
import { useMemo } from 'react'

const ImageBlock = ({ block }: { block: ImageBlockObjectResponse }) => {
  const imageUrl = useMemo(
    () => (block.image.type === 'file' ? block.image.file.url : block.image.external.url),
    [block.image],
  )

  return (
    <figure className="flex flex-col py-6">
      <Image alt="" src={imageUrl} width={0} height={0} style={{ width: '100%', height: 'auto' }} sizes="100vw" />
      {!!block.image.caption.length && (
        <figcaption className="self-center mt-2 text-sm text-gray-500">{block.image.caption[0].plain_text}</figcaption>
      )}
    </figure>
  )
}

export default ImageBlock
