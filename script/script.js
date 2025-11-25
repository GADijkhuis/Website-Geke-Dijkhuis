var schilderijen = [
    "2-luik-geel.jpg",
    "2-luik-lange-jannen.jpg",
    "2-luik-vogels.jpg",
    "bloemen-500x400.jpg",
    "de-verbeelding-500x400.jpg",
    "explosief-500x400.jpg",
    "gezichtspunt.jpg",
    "in-gesprek.jpg",
    "met-elkaar-500x400.jpg",
    "muziek-500x400.jpg",
    "nederlander-500x400.jpg",
    "eendracht-100x100.jpg"
];
var beelden = [
    "1-en-1-zijn-één-scaled.jpg",
    "behoedsaam.jpg",
    "brons-glas-scaled.jpg",
    "eensgezindheid.jpg",
    "harmonie-scaled.jpg",
    "hecht-scaled.jpg",
    "samen-een-scaled.jpg",
    "spirit-scaled.jpg",
    "torso.jpg",
    "tweeeenheid.jpg",
    "uitbundig.jpg",
    "welgezind.jpg"
];

function fullscreenCard(card) {
    var image = card.querySelector(".image").querySelector("img");
    var imageURL = image.src;
    console.log(imageURL);
    document.getElementById("fullScreenImage").src = imageURL;
    document.getElementById("fullscreenContainer").classList.add("active");
    document.getElementById("fullScreenText").innerHTML = card.querySelector("p").innerHTML;
    document.getElementById("container").classList.add("active");

}
function closeFullscreenCard() {
    document.getElementById("fullscreenContainer").classList.remove("active");
    document.getElementById("container").classList.remove("active");
}

function refreshSchilderijImage() {
    try {
        if (document.getElementById("schilderijFrame")) {

            setTimeout(change, 500);
            function show() {
                document.getElementById("schilderijFrame").style.animationName = "showImage";
            }
            function change() {
                var randomImage = Math.floor(Math.random() * schilderijen.length);
                document.getElementById("schilderijFrame").src = "./img/schilderijen/" + schilderijen[randomImage];

                show();
            }
            function hide() {
                document.getElementById("schilderijFrame").style.animationName = "hideImage";
            }
            hide();
        }
    } catch (e) {
        //console.log(e);
    }
}
function refreshBeeldenImage() {
    try {
        if (document.getElementById("beeldenFrame")) {

            setTimeout(change, 500);
            function show() {
                document.getElementById("beeldenFrame").style.animationName = "showImage";
            }
            function change() {
                var randomImage = Math.floor(Math.random() * beelden.length);
                document.getElementById("beeldenFrame").src = "./img/beelden/" + beelden[randomImage];

                show();
            }
            function hide() {
                document.getElementById("beeldenFrame").style.animationName = "hideImage";
            }
            hide();
        }
    } catch (e) {
        //console.log(e);
    }
}


setInterval(refreshSchilderijImage, 5000);
setInterval(refreshBeeldenImage, 5000);

if (!window.location.href.toString().startsWith("https://")) {
    //window.location = "https://www.gekedijkhuis.nl/"
}

function openMenu() {
    document.getElementsByClassName("menu-container")[0].classList.add("active");
}
function closeMenu() {
    document.getElementsByClassName("menu-container")[0].classList.remove("active");
}