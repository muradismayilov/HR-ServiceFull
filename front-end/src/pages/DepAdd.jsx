import { Form, Formik } from 'formik'
import React from 'react'
import { Button } from 'semantic-ui-react'
import MITextInput from '../utilities/MITextInput'
import * as Yup from "yup";

export default function DepAdd() {

  const initialValues = { name: "", code: "" };
  const schema = Yup.object({
    name: Yup.string().required("Girmek mecburidi"),
    code: Yup.string().required("Girmek mecburidi"),
    
  });
  return (
<Formik 
      initialValues={initialValues} 
      validationSchema={schema}
      onSubmit={(values)=>{
        console.log(values)
      }}>
    <Form className="ui form">
    <MITextInput name = "name" placeholder = "Department Adi"/>
    <MITextInput name = "code" placeholder = "Department Kodu"/>
    <Button color="green"  type="submit">Add Department</Button>
        </Form>
      </Formik>
  

    
  );
}
