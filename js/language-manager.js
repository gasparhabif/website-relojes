const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

let language;

function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    $.ajax({
        url: '/language/' + localStorage.getItem('language') + '.json',
        dataType: 'json', async: false,
        success: function (lang) {
            language = lang
        }
    });
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
}
