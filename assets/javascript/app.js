

var dogs = ['Dachshunds', 'Labradors', 'Poodles', 'Shetland Sheepdogs', 'Pugs', 'Golden Retrievers',
'Dalmations', 'Beagles', 'Siberian Huskies', 'Chow Chow', 'Pomeranian', 'Great Dane'];


function renderButtons() {
  $('#dogButtons').empty();

        for (var i = 0; i < dogs.length; i++) {
          $('#dogButtons').append('<button>' + dogs[i] + '</button>');

        /*  var button = $('<button>');
          button.addClass('dog');
          button.attr('data-name'), dogs[i];
          button.text(dogs[i]);
          $('#dogButtons').append(button);

          var dogDiv = $('<div class = 'dog'>');
          var rating = response.Rated;
          var ratingDisplay = $('<p>').text('Rating:' + rating);
          dogDiv.append(ratingDisplay);
          var image = $('<img>').attr('src', imgURL)
          dogDiv.append(image);
          $('#dogPics').prepend(dogDiv);

            dogImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.prepend(p);
            gifDiv.prepend(dogImage);
            $("#dogButtons").prepend(gifDiv);*/
        };
      };
      $('#add-dog').on('click', function(event){
        event.preventDefault();
        var dogInput = $('#animal-input').val().trim();
        dogs.push(dogInput);
        $('#animal-input').val(' ');
        renderButtons();

      })

function getGifs() {
      var dog = $(this).attr('data-name');
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dog + "&rating=pg&limit=10&apikey=e9d5c73e287e4685b260b860ad5462e6";
      $.ajax({
        url: queryURL,
        method: "GET"
        })

    .done(function(response) {



      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var dogDiv = $('<div>');

        var image = $('<img>').attr('src', imgURL);

          image.attr('src', results[i].images.fixed_height_still.url)
          image.attr('data-still', results[i].images.fixed_height_still.url)
          image.attr('data-animate', results[i].images.fixed_height.url)
          image.attr('data-state', 'still');
          dogDiv.append(image);

        $('#dogPics').prepend(dogDiv);

        //dogDiv.append(image);
        //$('#dogPics').prepend(dogDiv);

    }
    })
};



/*function displayGifs() {

        var dog = $('#animal-input').val();
        $("#add-dog").on("click", function(event) {
          event.preventDefault();


          dog++;
          dogs.push(dog);



    })
  };*/

//$('dogPics').on('click', function() {
    $(document).on('click', '.gifs', function() {
      var state=$(this).attr('data-state');
      console.log(state);
        //var src;
        //var newState;
        if (state === "still") {
          var animatedSource = $(this).attr('data-animate')
          $(this).attr("src", animatedSource);
          $(this).attr("data-state", "animate");
        } else {
          var stillSource = $(this).attr('data-still')
          $(this).attr("src", stillSource);
          $(this).attr("data-state", "still");
        }
    });
    $(document).ready(function(){
      renderButtons();
    })
