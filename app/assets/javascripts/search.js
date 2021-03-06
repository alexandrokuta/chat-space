$(function(){
  var name_list = $('.chat-group-form__field--right2');
  var current_user_list = $('.name__wrapper');
    $(document).on('click',".user__name--add",function(){
      $(this).parent().remove();
    var id = $(this).data("id");
    var name = $(this).data("user");
    appendAddUser(id,name);
    });
    $(document).on('click',".user__name--delete", function(){
      $(this).parent().remove();
    })
  function appendUser(user) {
    var html =`<div class="user__name__wrapper">
                <p class="user__name">
                ${user.name}
                </p>
                <a class="user__name--add" data-id=${user.id} data-user=${user.name}>追加</a>
                </div>
                `
      name_list.append(html);
  }
  function appendNouser(nouser) {
    var html = `<div class="user__name__wrapper">
                <p class="user__name">
                ${nouser}
                </p>
                </div>`
                name_list.append(html);
  }
  function appendAddUser(id,name) {
    var add_name_html =`<div class="user__name__wrapper3">
                        <p class="user__name3">
                        ${name}
                        </p>
                        <a class="user__name--delete" data-id=${id} data-user=${name}>削除</a>
                        <input value="${id}", name='group[user_ids][]' type="hidden" />
                        </div>
                        `
                        current_user_list.append(add_name_html);
  }
  $('.chat-group--user--form__input').on('keyup', function(e){
    e.preventDefault();
    var input = $(this).val();
    if (input.length == 0) {
      return false;
    }
    $.ajax({
      url: '/users/search',
      type: 'GET',
      data: { keyword: input },
      dataType:'json',
    })
    .done(function(users){
      $('.user__name__wrapper').remove();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendNouser("該当のユーザーは存在しません。");
      }
    });
  });
});
