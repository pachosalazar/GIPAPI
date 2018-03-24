// first create an array with the gif that i wanna show
var shows = ["The Simpsons", "Evangelion", "ranma 1/2", "Knights of the Zodiac", "Thundercats","He-Man","Voltron"];
// set a variable to know how many gifs i want 
var gifsN = 10;

// create a funtion to display the button

function renderbutton (){
  for (var i = 0; i < shows.lenght; i++){
   // jquery button  var and code  
    var button = $("<button>");
    button.addclass =("btn-group-toggle")
    button.addclass =("show")
    button.text(shows[i]);
    $("#main-buttons").append(button);
  }
  //new parameter to remove a previous attachedment
    $(".show").unbind("click");
  //generate on click function to display  conten   
     $(".show").on("click", function(){
     $("#gifs").empty();
     $("#gifs").removeClass("border border-success");
     myGifs($(this).text())
    });
};

//function to add the gits typed in a new button
function add(newG){
    if(shows.indexOf(newG)=== -1){
       shows.push(newG);
       $("#main-buttons").empty();
       renderbutton();
    };
};
// ajax loooong procces 
function mychoice(newG){
    $.ajax({
        // add url and my personal key to all gits
        url: "https://api.giphy.com/v1/gifs/search?q="+newG+
        "&api_key=zkRGANWyCmsF5J5kgfmVHW6AMLD5NVej"+"&limit="+gifsN,
        method: "GET"
    })
    // i have to set up a response 
    .then(function(response){
        
    });  
}
