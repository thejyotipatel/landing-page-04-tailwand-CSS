import { MdOutlineLightbulb } from 'react-icons/md'
import { IoMdVolumeHigh } from 'react-icons/io'
import { GrRefresh } from 'react-icons/gr'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { SlFrame } from 'react-icons/sl'

const links = [
  {
    id: 1,
    label: 'Study',
    path: '#Study',
  },
  {
    id: 2,
    label: 'Quiz',
    path: '#quiz',
  },
  {
    id: 3,
    label: 'Test',
    path: '#test',
  },
  {
    id: 4,
    label: 'Game',
    path: '#game',
  },
  {
    id: 5,
    label: 'Others',
    path: '#others',
  },
]
const CardItem = () => {
  return (
    <>
      <div className=' max-w-3xl mx-auto '>
        <div className=' max-w-xl  mx-auto pt-8'>
          <ul className=' md:gap-10 gap-4 flex  items-center my-2 justify-center'>
            {links.map((item) => {
              return (
                <li
                  key={item.id}
                  className={` ${
                    item.id === 1
                      ? 'border-b-2 border-b-[#06286E] text-[#06286E] font-bold '
                      : 'text-[#696671] font-medium'
                  } text-xl `}
                >
                  <a href={item.path} className=' '>
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Card */}
        <div className='  max-w-4xl   mx-auto pt-6'>
          <div className=' h-[390px] max-w-[712px] card-gradient rounded-[42px]'>
            <div className=''>
              <span className=''>
                <MdOutlineLightbulb />
              </span>
              <span className=''>
                <IoMdVolumeHigh />
              </span>
            </div>
          </div>

          <div className=' max-w-[612px] mx-auto'>
            <div className='flex items-center justify-between my-6'>
              <span className='text-[#06286E]   text-3xl   '>
                <GrRefresh className=' stroke-2' />
              </span>

              <p className='flex items-center gap-6'>
                <span className=' w-14 h-14 bg-gradient-to-t from-[#164EC0] to-[#06286E] rounded-full inline-flex items-center justify-center text-3xl text-white '>
                  <FaChevronLeft />
                </span>
                <span className='font-bold text-2xl text-[#202B37]'>01/10</span>
                <span className=' w-14 h-14 bg-gradient-to-t from-[#164EC0] to-[#06286E] rounded-full inline-flex items-center justify-center text-3xl text-white '>
                  <FaChevronRight />
                </span>
              </p>

              <button className='btn text-[#06286E]   text-3xl'>
                <SlFrame className=' font-bold ' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CardItem
