//justify-content
function setFlexboxClass(value) {
  console.log('justify-content value :: ' + value);
  var mainContainer = $('#flexDirectionClass');
  mainContainer.removeClass().addClass('container');
  // //adding selected class to container
  mainContainer.addClass(value);
}
