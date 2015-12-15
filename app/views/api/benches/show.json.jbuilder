json.extract! @bench, :id, :description, :lat, :lng, :seating
json.reviews do
  json.array! @bench.reviews, :id, :body, :score
end
