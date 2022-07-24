import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getUsers {
    users {
      code
      success
      message
      data {
        id
        email
        role
        userDeviceId
        createdAt
        updatedAt
      }
    }
  }
`;
