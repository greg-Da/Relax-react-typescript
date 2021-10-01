import Pieds from "../../assets/pieds.jpeg";
import Button from "../../components/Button/Button";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { CgPhone, CgWebsite } from "react-icons/cg";

/**TRADUCTION */
const registationByPhone = "INSCRIPTION PAR TÉLÉPHONE";
const registationOnline = "INSCRIPTION EN LIGNE";
const detailByPhone = "Faite votre inscription par téléphone dès maintenant et soyez accompagné par un conseillé pas à pas.";
const detailOnline = "Faite votre inscription en ligne dès maintenant, en quelques clics seulement.";
const nextstep = "CONTINUER";

function TypeInscription() {
    return (
        <div className="App">
            <Navbar2 />
            <div
                className="flex justify-center items-start pt-32"
                style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundSize: "cover",
                    backgroundRepeat: "none",
                    backgroundImage: `url(${Pieds})`,
                }}
            >
                <div className="md:flex md:justify-center">

                    <div className="bg-white border-0 shadow-xl py-10 space-y-4 mb-6 md:mr-4 md:px-4 md:w-5/12 md:mb-0">
                        <h1 className="text-lg">{registationByPhone}</h1>

                        <div className="flex justify-center">
                            <CgPhone className="w-14 h-14" />
                        </div>

                        <p className="w-8/12 mx-auto md:h-20">{detailByPhone}</p>
                        
                        <Button
                            variant="green"
                            rounded="full"
                            screenHeight="xxl"
                            screenWidth="md"
                        >
                            <span className='mr-2'>&gt;</span>{nextstep}
                        </Button>
                    </div>

                    <div className="bg-white border-0 shadow-xl py-10 space-y-4 md:mr-4 md:px-4 md:w-5/12">
                        <h1 className="text-lg">{registationOnline}</h1>

                        <div className="flex justify-center">
                            <CgWebsite className="w-14 h-14" />
                        </div>

                        <p className="w-8/12 h-20 mx-auto">{detailOnline}</p>
                        <Button
                            variant="green"
                            rounded="full"
                            screenHeight="xxl"
                            screenWidth="md"
                        >
                            <span className='mr-2'>&gt;</span>{nextstep}
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TypeInscription;