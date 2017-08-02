$("button").on("click", function() {
var dog = $(this).attr('data');
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + dog + "&apikey=e9d5c73e287e4685b260b860ad5462e6";

$.ajax({
        url: queryURL,
        method: "GET"
      })
      .done(function(response) {
        var results = response.data;


        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var dogImage = $("<img class = 'dogPictures'>");
            dogImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.prepend(p);
            gifDiv.prepend(dogImage);

            $("#dogPics").prepend(gifDiv);
        };
      });

var dogList = 12;
$("#add-dog").on("click", function(event) {
    event.preventDefault();
//grab the value of the input box and place it in a new button


    });

//$('dogPics').on('click', function() {
$(".dogPictures").on('click', function() {
  var state=$(this).attr('data-state');
  console.log(state);
  alert(state);
      var src;
      var newState;
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });
});
