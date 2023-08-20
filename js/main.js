const btnOpen = document.querySelector('.btn-open');

function openCard() {
    const hiddenContent = document.querySelector('.hidden');
    if (hiddenContent.style.display = 'none') {
        hiddenContent.style.display = 'block';
    }
}


btnOpen.addEventListener('click', openCard)