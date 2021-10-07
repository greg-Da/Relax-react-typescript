import Pieds from "../../../assets/pieds.jpeg";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import { CheckBox } from "../../../components/CheckBox/CheckBox";
import Navbar2 from "../../../components/NavbarHotel/NavbarHotel";
import { TextField } from "../../../components/TextField/TextField";

/**TRADUCTION */
const connexion = "CONNECTEZ-VOUS";
const connexion2 = "SE CONNECTER";
const inscription = "Pas encore de compte ? Inscrivez-vous.";
const mail = "Adresse email";
const password = "Mot de passe";
const keepCo = "Se souvenir de moi";
const forgotPassword = "Mot de passe oublié ?";
const retour = "Retourner vers le site Relax Massage";

function Connexion() {
  return (
    <div className="App">
      <Navbar2 />
      <div
        className="flex justify-center items-center"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          backgroundImage: `url(${Pieds})`,
        }}
      >
        <div className="flex w-96">
          <Card>
            <div className="px-4 pt-10">
              <h1 className="text-lg mb-6">{connexion}</h1>
              <div>
                <TextField
                  placeholder={mail}
                  variant="default"
                  type="text"
                  screenWidth="full"
                />
              </div>

              <div className="my-6">
                <TextField
                  placeholder={password}
                  variant="default"
                  type="text"
                  screenWidth="full"
                />
              </div>

              <div className="flex justify-center">
                <CheckBox rounded>
                  <p className="text-black">{keepCo}</p>
                </CheckBox>
              </div>

              <div className="flex justify-center mt-5 mb-2">
                <Button
                  variant="green"
                  rounded="full"
                  screenHeight="xxl"
                  screenWidth="xxl"
                >
                  {connexion2}
                </Button>
              </div>
              <a className="text-center text-sm text-gray-500">
                {forgotPassword}
              </a>
            </div>
            <div className="bg-gray-200 w-full h-12 flex items-center justify-center mt-5">
              <a href="#" className="text-sm underline">
                {inscription}
              </a>
            </div>

            <div className='h-20 flex justify-center items-center'>
              <a className='text-sm text-gray-500' ><span className='mr-3'>&#60;</span>{retour}</a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
