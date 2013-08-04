



function get_username_audio(username){
    
    $.ajax({
      url: "http://www.sonifizer.com/api/username/",
      type: "POST",
      data: {username: username}
    }).done(function ( data ) {
      if( console && console.log ) {
        console.log("Message:", data.Sonizer);
      }
    });

}


$(function(){



})

