import { employees } from "./data.js";

export const resolvers = {
    Query: {
        employees: () => employees,

        employee: (_, { id }) =>
            employees.find(emp => emp.id === id),
    },

    Mutation: {
        createEmployee: (_, { input }) => {
            const employee = {
                id: String(employees.length + 1),
                ...input,
            };

            employees.push(employee);

            return employee;
        },

        updateEmployee: (_, { id, input }) => {
            const employee = employees.find(e => e.id === id);

            Object.assign(employee, input);

            return employee;
        },

        deleteEmployee: (_, { id }) => {
            const index = employees.findIndex(e => e.id === id);

            if (index === -1)
                return false;

            employees.splice(index, 1);

            return true;
        },
    },
};