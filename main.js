const panels = document.querySelectorAll('.panel');

function openActive() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', openActive));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));