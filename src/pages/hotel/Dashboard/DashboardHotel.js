
import BandeauHotel from "../../../components/BandeauHotel/BandeauHotel";
import SideBar from "../../../components/SideBar/SideBar";
import SectionLeft from "./section/SectionLeft";
import SectionRight from "./section/SectionRight";


function DashboardHotel() {

  return (
    <div className="App">
      <div className='flex w-full'>
          <SideBar title='ESPACE HOTEL' name='Greg' variant='gold' />

        <div className='w-full'>
        <BandeauHotel/>
          <div className='block xl:flex '>
            <SectionLeft/>
            <SectionRight/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHotel;
