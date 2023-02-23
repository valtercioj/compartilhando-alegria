/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { GetServerSideProps } from "next";
import { IGratitudeCard } from "./../../pages/allGratitude/type";
import React, { useEffect, useState } from "react";

export function Card({ description, date }: IGratitudeCard) {
  const months: any = {
    0: "Janeiro",
    1: "Fervereiro",
    2: "Março",
    3: "Abril",
    4: "Maio",
    5: "Junho",
    6: "Julho",
    7: "Agosto",
    8: "Setembro",
    9: "Outubro",
    10: "Novembro",
    11: "Dezenbro",
  };
  const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const [dateFormatted, setDateFormatted] = useState(new Date(date));

  return (
    <div className=" border border-black flex flex-col justify-center px-4 py-8 rounded-lg mb-4">
      <span className="text-center  w-full font-semibold text-base">
        {description}
      </span>
      <span className="text-xs ml-auto mt-2">
        {`${dateFormatted.getDate() + 1} de ${
          months[dateFormatted.getMonth()]
        } de ${dateFormatted.getFullYear()} `}
      </span>
    </div>
  );
}
