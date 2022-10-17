const headers = document.getElementsByTagName("head");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "";
}

const p = document.getElementsByTagName("footer");
let html=`<h1 style="text-align:center">Error 404: Site not found</h1><br><p style="text-align:center"><a href="https://www.tudublin.ie/">Click for help</</a></p>` ;
for (let i = 0; i < p.length; i++){
    p[i].innerHTML = html;
}

const x = document.getElementsByTagName("div");
for (let i = 0; i < x.length; i++){
    x[i].innerText = "";
}



