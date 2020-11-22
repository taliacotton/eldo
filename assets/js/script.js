function isDST(d) {
    let jan = new Date(d.getFullYear(), 0, 1).getTimezoneOffset();
    let jul = new Date(d.getFullYear(), 6, 1).getTimezoneOffset();
    return Math.max(jan, jul) != d.getTimezoneOffset(); 
}

function calcTime(offset) {
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000*offset));
    var ampm = (nd.getHours() >= 12) ? "PM" : "AM";
    // console.log(nd.getHours()%12, h);
    var h = (nd.getHours()%12 == 0) ? 12 : nd.getHours()%12;
    if (!isDST(d)) { 
        h--;
    } 
    return h + "<span class='colon'>:</span>" + ("0" + nd.getMinutes()).slice(-2) + " " + ampm;
}

document.getElementById("timeKC").innerHTML = calcTime('-5');
document.getElementById("timePL").innerHTML = calcTime('-7');

setInterval(function(){
    document.getElementById("timeKC").innerHTML = calcTime('-5');
    document.getElementById("timePL").innerHTML = calcTime('-7');
}, 1000);

