Schema = GraphQL::Schema.define do
  mutation(Types::MutationType)
  query Types::QueryType
  mutation Mutations::MutationType
  use GraphQL::Batch
  use GraphQL::Guard.new(
    # Don't raise an error when an field isn't authorized, merely return null for that field
    not_authorized: ->(type, field) { nil },
  )

  resolve_type ->(type, obj, ctx) { Schema.types[obj.class.name.split("::").last] }
end
