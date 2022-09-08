let audio = document.getElementById("audio");

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