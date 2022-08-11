import {Formik} from "formik";
import {useState} from "react";
import * as yup from "yup";
import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";

const initialState = {
  cardHolder: "",
  cardNumber: "",
  month: "",
  year: "",
  cvc: "",
};
const validationSchema = yup.object({
  cardHolder: yup.string().required("Can't be blank"),
  cardNumber: yup.number().required("Can't be blank").typeError("Wrong format, numbers only"),
  month: yup.number().required("Can't be blank").typeError("Number only").max(12, " Wrong month"),
  year: yup.number().required("Can't be blank").typeError("Number only"),
  cvc: yup.number().required("Can't be blank").typeError("Number only"),
});

function App() {
  const [detailsAdded, setDetailsAdded] = useState(false);
  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values.cardNumber.length);
        if (values.cardNumber.length < 15) {
          actions.setFieldError("cardNumber", "Invalid card number");
          return;
        }
        setDetailsAdded(true);
      }}
    >
      {({values, errors, resetForm}) => {
        return (
          <>
            <header className="sr-only">Interactive card details</header>
            <main>
              <div
                style={{fontFamily: "Space Grotesk, sans-serif"}}
                className="hidden  w-full mx-auto h-screen lg:grid grid-rows-1 grid-cols-3 gap-x-0 font-['Space Grotesk', sans-serif]"
              >
                <Desktop
                  values={values}
                  errors={errors}
                  detailsAdded={detailsAdded}
                  setDetailsAdded={setDetailsAdded}
                  resetForm={resetForm}
                />
              </div>
              <div
                style={{fontFamily: "Space Grotesk, sans-serif"}}
                className="block w-full mx-auto h-screen lg:hidden font-['Space Grotesk', sans-serif]"
              >
                <Mobile
                  values={values}
                  errors={errors}
                  detailsAdded={detailsAdded}
                  setDetailsAdded={setDetailsAdded}
                  resetForm={resetForm}
                />
              </div>
            </main>
          </>
        );
      }}
    </Formik>
  );
}

export default App;
