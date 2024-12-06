import { gql } from "@apollo/client";

// Query: Get Client with all fields
export const GET_CLIENT = gql`
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      clientNumber
      clientName
      clientAddress
      clientDescription
      ownership
      clientReferralSource
      clientIndustry
      clientContactName
      clientContactTitle
      clientContactEmail
      clientContactPhone
      clientWebsite
      clientDUNS
      matters {
        id
        matterName
        matterDescription
        matterType
        jurisdiction
      }
    }
  }
`;

// Query: Get Matter with all fields
export const GET_MATTER = gql`
  query GetMatter($id: ID!) {
    getMatter(id: $id) {
      id
      requester
      responsibleAttorney
      matterName
      matterDescription
      matterType
      areaOfPractice
      jurisdiction
      relatedClientInformation
      relatedPartyName
      relatedPartyType
      affiliation
      relationship
      isPayorAsideFromClient
      areMultiplePayors
      addPayor
      estimatedFees
      depositRequested
      willDepositBeReplenished
      isClientConfidential
      isMatterConfidential
      client {
        id
        clientName
      }
    }
  }
`;

// Mutation: Create Client with all fields
export const CREATE_CLIENT = gql`
  mutation CreateClient($input: ClientInput!) {
    createClient(input: $input) {
      id
      clientName
      clientNumber
      clientAddress
      clientDescription
      ownership
      clientReferralSource
      clientIndustry
      clientContactName
      clientContactTitle
      clientContactEmail
      clientContactPhone
      clientWebsite
      clientDUNS
    }
  }
`;

// Mutation: Create Matter with all fields
export const CREATE_MATTER = gql`
  mutation CreateMatter($input: MatterInput!) {
    createMatter(input: $input) {
      id
      requester
      responsibleAttorney
      matterName
      matterDescription
      matterType
      areaOfPractice
      jurisdiction
      relatedClientInformation
      relatedPartyName
      relatedPartyType
      affiliation
      relationship
      isPayorAsideFromClient
      areMultiplePayors
      addPayor
      estimatedFees
      depositRequested
      willDepositBeReplenished
      isClientConfidential
      isMatterConfidential
    }
  }
`;
