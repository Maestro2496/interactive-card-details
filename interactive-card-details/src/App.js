import {Formik} from "formik";
import {useState} from "react";
import * as yup from "yup";

import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";
import Test from "./components/Test";

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
  month: yup.number().required("Can't be blank").typeError("Number only"),
  year: yup.number().required("Can't be blank").typeError("Number only"),
  cvc: yup.number().required("Can't be blank").typeError("Number only"),
});
function App() {
  const [detailsAdded, setDetailsAdded] = useState(false);

  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setDetailsAdded(true);
      }}
    >
      {({values, errors}) => {
        return (
          <>
            <div
              style={{fontFamily: "Space Grotesk, sans-serif"}}
              className="hidden  w-full mx-auto h-screen lg:grid grid-rows-1 grid-cols-3 gap-x-0 font-['Space Grotesk', sans-serif]"
            >
              <Desktop values={values} errors={errors} detailsAdded={detailsAdded} />
            </div>
            <div
              style={{fontFamily: "Space Grotesk, sans-serif"}}
              className=" hidden  xs:block w-full mx-auto h-screen lg:hidden font-['Space Grotesk', sans-serif]"
            >
              <Mobile />
            </div>
          </>
        );
      }}
    </Formik>
  );
}

export default App;
