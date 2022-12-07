module Mutations
  class AddTodoItem < BaseMutation
    field :TodoItem, Types::TodoItemType, null: true

    argument :title, String, required: true

    def resolve(title:)
      todo_item = TodoItem.create!(title: title, completed: false)
      {
        TodoItem: todo_item
      }
    end
  end
end
