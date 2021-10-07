import Pieds from "../../../assets/pieds.jpeg";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import { CheckBox } from "../../../components/CheckBox/CheckBox";
import NavbarHotel from "../../../components/NavbarHotel/NavbarHotel";
import { TextField } from "../../../components/TextField/TextField";
import Select from "react-select";

/**TRADUCTION */
const inscription = "INSCRIVEZ-VOUS";
const inscription2 = "JE M'INSCRIS";
const mail = "Adresse email";
const name = "Nom de l’hôtel";
const password = "Mot de passe";
const polConfidentiality = "J’accepte la politique de confidentialité.";
const star = "Nombre d’étoile";
const type = "Type d’hôtel";
const address = "Adresse";
const city = "Ville";
const zip = "Code Postal";
const contact = "Contact interne";
const tel = 'N° de téléphone'
const presta = 'Type de prestation souhaitée'

function InscriptionHotel() {
  const data = [
    { label: "Marcel", value: 51 },
    { label: "Patrick", value: 66 },
    { label: "Bob", value: 55 },
    { label: "Georges", value: 60 },
    { label: "Eugene", value: 62 },
    { label: "Herve", value: 52 },
    { label: "max", value: "52" },
  ];
  return (
    <div className="App">
      <NavbarHotel />
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
        <div className="flex mt-20">
          <Card>
            <div className="px-4 py-6">
              <h1 className="text-lg mb-6">{inscription}</h1>
              <div className="sm:flex">
                <div className='xl:96 mr-3'>
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

                  <div className="my-6">
                    <TextField
                      placeholder={name}
                      variant="default"
                      type="text"
                      screenWidth="full"
                    />
                  </div>

                  <div className="my-6 flex justify-between">
                    <div className='mr-2'>
                    <TextField
                      placeholder={star}
                      variant="default"
                      type="text"
                      screenWidth="full"
                    />
                    </div>
                    <div className='ml-2'>
                    <TextField
                      placeholder={type}
                      variant="default"
                      type="text"
                      screenWidth="full"
                    />
                    </div>
                  </div>
                </div>

                <div className='xl:96 ml-3'>
                  <div>
                    <TextField
                      placeholder={address}
                      variant="default"
                      type="text"
                      screenWidth="full"
                    />
                  </div>

                  <div className="my-6 flex justify-between">
                    <div className='mr-2'>
                    <TextField
                      placeholder={city}
                      variant="default"
                      type="text"
                      screenWidth="full"
                    />
                    </div>
                    <div className='ml-2'>
                    <TextField
                      placeholder={zip}
                      variant="default"
                      type="text"
                      screenWidth="full"
                    />
                    </div>
                  </div>

                  <div className="my-6 flex justify-between">
                    <div className='mr-2'>
                    <TextField
                      placeholder={contact}
                      variant="default"
                      type="text"
                      screenWidth="full"
                    />
                    </div>
                    <div className='ml-2'>
                    <TextField
                      placeholder={tel}
                      variant="default"
                      type="text"
                      screenWidth="full"
                    />
                    </div>
                  </div>

                  <div className="my-6">
                  <Select
                  placeholder={<p>Type de prestation souhaitée</p>}
        options={data}
        styles={{
                control: base => ({
                    ...base,
                    borderRadius: '999px',
                    paddingTop: '5px',
                    paddingBottom: '5px',
                }),
                multiValue: base => ({
                    ...base,
                    borderRadius: '999px',
                })
        }}
        theme={theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#cadaaa',
              primary50: '#42563d',
            },
        })}
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
