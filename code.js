// menu burgueur
function openNav() {
    document.getElementById("myNav").style.width = "350px";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  // barre de recherche
function search_icones(){
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase();
    let x = document.getElementsByClassName('maps');
    for (i=0; i<x.length; i++){
        if (!x[i].innerHTML.toLocaleLowerCase().includes(input)){
            x[i].style.display="none";
        }
        else{
            x[i].style.display="list-item";
  
        }
    }
  }