# Searcher
(articolo in italiano [qui](https://turbolab.it/browser-455/searcher-estensione-velocizzare-ricerche-web-4291)  ![image](https://github.com/user-attachments/assets/fff61062-49ca-4c48-b82e-c1515ac544dc), video YouTube [qui](https://www.youtube.com/watch?v=haTOiyQD2os)
)

## What *Searcher* does

*Searcher* is a multi-browser extension (Manifest V3) that allows the user to set a text to be used as search parameter in different sites; the text can be set by:
- **selecting** it directly on a webpage, using the mouse or any cursor
- **typing** it in the popup text field (see below)
- **copying** it from a local file, like a PDF or other document formats.

Once the text is chosen, the user can click on the toolbar popup buttons to **open directly the various results in new tabs**. Most of the same functionalities are available in the **right-click menu**.

The user can search for the chosen text:
- in **Wikipedia**, **YouTube** or **archive.org**
- asking about it to **3 AI chatbots** (ChatGPT, Felo, You; one at the time or all three at once; if so, 3 new tabs will open)
- as location in **3 online maps** (DuckDuckGo, Google, OpenStreetMap)
- as prompt for **images search** (Bing, Google, Yandex, one at the time or all three at once)
- if the user copies an *image web address* (not the image itself), he can also make a **reverse image search** using Bing, Google, TinEye and Yandex (one at the time or all at once)
- if the text is a **shortened URL**, the actual address can be revealed using two sites (t.ly and whatsmydns.net)
- if the text is a URL, it's possible to check its **security reputation** (in 5 sites), if it's **available online** and if there's any **snapshot** in Wayback Machine
- it's also possible to select a URL and open it directly in Browserling **sanboxed proxy**.


## Adding *Searcher* to browsers

This extension has two versions, one for *Chromium browsers* (**Chrome**, **Brave**, **Edge**, etc.) and one for *Gecko browsers* like **Firefox** (109 and above). It's available in its **Firefox extension page** [here](https://addons.mozilla.org/it/firefox/addon/searcher_en-it/).

It can be used as a *local imported extension*:
- for **Chromium** browsers: go to *Extensions*, enable *Developer mode*, click on *Load unpacked* and then choose the folder that contains the files. The extension will remain loaded after the browser is closed.
- for **Gecko** browsers: type *about:debugging* in the address bar, click on *This Firefox* (or similar) in the sidebar, then click on *Load Temporary Add-on* and select the "manifest.json" file from the extension folder. The extension will *not* reload after the browser is closed.

## How to use it

Once the extension is loaded in the browser, it will show an **icon on the toolbar**; clicking on the icon will open the **popup menu** with all the available options. It has **light or dark mode** and two languages (**English** or **Italian**). For more usage details, click on *Instructions*.
![darkEn](https://github.com/user-attachments/assets/cfd228ba-adbb-402d-9fdc-0da86099c95c)
![lightIt](https://github.com/user-attachments/assets/2f7d208d-8bee-442c-9291-d6e8adfba610)

On the **right-click menu**, the submenu *Searcher* is added with most of the functions, some of them in the submenu "Extras".
![rClick](https://github.com/user-attachments/assets/6c661468-dcdc-464c-a7b0-a2f497e29237)


## Permissions
*Searcher*, to do its job, needs to:
- get data from the clipboard (so to search the text that is copied from documents outside the browser)
- set data in the clipboard (after typing the text in the text field, it's stored in the clipboard so it can be used)
- access browser tabs (so when the text is selected in the webpage, it can be spotted and used by *Searcher*)
- open new tabs (so the page with the selected text stays open, while the search happens in new tabs)

## Considerations
- Wikipedia pages and online maps require *proper text syntax* to get results 
- some image addresses may not be compatible with some reverse searches
- if no text is selected and *Searcher* is called to action, it will read and use the *last text saved* in the clipboard (*Searcher* doesn't read the clipboard if it's not asked to)
- the extension will not work in an empty tab
- remember that any extension can be set to work only if clicked or only on specific sites.
