var animalAlbums,
    animalList,
    animalDetails;

var currentAlbum = animalsData.category;
var currentList = currentAlbum[0];

function showTemplate(template, data){
  var html    = template(data);
  $('#content').html(html);
}


$(document).ready(function(){

  var source   = $('#albums-template').html();
  animalAlbums = Handlebars.compile(source);

  $('#albums-tab').click(function () {

    showTemplate(animalAlbums, animalsData);

    $('.navbar-nav .active').removeClass('active');
    $('#albums-tab').addClass('active');

  });

  $('#albums-tab').click();

});
