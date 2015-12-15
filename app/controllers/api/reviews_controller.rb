class Api::ReviewsController < ApplicationController
  def index
    @bench = Bench.find(params[:bench_id])
    @reviews = @bench.reviews
  end

  def create
    @bench = Bench.find(params[:bench_id])
    @review = @bench.reviews.new(review_params)
    @review.save
    render :show
  end

  private
  def review_params
    params.require('reviews').permit(:bench_id, :body, :score)
  end
end
