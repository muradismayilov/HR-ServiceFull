import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import MITextInput from "../utilities/MITextInput";

export default function EmployeeAdd() {
  const initialValues = { name: "", surname: "", fathername: "", birthdate: "" };
  const schema = Yup.object({
    name: Yup.string().required("Girmek mecburidi"),
    surname: Yup.string().required("Girmek mecburidi"),
    fathername: Yup.string().required("Girmek mecburidi"),
    birthdate: Yup.number().required("Girmek mecburidi"),
  });
  return (
    
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema}
      onSubmit={(values)=>{
        console.log(values)
      }}
      >
        <Form className="ui form">
            <MITextInput name = "name" placeholder = "Ad"/>
            <MITextInput name = "surname" placeholder = "Soyad"/>
            <MITextInput name = "fathername" placeholder = "Ata Ad"/>
            <MITextInput name = "birthdate" placeholder = "Dogum tarixi"/>
          {/* <FormField>
            <Field name = "name" placeholder = "Ad"></Field>
            <ErrorMessage name = "name" render={error=>
                <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField> 
          <FormField>
          <Field name = "surname" placeholder = "Soyad"></Field>
          <ErrorMessage name = "surname" render={error=>
                <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>
          <FormField>
          <Field name = "fathername" placeholder = "Ata Ad"></Field>
          </FormField>
          <FormField>
          <Field name = "birthdate" placeholder = "Dogum tarixi"></Field>
          </FormField>*/}
          <Button color="green"  type="submit">Add Employee</Button>
        </Form>
      </Formik>

  );
}
