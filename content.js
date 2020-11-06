function copyPostitsToClipboard() {
    let nodes = document.querySelectorAll("#jam-content .jam-postit-element");     // .jam-postit-element
    
    if (nodes && nodes.length) {
        let postitArray = Array.from(nodes);
        let csv = postitArray.reduce((acc, curr) => {
            if (acc) {
                return acc + "\n" + curr.dataset.value;     // data-value                
            } else {
                return curr.dataset.value;
            }
        }, "");        

        let dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.setAttribute("id", "dummy_pastearea");
        document.getElementById("dummy_pastearea").value = csv;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        alert(postitArray.length + " post-it rows copied to clipboard!");
    } else {
        alert("Sorry, no post-its found on this page...");
    }
}

copyPostitsToClipboard();




