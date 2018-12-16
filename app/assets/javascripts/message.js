$(function(){
  function buildHTML(message){
    var html = `<ul>
                <li class="message__name">
                  ${message.name}
                </li>
                <li class="message__time">
                  ${message.created_at}
                </li>
                <li class="message__text">
                  ${message.text}
                  ${ message.image.url == null ? "" : `<img src= ${message.image,url} >` }
                </li>
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
