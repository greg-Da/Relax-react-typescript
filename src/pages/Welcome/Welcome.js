import Pieds from "../../assets/pieds.jpeg";
import Card from "../../components/Card/Card";
import Navbar2 from "../../components/NavbarHotel/NavbarHotel";

/**TRADUCTION */
const title = "Bienvenue parmi nous";
const content = "Votre demande de création de compte a bien été transmise a nos services. Nous vous recontacterons très prochainement pour sa validation.";
const content2 = "En attendant, veuillez confirmer votre email.";
const content3 = "Merci de vérifier dans vos spams. ";
const link = "Vous n’avez pas reçu de mail ? Cliquez-ici.";
const polConfidentiality = "Politique de confidentialité";

function Welcome() {
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
            <div className="pb-4 pt-12 py-6">
              <p className='font-bold text-2xl'>{title}</p>
              <p className='mt-8'>
                {content}
              </p>
              <p className='mt-8'>{content2}</p>
              <div className='mt-8'>
                <p className=''>{content3}</p>
                <a className='underline'>{link}</a>
              </div>
              <div className='mt-10'>
                <a className='underline'>{polConfidentiality}</a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
