import * as React from "react";
import Button from "../Button/Button";

interface Props {}

export default function Navbar(props: Props) {
  return (
    <div className="w-full h-24 bg-white flex justify-center top-0 fixed z-50">

      <div className=" mt-auto mb-auto text-center">
        <span>RELAX</span>
      </div>
    </div>
  );
}
