$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "/kittyFooFoo",
        success: function(data){
            //whatever
            console.log(data);
        }
    });
});