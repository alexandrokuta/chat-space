$(function(){
  $('.chat-group-form__input').on('keyup', function(e){
    e.preventDefault();
    var input = $(this).val();
    $ajax({
      url: 'groups/new',
      type: 'GET',
      data: { keyword: input },
      dataType:'json'
    })
  });
});
