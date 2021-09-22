import * as React from "react";
import Button from "../Button/Button";
import { RiCalendarCheckLine } from "react-icons/ri";
import Card from "../Card/Card";

interface Props {}

function Calendar(props: Props) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="mr-4">
          <Button rounded="rounded" screenWidth="sm" variant="gold">
            <RiCalendarCheckLine className="w-8 h-8 m-auto" />
          </Button>
        </div>
        <div className="mr-1 h-8">
          <Button
            rounded="rounded"
            screenHeight="xxl"
            screenWidth="md"
            variant="gold"
          >
            <p className="">JOUR</p>
          </Button>
        </div>
        <div className="mr-1 h-8">
          <Button
            rounded="rounded"
            screenHeight="xxl"
            screenWidth="md"
            variant="gold"
          >
            <p className="">SEMAINE</p>
          </Button>
        </div>

        <div className="mr-1 h-8">
          <Button
            rounded="rounded"
            screenHeight="xxl"
            screenWidth="md"
            variant="gold"
          >
            <p className="">MOIS</p>
          </Button>
        </div>
      </div>

      <Card>
          <div className='bg-red-500 p-4 w-3/4 m-auto mt-6'>

          </div>
      </Card>
    </div>
  );
}

export default Calendar;
