document.addEventListener('DOMContentLoaded', () => {
    const darkButton = document.getElementById('darkButton');
    const lightButton = document.getElementById('lightButton');
    const body = document.body;

    // Manage saved background color from storage
    chrome.storage.sync.get(['backgroundColor'], (result) => {
        const backgroundColor = result.backgroundColor || '#333333';
        const textColor = backgroundColor === '#333333' ? '#ffffff' : '#000000';
        body.style.backgroundColor = backgroundColor;
        body.style.color = textColor;
    });

	// Set background color
    darkButton.addEventListener('click', function() {
        body.style.backgroundColor = '#333333';
        body.style.color = '#ffffff';
        chrome.storage.sync.set({ backgroundColor: '#333333' });
    });

    lightButton.addEventListener('click', function() {
        body.style.backgroundColor = 'white';
        body.style.color = '#000000';
        chrome.storage.sync.set({ backgroundColor: 'white' });
    });
});


// ITA and ENG language settings
var wikip = "https://en.wikipedia.org/wiki/";
var intro = "Write a short explanation about: ";
	
document.addEventListener('DOMContentLoaded', () => {
    const instruct = document.getElementById('instruct');
	const ma = document.getElementById('ma');
	const img = document.getElementById('img');
	const imgR = document.getElementById('imgR');
	const text1 = document.getElementById('text1');
	const text2 = document.getElementById('text2');
	const text3 = document.getElementById('text3');
	const text4 = document.getElementById('text4');
	const text5 = document.getElementById('text5');
    const choice = document.getElementById('choice');
	const engButton = document.getElementById('engButton');
    const itaButton = document.getElementById('itaButton');
	const allImg = document.getElementById('allImg');
			
    // Load the saved language from storage
    chrome.storage.sync.get(['language'], (result) => {
        const language = result.language || 'en';
        updateLanguage(language);
    });
    // Event listener for English button
    engButton.addEventListener('click', function() {
        updateLanguage('en');
        // Save the selected language to storage
        chrome.storage.sync.set({ language: 'en' });
    });
    // Event listener for Italian button
    itaButton.addEventListener('click', function() {
        updateLanguage('it');
        // Save the selected language to storage
        chrome.storage.sync.set({ language: 'it' });
    });

    // Function to update the language displayed in the popup
    function updateLanguage(language) {
        if (language == 'en') {
			instruct.innerText = 'INSTRUCTIONS';
			allAi.innerText = "ALL"
			ma.innerText = 'M A P S';
			img.innerText = 'I M A G E S';
			imgR.innerText = 'I M A G E S (reverse search)';
			text1.innerText = 'Select text in the webpage OR';
			text2.innerText = 'copy text from an external document OR';
			text3.innerText = 'write text below and click OK';
			choice.innerText = 'Choose below where to search for the text';
			text4.innerText = 'Copy the image web path (right click)';
			text5.innerText = 'Choose below where to search for the image';
			allImg.innerText = "ALL"
			allImgR.innerText = "ALL"
			return wikip = "https://en.wikipedia.org/wiki/", intro = "Write a short explanation about: ";
        } else if (language == 'it') {
			instruct.innerText = "ISTRUZIONI";
			ma.innerText = 'M A P P E';
			allAi.innerText = "TUTTI"
			img.innerText = 'I M M A G I N I';
			imgR.innerText = 'I M M A G I N I (ricerca inversa)';
			text1.innerText = 'Seleziona il testo nella pagina web OPPURE';
			text2.innerText = 'copia il testo dal documento esterno OPPURE';
			text3.innerText = 'scrivi il testo qui sotto e premi OK';
			choice.innerText = 'Scegli sotto dove cercare il testo';
			text4.innerText = "Copia il percorso web dell'immagine";
			text5.innerText = "Scegli sotto dove cercare l'immagine";
			allImg.innerText = "TUTTI"
			allImgR.innerText = "TUTTI"
			return wikip = "https://it.wikipedia.org/wiki/", intro = "Scrivi una breve spiegazione riguardo: ";
			}
    }
});


// Show-hide instructions
document.getElementById("toggleSwitch").addEventListener("change", function() {
    var infos1 = document.getElementById("infos1");
	var infos2 = document.getElementById("infos2");
    if (this.checked) {
        infos1.classList.remove("hidden");
		infos2.classList.remove("hidden");
    } else {
        infos1.classList.add("hidden");
		infos2.classList.add("hidden");
    }
});


// From text input field to clipboard
document.getElementById('copyButton').addEventListener('click', function() {
    const textInput = document.getElementById('textInput');
    textInput.select();
    textInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textInput.value)
});


// WikiSearch
document.getElementById('Wiki').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
            let topic;
            if (response && response.selectedText) {
                topic = response.selectedText.replace(/ /g, "_");
				let wAddress = wikip + topic;
				window.open(wAddress, "_blank");
            } else {
                navigator.clipboard.readText().then(function (text) {
                    topic = text.replace(/ /g, "_");
                    let wAddress = wikip + topic;
                    window.open(wAddress, "_blank");
                }).catch(function (err) {
                    alert("Failed to read clipboard contents: " + err);
                });
                return;
            }
        });
    });
});


// TubeSearch
document.getElementById('Tube').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
            let text;
            if (response && response.selectedText) {
                text = response.selectedText.replace(/ /g, "+");
	            let yTube = "https://www.youtube.com/results?search_query=" + text;
				window.open(yTube, "_blank");
            } else {
                navigator.clipboard.readText().then(function (text) {
                    text = text.replace(/ /g, "+");
                    let yTube = "https://www.youtube.com/results?search_query=" + text;
                    window.open(yTube, "_blank");
                }).catch(function (err) {
                    alert("Failed to read clipboard contents: " + err);
                });
                return;
            }
        });
    });
});


// ArchiveSearch
document.getElementById('archive').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
            let text;
            if (response && response.selectedText) {
                text = response.selectedText.replace(/ /g, "+");
	            let arch = "https://archive.org/search?query=" + text;
				window.open(arch, "_blank");
            } else {
                navigator.clipboard.readText().then(function (text) {
                    text = text.replace(/ /g, "+");
                    let arch = "https://archive.org/search?query=" + text;
                    window.open(arch, "_blank");
                }).catch(function (err) {
                    alert("Failed to read clipboard contents: " + err);
                });
                return;
            }
        });
    });
});


// AISearch
const phAi = "https://www.phind.com/search?q=";
const yAi = "https://you.com/search?q=";
const fAi = "https://felo.ai/search?q=";

document.getElementById('fAi').addEventListener('click', function() {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
			let text;
			if (response && response.selectedText) {
				text = response.selectedText.replace(/ /g, "+");
				let fAddress = fAi + intro + text;
				window.open(fAddress, "_blank");
			} else {
				navigator.clipboard.readText().then(function (text) {
					text = text.replace(/ /g, "+");
					let fAddress = fAi + intro + text;
					window.open(fAddress, "_blank");
				});
				return;
			}
		});
	});
});

document.getElementById('pAi').addEventListener('click', function() {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
			let text;
			if (response && response.selectedText) {
				text = response.selectedText.replace(/ /g, "+");
				let phAddress = phAi + intro + text;
				window.open(phAddress, "_blank");
			} else {
				navigator.clipboard.readText().then(function (text) {
					text = text.replace(/ /g, "+");
					let phAddress = phAi + intro + text;
					window.open(phAddress, "_blank");
				});
				return;
			}
		});
	});
});

document.getElementById('yAi').addEventListener('click', function() {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
			let text;
			if (response && response.selectedText) {
				text = response.selectedText.replace(/ /g, "+");
				let yAddress = yAi + intro + text + "&fromSearchBar=true&tbm=youchat&chatMode=default";
				window.open(yAddress, "_blank");
			} else {
				navigator.clipboard.readText().then(function (text) {
					text = text.replace(/ /g, "+");
					let yAddress = yAi + intro + text + "&fromSearchBar=true&tbm=youchat&chatMode=default";
					window.open(yAddress, "_blank");
				});
				return;
			}
		});
	});
});

document.getElementById('allAi').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
            let text;
            if (response && response.selectedText) {
                text = response.selectedText.replace(/ /g, "+");
				let phAddress = phAi + intro + text;
				let yAddress = yAi + intro + text + "&fromSearchBar=true&tbm=youchat&chatMode=default";
				let fAddress = fAi + intro + text;
				chrome.tabs.create({ url: phAddress});
				chrome.tabs.create({ url: yAddress});
				chrome.tabs.create({ url: fAddress});
            } else {
                navigator.clipboard.readText().then(function (text) {
                    text = text.replace(/ /g, "+");
					let phAddress = phAi + intro + text;
					let yAddress = yAi + intro + text + "&fromSearchBar=true&tbm=youchat&chatMode=default";
					let fAddress = fAi + intro + text;
					chrome.tabs.create({ url: phAddress});
					chrome.tabs.create({ url: yAddress});
					chrome.tabs.create({ url: fAddress});
				});
                return;
            }
        });
    });
});


// Maps
document.getElementById('ddgM').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
			let place;
            if (response && response.selectedText) {
                place = response.selectedText.replace(/ /g, "+");
				let ddgAddress = "https://duckduckgo.com/?hps=1&q=" + place + "&iaxm=maps";
				window.open(ddgAddress, "_blank");
            } else {
                navigator.clipboard.readText().then(function (text) {
					place = text.replace(/ /g, "+");
					let ddgAddress = "https://duckduckgo.com/?hps=1&q=" + place + "&iaxm=maps";
					window.open(ddgAddress, "_blank");
				});
				return;
			}
		});
	});
});

document.getElementById('gM').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
			let place;
            if (response && response.selectedText) {
                place = response.selectedText.replace(/ /g, "+");
				let gmAddress = "https://www.google.com/maps/place/" + place;
				window.open(gmAddress, "_blank");
            } else {
                navigator.clipboard.readText().then(function (text) {
					place = text.replace(/ /g, "+");
					let gmAddress = "https://www.google.com/maps/place/" + place;
					window.open(gmAddress, "_blank");
				});
				return;
			}
		});
	});
});

document.getElementById('osM').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
			let place;
            if (response && response.selectedText) {
                place = response.selectedText.replace(/ /g, "+");
				let osAddress = "https://www.openstreetmap.org/search?query=" + place;
				window.open(osAddress, "_blank");
            } else {
                navigator.clipboard.readText().then(function (text) {
					place = text.replace(/ /g, "+");
					let osAddress = "https://www.openstreetmap.org/search?query=" + place;
					window.open(osAddress, "_blank");
				});
				return;
			}
		});
	});
});


// Images
document.getElementById('bImg').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
			let imgText;
            if (response && response.selectedText) {
                imgText = response.selectedText.replace(/ /g, "+");
				let bImgAddress = "https://www.bing.com/images/search?q=" + imgText;
				window.open(bImgAddress, "_blank");
            } else {
                navigator.clipboard.readText().then(function (text) {
					imgText= text.replace(/ /g, "+");
					let bImgAddress = "https://www.bing.com/images/search?q=" + imgText;
					window.open(bImgAddress, "_blank");
				});
				return;
			}
		});
	});
});

document.getElementById('gImg').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
			let imgText;
            if (response && response.selectedText) {
                imgText = response.selectedText.replace(/ /g, "+");
				let gImgAddress = "https://www.google.com/search?q=" + imgText + "&tbm=isch";
				window.open(gImgAddress, "_blank");
            } else {
                navigator.clipboard.readText().then(function (text) {
					imgText= text.replace(/ /g, "+");
					let gImgAddress = "https://www.google.com/search?q=" + imgText + "&tbm=isch";
					window.open(gImgAddress, "_blank");
				});
				return;
			}
		});
	});
});

document.getElementById('yImg').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
			let imgText;
            if (response && response.selectedText) {
                imgText = response.selectedText.replace(/ /g, "+");
				let yImgAddress = "https://yandex.com/images/search?text=" + imgText;
				window.open(yImgAddress, "_blank");
            } else {
                navigator.clipboard.readText().then(function (text) {
					imgText= text.replace(/ /g, "+");
					let yImgAddress = "https://yandex.com/images/search?text=" + imgText;
					window.open(yImgAddress, "_blank");
				});
				return;
			}
		});
	});
});

document.getElementById('allImg').addEventListener('click', function() {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
			let imgText;
			if (response && response.selectedText) {
				imgText = response.selectedText.replace(/ /g, "+");
				let yImgAddress = "https://yandex.com/images/search?text=" + imgText;
				let gImgAddress = "https://www.google.com/search?q=" + imgText + "&tbm=isch";
				let bImgAddress = "https://www.bing.com/images/search?q=" + imgText;
				chrome.tabs.create({ url: bImgAddress});
				chrome.tabs.create({ url: gImgAddress});
				chrome.tabs.create({ url: yImgAddress});
			} else {
				navigator.clipboard.readText().then(function (text) {
					imgText= text.replace(/ /g, "+");
					let yImgAddress = "https://yandex.com/images/search?text=" + imgText;
					let gImgAddress = "https://www.google.com/search?q=" + imgText + "&tbm=isch";
					let bImgAddress = "https://www.bing.com/images/search?q=" + imgText;
					chrome.tabs.create({ url: bImgAddress});
					chrome.tabs.create({ url: gImgAddress});
					chrome.tabs.create({ url: yImgAddress});
				});
				return;
			}
		});
	});
});


// Reverse images
document.getElementById('bImgR').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        navigator.clipboard.readText().then(function (text) {
			let bSearch = "https://www.bing.com/images/searchbyimage?FORM=IRSBIQ&cbir=sbi&imgurl=" + text;
			window.open(bSearch, "_blank");
		});
	});
});

document.getElementById('gImgR').addEventListener('click', function() {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		navigator.clipboard.readText().then(function (text) {
			let gSearch = "https://lens.google.com/uploadbyurl?url=" + text ;
			window.open(gSearch, "_blank");
		});
	});
});

document.getElementById('tImgR').addEventListener('click', function() {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		navigator.clipboard.readText().then(function (text) {
			let tSearch = "https://tineye.com/search/?url=" + text + "&rpt=imageview";
			window.open(tSearch, "_blank");
		});
	});
});

document.getElementById('yImgR').addEventListener('click', function() {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		navigator.clipboard.readText().then(function (text) {
			let ySearch = "https://yandex.com/images/search?source=collections&&url=" + text + "&rpt=imageview";
			window.open(ySearch, "_blank");
		});
	});
});

document.getElementById('allImgR').addEventListener('click', function() {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		navigator.clipboard.readText().then(function (text) {
			let bSearch = "https://www.bing.com/images/searchbyimage?FORM=IRSBIQ&cbir=sbi&imgurl=" + text;
			chrome.tabs.create({ url: bSearch});
			let gSearch = "https://lens.google.com/uploadbyurl?url=" + text;
			chrome.tabs.create({ url: gSearch});
			let tSearch = "https://tineye.com/search/?url=" + text + "&rpt=imageview";
			chrome.tabs.create({ url: tSearch});
			let ySearch = "https://yandex.com/images/search?source=collections&&url=" + text + "&rpt=imageview";
			chrome.tabs.create({ url: ySearch});
		});
	});
});