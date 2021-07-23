function getParameterById(id, url = window.location.href) {
    id = id.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + id + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  var foo = getParameterById('id');
  console.log(foo);
