import React from "react";
import { pages } from "./pages";
import { Form } from "formik";
import { MyCustomTextField, MyCustomCheckbox } from "./FieldsElements";
import { Link } from "react-router-dom";

function PageForm(props) {
  const page = pages[props.match.params.id];
  return (
    <Form>
      <div>
        <h1>{page.title}</h1>
        <p>{page.subtitle}</p>
        {page.fields.map((field) => {
          switch (field.type) {
            case "input":
              // TODO Return
              return field.elements.map((f) => {
                return (
                  <MyCustomTextField
                    name={f.name}
                    type={f.type}
                    label={f.label}
                  />
                );
              });
            case "checkbox":
              return field.elements.map((f) => {
                return (
                  <div>
                    <MyCustomCheckbox
                      name={field.name}
                      type="checkbox"
                      value={f}
                      label={f}
                    >
                      {f}
                    </MyCustomCheckbox>
                  </div>
                );
              });
          }
        })}
      </div>
      <Link to="/form/1">
        <button>Next</button>
      </Link>
    </Form>
  );
}
export default PageForm;
