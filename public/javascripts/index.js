$(document).ready(function(){

 // getNewCorgi()

 $('a').click(function(e){
   e.preventDefault();
   e.stopPropagation();
   console.log('working');
   getNewCorgi()
   //changeLikeStatus();
   // changeLikeStatus()

 })

});



function changeLikeStatus(){
corgiId = "571a599cfca0fd67b073e5bb"

 $.ajax({
 url: '/corgis/' + corgiId,
 method: 'PUT',
 data: { like: true }
})
 .done(function(data, textStatus) {
   //getNewCorgi();
 })
 .fail(function() {
   console.log("fail " + data);
   console.log("ERROR status: " + textStatus);
 });
}
function getNewCorgi(){
   $.ajax({
     url: '/corgis/corgi',
     method: 'GET',
     dataType: 'json'
   })
     .done(function(data, textStatus){
       console.log(data.url);
       $('img').attr('src', data.url);
       $()

     })
     .fail(function(data, textStatus){
       console.log("fail " + data);
       console.log("ERROR status: " + textStatus);
     })
 }

