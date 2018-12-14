module Types
  QueryType = GraphQL::ObjectType.define do
    name "Query"
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :definitions do
      type types[DefinitionType]
      description 'An example field added by the generator'
      resolve -> (_, args, ctx) { Definition.all }
    end

  end
end
