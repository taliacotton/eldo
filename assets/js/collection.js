const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const recipient = urlParams.get('recipient');
const projects = urlParams.getAll('id');
console.log(recipient);
console.log(projects);


document.getElementById("recipient").innerHTML = makeTitle(recipient) + ".";
document.getElementById("recipient").style.color = "#0afc0a";


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function makeTitle(slug) {
  var words = slug.split('-');

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(' ');
}

console.log(
  makeTitle("athlete-profile")
)