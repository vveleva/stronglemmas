class CreateDefinitions < ActiveRecord::Migration[5.2]
  def change
    enable_extension 'pgcrypto'

    create_table :definitions, id: :uuid do |t|
      t.string :name, null: :false, index: :true
      t.string :description, null: :false
      t.jsonb :references, default: []

      t.timestamps
    end
  end
end
