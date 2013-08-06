
function Audatar_audio(username){ 
    $('body').append('<script type="application/javascript" src="http://www.Sonifizer.com/api/username/'+username +'/json"></script>');
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

