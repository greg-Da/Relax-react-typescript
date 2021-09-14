import * as React from "react";
import Button from "../Button/Button";

interface Props {}

export default function Navbar(props: Props) {
  return (
    <div className="w-full h-24 bg-white flex top-0 fixed z-50">

      <div className="w-1/2 mt-auto mb-auto ml-4">
        <p className='text-xl font-semibold text-green text-left '>Restez informé du lancement</p>
      </div>
      <div className="w-1/2 flex justify-end m-auto pr-12">
      <Button variant="green" onPress={() => alert("Button pressed!")}>
      Qui sommes-nous ?
        </Button>
        <Button variant="green" onPress={() => alert("Button pressed!")}>
          Recrutement
        </Button>
        <Button variant="green" onPress={() => alert("Button pressed!")}>
          Francais
        </Button>
        <Button variant="green" onPress={() => alert("Button pressed!")}>
          English
        </Button>
        <Button variant="green" onPress={() => alert("Button pressed!")}>
          Mon compte
        </Button>
      </div>
    </div>
  );
}
