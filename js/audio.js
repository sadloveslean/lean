let audio = document.getElementById("audio");

function sitePlay(){
  audio.addEventListener(
    'ended',
    function(){
      window.open("kodel.html", "_self");
    }
  );
  audio.play();
}