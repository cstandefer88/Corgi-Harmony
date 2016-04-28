$(document).ready(function(){

  getNewCorgi()

  $('a').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log('working');
    getNewCorgi()
    changeLikeStatus($(this).data());
    // changeLikeStatus()

  })
});


function changeLikeStatus(like){
    var corgiId = "?id=" + window.location.hash.substring(1)
    var url = '/corgis/corgi/' + corgiId;
      $.ajax({
      url: '/corgis/corgi/571a599cfca0fd67b073e5bb',
      method: 'PUT',
      data: { like: like.like }
    })
  .done(function(data, textStatus) {
    getNewCorgi();
  })
  .fail(function(data, textStatus) {
    console.log("fail " + data);
    console.log("ERROR status: " + textStatus);
  });
};


function getNewCorgi(){
    $.ajax({
      url: '/corgis/corgi',
      method: 'GET',
      dataType: 'json'
    })
      .done(function(data, textStatus){
        $('img').attr('src', data.url);
        $('#dogAge').text(data.age);
        $('#dogName').text(data.name);
        window.location.hash = data._id;
      })
      .fail(function(data, textStatus){
        console.log("fail " + data);
        console.log("ERROR status: " + textStatus);
      });
  };
