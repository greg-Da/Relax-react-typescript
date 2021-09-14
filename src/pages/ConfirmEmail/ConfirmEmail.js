import Pieds from "../../assets/pieds.jpeg";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { CheckBox } from "../../components/CheckBox/CheckBox";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { TextField } from "../../components/TextField/TextField";

/**TRADUCTION */
const title = "votre mail";
const content = "lorem icbehwfbierhbiufrbhifrbhiicbe hwfbierhbiufrbhifrbhiicbehwfbierhbiufrbhifrbhi";
const link = "Je me connecte";
const content2 = "Merci pour votre confiance.";
const relax = "La Team Relax";

function ConfirmEmail() {
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
            <div className="px-4 py-6">
              <p className='font-bold text-lg'>{title}</p>
              <p className='mt-8'>
                {content}
              </p>
              <div className='mt-8'>
                <a className='font-bold underline'>{link}</a>
              </div>
              <p className='mt-10'>{content2}</p>
              <p className='mt-6 font-bold'>{relax}</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ConfirmEmail;
