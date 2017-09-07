$(document).ready(function(){
  'use strict';
  $('.query').on('keyup', search);
  $('.search').submit(search);
  function search() {
    var query = $('.query').val();
    var url = 'http://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search='+query;
    $.getJSON(url, function(data){
      $('ul').empty();
      console.log(data);
      for (var i=0; i < data[3].length; i++) {
        if (data[2][i] !== "") {
          $('ul').append('<a href="'+data[3][i]+'"><li>'+data[2][i]+'</li></a>');
        }
      }  
    });
    return false;
  }
});