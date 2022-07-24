import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
  query getUser($userId: ID!) {
    user(id: $userId) {
      code
      success
      message
      data {
        profile {
          nickname
          firstName
          lastName
        }
      }
    }
  }
`;
