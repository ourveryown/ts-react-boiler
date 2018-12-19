// Apollo GQL Related imports
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();

const uri = "http://localhost:4000/";

const httpLink = createHttpLink({
  uri
});

const client = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache
});

export default client;
