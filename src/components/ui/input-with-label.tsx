import React from "react";
import { Input, InputProps } from "./input";
import { Label } from "./label";

interface InputWithLabelProps extends InputProps {
  label: string;
}

export function InputWithLabel({
  label,
  className,
  ...props
}: InputWithLabelProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label className="" htmlFor={props.id || label}>
        {label}
      </Label>
      <Input id={props.id || label} {...props} />
    </div>
  );
}
