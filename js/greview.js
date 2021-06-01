<script>
jQuery(document).ready(function($) {
  if ($("#google-reviews").length == 0) {
    return
  }
  // Find a placeID via https://developers.google.com/places/place-id
  $("#google-reviews").googlePlaces({
    placeId: 'ChIJFy7EoT7_1y0RMGrdNIe1uMs',
    // the following params are optional (default values)
    header: "<h3>Google Reviews</h3>", // html/text over Reviews
    footer: '', // html/text under Reviews block
    maxRows: 5, // max 5 rows of reviews to be displayed
    minRating: 4, // minimum rating of reviews to be displayed
    months: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    textBreakLength: "90", // length before a review box is set to max width
    shortenNames: true, // example: "Max Mustermann" -> "Max M."",
    moreReviewsButtonUrl: '', // url to Google Place reviews popup
    moreReviewsButtonLabel: 'Show More Reviews',
    writeReviewButtonUrl: '', // url to Google Place write review popup
    writeReviewButtonLabel: 'Write New Review',
    showProfilePicture: true
  });
});
</script>