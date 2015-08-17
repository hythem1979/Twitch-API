$(document).ready(function() {
  var streams = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "medrybw", "RobotCaleb", "comster404", "brunofin", "thomasballinger", "noobs2ninjas", "beohoff"];
  var onlinenum = 0;
  var offlinenum = 0;
  var twitchapi = "https://api.twitch.tv/kraken";
  var clientid = "?client_id=6mfegb2yvyaz1tk6dnfym3a1sd7gfin&callback=?";
  var deflogo = "http://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png";

  streams.forEach(function(streem) {
    $.getJSON(twitchapi + "/streams/" + streem + clientid).success(
      function(channel) {
        $.getJSON(twitchapi + "/users/" + streem + clientid).success(function(user) {
          var logo = user["logo"] !== null ? user["logo"] : deflogo;
          var name = user["display_name"];

          if (channel["stream"] == null) {
            $("<a href = \"http://www.twitch.tv/" + streem + "\" target=\"_blank\" class=\"list-group-item clearfix\"><span><img class = \"img-circle ico\" src=\"" + logo + "\" alt=\"" + streem + "\" height=\"42\" width=\"42\"></span><span>" + name + "</span></a></div>").appendTo('#offline');

            offlinenum += 1;
            $("#count-offline").text(offlinenum.toString());
          } else {
            var status = channel["stream"]["channel"]["status"];
            $("<a href = \"http://www.twitch.tv/" + streem + "\" target=\"_blank\" class=\"list-group-item clearfix\"><span class = \"pull-left\"><img class = \"img-circle ico\" src=\"" + logo + "\" alt=\"" + streem + "\" height=\"42\" width=\"42\"></span><span> " + name + "</span><br><small class =\"text-warning\">" + status + "</small></a></div>").appendTo('#online');
            onlinenum += 1;
            $("#count-online").text(onlinenum.toString());
          }
        });
      });
  });

  //http://stackoverflow.com/a/12913428/4902020

  (function($) {

    $('.filterinput').keyup(function() {
      var a = $(this).val();
      if (a.length > 0) {
        // this finds all links in the list that contain the input,
        // and hide the ones not containing the input while showing the ones that do
        var containing = $('#online a').filter(function() {
          var regex = new RegExp(a, 'ig');
          return regex.test($('span', this).text());
        }).slideDown();
        $('#online a').not(containing).slideUp();

        var containing = $('#offline a').filter(function() {
          var regex = new RegExp(a, 'ig');
          return regex.test($('span', this).text());
        }).slideDown();
        $('#offline a').not(containing).slideUp();

        $("#count-offline").slideUp();
        $("#count-online").slideUp();
      } else {
        $('#online a').slideDown();
        $('#offline a').slideDown();
        $("#count-offline").slideDown();
        $("#count-online").slideDown();
      }
      return false;
    })

  }(jQuery));
});