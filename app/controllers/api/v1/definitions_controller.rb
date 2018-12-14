class Api::V1::DefinitionsController < ApplicationController
  def index
    render json: Definition.all
  end
end
