document.addEventListener("DOMContentLoaded", () => {

    // SEARCH BAR FUNCTIONALITY =============
    const searchContainer = document.getElementById("search-container");
    const searchIcon = document.querySelector("#search-container .fa");
    const searchInput = document.querySelector("#search-container input");

    function toggleSearchBar(){
        const isActive = searchContainer.classList.toggle("active");
        if(isActive) searchInput.focus();
        else searchInput.value = "";
    }

    function closeSearchBar(event){
        if(!searchContainer.contains(event.target)){
            searchContainer.classList.remove("active");
            searchInput.value = "";
        }
    }

    function closeOnEsc(event){
        if(event.key === "Escape"){
            searchContainer.classList.remove("active");
            searchInput.value = "";
        }
    }

    searchIcon.addEventListener("click", toggleSearchBar);
    document.addEventListener("click", closeSearchBar);
    document.addEventListener("keydown", closeOnEsc);



    // PC BUILDER FUNCTIONALITY =============
    const componentList = document.querySelector("#componentList");
    
    const buildSlots = {
        cpu: document.querySelector("#slot-cpu"),
        gpu: document.querySelector("#slot-gpu"),
        motherboard: document.querySelector("#slot-motherboard"),
        ram: document.querySelector("#slot-ram"),
        storage: document.querySelector("#slot-storage"),
        psu: document.querySelector("#slot-psu"),
        cooling: document.querySelector("#slot-cooling"),
        case: document.querySelector("#slot-case")
    };

    let selectedParts = {};

    // Fetch components from database
    fetch("http://localhost/pc-fusion-project/getProducts.php")
        .then(res => res.json())
        .then(data => loadComponents(data))
        .catch(err => console.log("Fetch Error:", err));

    // Display product list
    function loadComponents(products) {
        componentList.innerHTML = "<h3>Available Components</h3>";

        products.forEach(item => {
            let div = document.createElement("div");
            div.classList.add("component_item");

            div.innerHTML = `
                <div>
                    <h4>${item.name}</h4>
                    <p>${item.type.toUpperCase()}</p>
                </div>
                <div class="price">$${item.price}</div>
            `;

            div.addEventListener("click", () => selectComponent(item));
            componentList.appendChild(div);
        });
    }

    // Place selected component
    function selectComponent(item) {
        let type = item.type.toLowerCase();
        let slot = buildSlots[type];
        if (!slot) return;

        selectedParts[type] = item;

        slot.innerHTML = `
            <div class="selected_item">
                <strong>${item.name}</strong>
                <p>${item.brand}</p>
                <p>$${item.price}</p>
                <button class="remove-btn" data-type="${type}">Remove</button>
            </div>
        `;

        updateSummary();
        checkCompatibility();
    }



    // SUMMARY CALCULATOR =====================

    function updateSummary() {
        let totalPrice = 0;
        let totalWatt = 0;
        let count = 0;

        for (let key in selectedParts) {
            totalPrice += Number(selectedParts[key].price);
            totalWatt += Number(selectedParts[key].watt);
            count++;
        }

        document.getElementById("total-price").innerText = "$" + totalPrice;
        document.getElementById("power-usage").innerText = totalWatt + "W";
        document.getElementById("component-count").innerText = count + "/8";

        // simple build score
        let buildScore = Math.floor((count / 8) * 100);
        document.getElementById("build-score").innerText = buildScore + "%";
    }


    // VERY BASIC COMPATIBILITY CHECK =========
    function checkCompatibility() {
        let warn = "";

        if (selectedParts.cpu && selectedParts.motherboard) {
            let cpuBrand = selectedParts.cpu.brand.toLowerCase();
            let mbBrand = selectedParts.motherboard.brand.toLowerCase();

            if (cpuBrand === "intel" && mbBrand.includes("amd")) warn += "CPU and Motherboard incompatible<br>";
            if (cpuBrand === "amd" && mbBrand.includes("intel")) warn += "CPU and Motherboard incompatible<br>";
        }

        document.getElementById("compatibility-status").innerHTML =
            warn === "" ? "✔ All components compatible" : warn;
    }


    // DROPDOWN FOR SLOTS ======================
    const slots = document.querySelectorAll(".slot");
    let activeDropdown = null;

    slots.forEach(slot => {
        slot.addEventListener("click", function (event) {
            event.stopPropagation();
            const dropdown = this.querySelector(".dropdown");

            if (activeDropdown && activeDropdown !== dropdown) {
                activeDropdown.classList.remove("show");
                activeDropdown.parentElement.classList.remove("active-slot");
            }

            if (dropdown) {
                dropdown.classList.toggle("show");
                this.classList.toggle("active-slot");
                activeDropdown = dropdown.classList.contains("show") ? dropdown : null;
            }
        });
    });

    document.addEventListener("click", () => {
        if (activeDropdown) {
            activeDropdown.classList.remove("show");
            activeDropdown.parentElement.classList.remove("active-slot");
            activeDropdown = null;
        }
    });

    window.addEventListener("scroll", () => {
        if (activeDropdown) {
            activeDropdown.classList.remove("show");
            activeDropdown.parentElement.classList.remove("active-slot");
            activeDropdown = null;
        }
    });


    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-btn")) {
            e.stopPropagation();

            let type = e.target.getAttribute("data-type");

            buildSlots[type].innerHTML = defaultSlotText(type);

            delete selectedParts[type];

            updateSummary();
            checkCompatibility();
        }
    });

 

});


function defaultSlotText(type) {
    switch(type) {
        case "cpu": return `<i class="fa-solid fa-microchip"></i> Select CPU`;
        case "gpu": return `<i class="fa-solid fa-desktop"></i> Select GPU`;
        case "motherboard": return `<i class="fa-solid fa-server"></i> Select Motherboard`;
        case "ram": return `<i class="fa-solid fa-memory"></i> Select RAM`;
        case "storage": return `<i class="fa-solid fa-hard-drive"></i> Select Storage`;
        case "psu": return `<i class="fa-solid fa-bolt"></i> Select PSU`;
        case "cooling": return `<i class="fa-solid fa-fan"></i> Select Cooler`;
        case "case": return `<i class="fa-solid fa-computer"></i> Select Case`;
        default: return "Select Component";
    }
}