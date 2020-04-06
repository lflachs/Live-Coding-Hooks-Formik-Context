import React from "react";
import { Formik } from "formik";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GeneralInformations from "./GeneralInformation";
import PageForm from "./PageForm";

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values));
          actions.setSubmitting(false);
        }}
      >
        <Switch>
          <Route
            path="/register/personalInfos"
            component={GeneralInformations}
          />
          <Route path="/form/:id" component={PageForm} />
        </Switch>
      </Formik>
    </div>
  );
}
export default Homepage;
