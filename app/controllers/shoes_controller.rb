class ShoesController < ApplicationController
  before_action :set_shoe, only: [:show, :edit, :update, :destroy]

  # GET /shoes
  # GET /shoes.json
  def index
    @shoes = Shoe.search(params[:term])
  end

  # GET /shoes/1
  # GET /shoes/1.json
  def show
  end

  # GET /shoes/admin_shoe
  # GET /shoes/admin_shoe
  def admin_shoe
    @shoes = Shoe.all
  end
  # GET /shoes/new
  def new
    @shoe = Shoe.new
  end

  # GET /shoes/1/edit
  def edit
  end

  # POST /shoes
  # POST /shoes.json
  def create
    @shoe = Shoe.new(shoe_params)
    @shoe.image.attach(params[:shoe][:image])

    respond_to do |format|
      if @shoe.save
        format.html { redirect_to shoes_admin_shoe_path, notice: 'Shoe was successfully created.' }
        format.json { render :show, status: :created, location: @shoe }
      else
        format.html { render :new }
        format.json { render json: @shoe.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /shoes/1
  # PATCH/PUT /shoes/1.json
  def update
    respond_to do |format|
      if @shoe.update(shoe_params)
        format.html { redirect_to shoes_admin_shoe_path, notice: 'Shoe was successfully updated.' }
        format.json { render :show, status: :ok, location: @shoe }
      else
        format.html { render :edit }
        format.json { render json: @shoe.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /shoes/1
  # DELETE /shoes/1.json
  def destroy
    @shoe.destroy
    respond_to do |format|
      format.html { redirect_to shoes_admin_shoe_path, notice: 'Shoe was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shoe
      @shoe = Shoe.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def shoe_params
        params.require(:shoe).permit(:image, :brand, :color, :model, :price, :releaseDate, :info, :term)
    end
end
