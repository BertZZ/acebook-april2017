function ready(fn) {

  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  var avatar =  document.getElementById('user_avatar');
  checkExists('id', avatar, 'avatarOnLoad');
  var likes =  document.querySelectorAll('.like-button');
  checkExists('query', likes, 'likesOnLoad');
  var slides = document.querySelectorAll('.slide');
  checkExists('query', slides, 'slidesOnLoad');
});

function checkExists(element, object, name) {
  if (element === 'id' && typeof(object) !== 'undefined' && object !== null ||
                    element === 'query' && typeof(object[0]) !== 'undefined') {
    window[name](object);
  }
}
