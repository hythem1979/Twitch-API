$(document).ready(function() {
  var streams = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "medrybw", "RobotCaleb", "comster404", "brunofin", "thomasballinger", "noobs2ninjas", "beohoff", "TwinGalaxiesLive", "scottjund"];
  var onlinenum = 0;
  var offlinenum = 0;
  
  streams.forEach(function(streem) {
    $.getJSON("https://api.twitch.tv/kraken/streams/" + streem + "?client_id=6mfegb2yvyaz1tk6dnfym3a1sd7gfin&callback=?").success(
      function(channel) {
        $.getJSON("https://api.twitch.tv/kraken/users/" + streem + "?client_id=6mfegb2yvyaz1tk6dnfym3a1sd7gfin&callback=?").success(function(user) {
          var logo = user["logo"] !== null ? user["logo"] : "http://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png";
                    
          if (channel["stream"] == null) {
            $("<a href = \"http://www.twitch.tv/" + streem + "\" target=\"_blank\" class=\"list-group-item clearfix\"><span><img class = \"img-circle ico\" src=\"" + logo + "\" alt=\"" + streem + "\" height=\"42\" width=\"42\"></span><span> " + streem + "</span></a></div>").appendTo('#offline');

offlinenum += 1;
           $("#count-offline").text(offlinenum.toString());
          } else {
            var status = channel["stream"]["channel"]["status"];
            $("<a href = \"http://www.twitch.tv/" + streem + "\" target=\"_blank\" class=\"list-group-item clearfix\"><span class=\"pull-left\"><img class = \"img-circle ico\" src=\"" + logo + "\" alt=\"" + streem + "\" height=\"42\" width=\"42\"></span><span> " + streem + "</span><br><small class =\"text-warning\">" + status + "</small></a></div>").appendTo('#online');
onlinenum += 1;
           $("#count-online").text(onlinenum.toString());
          }
        });
      });
  });
});