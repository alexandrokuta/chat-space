json.array! @messages do |message|
json.text message.text
json.image message.image
json.name message.name
json.created_at message.created_at
end
