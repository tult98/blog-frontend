import Image from 'next/image'

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 hover:cursor-pointer">
        <Image src="/blog-logo.png" alt="blog-logo" width={120} height={100} />
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Type to search"
            className="input input-bordered focus:outline-none"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://avatars0.githubusercontent.com/u/29749097?v=4" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
