
   function abrir() {
    const item = document.getElementById('itens');
    if (item.style.display === 'none' || item.style.display === '') {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
}
