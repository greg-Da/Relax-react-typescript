import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import Navbar2 from "../../../components/Navbar2/Navbar2";
import SideBar from "../../../components/SideBar/SideBar";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import SectionLeft from "./section/SectionLeft";
import SectionRight from "./section/SectionRight";


function DashboardHotel() {

  return (
    <div className="App">
      <div className='flex w-full'>
          <SideBar title='ESPACE HOTEL' name='Greg' variant='gold'></SideBar>

        <div className='w-full'>
        <Navbar2/>
          <div className='lg:flex h-full'>
            <SectionLeft/>
            <SectionRight/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHotel;
