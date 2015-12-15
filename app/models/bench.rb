require('byebug')
class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(params)
    south = params[:bounds]["southWest"]["lat"].to_f
    north = params[:bounds]["northEast"]["lat"].to_f
    east = params[:bounds]["northEast"]["lng"].to_f
    west = params[:bounds]["southWest"]["lng"].to_f
    min = params[:minSeating].to_i
    max = params[:maxSeating].to_i

    self.where(lat: (south..north), lng: (west..east) ).where(seating: (min..max))
  end

  has_many :reviews
end
