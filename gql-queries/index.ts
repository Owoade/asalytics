import { gql } from "@apollo/client";

export const GET_ASAS = gql`
query MyQuery {
  asalist {
    result {
      assetId
      available
      logo
      name
    }
  }
}
`