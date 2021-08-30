
/*jQuery smooth scroller */

$('.navbar a').on('click', function(e){
    
if(this.hash !== ''){
    e.preventDefault();

    const hash = this.hash;


    $('html , body').animate(
        {
            scrollTop: $(hash).offset().top
        },
        800
    );
}

});

/*dropdown menu functioning*/

function dropdownMenu() {
let x = document.getElementById("dropdownClick");

if(x.className === "navbar"){
    x.className = "responsive";
}
else{
    x.className = "navbar";
}
}