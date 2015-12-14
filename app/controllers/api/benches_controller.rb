
class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds({bounds: params[:bounds], minSeating: params[:minSeating], maxSeating: params[:maxSeating]})
  end

  def create
    @bench = Bench.new(bench_params)
    @bench.save
    render :show
  end

  def show
    @bench = Bench.find(params[:id])
    render :show
  end

  private
  def bench_params
    params.require('benches').permit(:description, :lat, :lng, :seating)
  end
end
