import { Line, Bar } from "react-chartjs-2";
import Card from "../../../../components/Card/Card";
import { BsArrowUp } from "react-icons/bs";

function SectionRight() {
  const nmbPresta = 86;
  const nmbHotel = 45;
  const nmbExt = 23;
  const dateDebut = "16/12/19";
  const dateFin = "22/12/19";

  const day = [
    { name: "Lundi", nmb: 29, value: 1 },
    { name: "Mardi", nmb: 29, value: -1 },
    { name: "Mercredi", nmb: 29, value: 1 },
    { name: "Jeudi", nmb: 29, value: 1 },
    { name: "Vendredi", nmb: 29, value: 1 },
    { name: "Samedi", nmb: 29, value: -1 },
    { name: "Dimanche", nmb: 29, value: 1 },
  ];

  const bestPresta = [
    { name: "Massage Californien", nmb: 29 },
    { name: "Massage Californien", nmb: 29 },
    { name: "Massage Californien", nmb: 29 },
    { name: "Massage Californien", nmb: 29 },
    { name: "Massage Californien", nmb: 29 },
    { name: "Massage Californien", nmb: 29 },
    { name: "Massage Californien", nmb: 29 },
    { name: "Massage Californien", nmb: 29 },
    { name: "Massage Californien", nmb: 29 },
    { name: "Massage Californien", nmb: 29 },
    { name: "Massage Californien", nmb: 29 },
    { name: "Massage Californien", nmb: 29 },
  ];

  const dataChartsBar = {
    labels: ["jan", "feb", "mar", "apr", "may", "jun"],
    datasets: [
      {
        label: "# of Red Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgb(219, 176, 112)",
      },
      {
        label: "# of Blue Votes",
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: "rgb(172, 136, 76)",
      },
    ],
  };

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
    <div className="xl:w-5/12  sm:mt-0 mt-4">
      <div className="md:flex w-full">
        <div className="mr-2 w-full">
          <Card>
            <div className="p-4 text-left xl:mt-0 mt-4 md:h-96 xl:h-80">
              <p className="mt-2">Nombre de prestations</p>
              <p className="mt-8 text-green-700 text-xl">{nmbPresta} soins</p>
              <p className="text-xs mt-2">
                * Du {dateDebut} au {dateFin}
              </p>
              <div className="w-10/12 mt-6  mx-auto">
                <Line data={dataCharts} options={options} />
              </div>
            </div>
          </Card>
        </div>
        <div className="sm:ml-2 w-full lg:mr-2 xl:mt-0 mt-4">
          <Card>
            <div className="p-4 text-left md:h-96 xl:h-80">
              <p className="mt-2">Ratio clients hôtel / clients extérieur</p>
              <p className="mt-8 text-green-700 text-xl">
                {nmbHotel} hôtels / {nmbExt} ext.
              </p>
              <p className="text-xs mt-2">
                * Du {dateDebut} au {dateFin}
              </p>
              <div className="w-10/12 mt-6  mx-auto">
                <Bar data={dataChartsBar} options={options} />
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="md:flex w-full mt-4">
        <div className="mr-2 w-full">
          <Card>
            <div className="p-4 text-left md:h-96 xl:h-80 overflow-y-scroll">
              <p className="mt-2">Top masseur (en nombre de rdv)</p>
              <p className="text-xs mt-2">
                * Du {dateDebut} au {dateFin}
              </p>
              <div className="w-full px-4 mt-10">
                {bestPresta.map(item => {
                    return(
                  <div className="flex mt-6 justify-between">
                    <p>{item.name}</p>
                    <p>{item.nmb}</p>
                  </div>
                  )
                })}
              </div>
            </div>
          </Card>
        </div>
        <div className="sm:ml-2 w-full mr-2 sm:mt-0 mt-4">
          <Card>
            <div className="p-4 text-left md:h-96 xl:h-80">
              <p className="mt-2">Nombre de commandes par jour</p>
              <p className="text-xs mt-2">
                * Du {dateDebut} au {dateFin}
              </p>
              <div className="w-full mt-10 mx-auto">
                <div className="flex mt-4 justify-around">
                  <div className="w-full flex justify-between mt-2">
                    <div className='flex justify-between w-10/12'>
                      <p>{day[0].name}</p>
                      <p>{day[0].value}</p>
                    </div>
                    <BsArrowUp
                      className={`${
                        day[0].value === 1
                          ? "text-gold-500"
                          : "text-redCustom transform rotate-180"
                      }`}
                    />
                  </div>
                  <div className="w-full flex justify-between mt-2">
                    <div className='flex justify-between w-10/12'>
                      <p>{day[1].name}</p>
                      <p>{day[1].value}</p>
                    </div>
                    <BsArrowUp
                      className={`${
                        day[1].value === 1
                          ? "text-gold-500"
                          : "text-redCustom transform rotate-180"
                      }`}
                    />
                  </div>
                </div>
                <div className="flex mt-4 justify-between">
                  <div className="w-full flex justify-between mt-2">
                    <div className='flex justify-between w-10/12'>
                      <p>{day[2].name}</p>
                      <p>{day[2].value}</p>
                    </div>
                    <BsArrowUp
                      className={`${
                        day[2].value === 1
                          ? "text-gold-500"
                          : "text-redCustom transform rotate-180"
                      }`}
                    />
                  </div>
                  <div className="w-full flex justify-between mt-2">
                    <div className='flex justify-between w-10/12'>
                      <p>{day[3].name}</p>
                      <p>{day[3].value}</p>
                    </div>
                    <BsArrowUp
                      className={`${
                        day[3].value === 1
                          ? "text-gold-500"
                          : "text-redCustom transform rotate-180"
                      }`}
                    />
                  </div>
                </div>
                <div className="flex mt-4 justify-between">
                  <div className="w-full flex justify-between mt-2">
                    <div className='flex justify-between w-10/12'>
                      <p>{day[4].name}</p>
                      <p>{day[4].value}</p>
                    </div>
                    <BsArrowUp
                      className={`${
                        day[4].value === 1
                          ? "text-gold-500"
                          : "text-redCustom transform rotate-180"
                      }`}
                    />
                  </div>
                  <div className="w-full flex justify-between mt-2">
                    <div className='flex justify-between w-10/12'>
                      <p>{day[5].name}</p>
                      <p>{day[5].value}</p>
                    </div>
                    <BsArrowUp
                      className={`${
                        day[5].value === 1
                          ? "text-gold-500"
                          : "text-redCustom transform rotate-180"
                      }`}
                    />
                  </div>
                </div>
                <div className="flex mt-4 justify-around w-full">
                  <div className='flex justify-between w-32'>
                    <p>{day[6].name}</p>
                    <p>{day[6].value}</p>
                  </div>
                  <BsArrowUp
                    className={`${
                      day[6].value === 1
                        ? "text-gold-500"
                        : "text-redCustom transform rotate-180"
                    }`}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className='mt-4 mt-4 md:mt-0'>
        <Card>
          <div className="p-4 text-left overflow-y-scroll xl:h-100">
              <p className="mt-2">Nombre de commandes par prestation</p>
              <p className="text-xs mt-2">
                * Du {dateDebut} au {dateFin}
              </p>
              <div className="w-10/12 mt-6 ">
                {bestPresta.map((item, index) => {
                  return(
                  <div className='flex justify-between mt-6'>
                    <p>{item.name}</p>
                    <p>{item.nmb}</p>
                  </div>)
                  
                })}
              </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default SectionRight;
