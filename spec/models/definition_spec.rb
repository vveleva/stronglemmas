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

require 'rails_helper'

RSpec.describe Definition, type: :model do
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_presence_of(:description) }
  it { is_expected.to validate_uniqueness_of(:name) }
  it { is_expected.to validate_uniqueness_of(:description) }
end
