// ১. আপনার কন্টাক্ট তথ্য সেট করুন
    const YOUR_WHATSAPP_NUMBER = "8801848168675"; 
    const YOUR_PAGE_USERNAME = "HOIYOSHOP"; // যেমন: "MyAmazingShopBD"

    // প্রয়োজনীয় উপাদান
    const orderForm = document.getElementById('orderForm');
    const quantityInput = document.getElementById('quantity');
    const deliveryTypeRadios = document.querySelectorAll('input[name="deliveryType"]');
    const deliveryTimeDisplay = document.getElementById('deliveryTimeDisplay'); 
    
    const TIME_DHAKA = "২-৩ দিন";
    const TIME_OUTSIDE = "৩-৫ দিন (সর্বোচ্চ)";

    // (+) এবং (-) বাটনের ফাংশন
    function changeQuantity(change) {
        let currentQuantity = parseInt(quantityInput.value) || 1;
        currentQuantity += change;
        if (currentQuantity < 1) {
            currentQuantity = 1; 
        }
        quantityInput.value = currentQuantity;
    }

    // ডেলিভারি সময় দেখানোর ফাংশন
    function updateDeliveryInfo() {
        let deliveryTimeText = "";
        let deliveryChargeText = "";

        deliveryTypeRadios.forEach(radio => {
            if (radio.checked) {
                const charge = parseFloat(radio.getAttribute('data-charge'));
                if (radio.value === 'Dhaka_City') {
                    deliveryTimeText = TIME_DHAKA;
                    deliveryChargeText = `৳${charge} (ঢাকা সিটি)`;
                } else {
                    deliveryTimeText = TIME_OUTSIDE;
                    deliveryChargeText = `৳${charge} (ঢাকা সিটির বাহিরে)`;
                }
            }
        });
        deliveryTimeDisplay.textContent = `ডেলিভারি: ${deliveryChargeText} | সময়: ${deliveryTimeText}`;
    }

    // WhatsApp এবং Messenger উভয়ের জন্য মেসেজ তৈরি করার একক ফাংশন
    function createOrderMessage() {
        const name = document.getElementById('customerName').value;
        const phone = document.getElementById('customerPhone').value;
        const district = document.getElementById('district').value;
        const area = document.getElementById('area').value;
        const address = document.getElementById('address').value;
        const notes = document.getElementById('notes').value;
        const quantity = parseInt(quantityInput.value) || 1;
        
        let deliveryCharge = 0;
        let deliveryAreaText = "";

        deliveryTypeRadios.forEach(radio => {
            if (radio.checked) {
                deliveryCharge = parseFloat(radio.getAttribute('data-charge'));
                if (radio.value === 'Dhaka_City') {
                    deliveryAreaText = "ঢাকা সিটি কর্পোরেশন এরিয়া";
                } else {
                    deliveryAreaText = "ঢাকা সিটির বাহিরে";
                }
            }
        });

        let message = 
            "নাম: " + name + "\n" +
            "মোবাইল নম্বর: " + phone + "\n" +
            "জেলা: " + district + "\n" +
            "থানা: " + area + "\n" +
            "ডেলিভারী অ্যাড্রেস: " + address + "\n\n" +
            "পণ্যের পরিমাণ: " + quantity + " টি" + "\n" +
            "ডেলিভারী চার্জ: ৳" + deliveryCharge + " (" + deliveryAreaText + ")" + "\n";
            
        // নোট থাকলে যোগ করা
        if (notes.trim() !== "") {
            message += "বিশেষ নোট: " + notes.trim() + "\n";
        }
            
        message += "\nঅনুগ্রহ করে পণ্যের নাম ও মূল্য নিশ্চিত করে অর্ডারটি কনফার্ম করুন। ধন্যবাদ।";

        return message;
    }

    // WhatsApp বাটনের ক্লিক হ্যান্ডলার
    document.getElementById('whatsappButton').addEventListener('click', function(e) {
        if (!orderForm.checkValidity()) {
            orderForm.reportValidity();
            return;
        }
        
        const message = createOrderMessage();
        const whatsappURL = `https://api.whatsapp.com/send?phone=${YOUR_WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });

    // Messenger বাটনের ক্লিক হ্যান্ডলার
    document.getElementById('messengerButton').addEventListener('click', function(e) {
        if (!orderForm.checkValidity()) {
            orderForm.reportValidity();
            return;
        }

        const message = createOrderMessage();
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(message).then(() => {
                alert("অর্ডার মেসেজটি কপি করা হয়েছে। এখন Messenger-এ গিয়ে মেসেজ বক্সে পেস্ট (Paste) করে পাঠান।");
                const messengerURL = `https://m.me/${YOUR_PAGE_USERNAME}`;
                window.open(messengerURL, '_blank');
            }).catch(err => {
                console.error('ক্লিপবোর্ডে কপি করতে সমস্যা হয়েছে: ', err);
                alert("ক্লিপবোর্ডে কপি করতে সমস্যা হয়েছে। অনুগ্রহ করে মেসেজটি ম্যানুয়ালি কপি করে Messenger এ পাঠান।");
                const messengerURL = `https://m.me/${YOUR_PAGE_USERNAME}`;
                window.open(messengerURL, '_blank');
            });
        } else {
            alert("আপনার ব্রাউজার স্বয়ংক্রিয় কপি সমর্থন করে না। অনুগ্রহ করে মেসেজটি ম্যানুয়ালি কপি করে Messenger এ পাঠান।");
            const messengerURL = `https://m.me/${YOUR_PAGE_USERNAME}`;
            window.open(messengerURL, '_blank');
        }
    });

    // ইনপুট ইভেন্ট ও লোড
    deliveryTypeRadios.forEach(radio => radio.addEventListener('change', updateDeliveryInfo));
    window.addEventListener('load', updateDeliveryInfo);