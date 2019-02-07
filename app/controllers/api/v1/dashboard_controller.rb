class Api::V1::DashboardController < ApplicationController
  # respond_to :json

  def index
    respond_to do |format|
      format.json { render json: Definition.all }
      format.html { render :index }
    end
  end
end
