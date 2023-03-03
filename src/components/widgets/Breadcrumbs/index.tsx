import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import BreadCrumbItem, {
  IBreadCrumbItem,
} from '~/components/widgets/Breadcrumbs/BreadCrumbItem'

const Breadcrumbs = () => {
  const router = useRouter()
  const [breadCrumbItems, setBreadCrumbItems] = useState<IBreadCrumbItem[]>([])

  useEffect(() => {
    if (!router.isReady) {
      return
    }
    const items = router.asPath
      .split('?')[0]
      .split('/')
      .filter((item) => !!item)
      .map((item) => {
        return item.split('-').join(' ')
      })

    const breadCrumbItems: IBreadCrumbItem[] = []
    if (items?.length === 1) {
      return
    }
    items.forEach((item, index) => {
      breadCrumbItems.push({
        label: `${item.slice(0, 1).toUpperCase()}${item.slice(1)}`,
        url:
          index === items.length - 1
            ? undefined
            : breadCrumbItems?.length
            ? `${breadCrumbItems[breadCrumbItems.length - 1].url}/${item}`
            : `/${item}`,
      })
    })
    setBreadCrumbItems(breadCrumbItems)
  }, [router.isReady])

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {breadCrumbItems.map((item) => (
          <BreadCrumbItem key={item.url} label={item.label} url={item.url} />
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumbs
