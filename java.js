document.addEventListener("DOMContentLoaded", () => {  //makes so all code is loaded before its run.
  const x = document.getElementById("vid");

  window.skift = function() { //skifter i mellem at videoen og "forsiden" er viste.
    document.getElementById("start").style.display = "none";
    const container = document.getElementById("thevid");
    container.style.display = "flex"; //gør så videoen står i midten

    x.muted = false; //makes sure that audio is not muted and plays
    x.volume = 1.0;

    //tjek for problems with sound and video
    x.play().then(() => {
      console.log("Video playing with sound.");
    }).catch((err) => {
      console.error("Playback failed:", err);
    });
  };

  //pause and play funktion
  window.pausevid = function() {
    if (x.paused) {
      x.play();
    } else {
      x.pause();
    }
  };
});