const { gql } = require('apollo-server');

const typeDefs = gql`
type SuitablePlanet {
  name: String!
  mass: Float!
  hasStation: Boolean!
}

type InstallStationResponse {
  planetName: String!
}

type Query {
  suitablePlanets: [SuitablePlanet]
}

type Mutation {
  installStation(planetName: String!): InstallStationResponse!
}
`;

export { typeDefs };
