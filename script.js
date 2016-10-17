var person = {
  name: "Katya",
  imageSource: "http://www.myconfinedspace.com/wp-content/uploads/tdomf/119129/n35164325048_1212609_7006.jpg",
  height: "500px",	
  favoriteColor: "lavender",
  catchphrase: "Get pumped!"
}

drawPerson (person)

function drawPerson (person) {
  $("#name").html(person.name)
  $("#image").attr("src", person.imageSource)
  $("#image").css({"border-color": person.favo, 
               "border-weight":"1px", 
               "border-style":"solid"});
}

//drawPerson(person)