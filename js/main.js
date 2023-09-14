/*Смена языка*/
const lang = document.querySelector(".header__lang");
lang.addEventListener("click", () => {
    lang.classList.toggle("change");
    if (lang.classList.contains("change")) {
        lang.lastElementChild.innerHTML = "ru";
    } else {
        lang.lastElementChild.innerHTML = "en";
    }
});
/*Смена языка*/

/*Наведение на иконки социальных сетей*/
let link = document.querySelectorAll(".socials__link");
link.forEach((links) => {
    links.addEventListener("mouseenter", (e) => {
        const svg = e.target.firstElementChild;
        svg.insertAdjacentHTML(
            "beforeEnd",
            `<linearGradient id="paint0_linear_1981_202" x1="32" y1="-1.90735e-06" x2="-5.64706" y2="9.41176" gradientUnits="userSpaceOnUse">
            <stop stop-color="#478BF9"/>
            <stop offset="1" stop-color="#9DADF2"/>
            </linearGradient>`
        );
        svg.firstElementChild.setAttribute(
            "fill",
            "url(#paint0_linear_1981_202)"
        );
    });

    links.addEventListener("mouseleave", (e) => {
        const svg = e.target.firstElementChild;
        svg.firstElementChild.setAttribute("fill", "#478BF9");
        svg.lastElementChild.remove();
    });
});
/*Наведение на иконки социальных сетей*/

/*Скролл для блока blog-block*/
const blog = document.querySelector(".right-page__blog");
const scrollBar = document.querySelector(".blog-block__scrollbar");
const dumbl = document.querySelector(".blog-block__dumbl");
const body = document.querySelector(".blog-block__body");

const progressAnim = () => {
    let num;
    /*Высота прокрутки*/
    let scrollTop = blog.scrollTop;
    /*Высота блока blog*/
    let blogHeight = blog.offsetHeight;
    if (blogHeight === 595) {
        num = 23;
    } else if (blogHeight === 446) {
        num = 13;
    }
    blogHeight = blog.offsetHeight - num;
    /*Высота всего блока body с блогами*/
    let siteHeight = body.scrollHeight;
    /*Расчёт прокрутки относительно blog*/
    let percentageProgress = Math.floor(
        (scrollTop / (siteHeight - (blogHeight - num))) * 100
    );
    /*Расчёт стиля top для перемещения скроллбара*/
    let top =
        ((scrollBar.offsetHeight - dumbl.offsetHeight) * percentageProgress) /
        100;
    dumbl.style.top = `${top}px`;
};

blog.addEventListener("scroll", () => {
    progressAnim();
});

/*Скролл для блока blog-block*/

/*Замена иконок center-page*/
// const iconSwap = document.querySelectorAll(".swap");
// window.addEventListener(
//     `resize`,
//     (e) => {
//         let widthWin = window.innerWidth;
//         console.log(widthWin);
//         if (widthWin <= 414) {
//             icons(iconSwap);
//         } else {
//             return;
//         }
//     },
//     false
// );

// function icons(icon) {
//     icon.forEach((icons) => {
//         if (icons.classList.contains("icon-dollar")) {
//             icons.setAttribute("src", "../img/main/dollarrotate.svg");
//         } else if (icons.classList.contains("icon-world")) {
//             icons.setAttribute("src", "../img/main/Worldrotate.svg");
//         } else if (icons.classList.contains("icon-crown")) {
//             icons.setAttribute("src", "../img/main/Worldrotate.svg");
//         }
//     });
// }
/*Замена иконок center-page*/

/*Burger-menu*/
const burger = document.querySelector(".header__burger");
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    const nav = document.querySelector(".nav-header");
    const itemsNav = document.querySelector(".nav-header__items");
    const login = document.querySelector(".header__login");
    const sign = document.querySelector(".header__sign");
    const user = document.querySelector(".header__user");
    if (burger.classList.contains("active")) {
        nav.classList.add("open-nav");
        if (nav.classList.contains("open-nav")) {
            itemsNav.append(login, sign);
            login.classList.add("block");
            sign.classList.add("block");
        }
    } else {
        nav.classList.remove("open-nav");
        user.append(login, sign);
        login.classList.remove("block");
        sign.classList.remove("block");
    }
});

/*Burger-menu*/
