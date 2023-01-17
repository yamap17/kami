module Types
  class MutationType < Types::BaseObject
    field :add_todo_item, mutation: Mutations::AddTodoItem
    field :complete_todo_item, mutation: Mutations::CompleteTodoItem
  end
end
