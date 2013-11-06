
<<<<<<< HEAD

function Audatar_audio(username){
    // Use this if using jQuery
    $('body').append('<script type="application/javascript" src="https://sonifizer.herokuapp.com/Sonifizer.js/api/username/'+username +'/json"></script>');
=======
function Audatar_audio(username){ 
    $('body').append('<script type="application/javascript" src="http://www.Sonifizer.com/api/username/'+username +'/json"></script>');
>>>>>>> fc7a4eedc6e56430377feb16c214954bf5f6ecd9
}

function load_username(e){
    e.preventDefault();
    var username = $('#username-input').val()
    if (username.length===0){username = "Audatar"}
    Audatar_audio(username)
    $("#username-play-button").show()
}

function listen_to_username(e){
    e.preventDefault();
    Sonifizer_Play()
}


$(function(){

    $('#username-play-button').on('click', listen_to_username)
    $('#username-load-button').on('click', load_username)
    $("#username-play-button").hide()

});

