$(function(){

  var defaults = {
    script: ['src/ready.js']
  };

  //loads script files from the server and injects them into head tag
  $.ajax({
    url:'custom-head.json',
    dataType:'json',
    success:function(response){
      var scripts = response.script.concat(defaults.script);

      var $tag;
      scripts.forEach(function(v){
        $tag = refresh($tag, v);
        $('head').append($tag);
      });

      //Call ready function when all scripts are loaded
      ready();
    }
  });

  function refresh($tag, v){
    if($tag){
      $tag.remove();
    }

    var $newTag = $('<script></script>');
    $newTag.attr('src', v);
    return $newTag;
  }
});
