import * as React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo-texte.png';
import France from '../../assets/france.svg';
import Anglais from '../../assets/anglais.svg';
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import {FaUserCircle} from 'react-icons/fa'

interface Props {}

export default function Navbar(props: Props) {

  const [menu1, setMenu1] = React.useState(false)
  const [mobile, setMobile] = React.useState(false)

  const france = <p className='w-max flex font-semibold' ><img className='mr-1 w-4' src={France} />Francais </p>
  const anglais = <p className='w-max flex font-semibold' ><img className='mr-1 w-4' src={Anglais} />English </p>

  return (
    <div style={mobile ? {height: '100vh', width: '100vw'} : {} } className={`w-full ${mobile ? 'absolute' : 'h-24 fixed relative'} bg-white flex top-0  z-50 `}>
      <div className="w-1/2 mt-auto mb-auto ml-4">
        <Link to="/">
          <img src={Logo} alt='logo' />
        </Link>
      </div>
      <div className="w-1/2 flex justify-end m-auto pr-12 h-full">

        <div className='flex items-center lg:hidden'>
          <GiHamburgerMenu onClick={() => setMobile(true)} className='w-8 h-8' />
        </div>

        <div style={{height: '100vh', width: '100vw'}} className={`absolute z-50 right-0 bg-white ${mobile ? '' : 'hidden'}`}>
          <div className='flex justify-end p-6'>
            <ImCross onClick={() => setMobile(false)} />
          </div>

          <ul className={` `}>
          <li className={`xl:mx-4 md:mx-1.5  text-3xl py-2 border-t flex items-center justify-center ${mobile ? "" : "h-full"} `}>
            <Link className='w-max font-semibold' to="/">Accueil</Link>
          </li>
          <li className={`xl:mx-4 md:mx-1.5  text-3xl py-2 border-t flex items-center justify-center ${mobile ? "" : "h-full"} `}>
            <Link className='w-max font-semibold' to="/presentation">Qui sommes-nous ?</Link>
          </li>
          <li className={`xl:mx-4 md:mx-1.5  text-3xl py-2 border-t flex items-center justify-center ${mobile ? "" : "h-full"} `}>
            <Link className='w-max font-semibold' to="/recrutement">Recrutement</Link>
          </li>
          <li className={`xl:mx-4 md:mx-1.5  text-3xl py-2 border-t flex items-center justify-center ${mobile ? "" : "h-full"} `}>
          <div className='w-full text-center'>
            <a onClick={() => setMenu1(!menu1)} className={` w-max font-semibold cursor-pointer  ${menu1 ? 'text-greenCustom-500' : ''} `}>Nos prestations &#8744;</a>
            <ul className={`py-2 bg-white ${menu1 ? "" : "hidden"}`}> 
              <li><Link className='w-max flex font-semibold m-auto' to="/#">{france}</Link></li>
              <li><Link className='w-max flex font-semibold m-auto' to="/#">{anglais}</Link></li>
            </ul>
          </div>
          </li>
          <li className={`xl:mx-4 md:mx-1.5  text-3xl py-2 border-t flex items-center justify-center ${mobile ? "" : "h-full"} `}>
            <Link className='w-max font-semibold flex' to="/#"><FaUserCircle className='mt-0.5 mr-1' /> Mon compte</Link>
          </li>
        </ul> 

        </div>

        <ul className={`hidden lg:flex h-full`}>
          <li className={`xl:mx-6 md:mx-1.5  xl:text-lg text-sm flex items-center justify-center ${mobile ? "" : "h-full"} `}>
            <Link className='w-max font-semibold' to="/presentation">Qui sommes-nous ?</Link>
          </li>
          <li className={`xl:mx-6 md:mx-1.5  xl:text-lg text-sm flex items-center justify-center ${mobile ? "" : "h-full"} `}>
            <Link className='w-max font-semibold' to="/recrutement">Recrutement</Link>
          </li>
          <li onMouseEnter={() => setMenu1(true)} onMouseLeave={() => setMenu1(false)} className={`xl:mx-6 md:mx-1.5  xl:text-lg text-sm flex items-center justify-center ${mobile ? "" : "h-full"} `}>
            <a className='w-max font-semibold cursor-pointer flex'>{france} <span className={`${menu1 ? 'transform rotate-180' : ''} ml-2`}>&#8744;</span></a>
            <ul style={{top: '96px'}} className={`border-t-4 border-greenCustom-400 p-4 bg-white absolute w-40 ${menu1 ? "block" : "hidden"}`}> 
              <li><Link className='w-max flex font-semibold' to="/#">{france}</Link></li>
              <li><Link className='w-max font-semibold' to="/#">{anglais}</Link></li>
            </ul>
          </li>
          <li className='xl:ml-6 md:ml-1.5  xl:text-lg text-sm h-full flex items-center'>
            <Link className='w-max font-semibold flex' to="/#"><FaUserCircle className='mt-0.5 mr-1' /> Mon compte</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
