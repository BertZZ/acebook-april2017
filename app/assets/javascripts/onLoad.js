function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  var avatar =  document.getElementById('user_avatar');
  var likeButton =  document.querySelectorAll('.like-button');
  if (typeof(avatar) !== 'undefined' && avatar !== null) {
    avatarOnLoad(avatar);
  }
  if (typeof(likeButton) !== 'undefined' && likeButton !== null) {
    likeOnLoad(likeButton);
  }
});
