module Mutations
  class CompleteTodoItem < BaseMutation
    field :TodoItem, Types::TodoItemType, null: true

    argument :id, ID, required: true

    def resolve(id:)
      todo_item = TodoItem.find(id)
      todo_item.update!(completed: true)
      {
        TodoItem: todo_item
      }
    end
  end
end
