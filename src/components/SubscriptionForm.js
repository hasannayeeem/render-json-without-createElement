import React from "react";
import getClass from "../utils/getClasses";
import Input from "./Input";
import Label from "./Label";

const SubscriptionForm = ({ element, className }) => {
  return (
    <form className={className}>
      {element.form.fields.items.map((field) => (
        <>
          <Label>{field.label}</Label>
          <Input field={field} />
        </>
      ))}
      <button type="submit" className={getClass(element.form.submitButton)}>{element.form.submitButton.content}</button>
    </form>
  );
};

export default SubscriptionForm;
