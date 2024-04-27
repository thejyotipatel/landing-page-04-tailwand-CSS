const ResponsiveMenu = ({ navLinks }) => {
  return (
    <div className=' absolute   bg-white right-5 top-[70px] shadow px-6 block md:hidden rounded'>
      <ul className=' gap-3 flex flex-col   items-start my-6'>
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
          <button className='mt-2 w-full btn px-10 py-3 rounded-full bg-gradient-to-b from-[#06286E] to-[#164EC0] text-white font-medium  text-lg'>
            Login
          </button>
        </li>
      </ul>
    </div>
  )
}
export default ResponsiveMenu
