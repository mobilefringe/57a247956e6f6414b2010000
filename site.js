$( document ).ready(function() {
    var current_year = moment().year();
    console.log(current_year)
    $("#current_year").text(current_year);
});


var site_json = {
                    "name" : "Alameda Landing",
                    "default_image" : "//codecloud.cdn.speedyrails.net/sites/57f2b41c6e6f645d03af0000/image/jpeg/undefined/al_500x500_logo.jpg",
                    "time_zone" : "T08:00:00Z",
                    "social_feed" : "//alamedacrossing.mallmaverick.com/api/v2/alamedacrossing/social.json"
                }