import Tree from '~/components/widgets/Tree'
import { dashboardItems } from '~/utils/settings'

const SideBar = () => {
  return (
    <ul className="w-full menu bg-base-100">
      <Tree data={dashboardItems} />
    </ul>
  )
}

export default SideBar
