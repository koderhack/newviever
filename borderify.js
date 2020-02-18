document.body.style.border = "5px solid orange";
document.body.style.color = "orange";
document.body.style.background = "black";
document.body.style.height = "auto !important";
document.querySelectorAll("div, section, article, span, header").forEach(element => {
    element.style.background = "black";
})
document.querySelectorAll("input").forEach(element => {
    element.style.border = "5px solid orange";
})
