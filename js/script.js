var $Form = $('form'), $Movies = $('#movies');
$Movies.hide();
$Form.on('submit', function(movieFind){
    var sUrl, sMovie, oData;
    movieFind.preventDefault();
sMovie = $Form.find('input').val();
    sUrl = 'https://www.omdbapi.com/?t=' + sMovie + '&type=movie&tomatoes=true'
    $.ajax(sUrl, {
        complete: function(p_oXHR, p_sStatus){
            oData = $.parseJSON(p_oXHR.responseText);
            console.log(oData);
            $Movies.find('.title').text(oData.Title);
            $Movies.find('.plot').text(oData.Plot);
            $Movies.find('.poster').html('<img src="' + oData.Poster + '"/>');
            $Movies.find('.year').text(oData.Year);
            $Movies.show();
        }
    });
});
