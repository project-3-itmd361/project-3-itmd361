$.noConflict();
(function($) {
  $(document).ready(
    function() {
      $.post(
        'https://api.instagram.com/oauth/access_token',
        function(data) {
          curl -F 'client_id=CLIENT_ID' \
          -F 'client_secret=CLIENT_SECRET' \
          -F 'grant_type=authorization_code' \
          -F 'redirect_uri=AUTHORIZATION_REDIRECT_URI' \
          -F 'code=CODE' \
        }

    });
})(jQuery);
