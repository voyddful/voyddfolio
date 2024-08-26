import Stuff from '../components/AdminRequests'
import SideBar from '../components/Sidebar'

export default async function Admin() {
  return (
    <SideBar>
      <div className="min-h-screen p-2">
        <h1 className="text-3xl bg-gradient-to-tr to-primary from-secondary bg-clip-text text-transparent text-center">
          Admin Dashboard
        </h1>
        <h1 id="Requests" className="text-2xl text-center">
          Requests for Websites:
        </h1>
        <div className=" text-center grid grid-cols-1 px-20 my-3 ">
          <Stuff />
        </div>
      </div>
    </SideBar>
  )
}
