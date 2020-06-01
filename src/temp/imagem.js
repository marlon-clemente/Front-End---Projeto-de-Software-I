getFileBlob(previewUrl, blob =>{
  loginApp.storage().ref().child("profileImage/"+data.name+"/avatar.jpg")
  .put(blob).then(function(snapshot) {
    console.log("Imagem carregada com suceso.");
    snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log('Você pode encontrar o arquivo em: ',downloadURL);
      data.urlImg = downloadURL;
    })
  })
})