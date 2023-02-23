/* eslint-disable react-hooks/rules-of-hooks */
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";
import { Card } from "@/components/Card";
import { IGratitudeCard } from "./type";
import axios from "axios";
import { useQuery } from "react-query";
export default function Index(): JSX.Element {
  const { data, isLoading } = useQuery("gratitude", async () => {
    const response = await axios.get("http://localhost:8000/api/");
    return response.data;
  });

  return (
    <div className="w-full h-full flex justify-center mt-4">
      <div className=" w-full sm:w-[50vw] px-4 sm:px-0 ">
        <div className="flex items-center mt-2 pl-2 pb-2 border-b border-black ">
          <svg
            version="1.1"
            viewBox="0.0 0.0 566.9291338582677 566.9291338582677"
            fill="none"
            width={35}
            height={35}
            stroke="none"
            strokeLinecap="square"
            strokeMiterlimit="10"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
          >
            <clipPath id="p.0">
              <path
                d="m0 0l566.92914 0l0 566.92914l-566.92914 0l0 -566.92914z"
                clipRule="nonzero"
              />
            </clipPath>
            <g clipPath="url(#p.0)">
              <path
                fill="#000000"
                fillOpacity="0.0"
                d="m0 0l566.92914 0l0 566.92914l-566.92914 0z"
                fillRule="evenodd"
              />
              <path
                fill="#000000"
                d="m283.46457 566.92914l0 0c-156.55316 0 -283.46457 -126.91141 -283.46457 -283.46457l0 0c0 -75.179474 29.864931 -147.2798 83.02485 -200.43973c53.15992 -53.15992 125.26025 -83.02485 200.43973 -83.02485l0 0c156.55316 0 283.46457 126.91141 283.46457 283.46457l0 0c0 156.55316 -126.91141 283.46457 -283.46457 283.46457z"
                fillRule="evenodd"
              />
              <path
                fill="#ff0066"
                d="m185.33075 441.39896l0 -237.76378l249.32281 0l0 237.76378z"
                fillRule="evenodd"
              />
              <path
                fill="#00ff88"
                d="m132.28346 441.39896l0 -237.76378l151.1811 0l0 237.76378z"
                fillRule="evenodd"
              />
              <path
                fill="#000000"
                d="m124.28346 446.4015l0 -170.07877l170.07875 170.07877z"
                fillRule="evenodd"
              />
              <path
                fill="#000000"
                d="m442.64566 446.4015l0 -170.07877l-170.07874 170.07877z"
                fillRule="evenodd"
              />
              <path
                fill="#000000"
                d="m283.46332 260.32272l80.188965 -80.188965l-160.37796 0z"
                fillRule="evenodd"
              />
            </g>
          </svg>
          <div className="flex justify-between w-full">
            <Link href={"/"}>
              <h1 className="font-semibold text-2xl ml-2">
                Compartilhando Alegria
              </h1>
            </Link>
            <Link href={"/"}>
              <IoArrowBackOutline className="text-2xl mr-8" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center w-full">
          {data && isLoading === true ? (
            <div role="status" className="mt-20">
              <svg
                aria-hidden="true"
                className="w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="mt-4 w-4/5">
              {data ? (
                data.map((gratitude: IGratitudeCard) => {
                  return (
                    <Card
                      key={gratitude.id}
                      description={gratitude.description}
                      date={gratitude.date}
                    />
                  );
                })
              ) : (
                <div className="flex justify-center mt-4 w-4/5">
                  <h1 className="text-2xl">Nenhum post encontrado</h1>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
