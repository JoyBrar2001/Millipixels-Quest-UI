import Link from "next/link"
import { FaRegUserCircle } from "react-icons/fa"
import { RiShieldUserLine } from "react-icons/ri"
import './welcome.css'

export default function Page(){
  return (
    <div className="text-center text-[#1f1f1f] bg-gray-200 p-10 min-h-[90vh] flex-center flex-col rounded-3xl shadow-lg">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">Welcome to <br/><span className="uppercase">millipixels</span></h1>
      <p className="text-lg md:text-xl lg:text-2xl font-medium mt-12 mb-6">Which user are you ?</p>

      <div className="w-full flex flex-col md:flex-row gap-4 justify-center items-center">
        <Link href="/welcome/login" className="inline">
          <div className="button__styles hover:blue__gradient hover:button__hover transition-150 max-md:scale-90">
            <FaRegUserCircle className="relative" size={45} />
            <h2 className="text-2xl font-semibold">Candidate</h2>
          </div>
        </Link>

        <Link href="/welcome/login" className="inline">
          <div className="button__styles hover:blue__gradient hover:button__hover transition-150 max-md:scale-90">
            <RiShieldUserLine className="relative" size={48} />
            <h2 className="text-2xl font-semibold">Admin</h2>
          </div>
        </Link>
      </div>
    </div>
  )
}