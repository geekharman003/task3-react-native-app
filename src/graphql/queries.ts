import { gql } from "@apollo/client";

export const GET_EMPLOYEES = gql`
  query getEmployees {
    employees {
      id
      name
      email
      designation
      department
    }
  }
`;

export const GET_EMPLOYEE = gql`
query getEmployee($id: ID!) {
employee(id: $id) {
   id
    name
    email
    department
    designation
}
}`;
