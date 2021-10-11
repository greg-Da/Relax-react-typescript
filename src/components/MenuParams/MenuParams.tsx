import * as React from "react";
import { FiChevronDown } from "react-icons/fi";

interface Props {}

function MenuParams(props: Props) {
  const [selected, setSelected] = React.useState(-1);

  return (
    <div className="flex justify-center">
      <ul className="xl:flex">
        <li
        className='cursor-pointer	'
          onMouseEnter={() => setSelected(1)}
          onMouseLeave={() => setSelected(-1)}
        >
          <div className="border flex items-center h-16 px-4">
            Paramètres de votre compte <FiChevronDown />
          </div>
          <ul className={`${selected === 1 ? "" : "hidden"} xl:flex xl:absolute`}>
            <li>
              <div
                style={{ width: "min-content", maxWidth: "200px" }}
                className="cursor-pointer	border bg-gold-500 flex items-center text-center h-16  px-4 text-white"
              >
                Général
              </div>
            </li>
            <li>
              <div
                style={{ width: "min-content", maxWidth: "200px" }}
                className="cursor-pointer	border bg-gold-500 flex items-center text-center h-16  px-4 text-white"
              >
                Informationsde facturation
              </div>
            </li>
            <li>
              <div
                style={{ width: "min-content", maxWidth: "200px" }}
                className="cursor-pointer	border bg-gold-500 flex items-center text-center h-16  px-4 text-white"
              >
                Informationsbancaires
              </div>
            </li>

            <li>
              <div
                style={{ width: "max-content", maxWidth: "200px" }}
                className="cursor-pointer	border bg-gold-500 flex items-center text-center h-16  px-4 text-white"
              >
                Gestion dela TVA
              </div>
            </li>

            <li>
              <div
                style={{ width: "min-content", maxWidth: "200px" }}
                className="cursor-pointer	border bg-gold-500 flex items-center text-center h-16  px-4 text-white"
              >
                Personnalisationdes documents
              </div>
            </li>
          </ul>
        </li>


        <li
        className='cursor-pointer'
          onMouseEnter={() => setSelected(2)}
          onMouseLeave={() => setSelected(-1)}
        >
          <div className="border flex items-center h-16 px-4">
            Règle de fonctionnement des lieux <FiChevronDown />
          </div>
          <ul className={`${selected === 2 ? "" : "hidden"} flex absolute`}>
            <li
            className='cursor-pointer'>
              <div
                style={{ width: "min-content", maxWidth: "200px" }}
                className="border bg-gold-500 flex items-center text-center h-16  px-4 text-white"
              >
                Horaires d’ouverture
              </div>
            </li>

            <li
            className='cursor-pointer'>
              <div
                style={{ width: "min-content", maxWidth: "200px" }}
                className="border bg-gold-500 flex items-center text-center h-16  px-4 text-white"
              >
                Temps d’entrée/sortie
              </div>
            </li>

            <li
            className='cursor-pointer	'>
              <div
                style={{ width: "max-content", maxWidth: "200px" }}
                className="border bg-gold-500 flex items-center text-center h-16  px-4 text-white"
              >
                Gestion des espaces
              </div>
            </li>

            <li
            className='cursor-pointer	'>
              <div
                style={{ width: "min-content", maxWidth: "200px" }}
                className="border bg-gold-500 flex items-center text-center h-16  px-4 text-white"
              >
                Gestion dumatériel
              </div>
            </li>
          </ul>
        </li>


        <li
        className='cursor-pointer	'
          onMouseEnter={() => setSelected(3)}
          onMouseLeave={() => setSelected(-1)}
        >
          <div className="border flex items-center h-16 px-4">
          Gestion du personnel <FiChevronDown />
          </div>
          <ul className={`${selected === 3 ? "" : "hidden"} flex absolute`}>
            <li
            className='cursor-pointer	'>
              <div
                style={{ width: "max-content", maxWidth: "200px" }}
                className="border bg-gold-500 flex items-center text-center h-16  px-4 text-white"
              >
                Accès et contacts
              </div>
            </li>

            <li className='cursor-pointer	'>
              <div
                style={{ width: "min-content", maxWidth: "200px" }}
                className="border bg-gold-500 flex items-center text-center h-16  px-4 text-white"
              >
                Rôles
              </div>
            </li>

            <li
            className='cursor-pointer	'>
              <div
                style={{ width: "min-content", maxWidth: "200px" }}
                className="border bg-gold-500 flex items-center text-center h-16  px-4 text-white"
              >
                Règles de conciergerie
              </div>
            </li>

            <li className='cursor-pointer	'>
              <div
                style={{ width: "min-content", maxWidth: "200px" }}
                className="border bg-gold-500 flex items-center text-center h-16  px-4 text-white"
              >
                Qualification praticiens
              </div>
            </li>

            <li 
            className='cursor-pointer	'
            >
              <div
                style={{ width: "min-content", maxWidth: "200px" }}
                className="border bg-gold-500 flex items-center text-center h-16  px-4 text-white"
              >
                Planification praticiens
              </div>
            </li>
          </ul>
        </li>

        <li
        className='cursor-pointer	'>
          <div className="border flex items-center h-16 px-4">
            Politique d'annulation & Alertes
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MenuParams;
