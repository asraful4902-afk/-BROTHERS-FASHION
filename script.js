// Sidebar Toggle functionality
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Search & Cart buttons click action
document.getElementById('searchBtn').addEventListener('click', () => {
    alert('সার্চ অপশন চালু হচ্ছে...');
});

document.getElementById('cartBtn').addEventListener('click', () => {
    alert('আপনার কার্ট খালি রয়েছে!');
});

// Order Now button action (Redirects to WhatsApp)
function orderNow(productName, price) {
    const phoneNumber = "8801700000000"; // আপনার হোয়াটসঅ্যাপ নম্বরটি এখানে বসান
    const message = `হ্যালো, আমি ${productName} (দাম: ৳${price}) অর্ডার করতে চাই।`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}
