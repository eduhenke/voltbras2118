const resolvers = {

  Query: {

    suitablePlanets: async (_: any, __: any, { dataSources, prisma }: any) => {
      const stations = await prisma.stations();
      let exoplanets = await dataSources.exoplanetsApi.queryExoplanets();
      exoplanets = exoplanets
        .filter((exoplanet: any) => exoplanet.mass && exoplanet.mass.value > 25)
        .map((exoplanet: any) => ({
          name: exoplanet.name,
          mass: exoplanet.mass.value,
          hasStation: stations.some(
            (station: any) => station.planet === exoplanet.name
          ),
        }));
      return exoplanets;
    }

  },

  Mutation: {

    installStation: async (_: any, { planetName }: any, { prisma }: any) => {
      await prisma.createStation({ planet: planetName });
      return { planetName };
    }

  }
}

export { resolvers }