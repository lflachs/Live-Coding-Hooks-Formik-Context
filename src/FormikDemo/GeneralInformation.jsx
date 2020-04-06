import React from "react";
import { Form } from "formik";
import { MyCustomTextField } from "./FieldsElements";

function GeneralInformations(props) {
  console.log(props);
  return (
    <div>
      <Form>
        <MyCustomTextField name="firstName" type="text" label="first Name" />
        <MyCustomTextField name="lastname" type="text" label="last Name" />
        <button type="submit">cliuck</button>
      </Form>
    </div>
  );
}
export default GeneralInformations;
