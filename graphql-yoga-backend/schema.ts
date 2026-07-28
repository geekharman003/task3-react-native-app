export const typeDefs = /* GraphQL */ `
  type Employee {
    id: ID!
    name: String!
    email: String!
    designation: String!
    department: String!
  }

  type Query {
    employees: [Employee!]!
    employee(id: ID!): Employee
  }

  input CreateEmployeeInput {
    name: String!
    email: String!
    designation: String!
    department: String!
  }

  input UpdateEmployeeInput {
    name: String
    email: String
    designation: String
    department: String
  }

  type Mutation {
    createEmployee(input: CreateEmployeeInput!): Employee!
    updateEmployee(id: ID!, input: UpdateEmployeeInput!): Employee!
    deleteEmployee(id: ID!): Boolean!
  }
`;
