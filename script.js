const btn = document.getElementById("MyBtn");

btn.addEventListener("click", function() {
    const input = document.querySelector("input")
    const transformed = input.value.toUpperCase()
    input.value = transformed;
});









