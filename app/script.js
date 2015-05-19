
$('form').on( 'submit', function() {
  var request = {
     text: $( '#to-translate' ).val(),
     school: 'codefellows'
  };


$.post('translate', request, function(response) {
  var piglatinified = response.piglatin;
  $("#translated").text( response.piglatin );
});

  console.log(request);

  return false; // this keeps the page from refreshing

});
