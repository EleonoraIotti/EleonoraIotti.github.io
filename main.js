
function zoom_in() {

    this.classList.remove("zoom-out");
    this.classList.add('zoom-in');

}

function zoom_out() {

    this.classList.remove("zoom-in");
    this.classList.add('zoom-out');

}

function main() {

    document.getElementById('avatar').addEventListener('mouseover', zoom_in);
    document.getElementById('avatar').addEventListener('touchstart', zoom_in);

    document.getElementById('avatar').addEventListener('mouseout', zoom_out);
    document.getElementById('avatar').addEventListener('touchend', zoom_out);

}

document.addEventListener("DOMContentLoaded", main);
