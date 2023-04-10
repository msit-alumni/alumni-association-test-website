import React from 'react'

const Footer = () => {

    let FooterLinks =[
        {name:"Home",link:"/"},
        {name:"About",link:"/about"},
        {name:"Contact",link:"/contactUs"},
        {name:"Terms and Conditions",link:"/"},
        {name:"Privacy Policy",link:"/"},
      ];

  return (
    <div id='footer' className='font-defaultFont'>
        <div className='h-8 md:h-16 w-[100%] bg-[#F9F7F7]'></div>
        <nav className=" w-[100%] flex flex-wrap bg-[#041C32]  p-2 justify-center mb-2">
            {
                FooterLinks.map((link)=>(
                    <li key={link.name} className='mx-3 py-2 list-none sm:tracking-tighter md:text-[11px] xl:text-lg font-normal xl:tracking-wider'>
                    <a href={link.link} className='hover:delay-1000 transition-transform ease-in-out scale-x-0 hover:scale-x-1 decoration-[#F9F7F7] text-[#F9F7F7] hover:text-gray-300 duration-500'>{link.name}</a>
                    </li>
                ))
            }
        </nav>
            <div className='flex pb-6 pt-2 w-[90%] mx-auto justify-between'>
                <p className="float-left text-black text-xs">copyright 2023 | All rights reserved</p>
                {/* <p className="float-right text-black text-xs">meet the team</p> */}
            </div>

    </div>
  )
}

export default Footer
