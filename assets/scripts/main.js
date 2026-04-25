function openMenu () {
    let nav = document.querySelector('#navbar');
    if (nav.style.display == 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}