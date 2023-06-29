import PocketBase, { ListQueryParams, OAuth2AuthConfig } from "pocketbase";

const client = new PocketBase("http://178.18.200.119:8090");

export const pb = {
  getOne: async <ItemType>(
    collection: string,
    id: string,
    query?: ListQueryParams
  ): Promise<ItemType | null> => {
    try {
      const result = await client.collection(collection).getOne(id, query);
      return JSON.parse(JSON.stringify(result)) as ItemType;
    } catch (error: any) { }
    return null;
  },

  geFullList: async <ItemType>(
    collection: string,
    query?: ListQueryParams
  ): Promise<ItemType[] | null> => {
    try {
      const result = await client.collection(collection).getFullList(query);
      return JSON.parse(JSON.stringify(result)) as ItemType[];
    } catch (error: any) { }
    return null;
  },

  create: async <ItemType>(
    collection: string,
    body: any,
    query?: ListQueryParams
  ): Promise<ItemType | null> => {
    try {
      const result = await client.collection(collection).create(body, query);
      return JSON.parse(JSON.stringify(result)) as ItemType;
    } catch (error: any) { }
    return null;
  },

  update: async <ItemType>(
    collection: string,
    id: string,
    body: any,
    query?: ListQueryParams
  ): Promise<ItemType | null> => {
    try {
      const result = await client
        .collection(collection)
        .update(id, body, query);
      return JSON.parse(JSON.stringify(result)) as ItemType;
    } catch (error: any) { }
    return null;
  },

  delete: async (
    collection: string,
    id: string,
    query?: ListQueryParams
  ): Promise<boolean | null> => {
    try {
      const result = await client.collection(collection).delete(id, query);
      return result;
    } catch (error: any) { }
    return null;
  },

  authWithOAuth2: async (
    collection: string,
    authConfig: OAuth2AuthConfig
  ): Promise<any | null> => {
    try {
      const result = await client
        .collection(collection)
        .authWithOAuth2(authConfig);
      return result;
    } catch (error: any) { }
    return null;
  },
  client,
};
