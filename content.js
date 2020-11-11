function copyPostitsToClipboard() {
    const nodes = document.querySelectorAll("#jam-content .jam-postit-element");
    
    if (nodes && nodes.length) {
        const postitArray = Array.from(nodes);
        const csv = postitArray.reduce((acc, curr) => {
            return acc ? acc + "\n" + curr.dataset.value : curr.dataset.value;
        }, "");        

        const dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.setAttribute("id", "jbe-dummy-textarea");
        document.getElementById("jbe-dummy-textarea").value = csv;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);

        alert(postitArray.length + " post-it rows copied to clipboard!");
    } else {
        alert("Sorry, no post-its found on this page...");
    }
}

copyPostitsToClipboard();




