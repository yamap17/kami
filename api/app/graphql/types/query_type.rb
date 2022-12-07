module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :GetAllTodoItems, resolver: Queries::Resolvers::GetAllTodoItems
  end
end