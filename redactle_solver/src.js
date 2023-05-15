function solve() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://redactle.anybrowser.org/ses.php", false);
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
}