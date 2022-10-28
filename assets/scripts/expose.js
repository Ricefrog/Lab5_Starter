// expose.js

window.addEventListener('DOMContentLoaded', init);

function test() {
	console.log("test");
}

function init() {
	console.log("is this thing on?");

	const selector = document.querySelector("#horn-select");
  const hornImage = document.querySelector("#hornImage");
  const hornAudio = document.querySelector("audio");
  const playButton = document.querySelector("button");
  const slider = document.querySelector("input");
  const volumeIcon = document.querySelector("#volumeIcon");
  const jsConfetti = new JSConfetti();

  selector.value = "select";
  selector.addEventListener("change", (e) => {
    const hornType = e.target.value;
    hornImage.setAttribute("src", `assets/images/${hornType}.svg`);
    hornAudio.setAttribute("src", `assets/audio/${hornType}.mp3`);
  });

  playButton.addEventListener("click", () => {
    hornAudio.play();
    if (selector.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });

  slider.addEventListener("input", (e) => {
    const volume = e.target.valueAsNumber;
    //console.log(volume);
    if (volume > 66) {
      volumeIcon.setAttribute("src", "assets/icons/volume-level-3.svg");
    } else if (volume > 33) {
      volumeIcon.setAttribute("src", "assets/icons/volume-level-2.svg");
    } else if (volume > 0) {
      volumeIcon.setAttribute("src", "assets/icons/volume-level-1.svg");
    } else {
      volumeIcon.setAttribute("src", "assets/icons/volume-level-0.svg");
    }
  });
}