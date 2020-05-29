// document.querySelectorAll(".project-list li");

let customLink = "http://eldo.us/collection";
let slugs = [];
let recipient = "";
const el = document.getElementById("customLink");


for (let project of document.querySelectorAll(".project-list li")){
    project.onclick = function(){
        let slug = this.dataset.slug;
        if (!slugs.includes(slug)){
            slugs.push(slug);
        } else {
            const exists = (s) => s == slug;
            let ix = slugs.findIndex(exists);
            // console.log(slugs.findIndex(exists));
            // slugs[ix]
            slugs.splice(slugs[ix], 1); 
        }
        updateLink();

        el.focus();
        el.setSelectionRange(el.value.length,el.value.length);
    }
}

document.getElementById("preparedFor").oninput = function(){
    recipient = this.value;
    updateLink();
}

document.getElementById("customLink").onmouseup = function(e){
        e.preventDefault();
        var copyText = document.getElementById("customLink");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/

        /* Copy the text inside the text field */
        document.execCommand("copy");
        document.getElementById("copied").innerHTML="Copied!";
        document.getElementById("linkContainer").classList.add("copied");

        clearSelection();
        // document.getElementById("clickToCopy").innerHTML = "Copied!"
    }

function updateLink(){
    document.getElementById("copied").innerHTML=" Click to Copy";
    document.getElementById("linkContainer").classList.remove("copied");
    customLink = "localhost:4000/collection?";
    if (recipient.length > 0){
        customLink += "recipient=" + slugify(recipient) + "&"; 
    }
    for (let s of slugs){
        customLink += "id=" + s + "&"; 
    }
    if (customLink =="localhost:4000/collection?"){
        customLink = "";
        document.getElementById("linkContainer").classList.add("empty");
    } else {
        document.getElementById("linkContainer").classList.remove("empty");
    }
    el.value = customLink.slice(0, -1); ;
}


// http://www.example.com/mypage.html?crcat=test&crsource=test&crkw=buy-a-lot


function slugify(string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

function clearSelection()
{
 if (window.getSelection) {window.getSelection().removeAllRanges();}
 else if (document.selection) {document.selection.empty();}
}