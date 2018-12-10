module ControllerMacros #定型文
  def login(user)
    @request.env["devise.mapping"] = Devise.mappings[:user] #定型文　この記述でsign_inが利用できる
    sign_in user
  end
end
