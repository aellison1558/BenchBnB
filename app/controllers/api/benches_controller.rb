class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
  end

  def create
    @bench = Bench.new(bench_params)
    @bench.save
    @benches = Bench.all
    render :index
  end

  private
  def bench_params
    params.require('benches').permit(:description, :lat, :lng)
  end
end
