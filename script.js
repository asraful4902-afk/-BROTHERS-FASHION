// Modal elements
const modal = document.getElementById("orderModal");
const closeBtn = document.getElementById("closeModal");
const checkoutForm = document.getElementById("checkoutForm");

// Function to open order form
function orderNow(productName, price) {
    modal.style.display = "flex";
    // You can store product details here if needed for form submission
}

// Close modal when clicking the 'X'
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
checkoutForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("অর্ডার সফলভাবে জমা হয়েছে!");
    modal.style.display = "none";
});
