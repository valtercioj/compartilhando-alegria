/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { QueryClient, useMutation } from "react-query";
import axios from "axios";
import { useQueryClient } from "react-query";

const schema = yup
  .object({
    description: yup
      .string()
      .required("Campo obrigatório")
      .min(3, "Digite um dado válido"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export function Registration() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const createGratitude = useMutation(
    async (data: FormData) => {
      const response = await axios.post(
        "http://localhost:8000/api/create",
        data
      );
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("gratitude");
      },
    }
  );

  const onSubmit = async (data: FormData) => {
    const response = await createGratitude.mutateAsync(data);
    if (response) {
      setIsSuccess(true);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="w-full h-full flex justify-center mt-10">
      <div className=" w-full sm:w-[50vw] px-8 sm:px-0">
        <div className="flex items-center mt-2 pl-2 pb-2 border-b border-black">
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register("description")}
            className={`${
              errors.description
                ? "border-red-600 border outline-red-600 focus-red-600"
                : "outline-gray-700 border border-black"
            } w-full h-48 p-2 border mt-6`}
            placeholder="Qual é a sua Alegria, todos precisamos de alguém para conversar"
          ></textarea>
          <p className="text-red-600">{errors.description?.message}</p>
          <div className="mt-2 flex justify-center focus:border-0 outline:border-0">
            <button
              type="submit"
              className="w-6/12 border border-black rounded-3xl py-2 flex flex-col items-center hover:bg-black hover:text-white "
            >
              <MdSend className="text-2xl" />
              Enviar
            </button>
          </div>
        </form>
        {isSuccess && (
          <div className="flex flex-col items-center justify-center mt-4">
            <p className="text-green-600 font-medium text-xl">
              Post criado com sucesso
            </p>
            <Link href={"/allGratitude"}>
              <span className="text-blue-600 font-medium text-xl underline">
                Clique para ler todos cadastrados
              </span>
            </Link>
          </div>
        )}{" "}
        {isError && (
          <div className="flex justify-center mt-4">
            <p className="text-red-600 font-medium text-xl">
              Erro ao criar post
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
