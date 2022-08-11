import CustomInput from "./CustomInput";

export default function CustomForm() {
  return (
    <div className="grid grid-cols-12 gap-y-6 gap-x-4">
      <div className="col-span-full  ">
        <label htmlFor="cardHolder" className="block text-sm font-medium text-gray-700">
          CARDHOLDER NAME
        </label>
        <div className="mt-1">
          <CustomInput
            className="block w-full  rounded-md shadow-sm  sm:text-sm"
            type="text"
            id="cardHolder"
            name="cardHolder"
            maxLength="14"
            placeholder="Eddy Agossou"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
          CARD NUMBER
        </label>
        <div className="mt-1">
          <CustomInput
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="8890 4567 8909 9009"
            maxLength="15"
            className="block w-full   rounded-md shadow-sm  sm:text-sm"
          />
        </div>
      </div>

      <div className="col-span-8 sm:col-span-8 w-fit flex flex-col ">
        <label className="block text-sm font-medium text-gray-700 uppercase">
          EXP.DATE (MM/YY)
        </label>
        <div className="mt-1 flex space-x-3">
          <div className="flex flex-col w-1/2">
            <CustomInput
              type="text"
              name="month"
              placeholder="MM"
              maxLength="2"
              className="block w-full   rounded-md shadow-sm  sm:text-sm"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <CustomInput
              type="text"
              name="year"
              placeholder="YY"
              maxLength="2"
              className="block w-full   rounded-md shadow-sm  sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="col-span-4 sm:col-span-4">
        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
          CVC
        </label>
        <div className="mt-1">
          <CustomInput
            type="text"
            name="cvc"
            id="cvc"
            placeholder="eg.123"
            maxLength="3"
            className="block w-full   rounded-md shadow-sm  sm:text-sm"
          />
        </div>
      </div>

      <div className="col-span-full">
        <button
          type="submit"
          className="bg-slate-700 text-center w-full p-2 text-white rounded-md hover:bg-slate-900"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
