import React from 'react'
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Button } from "semantic-ui-react";
import MITextInput from "../utilities/MITextInput";


export default function JobAdd() {

  const initialValues = { name: "", code: "", manager: "", departmentId: "" };
  const schema = Yup.object({
    name: Yup.string().required("Girmek mecburidi"),
    code: Yup.number().required("Girmek mecburidi"),
    manager: Yup.boolean().oneOf([false],"You must accept the terms and conditions").required("Girmek mecburidi"),
    departmentId: Yup.number().required("Girmek mecburidi"),
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
            <MITextInput name = "name" placeholder = "JOB Ad"/>
            <MITextInput name = "code" placeholder = "Kodu"/>
            <MITextInput name = "manager" placeholder = "Manager"/>
            <MITextInput name = "departmentId" placeholder = "Department ID"/>
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
          <Button color="green"  type="submit">Add Job</Button>
        </Form>
      </Formik>

  )
}
