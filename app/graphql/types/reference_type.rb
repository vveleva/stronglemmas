module Types
  ReferenceType = GraphQL::ObjectType.define do
    name 'Reference'

    field :title, types.String

    field :edition, types.String

    field :author, types.String

    field :page, types.Int
  end
end
