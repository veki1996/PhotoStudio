let brojac = 0
let textSlider = document.querySelectorAll(".bottom-left")
const plusSlides = () => {
    let pictures = document.querySelectorAll(".mySlides img")
    displayNoneText()
    displayNone()
    brojac++
    if (brojac == pictures.length && textSlider.length) {
        brojac = 0
    }
    textSlider[brojac].style = "block"
    pictures[brojac].style.display = "block"
}

const minusSlides = () => {
    let pictures = document.querySelectorAll(".mySlides img")
    displayNoneText()
    displayNone()
    brojac--
    if (brojac == -1) {
        brojac = pictures.length - 1 && textSlider.length - 1
    }
    pictures[brojac].style.display = "block"
    textSlider[brojac].style.display = "block"
}


const displayNone = () => {
    let pictures = document.querySelectorAll(".mySlides img")
    for (let picture of pictures) {
        picture.style.display = "none"
    }
}
const displayNoneText = () => {
    for (let text of textSlider) {
        text.style.display = "none"
    }
}
let allSPorts = document.querySelectorAll(".itemList li")

for (let sport of allSPorts) {
    sport.addEventListener("click", (event) => {
        document.querySelector('.slideshow-container').style.display = 'none'
        document.querySelector('#h1-news').style.display = "none"
        let sportName = event.target.innerText
        let H1name = document.querySelectorAll(".img-holder")
        for (let name of H1name) {
            name.style.display = "none"
        }
        if (sportName === "SVI SPORTOVI") {
            for (let name of H1name) {
                name.style.display = "block"
            }
        }
        for (let name of H1name) {
            if (name.getAttribute("name").includes(sportName)) {
                name.style.display = "block"
            }
        }
    })
}
document.querySelector('#pocetnaSTR').addEventListener('click', () => {
    document.querySelector('.slideshow-container').style.display = "block"
    document.querySelector('#h1-news').style.display = "block"
})
const Cliced = (element) => {
    let MainEl = element.closest(".forLike")
    let img = MainEl.querySelector(".likeButton img")
    let Like = MainEl.querySelector(".likeButton p")
    if (Like.innerText == "Like") {
        img.src = "images/liked.png"
        Like.innerText = "Unlike"
        Like.style.color = "red"
    } else if (Like.innerText == "Unlike") {
        img.src = "images/like.png"
        Like.innerText = "Like"
        Like.style.color = "black"
    }
}
let objectForComment = [
    {

    },
]
const CommentBtn = (element) => {
    let MainEl = element.closest(".container")
    let ForComment = MainEl.querySelector(".forComment")
    ForComment.style.borderRadius = "50px"
    ForComment.style.padding = "0px"
    ForComment.style.fontSize = "18px"
    let addcoment = MainEl.querySelector(".addComment")
    if (ForComment.style.display = "none") {
        ForComment.style.display = "block"
    } else if (ForComment.style.display = "block") {
        ForComment.style.display = "none"
    }
    ForComment.addEventListener("keyup", (event) => {
        let komentar = ForComment.value
        if (event.which === 13) {
           
            ForComment.style.display='none'
            objectForComment.push(
                {
                    Komentari: komentar
                }
            )

            xmlhttp = new XMLHttpRequest();
            xmlhttp.open("POST", "https://sportnews-19557-default-rtdb.europe-west1.firebasedatabase.app/Komentari.json", true);
            xmlhttp.setRequestHeader('Content-Type', 'application/json');
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    let osoba1 = JSON.parse(this.responseText);
                    console.log(osoba1)
                }
            };
            xmlhttp.send(JSON.stringify(objectForComment))
            sessionStorage.setItem("Comments", JSON.stringify(objectForComment))
        }
    })

}

xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://sportnews-19557-default-rtdb.europe-west1.firebasedatabase.app/articles.json", true);
xmlhttp.setRequestHeader('Content-Type', 'application/json');
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
        let osoba1 = JSON.parse(this.responseText);
        let osoba2 = osoba1.slice(0, 5)
        let brojac = 0
        let num = 0
        let url = new URL(osoba2[brojac].url)
        url = url.href
        document.querySelector('#title1').innerHTML = `<a href=${osoba2[brojac].url}>` + osoba2[brojac].title + "</a>"
        document.querySelector('#title1').location = osoba2[brojac].url
        document.querySelector("#img1").src = osoba2[brojac].urlToImage
        document.querySelector('#description1').innerHTML = osoba2[brojac].description
        document.querySelector('#datum1').innerHTML = osoba2[brojac].publishedAt

        brojac++
        document.querySelector('#title2').innerHTML = `<a href=${osoba2[brojac].url}>` + osoba2[brojac].title + '</a>'
        document.querySelector("#img2").src = osoba2[brojac].urlToImage
        document.querySelector('#description2').innerHTML = osoba2[brojac].description
        document.querySelector('#datum2').innerHTML = osoba2[brojac].publishedAt
        brojac++
        let vijesti = document.querySelectorAll('.bottom-left')
        let slike = document.querySelectorAll('.slike')
        slike[num].src = osoba2[brojac].urlToImage
        vijesti[num].innerHTML = `<a href =${osoba2[brojac].url}>` + osoba2[brojac].title + '</a>'
        num++
        brojac++
        slike[num].src = osoba2[brojac].urlToImage
        vijesti[num].innerHTML = `<a href =${osoba2[brojac].url}>` + osoba2[brojac].title + '</a>'
        num++
        brojac++
        slike[num].src = osoba2[brojac].urlToImage
        vijesti[num].innerHTML = `<a href =${osoba2[brojac].url}>` + osoba2[brojac].title + '</a>'


    }
};
xmlhttp.send()

xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://reating-bf53e-default-rtdb.europe-west1.firebasedatabase.app/articles.json", true);
xmlhttp.setRequestHeader('Content-Type', 'application/json');
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
        let osoba2 = JSON.parse(this.responseText);

        let brojac = 0
        document.querySelector('#title3').innerHTML = `<a href=${osoba2[brojac].url}>` + osoba2[brojac].title + "</a>"
        document.querySelector('#title3')
        document.querySelector("#img3").src = osoba2[brojac].urlToImage
        document.querySelector('#description3').innerHTML = osoba2[brojac].description
        document.querySelector('#datum3').innerHTML = osoba2[brojac].publishedAt
        brojac++
        document.querySelector('#title4').innerHTML = `<a href=${osoba2[brojac].url}>` + osoba2[brojac].title + "</a>"
        document.querySelector('#title4')
        document.querySelector("#img4").src = osoba2[brojac].urlToImage
        document.querySelector('#description4').innerHTML = osoba2[brojac].description
        document.querySelector('#datum4').innerHTML = osoba2[brojac].publishedAt
        brojac++
        document.querySelector('#title5').innerHTML = `<a href=${osoba2[brojac].url}>` + osoba2[brojac].title + "</a>"
        document.querySelector("#img5").src = osoba2[brojac].urlToImage
        document.querySelector('#description5').innerHTML = osoba2[brojac].description
        document.querySelector('#datum5').innerHTML = osoba2[brojac].publishedAt
        brojac++
        document.querySelector('#title9').innerHTML = `<a href=${osoba2[brojac].url}>` + osoba2[brojac].title + "</a>"
        document.querySelector("#img9").src = osoba2[brojac].urlToImage
        document.querySelector('#description9').innerHTML = osoba2[brojac].description
        document.querySelector('#datum9').innerHTML = osoba2[brojac].publishedAt
    }
};
xmlhttp.send()

xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://photostudiodigital-8b603-default-rtdb.europe-west1.firebasedatabase.app/articles.json", true);
xmlhttp.setRequestHeader('Content-Type', 'application/json');
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
        let osoba2 = JSON.parse(this.responseText);

        let brojac = 0

        document.querySelector('#title6').innerHTML = `<a href=${osoba2[brojac].url}>` + osoba2[brojac].title + "</a>"
        document.querySelector('#title6')
        document.querySelector("#img6").src = osoba2[brojac].urlToImage
        document.querySelector('#description6').innerHTML = osoba2[brojac].description
        document.querySelector('#datum6').innerHTML = osoba2[brojac].publishedAt

        brojac++
        document.querySelector('#title7').innerHTML = `<a href=${osoba2[brojac].url}>` + osoba2[brojac].title + "</a>"
        document.querySelector("#img7").src = osoba2[brojac].urlToImage
        document.querySelector('#title7')
        document.querySelector('#description7').innerHTML = osoba2[brojac].description
        document.querySelector('#datum7').innerHTML = osoba2[brojac].publishedAt
        brojac++
        let veki = document.querySelector('#title8').innerHTML = `<a href=${osoba2[brojac].url}>` + osoba2[brojac].title + "</a>"
        document.querySelector("#img8").src = osoba2[brojac].urlToImage
        veki.href = osoba2[brojac.url]
        document.querySelector('#description8').innerHTML = osoba2[brojac].description
        document.querySelector('#datum8').innerHTML = osoba2[brojac].publishedAt
      
    }
};
xmlhttp.send()

