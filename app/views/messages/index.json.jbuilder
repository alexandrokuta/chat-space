json.array! @messages do |message|
  json.name     message.user.name
  json.created_at     message.created_at
  json.image    message.image
  json.id       message.id
end
