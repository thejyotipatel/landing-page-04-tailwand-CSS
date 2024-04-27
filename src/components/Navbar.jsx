import { useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { AiOutlineMenuFold } from 'react-icons/ai'
import ReaponsiveMenu from './ResponsiveMenu'

const navLinks = [
  {
    id: 1,
    label: 'Home',
    path: '#navbar',
  },
  {
    id: 2,
    label: 'Flashcard',
    path: '#navbar',
  },
  {
    id: 3,
    label: 'Contact',
    path: '#navbar',
  },
  {
    id: 4,
    label: 'FAQ',
    path: '#faq',
  },
]
const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div className='flex  gap-4 justify-between items-center'>
      <a href='/' className='flex gap-1 bg-transparent  '>
        <img src='./Group.svg' alt='Group.svg' className='pt-1' />
        <span className='text-[#06286E] text-4xl font-semibold  '>
          Hygge<span className='font-bold'>X</span>
        </span>
      </a>
      <ul className=' md:gap-10 gap-4 sm:flex hidden items-center my-2'>
        {navLinks.map((item) => {
          return (
            <li key={item.id}>
              <a
                href={item.path}
                className=' text-[#3A3740]  hover:text-[#06286E] text-lg transition-all font-normal  '
              >
                {item.label}
              </a>
            </li>
          )
        })}

        <li>
          <button className=' btn px-10 py-3 rounded-full bg-gradient-to-b from-[#06286E] to-[#164EC0] text-white font-medium  text-lg'>
            Login
          </button>
        </li>
      </ul>
      {/* moblie menu */}
      {menu && <ReaponsiveMenu navLinks={navLinks} />}
      <button
        className='flex sm:hidden btn  text-[#06286E]  text-3xl  '
        onClick={() => setMenu(!menu)}
      >
        {!menu ? <AiOutlineMenuFold /> : <IoIosCloseCircleOutline />}
      </button>
    </div>
  )
}
export default Navbar
