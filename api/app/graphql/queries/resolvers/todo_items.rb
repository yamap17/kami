module Queries
  module Resolvers
    class TodoItems < GraphQL::Schema::Resolver
      type [Types::TodoItemType], null: false
      description 'TodoItemの一覧取得'
 
      def resolve
        ::TodoItem.all
      end
    end
  end
end


