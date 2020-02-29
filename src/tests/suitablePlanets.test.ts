import { GraphQLServer } from "../GraphQLServer"
import { Client } from "./Client"

const server = new GraphQLServer();
const client = new Client();

const installStationMutation = `
mutation($planetName: String!) {
  installStation(planetName: $planetName) {
    planetName
  }
}
`;

const stationsQuery = `
{
  stations {
    id
    planet
  }
}
`;

const suitablePlanetsQuery = `
{
  suitablePlanets {
    name
    mass
    hasStation
  }
}
`;

describe("Suitable Planets Operations", () => {

  let suitablePlanetName: string;

  beforeAll(async () => {
    jest.setTimeout(30000);
    server.start(8484);
    await client.graphQLrequest(`mutation {
      deleteManyStations {
        count
      }
    }`, {}, "http://localhost:4477/");
  })

  it('Should return a list of planets with a mass greater than 25', async () => {
    const resp: any = await client.graphQLrequest(suitablePlanetsQuery)
    suitablePlanetName = resp.data.suitablePlanets[0].name;
    return expect(resp.data.suitablePlanets.every(
      (planet: any) => planet.name && !planet.hasStation && planet.mass > 25)
    ).toBeTruthy();
  });

  it('Should create a station in the database', async () => {
    await client.graphQLrequest(installStationMutation, { planetName: suitablePlanetName });
    const resp: any = await client.graphQLrequest(stationsQuery, {}, "http://localhost:4477/");
    return expect(resp.data.stations.some((station: any) => station.planet === suitablePlanetName))
      .toBeTruthy();
  });

  it(`Should return a suitable planet with station`, async () => {
    const resp: any = await client.graphQLrequest(suitablePlanetsQuery)
    return expect(
      resp.data.suitablePlanets
        .some((planet: any) => planet.name === suitablePlanetName && planet.hasStation)
    ).toBeTruthy();
  });

  afterAll(() => server.stop());

})