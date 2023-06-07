import { RiAccountCircleFill } from 'react-icons/ri'
import { AiTwotoneSetting } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex gap-4 justify-end items-center w-full  text-gray-700 h-14 px-4 lg:px-8 shadow-xl'>  
      <h1>Welcome, <span className='font-semibold uppercase'>Joy Brar</span></h1>
      <RiAccountCircleFill size={25} />
      <AiTwotoneSetting size={25} />
    </div>
  )
}

export default Navbar
