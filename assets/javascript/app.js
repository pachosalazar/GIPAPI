// first create an array with the gif that i wanna show
var shows = ["The Simpsons", "Evangelion", "ranma 1/2", "Knights of the Zodiac", "Thundercats","He-Man","Voltron"];
// set a variable to know how many gifs i want 
var gifsN = 10;

// create a funtion to display the button

function renderButtons (){
  for (var i = 0; i < shows.length; i++){
   // jquery button  var and code  
    var newButton = $("<button>");
    newButton.addClass ("btn")
    newButton.addClass ("show")
    newButton.text(shows[i]);
    $("#main-buttons").append(newButton);
  }
 
  //new parameter to remove a previous attachedment
    $(".show").unbind("click");
  //generate on click function to display  conten   
     $(".show").on("click", function(){
     $(".imaG").unbind("click");
     $("#gifs").empty();
     $("#gifs").removeClass("border border-success");
     myGifs($(this).text())
    });
};

//function to add the gits typed in a new button
function add(show){
    if(shows.indexOf(show)=== -1){
       shows.push(show);
       $("#main-buttons").empty();
       renderButtons();
    };
};
// ajax loooong procces 
function myGifs(show){
    $.ajax({
        // add url and my personal key to all gits
        url: "https://api.giphy.com/v1/gifs/search?q="+show+
        "&api_key=zkRGANWyCmsF5J5kgfmVHW6AMLD5NVej"+"&limit="+gifsN,
        method: "GET"
    })
    // i have to set up a response 
    .then(function(response){
      response.data.forEach(function(element) {
        newDiv=$("<div>");
        newDiv.addClass("individual-gif-container");
        var newImg =$("<img src='"+element.images.fixed_height-still.url+"'>");
        newImg.addClass("imaG")
        newImg.attr("state","still");
        newImg.attr("still-data",element.images.fixed_height_still.url);
        newImg.attr("animated-data",element.images.fixed_height.url);
        newDiv.append(newImg);
        $("#gifs").append(newDiv);    
      }); 
      //(unbind) removes previous attacheds
      $("#gifs").addClass("border border-success");
      $(".imaG").unbind("click");
      $(".imaG").on("click",function(){
          if($(this).attr("state")==="still"){
             $(this).attr("state","animated");
             $(this).attr("src",$(this).attr("animated-data"));
          }
          else {
             $(this).attr("state","still");
             $(this).attr("src",$(this).attr("still-data"));
            }
	  });
	});
}

$(document).ready(function(){
	renderButtons();
	$("#submit").on("click", function(event){
		event.preventDefault();
		add($("#AMCshow").val().trim());
		$("#AMCshow").val("");
	});
});
