import { GoHome } from 'react-icons/go'
import { FaAngleRight } from 'react-icons/fa6'
import CardItem from './CardItem'
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
const HeroComponent = () => {
  return (
    <>
      <div className=''>
        <div className='flex  items-center gap-2 my-10'>
          <span className=' text-2xl  text-[#696671]'>
            <GoHome />
          </span>
          <span className='text-[#06286E]'>
            <FaAngleRight />
          </span>
          <a href='' className='text-lg font-medium text-[#696671]'>
            Flashcard
          </a>
          <span className='text-[#06286E]'>
            <FaAngleRight />
          </span>
          <a href='' className='text-lg font-medium text-[#696671]'>
            Mathematics
          </a>
          <span className='text-[#06286E]'>
            <FaAngleRight />
          </span>
          <a href='' className='text-lg font-semibold text-[#06286E]'>
            Relation and Function
          </a>
        </div>

        <h1 className='text-3xl font-bold'>
          <span class='bg-clip-text text-transparent bg-gradient-to-t from-[#164EC0] to-[#06286E] '>
            Relations and Functions ( Mathematics )
          </span>
        </h1>

        <CardItem />
      </div>
    </>
  )
}
export default HeroComponent
