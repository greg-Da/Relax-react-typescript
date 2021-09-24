import Button from "../../../../components/Button/Button";
import Card from "../../../../components/Card/Card";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Line } from "react-chartjs-2";

function SectionLeft() {
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
    <div className="xl:w-7/12 w-full">
      <div className="md:flex">
        <div className="w-full lg:mx-2 ">
          <Card>
            <div className="py-6 px-10  md:h-96 xl:h-80">
              <span className="text-xl">Commander une prestation</span>
              <div className="flex justify-center my-4">
                <div className="border border-black w-12 h-12 rounded-full flex justify-center items-center">
                  <AiOutlineShoppingCart className="w-8 h-8" />
                </div>
              </div>
              <div className='h-20 md:h-36 lg:h-40 xl:h-28'>
                <p>Vous souhaitez afficher vos commandes en cours ?</p>
                <p className="mb-5">Cliquez ci-dessous pour les voir.</p>
              </div>
              <Button variant="gold" rounded="rounded">
                <span>&#62;</span> Commander
              </Button>
            </div>
          </Card>
        </div>

        <div className="w-full lg:mx-2 mt-4 md:mt-0 ">
          <Card>
            <div className="py-6 px-10  md:h-96 xl:h-80">
              <span className="text-xl">Mes commandes en cours</span>
              <div className="flex justify-center my-4">
                <div className="border border-black w-12 h-12 rounded-full flex justify-center items-center">
                  <AiOutlineShoppingCart className="w-8 h-8" />
                </div>
              </div>
              <div className='h-20 md:h-36 lg:h-40 xl:h-28'>
                <p>Vous souhaitez commander une prestation ?</p>
                <p className="mb-5">
                  Cliquez ci-dessous pour réaliser votre réservation.
                </p>
              </div>
              <Button variant="gold" rounded="rounded">
                <span>&#62;</span> Commander
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <div className="md:flex mt-4">
        <div className="w-full lg:mx-2 mt-4 md:mt-0 ">
          <Card>
            <div className="py-6 px-10  md:h-96 xl:h-80">
              <span className="text-xl">Commander une prestation</span>
              <div className="flex justify-center my-4">
                <div className="border border-black w-12 h-12 rounded-full flex justify-center items-center">
                  <AiOutlineShoppingCart className="w-8 h-8" />
                </div>
              </div>
              <div className='h-20 md:h-36 lg:h-40 xl:h-28'>
                <p>Vous souhaitez afficher vos commandes en cours ?</p>
                <p className="mb-5">Cliquez ci-dessous pour les voir.</p>
              </div>
              <Button variant="gold" rounded="rounded">
                <span>&#62;</span> Commander
              </Button>
            </div>
          </Card>
        </div>

        <div className="w-full lg:mx-2 mt-4 md:mt-0 ">
          <Card>
            <div className="py-6 px-10  md:h-96 xl:h-80">
              <span className="text-xl">Mes commandes en cours</span>
              <div className="flex justify-center my-4">
                <div className="border border-black w-12 h-12 rounded-full flex justify-center items-center">
                  <AiOutlineShoppingCart className="w-8 h-8" />
                </div>
              </div>
              <div className='h-20 md:h-36 lg:h-40 xl:h-28'>
                <p>Vous souhaitez commander une prestation ?</p>
                <p className="mb-5">
                  Cliquez ci-dessous pour réaliser votre réservation.
                </p>
              </div>
              <Button variant="gold" rounded="rounded">
                <span>&#62;</span> Commander
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <div className="mt-4 lg:mx-2 mt-4 md:mt-0 ">
        <Card>
          <div className="py-6 px-10 xl:h-100 ">
            <p className="text-left">Détail du Chiffre d’affaires</p>
            <div className='w-11/12 flex justify-center'>
              <Line data={dataCharts} options={options} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default SectionLeft;
