import { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import Image from 'next/image'
import { useMemo } from 'react'

const ImageBlock = ({ block }: { block: ImageBlockObjectResponse }) => {
  const imageUrl = useMemo(
    () => (block.image.type === 'file' ? block.image.file.url : block.image.external.url),
    [block.image],
  )

  return <Image alt="" src={imageUrl} width={0} height={0} style={{ width: '100%', height: 'auto' }} sizes="100vw" />
}

export default ImageBlock
