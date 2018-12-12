$(function(){
  function buildHTML(message) {
    var html =`<ul>
                 <li class="message__name">
                   ${message.name}
                 </li>
                 <li class="message__time">
                   ${message.created_at}
                 </li>
                 <li class="message__text">
                  ${message.text}
                 </li>
              </ul>`
    return html;
  }
  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    console.log(url)
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.message__box').append(html)
      $('.form_field').val('')
    })
  })
});
