window.onscroll = function() {scrollCheck()};

//Det här går att optimera som in i helvete! Gör så att den bara uppdaterar taggar när man passerar, och inte hela tiden!

function scrollCheck() {
    var curentPos =  document.getElementById("menu").getBoundingClientRect().top;
    var totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var about = document.getElementById("about");
    var developer = document.getElementById("developer");
    var designer = document.getElementById("designer");
    var contact = document.getElementById("contact");

    if(curentPos >= about.getBoundingClientRect().top && curentPos <= developer.getBoundingClientRect().top-(document.body.clientHeight/2) && document.getElementById("menuAbout").className != "current" ){
        removeTags();
        document.getElementById("menuAbout").className = "current";
    }
    if(curentPos >= developer.getBoundingClientRect().top-(document.body.clientHeight/2) && curentPos <= designer.getBoundingClientRect().top-(document.body.clientHeight/2) && document.getElementById("menuDeveloper").className != "current"){
        removeTags();
        document.getElementById("menuDeveloper").className = "current";
    }
    if(curentPos >= designer.getBoundingClientRect().top-(document.body.clientHeight/2) && curentPos <= contact.getBoundingClientRect().top-(document.body.clientHeight/2) && document.getElementById("menuDesigner").className != "current"){
        removeTags();
        document.getElementById("menuDesigner").className = "current";
    }
    if(curentPos >= contact.getBoundingClientRect().top-(document.body.clientHeight/2) && document.getElementById("menuContact").className != "current"){
        removeTags();
        document.getElementById("menuContact").className = "current";
    }

    function removeTags(){
        document.getElementById("menuAbout").className = "";
        document.getElementById("menuDesigner").className = "";
        document.getElementById("menuDeveloper").className = "";
        document.getElementById("menuContact").className = "";
    }
}
