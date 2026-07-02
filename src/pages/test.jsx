import React from "react";
import { InputText } from "../shared/ui/InputText";
import { Button } from "../shared/ui/Button";

export const Test = () => {
  return (
    <>
      <div className="">
        <InputText label="Sample" />
        <Button size="sm" variant="success" />
      </div>
    </>
  );
};
