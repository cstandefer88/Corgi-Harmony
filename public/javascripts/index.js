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
    var corgiId = window.location.hash.substring(1)
      $.ajax({
      url: '/corgis/' + corgiId,
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
        window.location.hash = data._id;
      })
      .fail(function(data, textStatus){
        console.log("fail " + data);
        console.log("ERROR status: " + textStatus);
      });
  };
