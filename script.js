const openDialogBtn = document.getElementById('openDialog');
const dialog = document.getElementById('dialog');

openDialogBtn.addEventListener('click', () => {
    dialog.classList.add('open');
});

dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
        dialog.classList.remove('open');
    }
});
