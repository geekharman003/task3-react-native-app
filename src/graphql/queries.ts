import { gql } from "@apollo/client";

export const GET_EMPLOYEES = gql`
  query getEmployees {
    employees {
      id
      name
    }
  }
`;
