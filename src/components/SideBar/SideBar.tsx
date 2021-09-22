import * as React from "react";
import { AiOutlineFileSearch, AiOutlineShoppingCart, AiOutlineGift, AiOutlineLineChart,} from "react-icons/ai";
import { IoArrowBackCircleOutline, IoDocumentTextOutline} from "react-icons/io5";
import { RiDashboard3Line, RiSettings3Line, RiMailSendLine,} from "react-icons/ri";
import { FaBoxes, FaRegAddressBook } from "react-icons/fa";

type Variant = "green" | "gold";

interface Props {
  id: string;
  title: String;
  name: String;

  variant?: Variant;
}

/**
 * a simple SideBar with four variants
 *
 * @param props
 * @returns
 */
export default function SideBar(props: Props) {
  const { id, title, name, variant = "green" } = props;

  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <div className={` w-64 transform duration-500 ${
          open ? "translate-x-0 " : "-translate-x-52 -mr-48"
        }`}></div>
      <div
        style={{ height: "100vh" }}
        className={`left-0 fixed flex border-r border-gray-300 bg-white w-64 z-40 transform duration-500 ${
          open ? "translate-x-0 " : "-translate-x-52 -mr-48"
        }`}
      >
        <div
          className={`h-full z-50 w-1/4 transform duration-500 ${
            open ? "translate-x-0" : "translate-x-52"
          } ${variant === "green" ? "bg-green-500" : "bg-gold-500"}`}
        >
          <ul>
            <li className="flex h-16 border-b border-white">
              <div className={`w-full w-1/4 flex justify-center items-center`}>
                <AiOutlineFileSearch className="text-white w-6 h-6" />
              </div>
            </li>

            <li className="flex h-20 border-b border-white">
              <div
                className={`${
                  variant === "green" ? "bg-green-500" : "bg-gold-500"
                } w-1/4 flex justify-center items-center`}
              ></div>
            </li>

            <li className="flex h-14 border-b border-white">
              <div className={`w-full w-1/4 flex justify-center items-center`}>
                <RiDashboard3Line className="text-white w-6 h-6" />
              </div>
            </li>

            <li className="flex h-14 border-b border-white">
              <div className={`w-full w-1/4 flex justify-center items-center`}>
                <AiOutlineShoppingCart className="text-white w-6 h-6" />
              </div>
            </li>

            <li className="flex h-14 border-b border-white">
              <div className={`w-full w-1/4 flex justify-center items-center`}>
                <FaBoxes className="text-white w-6 h-6" />
              </div>
            </li>

            <li className="flex h-14 border-b border-white">
              <div className={`w-full w-1/4 flex justify-center items-center`}>
                <AiOutlineGift className="text-white w-6 h-6" />
              </div>
            </li>

            <li className="flex h-14 border-b border-white">
              <div className={`w-full w-1/4 flex justify-center items-center`}>
                <FaRegAddressBook className="text-white w-6 h-6" />
              </div>
            </li>

            <li className="flex h-14 border-b border-white">
              <div className={`w-full w-1/4 flex justify-center items-center`}>
                <AiOutlineLineChart className="text-white w-6 h-6" />
              </div>
            </li>

            <li className="flex h-14 border-b border-white">
              <div className={`w-full w-1/4 flex justify-center items-center`}>
                <IoDocumentTextOutline className="text-white w-6 h-6" />
              </div>
            </li>

            <li className="flex h-14 border-b border-white">
              <div className={`w-full w-1/4 flex justify-center items-center`}>
                <RiSettings3Line className="text-white w-6 h-6" />
              </div>
            </li>

            <li className="flex h-14 border-b border-white">
              <div className={`w-full w-1/4 flex justify-center items-center`}>
                <RiMailSendLine className="text-white w-6 h-6" />
              </div>
            </li>

            <div className="absolute bottom-0 w-full">
              <li
                onClick={() => setOpen(!open)}
                className="flex h-14 border-b border-white cursor-pointer"
              >
                <div className={` w-full flex justify-center items-center`}>
                  <IoArrowBackCircleOutline
                    className={`text-white w-6 h-6 transform duration-500 ${
                      open ? "rotate-0" : "rotate-180"
                    }`}
                  />
                </div>
              </li>

              <li className="flex w-full h-12 border-b border-white">
                <div
                  className={`${
                    variant === "green" ? "bg-green-500" : "bg-gold-500"
                  } transform duration-500 w-1/4 flex justify-center items-center`}
                ></div>
              </li>
            </div>
          </ul>
        </div>

        <div className={`h-full w-full relative`}>
          <ul>
            <li className="flex h-16 border-b border-white">
              <div
                className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${
                  open ? "" : "hidden"
                }`}
              >
                {title}
              </div>
            </li>

            <li className="flex h-20 border-b border-white">
              <div
                className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${
                  open ? "" : "hidden"
                }`}
              >
                <span>Bienvenue {name}</span>
              </div>
            </li>

            <li className="flex h-14 border-b border-white">
              <div
                className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${
                  open ? "" : "hidden"
                }`}
              >
                <a>Dashboard</a>
              </div>
            </li>

            <li className="flex h-14 border-b border-white">
              <div
                className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${
                  open ? "" : "hidden"
                }`}
              >
                <a>Mes commandes</a>
              </div>
            </li>

            <li className="flex h-14 border-b border-white">
              <div
                className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${
                  open ? "" : "hidden"
                }`}
              >
                <a>Gestion des stocks</a>
              </div>
            </li>

            <li className="flex h-14 border-b border-white">
              <div
                className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${
                  open ? "" : "hidden"
                }`}
              >
                <a>Gratuité & bons cadeaux</a>
              </div>
            </li>

            <li className="flex h-14 border-b border-white">
              <div
                className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${
                  open ? "" : "hidden"
                }`}
              >
                <a>Clients</a>
              </div>
            </li>

            <li className="flex h-14 border-b border-white">
              <div
                className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${
                  open ? "" : "hidden"
                }`}
              >
                <a>Rapport d'activité</a>
              </div>
            </li>

            <li className="flex h-14 border-b border-white">
              <div
                className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${
                  open ? "" : "hidden"
                }`}
              >
                <a>Géré ma facturation</a>
              </div>
            </li>

            <li className="flex h-14 border-b border-white">
              <div
                className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${
                  open ? "" : "hidden"
                }`}
              >
                <a>Paramétrage du compte</a>
              </div>
            </li>

            <li className="flex h-14 border-b border-white">
              <div
                className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${
                  open ? "" : "hidden"
                }`}
              >
                <a>Contacter Relax</a>
              </div>
            </li>
          </ul>

          <div className="absolute bottom-0 w-full">
            <ul>
              <li
                onClick={() => setOpen(!open)}
                className="flex h-14 border-b border-white cursor-pointer"
              >
                <div
                  className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${
                    open ? "" : "hidden"
                  }`}
                >
                  <span>Réduire le menu</span>
                </div>
              </li>
              <li className="flex h-12 border-b border-white">
                <div
                  className={`w-full flex justify-center items-center border-b border-gray-300 bg-white ${
                    open ? "" : "hidden"
                  }`}
                >
                  <a className="cursor-pointer text-sm">
                    <span className="font-bold">Mention légales</span> /CGU /
                    CGV
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SideBar };
