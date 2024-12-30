$(document).ready(function(){ // sekogas promenlivite # za id i . za klasi
    let name = $("#name");
    let height =  $("#height");
    let mass = $("#mass");
    $.ajax({
        url: "https://www.swapi.tech/api/people/1",
        success: function(res){
            name.text(`${res.result.properties.name}`);
            height.text(`${res.result.properties.height}`);
            mass.text(`${res.result.properties.mass}`);

        },
        error: function(error){
            console.log(error);
        }
    })
    
})
