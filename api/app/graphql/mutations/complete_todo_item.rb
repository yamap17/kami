module Mutations
  class CompleteTodoItem < BaseMutation
    field :todo_item, Types::TodoItemType, null: true

    argument :id, ID, required: true

    def resolve(id:)
      todo_item = TodoItem.find(id)
      todo_item.update!(completed: true)
      {
        todo_item: todo_item
      }
    end
  end
end
