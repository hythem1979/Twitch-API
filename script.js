$(document).ready(function() {
  var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "medrybw", "RobotCaleb", "comster404", "brunofin", "thomasballinger", "noobs2ninjas", "beohoff", "TwinGalaxiesLive", "scottjund"];
  users.forEach(function(User) {
 $.getJSON("https://api.twitch.tv/kraken/streams/" + User + "?client_id=6mfegb2yvyaz1tk6dnfym3a1sd7gfin&callback=?").success(
      function(channel) {
        if (channel["stream"] == null) {
          $("<a href = \"http://www.twitch.tv/" + User + "\" target=\"_blank\" class=\"list-group-item clearfix\"><span\"><img src=\"http://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-f1b681380c0b0380-300x300.png\" alt=\"Smiley face\" height=\"42\" width=\"42\"></span> " + User + "</a></div>").appendTo('#offline');

        } else {
          $("<a href = \"http://www.twitch.tv/" + User + "\" target=\"_blank\" class=\"list-group-item\">" + User + "</a></div>").appendTo('#online');

        }
      });
  });
});