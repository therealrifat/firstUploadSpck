// ১. কনফিগারেশন (আপনার প্রয়োজন অনুযায়ী পরিবর্তন করুন)
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR5JBSFYch7QVvbwnV0VJV8loz2q0Go-HqTXG1k6g3dOrkH-q42qZntnt-7VuGLfRf0XaGHLzpco6P_/pub?gid=0&single=true&output=csv'; // আপনার CSV লিঙ্ক
const START_ROW = 1; // কত নম্বর সারি থেকে ডেটা পড়া শুরু করবে (০ থেকে গণনা শুরু)
const YOUR_WHATSAPP_NUMBER = "+8801848168675";
const YOUR_PAGE_USERNAME = "HOIYOSHOP";

// এলিমেন্ট রেফারেন্স
const productTableBody = document.querySelector('#productTable tbody');
const deliveryTypeRadios = document.querySelectorAll('input[name="deliveryType"]');
const quantityInput = document.getElementById('quantity');

// ২. Google Sheets থেকে ডেটা ফেচ এবং টেবিল তৈরি
async function fetchAndDisplayProducts() {
    try {
        const response = await fetch(SHEET_CSV_URL);
        const data = await response.text();
        
        // CSV রো-তে ভাগ করা
        const rows = data.split('\n').map(row => row.split(',')); 
        
        // নির্দিষ্ট রো (START_ROW) থেকে ডেটা নেওয়া শুরু
        const productData = rows.slice(START_ROW);

        productTableBody.innerHTML = ''; // টেবিল ক্লিয়ার করা

        productData.forEach((cols, index) => {
            const pName = cols[0] ? cols[0].trim().replace(/^"|"$/g, '') : "";
            const pPrice = cols[1] ? parseFloat(cols[1].trim()) : 0;

            if (pName && !isNaN(pPrice)) {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>
                        <input type="radio" name="selectedProduct" value="${pName}" data-price="${pPrice}" ${index === 0 ? 'checked' : ''} onchange="updateTotal()">
                    </td>
                    <td>${pName}</td>
                    <td>৳${pPrice}</td>
                `;
                productTableBody.appendChild(tr);
            }
        });
        updateTotal(); // লোড হওয়ার পর ক্যালকুলেশন
    } catch (error) {
        console.error('ডেটা লোড করতে সমস্যা:', error);
    }
}

// ৩. টোটাল প্রাইস ক্যালকুলেশন (পণ্য + ডেলিভারি চার্জ)
function updateTotal() {
    const selectedRadio = document.querySelector('input[name="selectedProduct"]:checked');
    if (!selectedRadio) return;

    const price = parseFloat(selectedRadio.getAttribute('data-price'));
    const quantity = parseInt(quantityInput.value) || 1;
    
    let deliveryCharge = 0;
    deliveryTypeRadios.forEach(radio => {
        if (radio.checked) {
            deliveryCharge = parseFloat(radio.getAttribute('data-charge')) || 0;
        }
    });

    const total = (price * quantity) + deliveryCharge;
    
    // ডিসপ্লে আপডেট (যদি HTML-এ 'totalDisplay' আইডি থাকে)
    const display = document.getElementById('totalDisplay');
    if (display) {
        display.textContent = `মোট মূল্য: ৳${total}`;
    }
}

// ৪. মেসেজ তৈরি
function createOrderMessage() {
    const selectedRadio = document.querySelector('input[name="selectedProduct"]:checked');
    const productName = selectedRadio ? selectedRadio.value : "N/A";
    const productPrice = selectedRadio ? selectedRadio.getAttribute('data-price') : 0;
    
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('address').value;
    const quantity = quantityInput.value;

    let deliveryCharge = 0;
    let area = "";
    deliveryTypeRadios.forEach(radio => {
        if (radio.checked) {
            deliveryCharge = radio.getAttribute('data-charge');
            area = radio.value === 'Dhaka_City' ? "ঢাকা সিটি" : "ঢাকার বাহিরে";
        }
    });

    const total = (parseFloat(productPrice) * parseInt(quantity)) + parseFloat(deliveryCharge);

    return `*নতুন অর্ডার*\n` +
           `পণ্য: ${productName}\n` +
           `পরিমাণ: ${quantity} টি\n` +
           `মূল্য: ৳${productPrice}\n` +
           `ডেলিভারি চার্জ: ৳${deliveryCharge} (${area})\n` +
           `------------------\n` +
           `*সর্বমোট: ৳${total}*\n\n` +
           `কাস্টমার ডিটেইলস:\n` +
           `নাম: ${name}\n` +
           `মোবাইল: ${phone}\n` +
           `ঠিকানা: ${address}`;
}

// ৫. বাটন ক্লিক হ্যান্ডলার
document.getElementById('whatsappButton').addEventListener('click', () => {
    const msg = createOrderMessage();
    window.open(`https://api.whatsapp.com/send?phone=${YOUR_WHATSAPP_NUMBER}&text=${encodeURIComponent(msg)}`, '_blank');
});

// ৬. ইনিশিয়ালাইজেশন
window.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayProducts();
    deliveryTypeRadios.forEach(r => r.addEventListener('change', updateTotal));
    quantityInput.addEventListener('input', updateTotal);
});
