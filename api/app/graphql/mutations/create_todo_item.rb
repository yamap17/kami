module Mutations
  class CreateTodoItem < BaseMutation
    field :todo_item, Types::TodoItemType, null: true

    argument :title, String, required: true

    def resolve(title:)
      todo_item = TodoItem.create!(title: title, completed: false)
      {
        todo_item: todo_item
      }
    end
  end
end
