var divMy;

function myFunction() {
    divMy=setTimeout(showPage,2000);
}

function showPage() {
    document.getElementById('loading_page').style.opacity='0'
    document.getElementById('all_site').style.opacity='1'
}