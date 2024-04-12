document.getElementById("calculate-button").addEventListener("click", function() {
    var costPerLiter = parseFloat(document.getElementById("cost").value);
    var litersPurchased = parseFloat(document.getElementById("liters").value);
    var totalCost = costPerLiter * litersPurchased;
    document.getElementById("total-cost").textContent = "Total Cost: AED " + totalCost.toFixed(2);
});