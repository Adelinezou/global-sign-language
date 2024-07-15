function searchSignLanguage() {
    const input = document.getElementById('searchbar').value.toLowerCase();
    const signLanguages = document.getElementsByClassName('TypeOfSignLanguage');

    for (let i = 0; i < signLanguages.length; i++) {
        const name = signLanguages[i].getElementsByClassName('name')[0].textContent.toLowerCase();
        if (name.includes(input)) {
            signLanguages[i].style.display = 'block';
        } else {
            signLanguages[i].style.display = 'none';
        }
    }
}
