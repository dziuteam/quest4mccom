var $Form = $('form'), $Movies = $('#movies');
$Movies.hide();
$Form.on('submit', function(movieFind){
    var searchUrl, searchMovie, responseData;
    movieFind.preventDefault();
searchMovie = $Form.find('input').val();
    searchUrl = 'https://www.omdbapi.com/?t=' + searchMovie + '&type=movie&tomatoes=true'
    $.ajax(searchUrl, {
        complete: function(p_oXHR, p_sStatus){
            responseData = $.parseJSON(p_oXHR.responseText);
            console.log(responseData);
            $Movies.find('.title').text(responseData.Title);
            $Movies.find('.plot').text(responseData.Plot);
            // $Movies.find('.poster').html('<img src="' + responseData.Poster + '"/>');
            if (responseData.Poster == "N/A") {
            $('.poster').hide();
            } else {
            $Movies.find('.poster').html('<img src="' + responseData.Poster + '"/>');
            }
            $Movies.find('.year').text(responseData.Year);
            $Movies.show();
        }
    });
});
