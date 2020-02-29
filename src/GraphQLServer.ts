const { ApolloServer } = require('apollo-server');
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { ExoplanetsApi } from "./datasources/ExoplanetsApi";
const { prisma } = require('./generated/prisma-client/index');

export class GraphQLServer {
    private server: any;

    constructor() {
        this.server = new ApolloServer({
            dataSources: () => ({ exoplanetsApi: new ExoplanetsApi() }),
            typeDefs,
            resolvers,
            context: {
                prisma
            }
        });
    }

    public start(port: number = 8383) {
        return this.server.listen({ port })
            .then((info: any) => console.log(`Server ready at http://localhost:${info.port}`));
    }

    public stop() {
        this.server.stop();
    }
}