// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  station: (where?: StationWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  station: (where: StationWhereUniqueInput) => StationNullablePromise;
  stations: (args?: {
    where?: StationWhereInput;
    orderBy?: StationOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Station>;
  stationsConnection: (args?: {
    where?: StationWhereInput;
    orderBy?: StationOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => StationConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createStation: (data: StationCreateInput) => StationPromise;
  updateStation: (args: {
    data: StationUpdateInput;
    where: StationWhereUniqueInput;
  }) => StationPromise;
  updateManyStations: (args: {
    data: StationUpdateManyMutationInput;
    where?: StationWhereInput;
  }) => BatchPayloadPromise;
  upsertStation: (args: {
    where: StationWhereUniqueInput;
    create: StationCreateInput;
    update: StationUpdateInput;
  }) => StationPromise;
  deleteStation: (where: StationWhereUniqueInput) => StationPromise;
  deleteManyStations: (where?: StationWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  station: (
    where?: StationSubscriptionWhereInput
  ) => StationSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type StationOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "planet_ASC"
  | "planet_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type StationWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface StationWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  planet?: Maybe<String>;
  planet_not?: Maybe<String>;
  planet_in?: Maybe<String[] | String>;
  planet_not_in?: Maybe<String[] | String>;
  planet_lt?: Maybe<String>;
  planet_lte?: Maybe<String>;
  planet_gt?: Maybe<String>;
  planet_gte?: Maybe<String>;
  planet_contains?: Maybe<String>;
  planet_not_contains?: Maybe<String>;
  planet_starts_with?: Maybe<String>;
  planet_not_starts_with?: Maybe<String>;
  planet_ends_with?: Maybe<String>;
  planet_not_ends_with?: Maybe<String>;
  AND?: Maybe<StationWhereInput[] | StationWhereInput>;
  OR?: Maybe<StationWhereInput[] | StationWhereInput>;
  NOT?: Maybe<StationWhereInput[] | StationWhereInput>;
}

export interface StationCreateInput {
  id?: Maybe<ID_Input>;
  planet: String;
}

export interface StationUpdateInput {
  planet?: Maybe<String>;
}

export interface StationUpdateManyMutationInput {
  planet?: Maybe<String>;
}

export interface StationSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<StationWhereInput>;
  AND?: Maybe<StationSubscriptionWhereInput[] | StationSubscriptionWhereInput>;
  OR?: Maybe<StationSubscriptionWhereInput[] | StationSubscriptionWhereInput>;
  NOT?: Maybe<StationSubscriptionWhereInput[] | StationSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Station {
  id: ID_Output;
  planet: String;
}

export interface StationPromise extends Promise<Station>, Fragmentable {
  id: () => Promise<ID_Output>;
  planet: () => Promise<String>;
}

export interface StationSubscription
  extends Promise<AsyncIterator<Station>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  planet: () => Promise<AsyncIterator<String>>;
}

export interface StationNullablePromise
  extends Promise<Station | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  planet: () => Promise<String>;
}

export interface StationConnection {
  pageInfo: PageInfo;
  edges: StationEdge[];
}

export interface StationConnectionPromise
  extends Promise<StationConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<StationEdge>>() => T;
  aggregate: <T = AggregateStationPromise>() => T;
}

export interface StationConnectionSubscription
  extends Promise<AsyncIterator<StationConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<StationEdgeSubscription>>>() => T;
  aggregate: <T = AggregateStationSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface StationEdge {
  node: Station;
  cursor: String;
}

export interface StationEdgePromise extends Promise<StationEdge>, Fragmentable {
  node: <T = StationPromise>() => T;
  cursor: () => Promise<String>;
}

export interface StationEdgeSubscription
  extends Promise<AsyncIterator<StationEdge>>,
    Fragmentable {
  node: <T = StationSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateStation {
  count: Int;
}

export interface AggregateStationPromise
  extends Promise<AggregateStation>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateStationSubscription
  extends Promise<AsyncIterator<AggregateStation>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface StationSubscriptionPayload {
  mutation: MutationType;
  node: Station;
  updatedFields: String[];
  previousValues: StationPreviousValues;
}

export interface StationSubscriptionPayloadPromise
  extends Promise<StationSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = StationPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = StationPreviousValuesPromise>() => T;
}

export interface StationSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<StationSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = StationSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = StationPreviousValuesSubscription>() => T;
}

export interface StationPreviousValues {
  id: ID_Output;
  planet: String;
}

export interface StationPreviousValuesPromise
  extends Promise<StationPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  planet: () => Promise<String>;
}

export interface StationPreviousValuesSubscription
  extends Promise<AsyncIterator<StationPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  planet: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Station",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4477`
});
export const prisma = new Prisma();
