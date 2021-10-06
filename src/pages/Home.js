import "../App.css";
import Navbar from "../components/Navbar/Navbar";
import Pieds from "../assets/pieds.jpeg";
import Button from "../components/Button/Button";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          backgroundImage: `url(${Pieds})`,
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(255,255,255,0)), url(${Pieds})`,
        }}
      >
        <div className="w-3/4 h-full m-auto flex">
          <div className=" w-full flex flex-col text-white justify-center">
            <h1 className="text-3xl">Bienvenue sur Relax</h1>
            <p className="my-4">
              Afin de facilier votre navigation sur notre site, merci de
              selectionner un des deux boutons ci-dessous.
            </p>
            <div className="md:flex justify-center">
              <div className="md:mr-3 ">
                <Button
                  variant="outlineDisabled"
                  screenWidth="xxl"
                  onPress={() => alert("Button pressed!")}
                >
                  Je suis un particulier
                </Button>
              </div>
              <div className="md:ml-3 md:mt-0 mt-2">
                <Button
                  variant="outline"
                  screenWidth="xxl"
                  onPress={() => alert("Button pressed!")}
                >
                  Je suis un professionnel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
