import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import MITextInput from "../utilities/MITextInput";

export default function EmployeeAdd() {
  // const initialValues = {
  //   name: "",
  //   surname: "",
  //   fathername: "",
  //   username: "",
  //   gender: "",
  //   birthdate: "",
  //   workstatus: "",
  //   director: "",
  //   registerdate: "",
  //   passchangedate: "",
  //   jobId: "",
  // };
  // const schema = Yup.object({
  //   name: Yup.string().required("Girmek mecburidi"),
  //   surname: Yup.string().required("Girmek mecburidi"),
  //   fathername: Yup.string().required("Girmek mecburidi"),
  //   username: Yup.string().required("Girmek mecburidi"),
  //   gender: Yup.string().required("Girmek mecburidi"),
  //   birthdate: Yup.number().required("Girmek mecburidi"),
  //   workstatus: Yup.boolean().required("Girmek mecburidi"),
  //   director: Yup.string().required("Girmek mecburidi"),
  //   registerdate: Yup.date(),
  //   passchangedate: Yup.date(),
  //   jobId: Yup.number().required("Girmek mecburidi"),
  // });
  return ( <div>ADD</div>
    // <Formik
    //   initialValues={initialValues}
    //   validationSchema={schema}
    //   onSubmit={(values) => {
    //     console.log(values);
    //   }}
    // >
    //   <Form className="ui form">
    //     <MITextInput name="name" placeholder="Ad" />
    //     <MITextInput surname="surname" placeholder="Soyad" />
    //     <MITextInput fathername="fathername" placeholder="Ata Ad" />
    //     <MITextInput username="username" placeholder="Istifadeci adi" />
    //     <MITextInput gender="gender" placeholder="Cinsiyyet" />
    //     <MITextInput birthdate="birthdate" placeholder="Dogum tarixi" />
    //     <MITextInput workstatus="workstatus" placeholder="Is veziyyeti" />
    //     <MITextInput director="director" placeholder="Direktor" />
    //     <MITextInput
    //       registerdate="registerdate"
    //       placeholder="Qeydiyyat tarixi"
    //     />
    //     <MITextInput
    //       passchangedate="passchangedate"
    //       placeholder="Sifre deyisme tarixi"
    //     /> 
    //     <MITextInput jobId="jobId" placeholder="Vezife ID" />

    //     <Button color="green" type="submit">
    //       Add Employee
    //     </Button>
    //   </Form>
    // </Formik>
  );
}
