import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

interface IDefaultTextFieldProps {
  errorMessage: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError: boolean;
  id: string;
}

export default function DefaultTextField({
  id,
  errorMessage,
  placeholder,
  onChange,
  value,
  isError,
}: IDefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? "border-warm900"
    : !value
      ? "border-warm300"
      : "border-primary";

  return (
    <div className="text-field relative">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
        border-b 
        text-primary 
        ${borderColor}
      `}
      >
        <input
          data-testid={id}
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="outline-none"
        />
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
