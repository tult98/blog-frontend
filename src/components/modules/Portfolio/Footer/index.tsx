import Link from 'next/link'

const Footer = () => {
  return (
    <section className="flex flex-col items-center py-4 text-xs text-slate font-sfmono">
      <Link href="https://github.com/bchiang7/v4" className="hover:text-green" target="_blank">
        Designed by Brittany Chiang
      </Link>
      <Link href="https://github.com/lethanhtupk/blog-frontend" className="hover:text-green" target="_blank">
        Built by Tu Le Thanh
      </Link>
    </section>
  )
}

export default Footer
