import React from "react";

import "../styles/Form.css";

import { Input } from "./Input";
import { Button } from "./Button";
import { FormSubmit } from "../scripts/ToHandleForm";

export const Form = () => {
  const { handleSubmit } = FormSubmit();
  return (
    <section className="pokemon__from__container">
      <div className="pokemon__form__content">
        <form className="pokemon__form" onSubmit={handleSubmit}>
          <Input />
          <Button />
        </form>
      </div>
    </section>
  );
};
