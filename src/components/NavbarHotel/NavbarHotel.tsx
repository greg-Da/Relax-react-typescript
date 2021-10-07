import * as React from "react";
import Button from "../Button/Button";
import Logo from '../../assets/logo-texte.png';


interface Props {}

export default function NavbarHotel(props: Props) {
  return (
    <div className="h-24 w-full bg-white flex justify-center top-0 z-50 border-b border-gray-300">

      <div className=" mt-auto mb-auto flex justify-center">
        <img src={Logo} alt='logo' />
      </div>
    </div>
  );
}
