import { gql } from 'apollo-angular';

const ALL_EMPLOYEES_QUERY = gql`
  query {
    getAllEmployees {
      id
      first_name
      last_name
      gender
      salary
      email
    }
  }
`;

export { ALL_EMPLOYEES_QUERY };