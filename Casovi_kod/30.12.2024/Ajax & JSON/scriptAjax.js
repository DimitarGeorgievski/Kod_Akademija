$(document).ready(function(){
    console.log("we are ready");
    let button = $("#btn");
    // this is only the event handler
    button.on("click", function(){
        // ------------ AJAX ------------
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            method: "GET", // default is GET method that means that only we will pull info from that file
            success: function(result){
                console.log("we are in success");
                console.log(result);
            },
            error: function(error){
                console.log("we are in error");
                console.log(error);
            }
        });

        // ------------ AJAX ------------
    });
})