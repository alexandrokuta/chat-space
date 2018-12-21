$(function(){
  function buildHTML(message){
    var insertImage = '';
    if (message.image.url){
      insertImage = `<img src="${message.image.url}">`
    }
    var html = `<ul class="message" data-message-id=${message.id}>
                <li class="message__name">
                  ${message.name}
                </li>
                <li class="message__time">
                  ${message.created_at}
                </li>
                <li class="message__text">
                  ${message.text}
                </li>
                  ${insertImage}
                </ul>`
            return html;
  }


  $('#new_message').on('submit', function(e){
    var formData = new FormData(this);
    var url = $(this).attr('action');
    e.preventDefault();
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      $('#send_message1').prop("disabled", false);
      var html = buildHTML(data);
      $('.message__box').append(html);
      $('.form_field').val("");
      $('form')[0].reset();
      $('.message__box').animate({scrollTop: $('.message__box')[0].scrollHeight});
    })
    .fail(function(data){
      alert('リロードしてください')
    });
  });

  setInterval(function(){
   if (location.href.match(/\/groups\/\d+\/messages/)){
     var message_id = $('.message').last().data('message-id');
     var data = {id: message_id}
     $.ajax({
       type: 'GET',
       url: location.href,
       data: data,
       dataType: 'json'
     })
     .done(function(messages){
       messages.forEach(function(message){
       var html = buildHTML(message);
       $('.message__box').append(html);
       $('.message__box').animate({scrollTop: $('.message__box')[0].scrollHeight});
       });
     })
     .fail(function(message){
       alert("自動更新に失敗しました");
     });
   }
 }, 5000);

});
