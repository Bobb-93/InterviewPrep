function create() {
    let geeks = document.createElement('span');
    geeks.textContent = "Geeksforgeeks";
    geeks.setAttribute('class', 'note');
    document.body.appendChild(geeks);
}