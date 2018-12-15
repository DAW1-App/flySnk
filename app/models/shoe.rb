class Shoe < ApplicationRecord
  has_one_attached :image

  def self.search(term)
    if term
      where('brand LIKE ? or model LIKE ? ORDER BY created_at', "%#{term}%", "%#{term}%")
    else
      all
    end
  end
end
