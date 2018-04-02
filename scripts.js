var api, data, lat, lon, loc, condition, temp, iconUrl, iconClass, bgUrl, bgClass;

var far = $("#unit-f");
var cel = $("#unit-c");

function toggleTemp(){
    if(this.className("inactive")){
        $(".active").switchClass("active", "inactive");  $(this).switchClass("inactive", "active");

    }
};

$(document).ready(function() {

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(loadWeather);
        } else {
            $(".card-content").html("Geolocation is not supported");
        }
    }

    function loadWeather(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;

        api =
            "https://fcc-weather-api.glitch.me/api/current?lat=" +
            lat + "&lon=" + lon;

        $.ajax({
            url: api,
            success: function(data) {
                loc = data.name + ", " + data.sys.country;
                condition = data.weather[0].main;
                temp = Math.round(data.main.temp * 10) / 10;
                getCondition(condition);
                $("#header-location").text(loc);
                icon = '<img src="' + iconUrl + '">';
                $("#weather-icon").html(icon);
                $("#weather-temp").html(temp);
                $("html").css("background-image", "url(" + bgUrl + ")");
                console.log(data);
            }
        });

        function getCondition(condition) {
            switch (condition) {
                case "Rain":
                    iconUrl =
                        "https://drive.google.com/uc?id=1CZg5R7ZDVKfw_S2rSFh8MTEtHNmd3KXm";
                    bgUrl =
                        "https://drive.google.com/uc?id=1PUZTOF1rC0K4S0_--5mQ5Z3eMBdtWp6U";
                    break;
                case "Mist":
                case "Drizzle":
                    iconUrl =
                        "https://drive.google.com/uc?id=1k7FEWr-qXS-6jTk1VS_zaa7Tcw-9-kjO";
                    bgUrl =
                        "https://drive.google.com/uc?id=116agUaikdpROY6FuXzd74uoFoH_bQvAl";
                    break;
                case "Snow":
                    iconUrl =
                        "https://drive.google.com/uc?id=1HTE6OHCF9PRZ-DEia7X6hg4bAUvJ5e4d";
                    bgUrl =
                        "https://drive.google.com/uc?id=1ICc4WwyimQIyc0bkyzU8Ii_Q7Oxnj8Xo";
                    break;
                case "Clouds":
                    iconUrl =
                        "https://drive.google.com/uc?id=135UWBywy0jxAfkKNRi2kTXw-Kkn7S-ez";
                    bgUrl =
                        "https://drive.google.com/uc?id=1LBpLKd93sRBvAdB3XGNvKDsdSmigj3Xc";
                    break;
                case "Clear":
                    iconUrl =
                        "https://drive.google.com/uc?id=1J24HXw5HMazVN0gzDJu1I_7inn-ADWkZ";
                    bgUrl =
                        "https://drive.google.com/uc?id=1wIuCWxyIm65GmBtSusoxzv2gK90PHYfl";
                    break;
                case "clearNight":
                    iconUrl =
                        "https://drive.google.com/uc?id=1rawn9fRZBjrTVS-_fYrFbZ67hJ2n6n0i";
                    bgUrl =
                        "https://drive.google.com/uc?id=1y8qLeo_jRw1Igy61ckjhPZ6_3S6t_SEJ";
                    break;
                case "Thunderstorm":
                    iconUrl =
                        "https://drive.google.com/uc?id=1oAhpf9OS-p0FNAlMvBHIlrq3jn88lbj0";
                    bgUrl =
                        "https://drive.google.com/uc?id=1Hq8y0Zpqbg6e-i01lvO4IePLZ2dOrkPM";
                    break;
                case "Haze":
                    iconUrl =
                        "https://drive.google.com/uc?id=17u2_JUkRiq_wR4TvzxUsLxNsJVtua2zq";
                    bgUrl =
                        "https://drive.google.com/uc?id=117zPY3vSvdA8EawfNejnBSiFGcuhTFxV";
                    break;
                default:
                    iconUrl =
                        "https://drive.google.com/uc?id=1J24HXw5HMazVN0gzDJu1I_7inn-ADWkZ";
                    bgUrl =
                        "https://drive.google.com/uc?id=1wIuCWxyIm65GmBtSusoxzv2gK90PHYfl";
            }
        }
    }

    getLocation();
});
