let t1 = document.getElementById("p-1");
let t2 = document.getElementById("p-2");
let t3 = document.getElementById("p-3");
let t4 = document.getElementById("p-4");
let p1 = document.getElementById("pt-1")
let p2 = document.getElementById("pt-2")
let p3 = document.getElementById("pt-3")
let p4 = document.getElementById("pt-4")

let minus = true;
 let calabar = true;
t1.addEventListener('click', e => {
    if (minus) {
        t1.style.setProperty('--before-content', 'url("/assets/images/icon-minus.svg")');
        minus = false;
        const tex1 = `
        <p>  Frontend Mentor offers realistic coding challenges to help developers improve their 
        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
        all levels and ideal for portfolio building.
        </p>
        `
        p1.innerHTML += tex1;
    } else {
        t1.style.setProperty('--before-content', 'url("/assets/images/icon-plus.svg")');
        minus = true; // Reset to true for the next click
        p1.innerHTML = ""
    }
});
t2.addEventListener('click', e => {
    if (calabar) {
        t2.style.setProperty('--before-content', 'url("/assets/images/icon-minus.svg")');
        calabar = false;
        const tex1 = `
        <p> 
        Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
        option providing access to a range of projects suitable for all skill levels.      
        </p>
        `
        p2.innerHTML += tex1;
    } else {
        t2.style.setProperty('--before-content', 'url("/assets/images/icon-plus.svg")');
        calabar = true; // Reset to true for the next click
        p2.innerHTML = ""
    }
});
let nono = true
t3.addEventListener('click', e => {
    if (nono) {
        t3.style.setProperty('--before-content', 'url("/assets/images/icon-minus.svg")');
        nono = false;
        const tex1 = `
        <p>  Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
        way to showcase your skills to potential employers!
        </p>
        `
        p3.innerHTML += tex1;
    } else {
        t3.style.setProperty('--before-content', 'url("/assets/images/icon-plus.svg")');
        nono = true; // Reset to true for the next click
        p3.innerHTML = ""
    }
});
let noio = true
t4.addEventListener('click', e => {
    if (noio) {
        t4.style.setProperty('--before-content', 'url("/assets/images/icon-minus.svg")');
        noio = false;
        const tex1 = `
        <p>    The best place to get help is inside Frontend Mentor's Discord community. There's a help 
        channel where you can ask questions and seek support from other community members.       
        </p>
        `
        p4.innerHTML += tex1;
    } else {
        t4.style.setProperty('--before-content', 'url("/assets/images/icon-plus.svg")');
        noio = true; // Reset to true for the next click
        p4.innerHTML = ""
    }
});
