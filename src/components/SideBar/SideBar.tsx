import * as React from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai'
import { IoArrowBackCircleOutline } from 'react-icons/io5'

type Variant =
| 'green'
| 'gold'

interface Props {
  children:  React.ReactNode | React.ReactNode[];

  title: String;
  name: String;

  variant?: Variant
}

/**
 * a simple SideBar with four variants
 *
 * @param props
 * @returns
 */
export default function SideBar(props: Props) {
  const { children, title, name, variant = 'green'} = props;

  const [open, setOpen] = React.useState(true)


  return (
    <div style={{height: '100vh'}} className={`left-0 flex border-r border-gray-300 bg-white w-64 transform duration-500 ${open ? 'translate-x-0' : '-translate-x-52'}`}>
        <div className={`h-full z-50 w-1/4 transform duration-500 ${open ? 'translate-x-0' : 'translate-x-52'} ${variant === 'green' ? "bg-green-500" : "bg-gold-500"}`}>
            <ul>
                <li className='flex h-20 border-b border-white'>
                    <div className={`w-full transform duration-500 w-1/4 flex justify-center items-center`}>
                        <AiOutlineFileSearch className='text-white w-8 h-8'/>
                    </div>
                </li>

                <li className='flex h-14 border-b border-white'>
                    <div className={`${variant === 'green' ? "bg-green-500" : "bg-gold-500"} transform duration-500 w-1/4 flex justify-center items-center`}></div>
                </li>

                <div className='absolute bottom-0 w-full'>
                    <li onClick={() => setOpen(!open)} className='flex h-14 border-b border-white cursor-pointer'>
                        <div className={` w-full flex justify-center items-center`}>
                            <IoArrowBackCircleOutline className={`text-white w-8 h-8 transform duration-500 ${open ? 'rotate-0' : 'rotate-180'}`} />
                        </div>
                    </li>

                    <li className='flex w-full h-12 border-b border-white'>
                        <div className={`${variant === 'green' ? "bg-green-500" : "bg-gold-500"} transform duration-500 w-1/4 flex justify-center items-center`}>
                        </div>
                    
                    </li>
                </div> 
            </ul>

        </div>

        <div className={`h-full w-full relative`}>
            <ul>
                <li className='flex h-20 border-b border-white'>
                    <div className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${open ? '' : 'hidden'}`}>
                        {title}
                    </div>
                </li>

                <li className='flex h-14 border-b border-white'>
                <div className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${open ? '' : 'hidden'}`}>
                    <span>Bienvenue {name}</span>
                </div>
            </li>
            </ul>

            <div className='absolute bottom-0 w-full'>
            <ul>
            <li onClick={() => setOpen(!open)} className='flex h-14 border-b border-white cursor-pointer'>
                <div className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${open ? '' : 'hidden'}`}>
                    <span>Réduire le menu</span>
                </div>
            </li>
            <li className='flex h-12 border-b border-white'>
                <div className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${open ? '' : 'hidden'}`}>
                    <a className='cursor-pointer text-sm'><span className='font-bold'>Mention légales</span> /CGU / CGV</a>
                </div>
            </li>
            </ul>
        </div>

        </div>
        {/* <ul>
            <li className='flex h-20 border-b border-white'>
                <div className={`${variant === 'green' ? "bg-green-500" : "bg-gold-500"} transform duration-500 ${open ? 'translate-x-0' : 'translate-x-48'} w-1/4 flex justify-center items-center`}>
                    <AiOutlineFileSearch className='text-white w-8 h-8'/>
                </div>
                <div className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${open ? '' : 'hidden'}`}>
                    {title}
                </div>
            </li>

            <li className='flex h-14 border-b border-white'>
                <div className={`${variant === 'green' ? "bg-green-500" : "bg-gold-500"} transform duration-500 ${open ? 'translate-x-0' : 'translate-x-48'} w-1/4 flex justify-center items-center`}>
                </div>
                <div className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${open ? '' : 'hidden'}`}>
                    <span>Bienvenue {name}</span>
                </div>
            </li>

            <li className='h-full flex w-full'>
            <div className={`${variant === 'green' ? "bg-green-500" : "bg-gold-500"} h-full transform duration-500 ${open ? 'translate-x-0' : 'translate-x-48'} w-1/4 flex justify-center items-center`}>
                
            </div>
            <div className={`w-full h-full flex justify-center items-center border-gray-300 bg-white ${open ? '' : 'hidden'}`}>
            </div>
        </li>
        </ul>

        <div className='h-full flex w-full'>
            <div className={`${variant === 'green' ? "bg-green-500" : "bg-gold-500"} h-full transform duration-500 ${open ? 'translate-x-0' : 'translate-x-48'} w-1/4 flex justify-center items-center`}>
                
            </div>
            <div className={`w-full h-full flex justify-center items-center border-gray-300 bg-white ${open ? '' : 'hidden'}`}>
            </div>
        </div>


        <div className='absolute bottom-0 w-full'>
            <ul>
            <li onClick={() => setOpen(!open)} className='flex h-14 border-b border-white cursor-pointer'>
                <div className={`${variant === 'green' ? "bg-green-500" : "bg-gold-500"} transform duration-500 ${open ? 'translate-x-0' : 'translate-x-48'} w-1/4 flex justify-center items-center`}>
                <IoArrowBackCircleOutline className={`text-white w-8 h-8 transform duration-500 ${open ? 'rotate-0' : 'rotate-180'}`} />
                
                </div>
                <div className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${open ? '' : 'hidden'}`}>
                    <span>Réduire le menu</span>
                </div>
            </li>
            <li className='flex h-12 border-b border-white'>
                <div className={`${variant === 'green' ? "bg-green-500" : "bg-gold-500"} transform duration-500 ${open ? 'translate-x-0' : 'translate-x-48'} w-1/4 flex justify-center items-center`}>
                </div>
                <div className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${open ? '' : 'hidden'}`}>
                    <a className='cursor-pointer text-sm'><span className='font-bold'>Mention légales</span> /CGU / CGV</a>
                </div>
            </li>
            </ul>
        </div> */}
    </div>
  );
}

export { SideBar };
