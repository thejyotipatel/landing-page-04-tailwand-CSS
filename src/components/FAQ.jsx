import FaqItem from './FaqItem'
import { IoMdAdd } from 'react-icons/io'

const faqData = [
  {
    id: 1,
    header: 'Can education flashcards be used for all age groups?',
    description:
      'Can education flashcards be used for all age groups? Can education flashcards be used for all age groups?',
  },
  {
    id: 2,
    header:
      'How do education flashcards work? How do education flashcards work?',
    description:
      'How do education flashcards work? How do education flashcards work? ',
  },
  {
    id: 3,
    header: 'Can education flashcards be used for test preparation? ',
    description:
      'Can education flashcards be used for test preparation? Can education flashcards be used for test preparation?',
  },
]
const FAQ = () => {
  return (
    <>
      <div className=' mt-10'>
        <div className='flex justify-between items-center'>
          <div className=' inline-flex items-center justify-center gap-4'>
            <img
              src='./Group.svg'
              alt='logo'
              className='w-[80px] h-[80px] rounded-full logo-shadow p-3'
            />
            <p className='flex gap-2 flex-col -mt-4 justify-between'>
              <span className=' font-bold  text-xs text-[#696671]'>
                Published by
              </span>
              <span className='text-[#06286E] text-3xl font-semibold  '>
                Hygge<span className='font-bold'>X</span>
              </span>
            </p>
          </div>

          <div className='flex gap-4'>
            <span className='w-12 h-12   bg-gradient-to-t from-[#164EC0] to-[#06286E] rounded-full inline-flex items-center justify-center text-4xl text-white  '>
              <IoMdAdd />
            </span>
            <p className='text-[28px] font-semibold '>
              <span class='bg-clip-text text-transparent bg-gradient-to-t from-[#164EC0] to-[#06286E]'>
                Create Flashcard
              </span>
            </p>
          </div>
        </div>

        <h1 className='text-5xl font-bold my-12'>
          <span class='bg-clip-text text-transparent bg-gradient-to-t from-[#164EC0] to-[#06286E] '>
            FAQ
          </span>
        </h1>

        <ul className='flex flex-col gap-10'>
          {faqData.map((item) => {
            return (
              <div key={item.id} className='border-gradient p-[1px]  max-w-4xl'>
                <FaqItem {...item} />
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}
export default FAQ
