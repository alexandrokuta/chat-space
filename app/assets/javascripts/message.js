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
             ${ message.image == null ? "" : <img src="/uploads/message/image/${message.id}/${message.image}" >}
            </li>
            </ul>`
    return html;
}
  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href + '/messages'
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    });
    .done(function(data){
      var html = buildHTML(data);
      $('.message__box').append(html);
      $('.form_field')[0].reset();
      $("html,body").animate({scrollTop:$('.message__box').offset().top});
    });
    .fail(function(){
      alert('error');
    });
  });
});
