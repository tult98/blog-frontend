import { useSession } from 'next-auth/react'
import Header from '~/components/layouts/Dashboard/Header'
import SideBar from '~/components/layouts/Dashboard/SideBar'

const Dashboard = () => {
  const { data: session } = useSession()
  console.log('=================session:', session)
  return (
    <section className="grid grid-cols-12">
      <div className="col-span-12">
        <Header />
      </div>
      <div className="col-span-12 mt-0 divider"></div>
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-10"></div>
    </section>
  )
}

export default Dashboard
