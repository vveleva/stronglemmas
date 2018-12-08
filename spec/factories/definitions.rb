# == Schema Information
#
# Table name: definitions
#
#  created_at  :datetime         not null
#  description :string
#  id          :uuid             not null, primary key
#  name        :string
#  references  :jsonb
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_definitions_on_name  (name)
#

FactoryBot.define do
  factory :definition do
    
  end
end
