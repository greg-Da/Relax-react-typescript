import "../App.css";
import React, { Children } from "react";
import Navbar from "../components/Navbar/Navbar";
import Pieds from "../assets/pieds.jpeg";
import Button from "../components/Button/Button";
import { TextField } from "../components/TextField/TextField";
import logo from "../assets/icons/loupe.svg";
import Card from "../components/Card/Card";
import Grid from "../components/Grid/Grid";

import IconButton from "../components/IconButton/IconButton";
import { CheckBox } from "../components/CheckBox/CheckBox";
import { Radio, RadioGroup } from "../components/Radio/RadioItem.js";
import Select from "react-select";
import { Doughnut, Line, Pie, Bar } from "react-chartjs-2";
import { AiOutlineSearch } from "react-icons/ai";
import MenuParams from "../components/MenuParams/MenuParams";
import Calendar from "../components/Calendar/Calendar";
import Prestataire from "../components/Prestataire/Prestataire";
import { Switch } from "../components/Switch/Switch";
import DossierPic from "../components/DossierPic/DossierPic";

function Test() {

  const [test, setTest] = React.useState('')

  const presta = {
    first_name: 'greg',
    last_name: 'doe',
    note: 5,
    link: '#',
    pic: Pieds,
    soins: ['thai', 'something'],
    time: '30H'
  }

  const data = [
    { label: "Marcel", value: 51 },
    { label: "Patrick", value: 66 },
    { label: "Bob", value: 55 },
    { label: "Georges", value: 60 },
    { label: "Eugene", value: 62 },
    { label: "Herve", value: 52 },
    { label: "max", value: "52" },
  ];

  const dataCharts = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
      
    ],
  };

  const dataChartsBar = {
    labels: ["jan", "feb", "mar", "apr", "may", "jun"],
    datasets: [
      {
        label: '# of Red Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: '# of Blue Votes',
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: '# of Green Votes',
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: 'rgb(75, 192, 192)',
      },
      
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div>
      {/* BUTTON */}
      <h1 className="text-2xl my-5">Button</h1>
      <h2>Rounded</h2>
      <Button
        variant="green"
        screenWidth="xxl"
        screenHeight="xxl"
        rounded="full"
        onPress={() => alert("Button pressed!")}
      >
        full
      </Button>
      <Button
        variant="green"
        screenWidth="xl"
        screenHeight="xl"
        rounded="rounded"
        onPress={() => alert("Button pressed!")}
      >
        rounded
      </Button>
      <Button
        variant="green"
        screenWidth="md"
        screenHeight="md"
        rounded="none"
        onPress={() => alert("Button pressed!")}
      >
        none
      </Button>

      <h2>green</h2>
      <Button
        variant="green"
        screenWidth="xxl"
        screenHeight="xxl"
        rounded="full"
        onPress={() => alert("Button pressed!")}
      >
        test
      </Button>
      <Button
        variant="green"
        screenWidth="xl"
        screenHeight="xl"
        rounded="full"
        onPress={() => alert("Button pressed!")}
      >
        test
      </Button>
      <Button
        variant="green"
        screenWidth="md"
        screenHeight="md"
        rounded="full"
        onPress={() => alert("Button pressed!")}
      >
        test
      </Button>
      <Button
        variant="green"
        screenWidth="sm"
        screenHeight="sm"
        rounded="full"
        onPress={() => alert("Button pressed!")}
      >
        test
      </Button>
      <h2>gold</h2>
      <Button
        variant="gold"
        screenWidth="md"
        screenHeight="md"
        onPress={() => alert("Button pressed!")}
      >
        test
      </Button>
      <h2>red</h2>
      <Button
        variant="red"
        screenWidth="md"
        screenHeight="md"
        onPress={() => alert("Button pressed!")}
      >
        test
      </Button>
      <h2>disabled</h2>
      <Button
        variant="disabled"
        screenWidth="md"
        screenHeight="md"
        onPress={() => alert("Button pressed!")}
      >
        test
      </Button>
      <h2>OUTLINE DISABLED</h2>
      <Button
        variant="outlineDisabled"
        screenWidth="xl"
        screenHeight="xl"
        onPress={() => alert("Button pressed!")}
      >
        Je suis un particulier
      </Button>
      <h2>OUTLINE</h2>
      <Button
        variant="outline"
        screenWidth="xl"
        screenHeight="xl"
        onPress={() => alert("Button pressed!")}
      >
        Je suis un professionnel
      </Button>

      {/** ICONBUTTON */}
      <h1 className="text-2xl my-5">IconButton</h1>

      <IconButton
        textHover="hover"
        variant="red"
        icon={<AiOutlineSearch />}
        onPress={() => alert("IconButton pressed!")}
      />

      <IconButton
        textHover="hover"
        variant="green"
        icon={<AiOutlineSearch />}
        onPress={() => alert("IconButton pressed!")}
      />

      <IconButton
        textHover="hover"
        variant="gold"
        icon={<AiOutlineSearch />}
        onPress={() => alert("IconButton pressed!")}
      />

      {/** TEXTFIELD */}
      <h1 className="text-2xl my-5">Textfield</h1>
      <p>Default</p>
      <TextField
        placeholder="Renseigner"
        labelText="Nom"
        variant="default"
        type="text"
        screenWidth="sm"
      />
      <p>Required</p>
      <TextField
        placeholder="Renseigner"
        labelText="Required"
        type="text"
        screenWidth="md"
        variant="required"
      />
      <p>Disabled</p>
      <TextField
        placeholder="Renseigner"
        labelText="Disabled"
        type="text"
        screenWidth="md"
        variant="disabled"
      />
      <p>withIcon</p>
      <React.Fragment>
        <TextField
          type="text"
          labelText="Your Name"
          beginIcon={<AiOutlineSearch />}
          placeholder="Full name"
          screenWidth="lg"
        />
        <TextField
          type="text"
          labelText="Your Email"
          endIcon={<AiOutlineSearch />}
          iconColor="text-red-600"
          placeholder="Email"
          screenWidth="lg"
        />
      </React.Fragment>

      {/** CARD */}
      <h1 className="text-2xl my-5">Card</h1>
      <div className="bg-gray-300 flex flex-col justify-center py-5">
        <Card screenWidth="sm">yo</Card>
        <Card screenWidth="md">yo</Card>
        <Card screenWidth="lg">yo</Card>
        <Card screenWidth="full">yo</Card>
      </div>

      {/** GRID */}
      <h1 className="text-2xl my-5">Grid</h1>
      <Grid justifyContent="center" spacing="md" xs={3} sm={4} md={6} lg={6}>
        <div className="bg-gray-500 text-center">div 1</div>
        <div className="bg-gray-500">div 2</div>
        <div className="bg-gray-500">div 3</div>
        <div className="bg-gray-500">div 4</div>
        <div className="bg-gray-500">div 5</div>
        <div className="bg-gray-500">div 6</div>
        <div className="bg-gray-500">div 7</div>
        <div className="bg-gray-500">div 8</div>
        <div className="bg-gray-500">div 9</div>
        <div className="bg-gray-500">div 10</div>
        <div className="bg-gray-500">div 11</div>
        <div className="bg-gray-500">div 12</div>
      </Grid>

      {/** CHECKBOX */}
      <h1 className="text-2xl my-5">CheckBox</h1>

      <CheckBox defaultSelected={true}>
        <p>foo</p>
      </CheckBox>

      <CheckBox rounded color="gold">
        <p>foo</p>
      </CheckBox>

      {/* SELECT */}
      <h1 className="text-2xl my-5">Select</h1>
      <div className="rounded-full">
        <Select
          defaultValue={data[2]}
          placeholder={<p>Type de prestation souhaitée</p>}
          options={data}
          isMulti
          styles={{
            control: (base) => ({
              ...base,
              borderRadius: "999px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }),
            multiValue: (base) => ({
              ...base,
              borderRadius: "999px",
            }),
          }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "#cadaaa",
              primary50: "#42563d",
            },
          })}
        />
      </div>

      {/** RADIO */}
      <h1 className="text-2xl my-5">Radio</h1>

      <RadioGroup onChange={(event) => setTest(event)} variant="green" label="Favorite pet">
        <Radio value="dogs">Dogs</Radio>
        <Radio value="cats">Cats</Radio>
      </RadioGroup>
      <h1>{test}</h1>

      <RadioGroup variant="gold" defaultValue="cats" label="Favorite pet">
        <Radio value="dogs">Dogs</Radio>
        <Radio value="cats">Cats</Radio>
      </RadioGroup>

      <RadioGroup
        orientation="horizontal"
        variant="gold"
        defaultValue="cats"
        label="Favorite pet"
      >
        <Radio value="dogs">Dogs</Radio>
        <Radio value="cats">Cats</Radio>
      </RadioGroup>

      {/** CHARTS */}
      <h1 className="text-2xl my-5">Charts</h1>

      <div className="w-1/2">
        <Doughnut data={dataCharts} />
      </div>

      <div className="w-1/2">
        <Line data={dataCharts} options={options} />
      </div>

      <div className="w-1/2">
        <Pie data={dataCharts} />
      </div>

      <div className="w-1/2">
        <Bar data={dataChartsBar} />
      </div>

      {/** MENU PARAMS */}
      <h1 className="text-2xl my-5">Menu params</h1>
      <MenuParams />

      {/** CALENDAR */}
      <h1 className="text-2xl my-5">Calendar</h1>
      <Calendar />


      {/** PRESTATAIRE */}
      <div className='bg-gray-300'>
      <h1 className="text-2xl my-5">Prestataires Card</h1>
      <Prestataire data={presta} />
      <Prestataire data={presta} variant='sm' />
      </div>


      {/** SWITCH */}
      <h1 className="text-2xl my-5">Switch</h1>
      <Switch defaultSelected />
      <Switch color='gold' />
      <Switch disabled />

      {/** DOSSIER PIC */}
      <h1 className="text-2xl my-5">DossierPic</h1>
      <DossierPic title='frbhj fewhjvfe 2vhjg' color='gold' value={true} />
      <DossierPic title='frbhj' value={true} pic={Pieds} />
      <DossierPic value={true} pic={Pieds} />
      
    </div>
  );
}

export default Test;
