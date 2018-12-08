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

class Definition < ApplicationRecord
  REFERENCES_BREAKDOWN_KEYS = %w[
    title
    edition
    author
    page
  ]

  validates :name, :description, presence: true, uniqueness: true

  validate :ensure_references_breakdown_keys_present

  private

  def ensure_references_breakdown_keys_present
    disallowed_keys = []
    references.each do |hash|
      disallowed_keys += hash.keys.map(&:to_s) - REFERENCES_BREAKDOWN_KEYS
    end

    if disallowed_keys.present?
      errors.add(
        :references,
        "The following reference keys are not allowed: #{disallowed_keys.join(', ')}",
      )
    end
  end
end
