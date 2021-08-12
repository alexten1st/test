const btn = document.querySelector(".button")
const startDisplay = document.querySelector("#button-container")
const mainDisplay = document.querySelector("#main")
const contentPage = document.querySelector("#mainPage")
let back
let cardConteiner
let descDiv
const array = [
    {title:"true", text:"someText", isUsless:"isUsless"},
    {title:"is-ten-thousand", text:"someText", isUsless:"isUsless"}, 
    {title:"jQuerry", text:"someText", isUsless:"isUsless"}, 
    {title:"isOdd", text:"someText", isUsless:"isUsless"}
]


document.body.addEventListener("click", (event)=>{
    if (event.target == btn){
        startDisplay.classList.add("displayNone");
        startDisplay.classList.remove("button-container")
        mainDisplay.classList.remove("displayNone");
        mainDisplay.classList.add("main-content")
        back = document.createElement("a")
        back.innerText = "Вернуться к кнопке"
        back.classList.add("back")
        mainPage.append(back) 
        cardConteiner = document.createElement("div");
        cardConteiner.classList.add("cardConteiner");
        array.forEach(element => {
            
            let card = document.createElement("div") ;
            card.classList.add("card");
            card.id = element.isUsless;
            let title = document.createElement("h2"); 
            title.innerText = element.title;
            title.classList.add("cardTitle");
            let desc = document.createElement("p");
            desc.classList.add("desc");
            desc.innerText = element.text
            card.append(title);
            card.append(desc);
            cardConteiner.append(card);
            
        });

        cardConteiner.addEventListener("mouseup",(event)=>{
            let elems = Array.prototype.slice.call(event.target.children)
            elems.forEach(elem => {
                elem.classList.add("active")
                back.classList.add("active")   
            })
            function delClass (){
                elems.forEach(elem => {
                back.classList.remove("active")
                elem.classList.remove("active")
                })};
            setTimeout(delClass,  250)
        })
        mainPage.append(cardConteiner);
        let cards = document.querySelectorAll(".card")
        console.log("cards",cards);
        cards.forEach(card => {
            card.addEventListener("click",(event)=> {
                console.log(event.target);
                let cardDesc = document.createElement("div")
                let cardTitle = document.createElement("h1")
                cardTitle.classList.add("cardTitle")
                let container = document.createElement("div")
                container.classList.add("cardContainer")
                console.log(event.target.firstChild.innerText);
                cardTitle.innerText = event.target.firstChild.innerText
                descDiv = document.createElement("div")
                descDiv.classList.add("descDiv")
                descDiv.innerText = event.target.id
                cardDesc.classList.add("cardDesc")
                container.append(cardTitle)
                container.append(descDiv)
                cardDesc.append(container)
                document.body.append(cardDesc)

            })
        })
    }
    if (event.target == descDiv){
        document.querySelector(".cardDesc").remove()
    }
    if (event.target == back){
        cardConteiner.remove()
        back.remove()
        mainDisplay.classList.add("displayNone");
        mainDisplay.classList.remove("main-content")
        startDisplay.classList.remove("displayNone");
        startDisplay.classList.add("button-container")
    }
})