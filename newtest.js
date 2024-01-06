document.addEventListener('DOMContentLoaded', () => {
    let minus = true;

    function toggleContent(i) {
        let t = document.getElementById("p-" + i);
        let p = document.getElementById("pt-" + i);

        if (minus) {
            t.style.setProperty('--before-content', 'url("images/icon-minus.svg")');
            minus = false;
            p.style.display = "block";
        } else {
            t.style.setProperty('--before-content', 'url("images/icon-plus.svg")');
            minus = true;
            p.style.display = "none";
        }
    }

    for (let i = 1; i < 5; i++) {
        let t = document.getElementById("p-" + i);
        t.addEventListener('click', () => {
            toggleContent(i);
        });
    }
});
