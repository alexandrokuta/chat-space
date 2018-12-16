$(function(){
  function buildHTML(message){
    var insertImage = '';
    if (message.image.url){
      insertImage = `<img src="${message.image.url}">`;
    }
    var html = `<ul data-id=${message.id}>
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
  var id = $('ul:last-child').data('messageId');
  var interval = setInterval(function(){
    var insertHTML = '';
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      $.ajax({
        url: location.href,
        dataType: 'json',
      })
      .done(function(data){
        data.forEach(function(message){ //3
          if (message.id > id) {
            console.log(id)
            console.log(message.id)
            insertHTML += buildHTML(message);
          }
        });
        $('.messages').append(insertHTML);
      })
      .fail(function(data){
        alert('自動更新できません。更新するにはページを再度読み込んでください。');
      });
    } else {
      clearInterval(interval);
    }
    id = $('ul:last-child').data('messageId');
  }, 5000);

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
      var html = buildHTML(data);
      $('.message__box').append(html);
      $('.form_field').val("");
      $('#send_message1').prop("disabled", false);
      $('.message__box').animate({scrollTop: $('.message__box')[0].scrollHeight});
    })
    .fail(function(data){
      alert('error')
    })

  })
})
