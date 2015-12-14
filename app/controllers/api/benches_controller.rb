
class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
  end

  def create
    @bench = Bench.new(bench_params)
    @bench.save
    render :show
  end

  private
  def bench_params
    params.require('benches').permit(:description, :lat, :lng, :seating)
  end
end
