let audio = document.getElementById("audio");
audio.playbackRate = 1.15; // Makes audio faster.

function sitePlay(lang){
  audio.addEventListener(
    'ended',
    function(){
      if(lang == "es")
        window.open("kodel.html", "_self");
      else
        window.open("makatussin.html", "_self");
    }
  );
  audio.play();
}