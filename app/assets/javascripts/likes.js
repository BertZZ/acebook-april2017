function likeOnLoad(likeButton) {
  likeButton.forEach(function(element) {
    element.addEventListener('click', function(evt) {
      var postId = evt.target.dataset.postId;
      var countElement = document.getElementById("count_" + postId);
      countElement.innerText = parseInt(countElement.innerText) + 1;
    });
  });
}
