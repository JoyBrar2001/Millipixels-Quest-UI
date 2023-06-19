import './signup.css'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="text-center flex-col md:flex-row text-[#1f1f1f] bg-gray-200 h-full md:min-h-[90vh] flex-center rounded-3xl shadow-lg">
      <div className="flex-center flex-col flex-[3] py-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">Sign in to your Account</h1>
        <form className="flex-center flex-col gap-2 my-12">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email Adress" />
          <input type="password" placeholder="Password" />
        </form>

        <button type="submit" className="bg-white rounded-full text-cyan-500 text-lg px-8 py-2 shadow-lg shadow-cyan-500/30">
          Sign In
        </button>
      </div>

      <div className="h-full w-full text-xl font-medium flex-center gap-4 md:h-[90vh] py-8 max-md:rounded-b-3xl md:rounded-r-3xl p-4 flex-col flex-[1] text-white blue__gradient">
        <p className='lg:text-4xl'>Already have an account ?<br />Sign in here</p>
        <Link href="/welcome/signup">
          <button className="bg-white rounded-full text-cyan-500 text-lg px-8 py-2">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  )
}