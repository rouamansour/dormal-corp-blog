var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';

xhr.onload = function () {
    if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        var dataString = "";
        for (i = 0; i <data.article.length; i++) {
            var counter = i + 1;
            dataString +="<div class='design-item'><div class='design-img'>"
            dataString += "<a href='articleDtails.html'>"+data.article[i].image + ""+"</a>";
            dataString += data.article[i].button + " ";
            dataString += data.article[i].date + ""+"<br>";
            dataString += data.article[i].title + "";
            dataString += "<br>";
            dataString += "</div>"+"</div>";
        }
        document.getElementById('pdata').innerHTML = dataString;
    }
}

xhr.send();