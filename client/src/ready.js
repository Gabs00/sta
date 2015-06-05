function ready(){
  $el.load('test.html', function(response, status){
    if(status !== 'error'){
      $el.find('script').remove();
    }
  });
  angular.bootstrap($('[data-js="webapp"]'), ['webapp']);
}
