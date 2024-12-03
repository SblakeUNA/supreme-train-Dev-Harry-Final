const favoriteOrder = {
    size: "large",
    toppings: ["pepperoni", "bacon"],
    cheese: "yes",
    cut: "half",
    notes: "Extra crispy crust, please!",
    phone: "123-456-7890"
};


document.getElementById("load-favorite").addEventListener("click", () => {
    document.getElementById("size").value = favoriteOrder.size;
    document.querySelectorAll("input[name='toppings']").forEach(topping => {
        topping.checked = favoriteOrder.toppings.includes(topping.value);
    });
    document.querySelector(`input[name='cheese'][value='${favoriteOrder.cheese}']`).checked = true;
    document.querySelector(`input[name='cut'][value='${favoriteOrder.cut}']`).checked = true;
    document.getElementById("notes").value = favoriteOrder.notes;
    document.getElementById("phone").value = favoriteOrder.phone;
});


document.getElementById("pizza-builder").addEventListener("submit", (e) => {
    e.preventDefault();
    displayOrderSummary();
});


function displayOrderSummary() {
    const size = document.getElementById("size").value;
    const toppings = Array.from(document.querySelectorAll("input[name='toppings']:checked")).map(input => input.value);
    const cheese = document.querySelector("input[name='cheese']:checked").value;
    const cut = document.querySelector("input[name='cut']:checked").value;
    const notes = document.getElementById("notes").value;
    const phone = document.getElementById("phone").value;

    const orderSummary = `
        <h2>Order Summary</h2>
        <p><strong>Size:</strong> ${size}</p>
        <p><strong>Toppings:</strong> ${toppings.join(", ")}</p>
        <p><strong>Extra Cheese:</strong> ${cheese === "yes" ? "Yes" : "No"}</p>
        <p><strong>Cut:</strong> ${cut === "half" ? "Cut in Half" : "Whole"}</p>
        <p><strong>Special Instructions:</strong> ${notes}</p>
        <p><strong>Phone:</strong> ${phone}</p>
    `;

    const message = document.getElementById("message");
    message.innerHTML = orderSummary;
    message.classList.remove("hidden");
}


document.getElementById("toggle-navbar").addEventListener("click", () => {
    document.getElementById("navbar-menu").classList.toggle("hidden");
});

document.getElementById("pizza-builder").addEventListener("submit", (e) => {
    e.preventDefault();
    displayOrderSummary();
    alert("MAMMA MIA, We hope you enjoy!");
});