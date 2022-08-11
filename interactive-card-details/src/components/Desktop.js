import React from "react";
import {Form} from "formik";
import CompleteIcon from "./CompleteIcon";
import CustomForm from "./Form";
import {parser, stringParser} from "../helpers";

export default function Desktop({values, errors, detailsAdded, setDetailsAdded, resetForm}) {
  return (
    <>
      <main
        role="main"
        className=" w-full h-full row-span-2 col-span-1 bg-cover bg-[url('./assets/bg-main-desktop.png')] flex flex-col items-center justify-center  space-y-6 z-5"
      >
        <div className="bg-[url('./assets/bg-card-front.png')] bg-contain bg-no-repeat min-w-[400px]  h-60 w-72   z-10 rounded-md -mr-56">
          <div className="mt-6 mx-6 flex space-x-2  justify-start items-center">
            <div className="w-12 h-12 rounded-full bg-white" />
            <div className="w-4 h-4 rounded-full border border-white" />
          </div>
          <div />
          <div className=" tracking-wider font-bold  text-3xl text-left text-slate-100 mx-6 mt-16 w-full h-8">
            {values.cardNumber.length === 0 || errors.cardNumber
              ? "0000 0000 0000 0000"
              : parser(values.cardNumber)}
          </div>
          <div className="flex justify-between items-center  mx-6 mt-4 text-slate-200/70">
            <p>
              {values.cardHolder.length === 0 || errors.cardHolder ? "John Doe" : values.cardHolder}
            </p>
            <p>
              {values.month.length === 0 || errors.month ? "00" : stringParser(values.month)} /{" "}
              {values.year.length === 0 || errors.year ? "00" : values.year}
            </p>
          </div>
        </div>
        <div className=" lg:px-8 bg-contain  bg-no-repeat bg-[url('./assets/bg-card-back.png')] min-w-[400px]  h-60 w-72 -mr-[30rem]  rounded-md">
          <div className=" mt-24 mr-2 flex justify-end">
            <p className="text-white font-bold">
              {values.cvc.length === 0 || errors.cvc ? "000" : values.cvc}
            </p>
          </div>
        </div>
      </main>
      <aside className="row-span-1 col-span-2 flex justify-center items-center">
        <div className="w-[35%] px-2 space-y-3 py-4">
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
                type="reset"
                className="bg-purple-900 w-full py-3 text-white px-8 rounded-md"
                onClick={() => {
                  resetForm();
                  setDetailsAdded(false);
                }}
              >
                Continue
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
