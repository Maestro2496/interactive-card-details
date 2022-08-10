import React from "react";
import {Form} from "formik";
import CompleteIcon from "./CompleteIcon";
import CustomForm from "./Form";
import backCard from "../assets/bg-card-back.png";
import frontCard from "../assets/bg-card-front.png";
function parser(text) {
  text = text.slice(0, 4) + " " + text.slice(4);

  text = text.slice(0, 9) + " " + text.slice(9);

  text = text.slice(0, 14) + " " + text.slice(13);

  text = text.slice(0, 19) + " " + text.slice(19);
  return text;
}

export default function Mobile({values, errors, detailsAdded}) {
  return (
    <div className="">
      <div className=" flex flex-col w-full items-center justify-start space-y-4 bg-white">
        <div className="first-row h-60 w-full">
          <div className="back-card">
            <p className="text-white pl-52 pt-[4rem]">000</p>
          </div>
          <div className="front-card grid grid-rows-5 grid-cols-1">
            <div className="h-[3rem]" />
            <div className=" ml-6 row-span-1 col-span-1  mr-[12rem] flex space-x-3 justify-start items-center">
              <div className="bg-white w-8 h-8 rounded-full " />
              <div className="border-slate-900 w-3 h-3 rounded-full border" />
            </div>

            <div className="h-2" />
            <p className="ml-6 text-xl text-white tracking-wider">1234 5678 9087 7899</p>

            <div className="text-white mx-6 flex justify-between items-center">
              <p>Eddy Agossou</p>
              <p>00/00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-32 special:px-72  py-8 mt-12 bg-white ">
        <Form>
          <CustomForm />
        </Form>
      </div>
    </div>
  );
}
