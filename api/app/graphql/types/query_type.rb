module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :todo_items, [Types::TodoItemType], null: false

    def todo_items
      TodoItem.all
    end
  end
end
