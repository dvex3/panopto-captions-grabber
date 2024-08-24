# panopto-captions-grabber
A small javascript code that can download captions from Panopto in plaintext format.
## usage
- Create a bookmark with the following content:
```
javascript:(function(){(()=>{const e=document.getElementById("eventTabs").getElementsByClassName("event-text");let t="";for(let n=0;n<e.length;n++)t+=e[n].getElementsByTagName("span")[0].innerText+" ";const n=new Blob([t],{type:"text/plain"}),l=document.createElement("a");l.href=URL.createObjectURL(n),l.download=document.getElementById("deliveryTitle").innerText,l.click(),URL.revokeObjectURL(l.href)})();}());
```
- Go to a video page in Panopto. Select the desired caption language in the video player and click on the created bookmark.