import Link from 'next/link'

export interface IBreadCrumbItem {
  label: string
  url?: string
}

const BreadCrumbItem = ({ label, url }: IBreadCrumbItem) => {
  return <li>{!url ? <p>{label}</p> : <Link href={url}>{label}</Link>}</li>
}

export default BreadCrumbItem
