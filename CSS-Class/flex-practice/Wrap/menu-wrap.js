let drinks = [
    {
        drink: "Caffé Americano",
        price: 4.55,
        catergory: "HotCoffes",
        color: "#b97273",
    },
    {
        drink: "Veranda Blend",
        price: 5.55,
        catergory: "HotCoffes",
        color: "#b97273",
    },
    {
        drink: "Caffé Misto",
        price: 7.55,
        catergory: "HotCoffes",
        color: "#b97273",
    },
    {
        drink: "Pike Place Roast",
        price: 9.55,
        catergory: "HotCoffes",
        color: "#b97273",
    },
    {
        drink: "Expresso",
        price: 4.99,
        catergory: "HotCoffes",
        color: "#b97273",
    },
    {
        drink: "Pistachio Latte",
        price: 3.33,
        catergory: "HotCoffes",
        color: "#b97273",
    },
    {
        drink: "Chai Tea Latte",
        price: 3.33,
        catergory: "HotTeas",
        color: "#ff8080",
    },
    {
        drink: "Chai Tea",
        price: 9.33,
        catergory: "HotTeas",
        color: "#ff8080",
    },
    {
        drink: "Earl Grey Tea",
        price: 9.33,
        catergory: "HotTeas",
        color: "#ff8080",
    },
    {
        drink: "Pistachio Frappuccino",
        price: 9.33,
        catergory: "Frappuccino",
        color: "#3997ca",
    },
    {
        drink: "Mocha Frappuccino",
        price: 9.33,
        catergory: "Frapuccino",
        color: "#3997ca",
    },
    {
        drink: "Caramel Frappuccino",
        price: 9.33,
        catergory: "Frapuccino",
        color: "#3997ca",
    },
    {
        drink: "Expresso Frappuccino",
        price: 9.33,
        catergory: "Frapuccino",
        color: "#3997ca",
    },
    {
        drink: "Coffee Frappuccino",
        price: 9.33,
        catergory: "Frapuccino",
        color: "#3997ca",
    },
    {
        drink: "Caffé Vanilla Frappuccino",
        price: 9.33,
        catergory: "Frapuccino",
        color: "#3997ca",
    },
    {
        drink: "Java Chip Frappuccino",
        price: 9.33,
        catergory: "Frapuccino",
        color: "#3997ca",
    },
    {
        drink: "Salted Caramel",
        price: 9.33,
        catergory: "ColdBrews",
        color: "##c19a6b",
    },
    {
        drink: "Vanilla Sweet",
        price: 9.33,
        catergory: "ColdBrews",
        color: "##c19a6b",
    },
    {
        drink: "Nitro Cold",
        price: 9.33,
        catergory: "ColdBrews",
        color: "##c19a6b",
    },
    {
        drink: "Iced Caffé",
        price: 9.33,
        catergory: "ColdBrews",
        color: "##c19a6b",
    },
    {
        drink: "Iced Coffee",
        price: 9.33,
        catergory: "ColdBrews",
        color: "##c19a6b",
    },
    {
        drink: "Iced Expresso",
        price: 9.33,
        catergory: "ColdBrews",
        color: "##c19a6b",
    },
    {
        drink: "Iced Flat White",
        price: 9.33,
        catergory: "ColdBrews",
        color: "##c19a6b",
    },
    {
        drink: "Iced Honey",
        price: 9.33,
        catergory: "ColdBrews",
        color: "##c19a6b",
    },
];

const btn_all = document.querySelector(".btn-all");
const btn_hc = document.querySelector(".btn-hc");
const btn_ht = document.querySelector(".btn-ht");
const btn_cb = document.querySelector(".btn-cb");
const btn_f = document.querySelector(".btn-f");

const drink_container = document.querySelector(".drinks");

btn_all.addEventListener("click", function(){
    drink_container.innerHTML = ``;
    drinks.map(function(item){
        drink_container.innerHTML += drinkElement(item);
    })
});

btn_hc.addEventListener("click", function(){
    drink_container. innerHTML = ``;
    drinks.map(function(item){
        if(item.catergory == "HotCoffes"){
            drink_container.innerHTML += drinkElement(item);
        }
    });
});

btn_ht.addEventListener("click", function(){
    drink_container. innerHTML = ``;
    drinks.map(function(item){
        if(item.catergory == "HotTeas"){
            drink_container.innerHTML += drinkElement(item);
        }
    });
});

btn_f.addEventListener("click", function(){
    drink_container. innerHTML = ``;
    drinks.map(function(item){
        if(item.catergory == "Frapuccino"){
            drink_container.innerHTML += drinkElement(item);
        }
    });
});

btn_cb.addEventListener("click", function(){
    drink_container. innerHTML = ``;
    drinks.map(function(item){
        if(item.catergory == "ColdBrews"){
            drink_container.innerHTML += drinkElement(item);
        }
    });
});

function drinkElement(item){
    return `<div class="drink-container">
                <div class="img" style="background-color: ${item.color};"></div>
                <div class="info">
                    <p>${item.drink}</p>
                    <p>$ ${item.price}</p>
                </div>
                <hr class="hr-drink">
            </div>`;
}