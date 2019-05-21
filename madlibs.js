var libButton = document.getElementById('lib-button');
var libIt = function() {
    var storyDiv = document.getElementById("story");
    var animal = document.getElementById("animal").value;
    var adjective = document.getElementById("adjective").value;
    var name = document.getElementById("name").value;
    var color = document.getElementById("color").value
    var place = document.getElementById("place").value
    var weather = document.getElementById("weather").value
    var mood1 = document.getElementById("mood1").value
    var mood = document.getElementById("mood").value
    storyDiv.innerHTML = "One day a "+adjective + " "+ noun + " " +"named "+ name + " was walking down the road and it had " + color +" furr and went into the "+ place +" because it was "+ weather +" ,"+ mood1 +" and "+ mood;
};
libButton.addEventListener('click', libIt);
