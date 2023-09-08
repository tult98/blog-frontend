import { BlockObjectResponse, PartialBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

const renderHeading = (heading: BlockObjectResponse) => {
  if (heading.type === 'heading_2') {
    const plainText = heading.heading_2.rich_text?.[0].plain_text
    const sectionId = plainText?.toLowerCase().replace(/ /g, '-')
    return (
      <a className="block mt-3 text-gray-800 opacity-70 hover:opacity-100" href={`#${sectionId}`}>
        {plainText}
      </a>
    )
  } else if (heading.type === 'heading_3') {
    const plainText = heading.heading_3.rich_text?.[0].plain_text
    const sectionId = plainText?.toLowerCase().replace(/ /g, '-')
    return (
      <a className="block pl-3 mt-1 text-sm text-gray-800 opacity-70 hover:opacity-100" href={`#${sectionId}`}>
        {heading.heading_3.rich_text?.[0].plain_text}
      </a>
    )
  }
  return null
}

const TableOfContent = ({ headings }: { headings: (PartialBlockObjectResponse | BlockObjectResponse)[] }) => {
  return (
    <aside>
      <p className="text-gray-900 text-base font-medium uppercase leading-[2px] mb-4">Table of contents</p>
      {headings.map((heading) => renderHeading(heading as BlockObjectResponse))}
    </aside>
  )
}

export default TableOfContent
