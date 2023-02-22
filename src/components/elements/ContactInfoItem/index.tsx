import Link from 'next/link'
import Icon from '~/components/elements/Icon'

interface Props {
  name: string
  url: string
}
const ContactInfoItem = ({ name, url }: Props) => {
  return (
    <Link href={url} passHref target="_blank" className="p-3">
      <Icon
        name={name}
        style="text-slate-light hover:text-green hover:animate-slideUpLittle w-5 h-5 cursor-pointer"
      />
    </Link>
  )
}

export default ContactInfoItem
