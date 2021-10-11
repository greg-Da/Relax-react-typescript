import NavbarParticulier from "../../../components/NavbarHotel/NavbarHotel";

function HomeHotel() {
  return (
    <div className="App">
        <NavbarParticulier />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          //backgroundImage: `url(${Pieds})`,
          //backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(255,255,255,0)), url(${Pieds})`,
        }}
      >

      </div>
    </div>
  );
}

export default HomeHotel;
