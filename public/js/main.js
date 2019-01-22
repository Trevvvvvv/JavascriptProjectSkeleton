function bookSearch() {
    var search = document.getElementById('search').value
    document.getElementById('results').innerHTML = ""
    console.log('anzoni')
    console.log(search)
    $.ajax({
        url:"https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",

        success: function(data){
            console.log(data)
        },
        type: 'GET'
    });
}
document.getElementById('button').addEventListener('click',bookSearch,false)
//AJAX è l'acronimo di Asynchronous Javascript And XML e indica una tecnica per permettere di costruire applicazioni asincrone,
//in cui in buona sostanza, non viene ricaricata ogni volta tutta la pagina,
//bensì solo una “zona”, che è stata “comunicata” come parametro alla funzione: $.ajax.
