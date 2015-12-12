class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    south = bounds["southWest"]["lat"].to_f
    north = bounds["northEast"]["lat"].to_f
    east = bounds["northEast"]["lng"].to_f
    west = bounds["southWest"]["lng"].to_f
    
    self.where(lat: (south..north), lng: (west..east) )
  end
end
