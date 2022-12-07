import Layout from '../components/Layout'
import TodoApp from '../components/TodoApp'
import { ApolloProvider } from "@apollo/client";
import client from "../config/apolloClient";

const IndexPage = () => (
  <Layout title="TODO List | Next.js + TypeScript Example">
    <ApolloProvider client={client}>
      <TodoApp />
    </ApolloProvider>
  </Layout>
)

export default IndexPage
