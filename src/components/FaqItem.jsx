import { useState } from 'react'
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'

const FaqItem = ({ header, description }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className=' m-6'>
        <div className='flex justify-between items-center gap-5 '>
          <p className=' text-[#28262C] text-base font-semibold '>{header}</p>
          <button className='btn' onClick={() => setShow(!show)}>
            <span className='text-2xl'>
              {show ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
            </span>
          </button>
        </div>
        {show && (
          <p className=' text-[#28262C] text-base   font-semibold'>
            {description}
          </p>
        )}
      </div>
    </>
  )
}
export default FaqItem
