import Link from 'next/link'
import Icon from '~/components/elements/Icon'
import Tree, { ITreeNode } from '~/components/widgets/Tree'

interface Props {
  data: ITreeNode
}

const TreeNode = ({ data }: Props) => {
  return (
    <>
      {data?.children ? (
        <>
          <p className="p-4 text-xs font-semibold uppercase text-neutral-500">
            {data.label}
          </p>
          <Tree data={data.children} />
        </>
      ) : (
        <li>
          <Link href={data.link!} className="flex flex-row items-center">
            <Icon name={data.icon!} style="w-5 h-5" />
            <p>{data.label!}</p>
          </Link>
        </li>
      )}
    </>
  )
}

export default TreeNode
