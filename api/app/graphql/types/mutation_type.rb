module Types
  class MutationType < Types::BaseObject
    field :AddTodoItem, mutation: Mutations::AddTodoItem
    field :CompleteTodoItem, mutation: Mutations::CompleteTodoItem
  end
end
