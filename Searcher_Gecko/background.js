// Create context menu on installation
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "Searcher",
        title: "Searcher",
        contexts: ["all"]
    });

    // Create INFO submenus
    chrome.contextMenus.create({
        id: "Info",
        title: "Info",
        parentId: "Searcher",
        contexts: ["all"]
    });
	
	chrome.contextMenus.create({
        id: "WikiEN",
        title: "Wikipedia (EN)",
        parentId: "Info",
        contexts: ["all"]
    });

	chrome.contextMenus.create({
        id: "WikiIT",
        title: "Wikipedia (IT)",
        parentId: "Info",
        contexts: ["all"]
    });
	
    chrome.contextMenus.create({
        id: "YouTube",
        title: "YouTube",
        parentId: "Info",
        contexts: ["all"]
    });

    chrome.contextMenus.create({
        id: "arch",
        title: "archive.org",
        parentId: "Info",
        contexts: ["all"]
    });
	
	// Create AI EN submenu
	chrome.contextMenus.create({
        id: "AI-en",
        title: "AI chatbot (EN)",
        parentId: "Searcher",
        contexts: ["all"]
    });

	chrome.contextMenus.create({
        id: "fAiEn",
        title: "Felo (EN)",
        parentId: "AI-en",
        contexts: ["all"]
    });
	
	chrome.contextMenus.create({
        id: "pAiEn",
        title: "Phind (EN)",
        parentId: "AI-en",
        contexts: ["all"]
    });
	
		chrome.contextMenus.create({
        id: "yAiEn",
        title: "You (EN)",
        parentId: "AI-en",
        contexts: ["all"]
    });
	
		chrome.contextMenus.create({
        id: "allAiEn",
        title: "All (EN)",
        parentId: "AI-en",
        contexts: ["all"]
    });
	
	// Create AI IT submenu
	chrome.contextMenus.create({
        id: "AI-it",
        title: "AI chatbot (IT)",
        parentId: "Searcher",
        contexts: ["all"]
    });

	chrome.contextMenus.create({
        id: "fAiIt",
        title: "Felo (IT)",
        parentId: "AI-it",
        contexts: ["all"]
    });
	
	chrome.contextMenus.create({
        id: "pAiIt",
        title: "Phind (IT)",
        parentId: "AI-it",
        contexts: ["all"]
    });
	
		chrome.contextMenus.create({
        id: "yAiIt",
        title: "You (IT)",
        parentId: "AI-it",
        contexts: ["all"]
    });
	
	chrome.contextMenus.create({
        id: "allAiIt",
        title: "Tutti (IT)",
        parentId: "AI-it",
        contexts: ["all"]
    });
	
    // Create MAPS submenu
	chrome.contextMenus.create({
        id: "Maps",
        title: "Maps",
        parentId: "Searcher",
        contexts: ["all"]
    });
	
    chrome.contextMenus.create({
        id: "DDGmaps",
        title: "DuckDuckGo maps",
        parentId: "Maps",
        contexts: ["all"]
    });
	
	chrome.contextMenus.create({
        id: "GMaps",
        title: "Google Maps",
        parentId: "Maps",
        contexts: ["all"]
    });

    chrome.contextMenus.create({
        id: "OSMap",
        title: "OpenStreetMap",
        parentId: "Maps",
        contexts: ["all"]
    });

	// Create IMG submenu
	chrome.contextMenus.create({
        id: "Img",
        title: "Images",
        parentId: "Searcher",
        contexts: ["all"]
    });

	chrome.contextMenus.create({
        id: "bImg",
        title: "Bing Images",
        parentId: "Img",
        contexts: ["all"]
    });
	
    chrome.contextMenus.create({
        id: "gImg",
        title: "Google Images",
        parentId: "Img",
        contexts: ["all"]
    });
	
	chrome.contextMenus.create({
        id: "yImg",
        title: "Yandex Images",
        parentId: "Img",
        contexts: ["all"]
    });

	chrome.contextMenus.create({
        id: "allImg",
        title: "All",
        parentId: "Img",
        contexts: ["all"]
    });

    // Create IMG reverse submenu
	chrome.contextMenus.create({
        id: "ImgR",
        title: "Images (reverse search)",
        parentId: "Searcher",
        contexts: ["all"]
    });
	
	chrome.contextMenus.create({
        id: "bImgR",
        title: "Bing reverse",
        parentId: "ImgR",
        contexts: ["all"]
    });

    chrome.contextMenus.create({
        id: "gImgR",
        title: "Google reverse",
        parentId: "ImgR",
        contexts: ["all"]
    });
	
    chrome.contextMenus.create({
        id: "tImgR",
        title: "TinEye",
        parentId: "ImgR",
        contexts: ["all"]
    });

	chrome.contextMenus.create({
        id: "yImgR",
        title: "Yandex reverse",
        parentId: "ImgR",
        contexts: ["all"]
    });
	
	chrome.contextMenus.create({
        id: "allImgR",
        title: "All reverse",
        parentId: "ImgR",
        contexts: ["all"]
    });

});


// Submenus actions
chrome.contextMenus.onClicked.addListener((info, tab) => {
	// Wiki
    if (info.menuItemId === "WikiEN") {
		const wikip = "https://en.wikipedia.org/wiki/";
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
                let topic;
                if (response && response.selectedText) {
                    topic = response.selectedText.replace(/ /g, "_");
					let wAddress = wikip + topic;
					chrome.tabs.create({ url: wAddress });
                } else {
                    chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
                        topic = response.text.replace(/ /g, "_");
                        let wAddress = wikip + topic;
                        chrome.tabs.create({ url: wAddress });
                    }).catch(function (err) {
                        alert("Failed to read clipboard contents: " + err);
                    });
                    return;
                }
            });
        });
    } else if (info.menuItemId === "WikiIT") {
		const wikip = "https://it.wikipedia.org/wiki/";
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
                let topic;
                if (response && response.selectedText) {
                    topic = response.selectedText.replace(/ /g, "_");
					let wAddress = wikip + topic;
					chrome.tabs.create({ url: wAddress });
                } else {
                    chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
                        topic = response.text.replace(/ /g, "_");
                        let wAddress = wikip + topic;
                        chrome.tabs.create({ url: wAddress });
                    }).catch(function (err) {
                        alert("Failed to read clipboard contents: " + err);
                    });
                    return;
                }
            });
        });
	} else if (info.menuItemId === "YouTube") {
	// YouTube
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
				let searchText;
				if (response && response.selectedText) {
					searchText = response.selectedText.replace(/ /g, "+");
					let yTube = "https://www.youtube.com/results?search_query=" + searchText;
					chrome.tabs.create({ url: yTube });
				} else {
					chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
						searchText = response.text.replace(/ /g, "+");
						let yTube = "https://www.youtube.com/results?search_query=" + searchText;
						chrome.tabs.create({ url: yTube });
					}).catch(function (err) {
						alert("Failed to read clipboard contents: " + err);
					});
					return;
				}
			});
		});
	} else if (info.menuItemId === "arch") {
	// archive.org
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
				let searchText;
				if (response && response.selectedText) {
					searchText = response.selectedText.replace(/ /g, "+");
					let arch = "https://archive.org/search?query=" + searchText;
					chrome.tabs.create({ url: arch });
				} else {
					chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
						searchText = response.text.replace(/ /g, "+");
						let arch = "https://archive.org/search?query=" + searchText;
						chrome.tabs.create({ url: arch });
					}).catch(function (err) {
						alert("Failed to read clipboard contents: " + err);
					});
					return;
				}
			});
		});
	} else if (info.menuItemId === "fAiEn") {
	// Felo Ai en
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
				intro = "Write a short explanation about: ";
				let text;
				if (response && response.selectedText) {
					text = response.selectedText.replace(/ /g, "+");
					let fAddress = "https://felo.ai/search?q=" + intro + text;
					chrome.tabs.create({ url: fAddress });
				} else {
					chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
						text = response.text.replace(/ /g, "+");
						let fAddress = "https://felo.ai/search?q=" + intro + text;
						chrome.tabs.create({ url: fAddress });
					});
					return;
				}
			});
		});
	} else if (info.menuItemId === "pAiEn") {
	// Phind Ai en
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
				intro = "Write a short explanation about: ";
				let text;
				if (response && response.selectedText) {
					text = response.selectedText.replace(/ /g, "+");
					let phAddress = "https://www.phind.com/search?q=" + intro + text;
					chrome.tabs.create({ url: phAddress });
				} else {
					chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
						text = response.text.replace(/ /g, "+");
						let phAddress = "https://www.phind.com/search?q=" + intro + text;
						chrome.tabs.create({ url: phAddress });
					});
					return;
				}
			});
		});
	} else if (info.menuItemId === "yAiEn") {
	// You Ai en
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
				intro = "Write a short explanation about: ";
				let text;
				if (response && response.selectedText) {
					text = response.selectedText.replace(/ /g, "+");
					let yAddress = "https://you.com/search?q=" + intro + text + "&fromSearchBar=true&tbm=youchat&chatMode=default";
					chrome.tabs.create({ url: yAddress });
				} else {
					chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
						text = response.text.replace(/ /g, "+");
						let yAddress = "https://you.com/search?q=" + intro + text + "&fromSearchBar=true&tbm=youchat&chatMode=default";
						chrome.tabs.create({ url: yAddress });
					});
					return;
				}
			});
		});
	} else if (info.menuItemId === "allAiEn") {
	// All Ai en
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
				intro = "Write a short explanation about: ";
				let text;
				if (response && response.selectedText) {
					text = response.selectedText.replace(/ /g, "+");
					let phAddress = "https://www.phind.com/search?q=" + intro + text;
					let yAddress = "https://you.com/search?q=" + intro + text + "&fromSearchBar=true&tbm=youchat&chatMode=default";
					let fAddress = "https://felo.ai/search?q=" + intro + text;
					chrome.tabs.create({ url: phAddress });
					chrome.tabs.create({ url: yAddress });
					chrome.tabs.create({ url: fAddress });
				} else {
					chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
						text = response.text.replace(/ /g, "+");
						let phAddress = "https://www.phind.com/search?q=" + intro + text;
						let yAddress = "https://you.com/search?q=" + intro + text + "&fromSearchBar=true&tbm=youchat&chatMode=default";
						let fAddress = "https://felo.ai/search?q=" + intro + text;
						chrome.tabs.create({ url: phAddress });
						chrome.tabs.create({ url: yAddress });
						chrome.tabs.create({ url: fAddress });
					});
					return;
				}
			});
		});
	} else if (info.menuItemId === "fAiIt") {
	// Felo Ai it
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
				intro = "Scrivi una breve spiegazione riguardo: ";
				let text;
				if (response && response.selectedText) {
					text = response.selectedText.replace(/ /g, "+");
					let fAddress = "https://felo.ai/search?q=" + intro + text;
					chrome.tabs.create({ url: fAddress });
				} else {
					chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
						text = response.text.replace(/ /g, "+");
						let fAddress = "https://felo.ai/search?q=" + intro + text;
						chrome.tabs.create({ url: fAddress });
					});
					return;
				}
			});
		});
	} else if (info.menuItemId === "pAiIt") {
	// Phind Ai it
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
				intro = "Scrivi una breve spiegazione riguardo: ";
				let text;
				if (response && response.selectedText) {
					text = response.selectedText.replace(/ /g, "+");
					let phAddress = "https://www.phind.com/search?q=" + intro + text;
					chrome.tabs.create({ url: phAddress });
				} else {
					chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
						text = response.text.replace(/ /g, "+");
						let phAddress = "https://www.phind.com/search?q=" + intro + text;
						chrome.tabs.create({ url: phAddress });
					});
					return;
				}
			});
		});
	} else if (info.menuItemId === "yAiIt") {
	// You Ai it
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
				intro = "Scrivi una breve spiegazione riguardo: ";
				let text;
				if (response && response.selectedText) {
					text = response.selectedText.replace(/ /g, "+");
					let yAddress = "https://you.com/search?q=" + intro + text + "&fromSearchBar=true&tbm=youchat&chatMode=default";
					chrome.tabs.create({ url: yAddress });
				} else {
					chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
						text = response.text.replace(/ /g, "+");
						let yAddress = "https://you.com/search?q=" + intro + text + "&fromSearchBar=true&tbm=youchat&chatMode=default";
						chrome.tabs.create({ url: yAddress });
					});
					return;
				}
			});
		});
	} else if (info.menuItemId === "allAiIt") {
	// All AI it
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
				intro = "Scrivi una breve spiegazione riguardo: "
				let text;
				if (response && response.selectedText) {
					text = response.selectedText.replace(/ /g, "+");
					let phAddress = "https://www.phind.com/search?q=" + intro + text;
					let yAddress = "https://you.com/search?q=" + intro + text + "&fromSearchBar=true&tbm=youchat&chatMode=default";
					let fAddress = "https://felo.ai/search?q=" + intro + text;
					chrome.tabs.create({ url: phAddress });
					chrome.tabs.create({ url: yAddress });
					chrome.tabs.create({ url: fAddress });
				} else {
					chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
						text = response.text.replace(/ /g, "+");
						let phAddress = "https://www.phind.com/search?q=" + intro + text;
						let yAddress = "https://you.com/search?q=" + intro + text + "&fromSearchBar=true&tbm=youchat&chatMode=default";
						let fAddress = "https://felo.ai/search?q=" + intro + text;
						chrome.tabs.create({ url: phAddress });
						chrome.tabs.create({ url: yAddress });
						chrome.tabs.create({ url: fAddress });
					});
					return;
				}
			});
		});
	} else if (info.menuItemId === "DDGmaps") {
	// DDG maps
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
				let place;
				if (response && response.selectedText) {
					place = response.selectedText.replace(/ /g, "+");
					let ddgAddress = "https://duckduckgo.com/?hps=1&q=" + place + "&iaxm=maps";
					chrome.tabs.create({ url: ddgAddress});
				} else {
					chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
						place = response.text.replace(/ /g, "+");
						let ddgAddress = "https://duckduckgo.com/?hps=1&q=" + place + "&iaxm=maps";
						chrome.tabs.create({ url: ddgAddress});
					});
					return;
				}
			});
		});		
	} else if (info.menuItemId === "GMaps") {
	// Google maps
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
				let place;
				if (response && response.selectedText) {
					place = response.selectedText.replace(/ /g, "+");
					let gmAddress = "https://www.google.com/maps/place/" + place;
					chrome.tabs.create({ url: gmAddress});
				} else {
					chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
						place = response.text.replace(/ /g, "+");
						let gmAddress = "https://www.google.com/maps/place/" + place;
						chrome.tabs.create({ url: gmAddress});
					});
					return;
				}
			});
		});		
	} else if (info.menuItemId === "OSMap") {
	// OpenStreet maps
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
				let place;
				if (response && response.selectedText) {
					place = response.selectedText.replace(/ /g, "+");
					let osAddress = "https://www.openstreetmap.org/search?query=" + place;
					chrome.tabs.create({ url: osAddress});
				} else {
					chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
						place = response.text.replace(/ /g, "+");
						let osAddress = "https://www.openstreetmap.org/search?query=" + place;
						chrome.tabs.create({ url: osAddress});
					});
					return;
				}
			});
		});		
	} else if (info.menuItemId === "bImg") {
	// Bing images
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
				let imgText;
				if (response && response.selectedText) {
					imgText = response.selectedText.replace(/ /g, "+");
					let bImgAddress = "https://www.bing.com/images/search?q=" + imgText;
					chrome.tabs.create({ url: bImgAddress});
				} else {
					chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
						imgText= response.text.replace(/ /g, "+");
						let bImgAddress = "https://www.bing.com/images/search?q=" + imgText;
						chrome.tabs.create({ url: bImgAddress});
					});
					return;
				}
			});
		});
	} else if (info.menuItemId === "gImg") {
	// Google images		
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
				let imgText;
				if (response && response.selectedText) {
					imgText = response.selectedText.replace(/ /g, "+");
					let gImgAddress = "https://www.google.com/search?q=" + imgText + "&tbm=isch";
					chrome.tabs.create({ url: gImgAddress});
				} else {
					chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
						imgText= response.text.replace(/ /g, "+");
						let gImgAddress = "https://www.google.com/search?q=" + imgText + "&tbm=isch";
						chrome.tabs.create({ url: gImgAddress});
					});
					return;
				}
			});
		});		
	} else if (info.menuItemId === "yImg") {
	// Yandex images
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, (response) => {
				let imgText;
				if (response && response.selectedText) {
					imgText = response.selectedText.replace(/ /g, "+");
					let yImgAddress = "https://yandex.com/images/search?text=" + imgText;
					chrome.tabs.create({ url: yImgAddress});
				} else {
					chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
						imgText= response.text.replace(/ /g, "+");
						let yImgAddress = "https://yandex.com/images/search?text=" + imgText;
						chrome.tabs.create({ url: yImgAddress});
					});
					return;
				}
			});
		});
	} else if (info.menuItemId === "allImg") {
	// All images
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
					chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
						imgText= response.text.replace(/ /g, "+");
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
	} else if (info.menuItemId === "bImgR") {
	// Bing reverse
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
				let sText = response.text
				let bSearch = "https://www.bing.com/images/searchbyimage?FORM=IRSBIQ&cbir=sbi&imgurl=" + sText;
				chrome.tabs.create({ url: bSearch });
			});
		});
	} else if (info.menuItemId === "gImgR") {
	// Google reverse
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
				let sText = response.text
				let gSearch = "https://lens.google.com/uploadbyurl?url=" + sText ;
				chrome.tabs.create({ url: gSearch });
			});
		});
	} else if (info.menuItemId === "tImgR") {
	// TinEye
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
				let sText = response.text
				let tSearch = "https://tineye.com/search/?url=" + sText + "&rpt=imageview";
				chrome.tabs.create({ url: tSearch });
			});
		});
	} else if (info.menuItemId === "yImgR") {
	// Yandex reverse
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
				let sText = response.text
				let ySearch = "https://yandex.com/images/search?source=collections&&url=" + sText + "&rpt=imageview";
				chrome.tabs.create({ url: ySearch });
			});
		});
	} else if (info.menuItemId === "allImgR") {
	// All reverse
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.sendMessage(tabs[0].id, { action: "readClipboard" }, (response) => {
				let sText = response.text
				let bSearch = "https://www.bing.com/images/searchbyimage?FORM=IRSBIQ&cbir=sbi&imgurl=" + sText;
				chrome.tabs.create({ url: bSearch });
				let gSearch = "https://lens.google.com/uploadbyurl?url=" + sText ;
				chrome.tabs.create({ url: gSearch });
				let tSearch = "https://tineye.com/search/?url=" + sText + "&rpt=imageview";
				chrome.tabs.create({ url: tSearch });
				let ySearch = "https://yandex.com/images/search?source=collections&&url=" + sText + "&rpt=imageview";
				chrome.tabs.create({ url: ySearch });
			});
		});
	} 
});
