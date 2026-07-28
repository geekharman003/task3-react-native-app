import { SetStateAction, Dispatch } from "react";

export interface TextFieldProps {
  content: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
