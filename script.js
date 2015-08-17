$(document).ready(function() {
  var streams = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "medrybw", "RobotCaleb", "comster404", "brunofin", "thomasballinger", "noobs2ninjas", "beohoff", "TwinGalaxiesLive", "scottjund"];
  streams.forEach(function(streem) {
    $.getJSON("https://api.twitch.tv/kraken/streams/" + streem + "?client_id=6mfegb2yvyaz1tk6dnfym3a1sd7gfin&callback=?").success(
      function(channel) {
        $.getJSON("https://api.twitch.tv/kraken/users/" + streem + "?client_id=6mfegb2yvyaz1tk6dnfym3a1sd7gfin&callback=?").success(function(user) {
          var logo = user["logo"] !== null ? user["logo"] : "http://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png";
                    
          if (channel["stream"] == null) {

            $("<a href = \"http://www.twitch.tv/" + streem + "\" target=\"_blank\" class=\"list-group-item clearfix\"><span\"><img src=\"" + logo + "\" alt=\"" + streem + "\" height=\"42\" width=\"42\"></span> " + streem + "</a></div>").appendTo('#offline');

          } else {
            var status = channel["stream"]["channel"]["status"];
            $("<a href = \"http://www.twitch.tv/" + streem + "\" target=\"_blank\" class=\"list-group-item clearfix\"><span\"><img src=\"" + logo + "\" alt=\"" + streem + "\" height=\"42\" width=\"42\"></span> " + streem + "<br><span class =\"text-muted\">" + status + "</span></a></div>").appendTo('#online');

          }
        });
      });
  });
});