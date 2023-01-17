module Mutations
  class AddTodoItem < BaseMutation
    field :todo_item, Types::TodoItemType, null: false

    argument :title, String, required: true

    def resolve(title:)
      todo_item = TodoItem.create!(title: title, completed: false)
      {
        todo_item: todo_item
      }
    end
  end
end
