function search_gallery() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    // let x = document.getElementsByClassName('galleryImage'); 
    let x = document.getElementsByClassName('galleryImage'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].getAttribute('data-caption', 'title').toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="grid";                  
        } 
    } 
} 
