import { SetStateAction,Dispatch } from "react";

export interface EmployeeCardProps {
  id: number;
  name: string;
  email: string;
  designation: string;
  department: string;
  filteredEmployees: Employee[];
  setFilteredEmployees:  Dispatch<SetStateAction<Employee[]>>;
}

export interface Employee {
  id: number;
  name: string;
  email: string;
  designation: string;
  department: string;
}


export interface TextFieldProps {
    content:string,
    value:string,
    setValue: Dispatch<SetStateAction<string>>;
}