// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
	console.log("is this thing on?");
	const synth = window.speechSynthesis;
	const button = document.querySelector("button");
	const select = document.querySelector("select");
	const textBox = document.querySelector("textarea");
	const icon = document.querySelector("img");

	let voices = [];
	setTimeout(() => {
		voices = synth.getVoices();
		console.log(voices);
		for (let i = 0; i < voices.length; i++) {
			let voice = voices[i];
			let option = document.createElement("option");
			option.textContent = voice.lang;
			option.setAttribute("value", i);
			select.appendChild(option);
		}
	}, 1000); 


	button.addEventListener("click", () => {
		const utterThis = new SpeechSynthesisUtterance(textBox.value);
		utterThis.voice = voices[select.options[select.selectedIndex].value];
		synth.speak(utterThis);
		icon.setAttribute("src", "assets/images/smiling-open.png");

		utterThis.addEventListener('start', () => {
			const timer = ms => new Promise(res => setTimeout(res, ms));
			const iconPromise = new Promise(async (resolve, reject) => {
				//console.log(synth.speaking);
				while(synth.speaking) {
					//console.log("speaking");
					await timer(250);
				}
				//console.log(synth.speaking);
				//console.log("exiting 1");
				resolve();
				return 0;
			});
			iconPromise.then(() => {
				//setTimeout(() => icon.setAttribute("src", "assets/images/smiling.png"), 500); 
				icon.setAttribute("src", "assets/images/smiling.png"); 
				return 0;
			});
    	});

	});
}