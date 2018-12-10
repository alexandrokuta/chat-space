$(function(){
  $function buildHTML(message){
    var html = $()
    return html;
  }
  $('new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      type: "POST"
      url: url,
      data: formData,
      dataType: 'json'
      processData: false,
      contentType: false
    });
    .done(function(data){
      var html = buildHTML(data);
      $('.message__box').append(html);
      $('.form_field').val('');
    });
    .fail(function() {
      alert('error');
    });
  });
})
