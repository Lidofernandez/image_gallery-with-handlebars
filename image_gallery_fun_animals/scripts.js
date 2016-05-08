var animalAlbums,
animalList,
animalDetails;

var currentAlbum = animalsData.category[0];
var currentList = currentAlbum.animals[0];
var currentPhoto = currentList.image1;
console.log(currentPhoto);

function showTemplate(template, data){
  var html    = template(data);
  $('#content').html(html);
}


$(document).ready(function(){
 // Compilers

  var source   = $('#albums-template').html();
  animalAlbums = Handlebars.compile(source);
  source   = $('#animal-list-template').html();
  animalList = Handlebars.compile(source);
  source   = $('#animal-details-template').html();
  animalDetails = Handlebars.compile(source);

  // Templates
  $('#albums-tab').click(function () {
    showTemplate(animalAlbums, animalsData);
    // $('.navbar-nav .active').removeClass('active');
    // $('#albums-tab').addClass('active');
    $(".album-thumbnail").click(function (){
      var index = $(this).data("id");
      currentAlbum = animalsData.category[index];
      showTemplate(animalList, currentAlbum);

      $(".album-single-photo").click(function (){
        var index = $(this).data("id");
        currentPhoto = currentList.image1;
        console.log(currentList);
        showTemplate(animalDetails, currentList);
      });

    });
  });

  $('#albums-tab').click();

});
