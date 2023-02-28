import TreeNode from '~/components/widgets/Tree/TreeNode'

export interface ITreeNode {
  key: string
  label: string
  icon?: string
  link?: string
  children?: ITreeNode[]
}

interface Props {
  data: ITreeNode[]
}

const Tree = ({ data }: Props) => {
  return (
    <>
      {data.map((node) => (
        <TreeNode key={node.key} data={node} />
      ))}
    </>
  )
}

export default Tree
