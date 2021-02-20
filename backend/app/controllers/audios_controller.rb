class AudiosController < ApplicationController

    def index
        render json: Audio.all
    end
end
