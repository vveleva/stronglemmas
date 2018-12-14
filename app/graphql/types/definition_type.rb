module Types
  DefinitionType = GraphQL::ObjectType.define do
    name 'Definition'

    field :id, !types.String, 'UUID of definition'

    field :name, !types.String, 'Name of definition term'

    field :description, !types.String, 'Description of defined term'

    field :references, types[ReferenceType] do
      resolve -> (definition, _, _) { definition.references }
    end
  end
end
