function calcTime(offset) {
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000*offset));
    var ampm = (nd.getHours() >= 12) ? "PM" : "AM";
    // console.log(nd.getHours()%12, nd.getMinutes());
    
    return nd.getHours()%12 + "<span class='colon'>:</span>" + ("0" + nd.getMinutes()).slice(-2) + " " + ampm;
}

document.getElementById("timeKC").innerHTML = calcTime('-5');
document.getElementById("timePL").innerHTML = calcTime('-7');

setInterval(function(){
    document.getElementById("timeKC").innerHTML = calcTime('-5');
    document.getElementById("timePL").innerHTML = calcTime('-7');
}, 1000);