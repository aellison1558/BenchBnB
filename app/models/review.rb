class Review < ActiveRecord::Base
  validates :body, :score, presence: true
  validates :score, inclusion: {in: [1, 2, 3, 4, 5]}

  belongs_to :bench
end
