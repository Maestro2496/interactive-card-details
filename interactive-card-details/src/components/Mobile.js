import React from "react";
import {Form} from "formik";
import CompleteIcon from "./CompleteIcon";
import CustomForm from "./Form";
import {monthParser, parser, stringParser} from "../helpers";

export default function Mobile({values, errors, detailsAdded, setDetailsAdded, resetForm}) {
  return (
    <div className="">
      <div className=" flex flex-col w-full items-center justify-start space-y-4 bg-white">
        <div className="first-row h-60 w-full">
          <div className="back-card">
            <p className="text-white pl-52 pt-[4rem]">
              {stringParser(values.cvc).length === 0 ? "000" : values.cvc}
            </p>
          </div>
          <div className="front-card grid grid-rows-5 grid-cols-1">
            <div className="h-[3rem]" />
            <div className=" ml-6 row-span-1 col-span-1  mr-[12rem] flex space-x-3 justify-start items-center">
              <div className="bg-white w-8 h-8 rounded-full " />
              <div className="border-slate-900 w-3 h-3 rounded-full border" />
            </div>

            <div className="h-2" />
            <p className="ml-6 text-xl text-white tracking-wider">
              {values.cardNumber.length === 0 ? "0000 0000 0000 0000" : parser(values.cardNumber)}
            </p>

            <div className="text-white mx-6 flex justify-between items-center">
              <p>{values.cardHolder.length === 0 ? "Eddy Agossou" : values.cardHolder}</p>
              <p>
                {monthParser(values.month).length === 0 ? "00" : monthParser(values.month)}/
                {stringParser(values.year).length === 0 ? "00" : values.year}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-32 special:px-72  py-8 mt-12 bg-white ">
        {!detailsAdded ? (
          <Form>
            <CustomForm />
          </Form>
        ) : (
          <div className="flex flex-col space-y-6 justify-center items-center">
            <CompleteIcon />
            <h1 className="text-3xl">THANK YOU!</h1>
            <p className="text-gray-500 font-bold">We've added your card details</p>
            <button
              onClick={() => {
                resetForm();
                setDetailsAdded(false);
              }}
              className="bg-purple-900 w-full py-3 text-white px-8 rounded-md"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
