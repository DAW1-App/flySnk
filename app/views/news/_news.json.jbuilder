json.extract! news, :id, :shoeName, :smallText, :largeText, :releaseDate, :price, :color, :created_at, :updated_at
json.url news_url(news, format: :json)
