class WelcomeController < ShoesController
  def index
    @shoes = Shoe.search(params[:term])
  end
end
