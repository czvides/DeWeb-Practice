const menu = [
    {
        recipe: "Buttermilk Pancake",
        price: 15.99,
        category: "Breakfast",
        background: "294852",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse unde beatae distinctio omnis facilis nam accusamus nobis debitis. Ad beatae ipsa obcaecati iure ratione quos voluptatum consequatur laudantium voluptatem?"
    },
    {
        recipe: "Lunch Double",
        price: 13.99,
        category: "Lunch",
        background: "38694f",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse unde beatae distinctio omnis facilis nam accusamus nobis debitis. Ad beatae ipsa obcaecati iure ratione quos voluptatum consequatur laudantium voluptatem?"
    },
    {
        recipe: "Salted Caramel Cream",
        price: 7.99,
        category: "Shakes",
        background: "#F2A342",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse unde beatae distinctio omnis facilis nam accusamus nobis debitis. Ad beatae ipsa obcaecati iure ratione quos voluptatum consequatur laudantium voluptatem?"
    },
    {
        recipe: "Apple Pancake",
        price: 5.99,
        category: "Breakfast",
        background: "#2AA342",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse unde beatae distinctio omnis facilis nam accusamus nobis debitis. Ad beatae ipsa obcaecati iure ratione quos voluptatum consequatur laudantium voluptatem?"
    },
    {
        recipe: "Chicken soup",
        price: 7.99,
        category: "Lunch",
        background: "#F2Aff2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse unde beatae distinctio omnis facilis nam accusamus nobis debitis. Ad beatae ipsa obcaecati iure ratione quos voluptatum consequatur laudantium voluptatem?"
    },
    {
        recipe: "Nitro Cold Brews",
        price: 4.99,
        category: "Shakes",
        background: "#2Aee42",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse unde beatae distinctio omnis facilis nam accusamus nobis debitis. Ad beatae ipsa obcaecati iure ratione quos voluptatum consequatur laudantium voluptatem?"
    },
];

const btn_all = document.querySelector("all");
const btn_breakfast = document.querySelector(".breakfast");
const btn_lunch = document.querySelector(".lunch");
const btn_shakes = document.querySelector(".shakes");

const sectionMenu = document.querySelector(".menu");
const sectionMenuChild = sectionMenu.children;

btn_lunch.addEventListener("click",function(){
    console.log(sectionMenuChild);
})


btn_breakfast.addEventListener("click",function(){
    menu.map(function(item){
        sectionMenuChild = "";
        if(item.category == "Breakfast"){
            sectionMenu.innerHTML += `<div class="flex">
                                        <div class="flex align-y-center">
                                            <div class="img" style="background-color: "${item.background}"></div>
                                            <div class="flex flex-column justify-center mx-10">
                                                <header class="flex justify-around h4-menu">
                                                    <h4>${item.recipe}</h4>    
                                                    <h4>$${item.price}</h4>
                                                </header>
                                                <p>${item.description}</p>
                                            </div>    
                                        </div>
                                    </div>`
        };
    });
});