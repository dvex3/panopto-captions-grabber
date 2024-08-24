javascript:(() => {
    const captions = document.getElementById('eventTabs').getElementsByClassName('event-text');
    let text = "";
    for (let i = 0; i < captions.length; i++) {
        text += captions[i].getElementsByTagName('span')[0].innerText + ' ';
    };
    const blob = new Blob([text], {type: 'text/plain'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download =  document.getElementById('deliveryTitle').innerText;
    a.click();
    URL.revokeObjectURL(a.href);
})();