document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    console.log("Hello js");
    const x = 1.5;
    const y = "1.5";
    const bool = true;
    let title = new String("Javascript");
    console.log(typeof bool);
    const el = document.querySelector("head");
    el.children[0].innerText = "Cour javascript version 6";
    console.log(el.children[2].innerText);
});