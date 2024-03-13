function Details() {
    var details = document.getElementById('additionalDetails');
    var button = document.getElementById('toggle');

    if (details.style.display === 'none') {
        details.style.display = 'block';
        button.innerText = 'Hide';
    } else {
        details.style.display = 'none';
        button.innerText = 'Show';
    }
}