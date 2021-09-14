import Pieds from "../../assets/pieds.jpeg";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { CheckBox } from "../../components/CheckBox/CheckBox";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { TextField } from "../../components/TextField/TextField";

/**TRADUCTION */
const inscription = "INSCRIVEZ-VOUS";
const inscription2 = "JE M'INSCRIS";
const mail = "Adresse email";
const name = "Nom / Prénom";
const password = "Mot de passe";
const tel = "Téléphone";
const polConfidentiality = "J'accepte la politique de confidentialité";

function InscriptionHotel() {
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
        <div className="flex">
          <Card>
            <div className="px-4 py-6">
              <h1 className="text-lg mb-6">{inscription}</h1>
              <div className="flex">
                <div className='w-64 mr-3'>
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
                      placeholder={name}
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

                  <div className="my-6">
                    <TextField
                      placeholder={tel}
                      variant="default"
                      type="text"
                      screenWidth="full"
                    />
                  </div>
                </div>

                <div className='w-64 ml-3'>
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
                      placeholder={name}
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

                  <div className="my-6">
                    <TextField
                      placeholder={tel}
                      variant="default"
                      type="text"
                      screenWidth="full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <CheckBox rounded>
                  <p className="text-black">{polConfidentiality}</p>
                </CheckBox>
              </div>

              <div className="flex justify-center mt-5">
                <Button
                  variant="green"
                  rounded="full"
                  screenHeight="xxl"
                  screenWidth="xxl"
                >
                  {inscription2}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default InscriptionHotel;
