module Types
  class MutationType < Types::BaseObject
    field :createTodoItem, mutation: Mutations::CreateTodoItem
    field :completeTodoItem, mutation: Mutations::CompleteTodoItem
  end
end
