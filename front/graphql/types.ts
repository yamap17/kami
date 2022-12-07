import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTodoItem?: Maybe<TodoItem>;
  completeTodoItem?: Maybe<TodoItem>;
};


export type MutationAddTodoItemArgs = {
  title: Scalars['String'];
};


export type MutationCompleteTodoItemArgs = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  TodoItems: Array<TodoItem>;
};

export type TodoItem = {
  __typename?: 'TodoItem';
  completed: Scalars['Boolean'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type AddTodoItemMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type AddTodoItemMutation = { __typename?: 'Mutation', addTodoItem?: { __typename?: 'TodoItem', id: number, title: string, completed: boolean } | null };

export type CompleteTodoItemMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type CompleteTodoItemMutation = { __typename?: 'Mutation', completeTodoItem?: { __typename?: 'TodoItem', id: number, title: string, completed: boolean } | null };

export type GetAllTodoItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTodoItemsQuery = { __typename?: 'Query', TodoItems: Array<{ __typename?: 'TodoItem', id: number, title: string, completed: boolean }> };


export const AddTodoItemDocument = gql`
    mutation AddTodoItem($title: String!) {
  addTodoItem(title: $title) {
    id
    title
    completed
  }
}
    `;
export const CompleteTodoItemDocument = gql`
    mutation CompleteTodoItem($id: Int!) {
  completeTodoItem(id: $id) {
    id
    title
    completed
  }
}
    `;
export const GetAllTodoItemsDocument = gql`
    query GetAllTodoItems {
  TodoItems {
    id
    title
    completed
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AddTodoItem(variables: AddTodoItemMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddTodoItemMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddTodoItemMutation>(AddTodoItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddTodoItem', 'mutation');
    },
    CompleteTodoItem(variables: CompleteTodoItemMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CompleteTodoItemMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CompleteTodoItemMutation>(CompleteTodoItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CompleteTodoItem', 'mutation');
    },
    GetAllTodoItems(variables?: GetAllTodoItemsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllTodoItemsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllTodoItemsQuery>(GetAllTodoItemsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllTodoItems', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;