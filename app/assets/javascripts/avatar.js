function avatarOnLoad(avatar) {
  avatar.onchange = function () {
    document.getElementById("upload_file").value = this.files[0].name;
  };
}
