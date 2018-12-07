class MessagesController < ApplicationController

  def index
    @message = Message.new
    @messages = Meessage.order('created_at DESC')
  end

  def create
    Message.create(message_params)
  end

  private
  def message_params
    params.require(:message).permit(:text, :image)
  end
end
