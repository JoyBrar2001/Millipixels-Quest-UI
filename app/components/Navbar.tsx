import { RiAccountCircleFill } from 'react-icons/ri'
import { AiTwotoneSetting } from 'react-icons/ai'
import { RiComputerLine } from 'react-icons/ri'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed flex z-50 gap-4 justify-between items-center w-full bg-white text-gray-700 h-14 px-4 lg:px-8 shadow-xl'>
      <Link href="/">
        <div className="flex-center gap-2">
          <RiComputerLine size={25} className="relative" />
          <h1 className='text-xl font-bold'>MilliPixels</h1>
        </div>
      </Link>
      <div className='flex-center gap-2'>
        <h1>Welcome, <span className='font-semibold uppercase'>Joy Brar</span></h1>
        <RiAccountCircleFill size={25} className="relative" />
        <AiTwotoneSetting size={25} className="relative" />
      </div>
    </div>
  )
}

export default Navbar
