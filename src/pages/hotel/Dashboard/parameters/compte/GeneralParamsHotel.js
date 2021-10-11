import Calendar from "../../../../../components/Calendar/Calendar";
import Card from "../../../../../components/Card/Card";
import MenuParams from "../../../../../components/MenuParams/MenuParams";
import BandeauHotel from "../../../../../components/BandeauHotel/BandeauHotel";
import Prestataire from "../../../../../components/Prestataire/Prestataire";
import SideBar from "../../../../../components/SideBar/SideBar";
import Pieds from "../../../../../assets/pieds.jpeg";

function GeneralParamsHotel() {
  return (
    <div className="App">
      <div className="flex w-full">
        {/* <SideBar title="ESPACE HOTEL" name="Greg" variant="gold"></SideBar> */}

        <div className="w-full">
          <BandeauHotel />
          <div className="flex items-center justify-center w-full h-28 border-t border-b border-gray-300">
            <h1 className="xl:text-xl text-base">Informations du compte - Général</h1>
          </div>

          <div className="">
            <div className="flex justify-center">
              <MenuParams />
              </div>

              <div className='xl:flex p-4'>
              <div>
              <p className="text-lg text-center">Votre compte</p>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralParamsHotel;
