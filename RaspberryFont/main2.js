(function() {
    var eVideo = document.querySelector("video");
    var iVideoWidth = 400;
    var iVideoHeight = 400;

    var oVideoOptions = {
        mandatory: {
            maxWidth: iVideoWidth,
            maxHeight: iVideoHeight
        },
        optional: []
    };

    var oMediaOptions = { audio:false, video: oVideoOptions};

    if (!navigator.getUserMedia) {
        navigator.getUserMedia = navigator.getUserMedia ||
                                 navigator.webkitGetUserMedia ||
                                 navigator.mozGetUserMedia ||
                                 navigator.msGetUserMedia;
    }

    if (!navigator.getUserMedia){
        return alert('getUserMedia not supported in this browser.');
      }
    
    navigator.getUserMedia(oMediaOptions, success, function(e) {
        console.log(e);
      });

    function success(stream){
        eVideo.src = window.URL.createObjectURL(stream);
        setTimeout(function(){window.location.reload(true)}, 300000);
      }
})();