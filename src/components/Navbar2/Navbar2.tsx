import * as React from "react";
import Button from "../Button/Button";

interface Props {}

export default function Navbar(props: Props) {
  return (
    <div className="h-24 w-full bg-white flex justify-center top-0 z-50 border-b border-gray-300">

      <div className=" mt-auto mb-auto text-center">
        <span>RELAX</span>
      </div>
    </div>
  );
}
