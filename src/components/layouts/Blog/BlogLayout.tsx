import localFont from 'next/font/local'
import Header from '~/components/layouts/Blog/Header'

const wotFardFont = localFont({
  src: [
    {
      path: '../../../../public/fonts/Wotfard-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Wotfard-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Wotfard-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-wot-fard',
})

interface Props {
  children: React.ReactNode
  disableWave?: boolean
  title?: string
}

const BlogLayout = ({ children, disableWave = false, title }: Props) => {
  return (
    <main className={`${wotFardFont.variable} font-sans w-screen flex flex-col items-center`}>
      <Header disableWave={disableWave} title={title} />
      {children}
    </main>
  )
}

export default BlogLayout
