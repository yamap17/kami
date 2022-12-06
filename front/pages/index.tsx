import { GetStaticProps } from 'next'
import Link from 'next/link'

import Layout from '../components/Layout'
import TodoApp from '../components/TodoApp'


const IndexPage = () => (
  <Layout title="TODO List | Next.js + TypeScript Example">
    <TodoApp />
  </Layout>
)

export default IndexPage
