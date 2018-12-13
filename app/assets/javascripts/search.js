$(function(){
  var name_list = $('.chat-group-form__field--right2');
  var default_name = $('.chat-group-form__field--js');
    $(document).on('click','.user__name--add',function(){
    id = $(this).data("id");
    name = $(this).data("user");
    appendAddUser(id,name);
    $('.user__name__wrapper').remove();
});
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
    var add_name_html =`<div class="user__name__wrapper2">
                        <p class="user__name2">
                        ${name}
                        </p>
                        <a class="user__name--add" data-id=${id} data-user=${name}>削除</a>
                        </div>
                        `
                        default_name.append(add_name_html);
  }
  $('.chat-group-form__input').on('keyup', function(e){
    e.preventDefault();
    var input = $(this).val();
    $.ajax({
      url: '/users/search',  //どのアクションを動かすのか　今回はusersのsearchアクションを動かしたい
      type: 'GET',
      data: { keyword: input }, //keyword: inputの表記でkeywordがusersコントローラーのsearchアクションで利用できる　擬似的にparamsを作るイメージ
      dataType:'json',
    })
    .done(function(users){
      $('.user__name').empty();
      if (users.length !== 0 ) {
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
