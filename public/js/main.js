function bookSearch() {
    var search = document.getElementById('search').value
    document.getElementById('results').innerHTML = ""
    console.log('anzoni')
    console.log(search)
    $.ajax({
        url:"https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",

        success: function(data){
            for (i=0;i<data.items.length;i++){
                console.log(data.items[i]);
                if(i==0){
                          results.innerHTML += "<h2 class = 'primo'>" + data.items[i].volumeInfo.title + "</h2>" + "<img src=" + data.items[i].volumeInfo.imageLinks.thumbnail  + ">" + "<p class='description'>"  + data.items[i].volumeInfo.description + "</p>"
                        }
                else {
                      results.innerHTML += "<h2 class = 'altri'>" + data.items[i].volumeInfo.title + "</h2>" + "<img src=" + data.items[i].volumeInfo.imageLinks.thumbnail  + ">" + "<p class='description'>"  + data.items[i].volumeInfo.description + "</p>"
                     }
            }
        },
        type: 'GET'
    });
}
document.getElementById('button').addEventListener('click',bookSearch,false)
