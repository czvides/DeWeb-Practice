// Storage reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "#9966AA",
        text: "I'm baby meggings twee health goth +1. Bicyclr rights tumeric chartreuse before they sold out chambra pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
    },
    {
        id: 2,
        name: "lance becker",
        job: "c# developer",
        img: "#012169",
        text: "I'm a systems engineer student trying to learn a optimal language to make my projects. I'm a systems engineer student trying to learn a optimal language to make my projects. I'm a systems engineer student trying to learn a optimal language to make my projects. I'm a systems engineer student trying to learn a optimal language to make my projects.",
    },
    {
        id: 3,
        name: "andré martini",
        job: "devops",
        img: "#f6949e",
        text: "I'm a big fan of the productivity, and organization. I spent most of the day trying to learn new things. I always go to the gym. I'm a big fan of the productivity, and organization. I spent most of the day trying to learn new things. I always go to the gym. I'm a big fan of the productivity, and organization. I spent most of the day trying to learn new things. I always go to the gym.",
    },
    {
        id: 4,
        name: "javier reyes",
        job: "musician",
        img: "#9064AF",
        text: "I spent all the days playing guitar, I love to make heavy sound songs. I'm rhythm guitarist. I spent all the days playing guitar, I love to make heavy sound songs. I'm rhythm guitarist. I spent all the days playing guitar, I love to make heavy sound songs. I'm rhythm guitarist.",
    },
    {
        id: 5,
        name: "ash ketchum",
        job: "pokemon trainer",
        img: "#B1E1A9",
        text: "My main pokemon is Pikachu, I use to go with it in all my journeys. It is my best friend. Also with my other 5 pokemons we will win the championship. My main pokemon is Pikachu, I use to go with it in all my journeys. It is my best friend. Also with my other 5 pokemons we will win the championship. My main pokemon is Pikachu, I use to go with it in all my journeys. It is my best friend. Also with my other 5 pokemons we will win the championship.",
    },
    {
        id: 6,
        name: "henry duarte",
        job: "artist",
        img: "#f6B42e",
        text: "I play basketball in my free time, but by the job I can't play with my friends. It will be fun hearing some jokes, and go to watch a match. I play basketball in my free time, but by the job I can't play with my friends. It will be fun hearing some jokes, and go to watch a match. I play basketball in my free time, but by the job I can't play with my friends. It will be fun hearing some jokes, and go to watch a match.",
    }
];

const color = document.getElementById("person-front")
const name = document.getElementById("author");
const job = document.getElementById("job");
const review = document.getElementById("info");

const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    const item = reviews[Math.floor(Math.random()*reviews.length)];
    name.innerText = item.name;
    job.innerText = item.job;
    review.innerText = item.text;
    color.style.backgroundColor = item.img;
    //console.log("Working");
});