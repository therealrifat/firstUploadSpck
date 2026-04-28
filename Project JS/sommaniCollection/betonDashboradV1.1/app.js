const csvURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRE3hN5aUNDfEl-lWD-8rpLKqVg_yvBGPMT8_pn_0yzKo6-8ULfZE-HOPCXqrziH-buo6fINSCO-jlR/pub?output=csv";

    async function fetchSheetData() {
        try {
            const response = await fetch(csvURL);
            const data = await response.text();
            
            // CSV ডাটাকে ভেঙে rows তৈরি করা
            const rows = data.split('\n').map(row => row.split(','));
            
            // --- পে-আউট রিচ করার লজিক ---
            // আপনি দিয়েছিলেন rows[2][9] -> এর মানে ৩ নম্বর সারির ১০ নম্বর কলাম (J3)
            // আপনার শিটে যদি ২ নম্বর সারির J কলামে ডাটা থাকে, তবে হবে [1][9]
            const payoutFromSheet = parseFloat(rows[3][10]) || 0; 
            
            // মুসল্লিদের লিস্ট (৭ নম্বর সারি থেকে ৩০ নম্বর সারি)
            let firstRange = parseFloat(rows[4][17]);
            let lastRange =parseFloat(rows[4][18]);
            const donors = rows.slice(firstRange, lastRange); 
            let currentMonth = parseFloat(rows[3][17]) + 2;
            let currentMonthName = rows[5][currentMonth];
            const currentBalance = parseFloat(rows[1][10]);
            console.log(currentBalance)
            // ফাংশন কল করার সময় ডাটা পাঠিয়ে দিন
            renderTable(donors, payoutFromSheet, currentMonth,currentMonthName,currentBalance);

            document.getElementById('loading').style.display = 'none';
            document.getElementById('contentWrapper').style.display = 'block';
            
        } catch (error) {
            console.error("ডাটা লোড করতে সমস্যা:", error);
            document.getElementById('loading').innerText = "ডাটা লোড হতে সমস্যা হয়েছে।";
        }
    }

    function renderTable(donors, currentPayout,currentMonth,currentMonthName,currentBalance) {
        const tableBody = document.getElementById('tableData');
        let totalCollection = 0;
        
        tableBody.innerHTML = "";
        document.getElementById('motCol').innerText=`${currentMonthName} মাসের মোট কালেকশন`;
        donors.forEach(person => {
            // person[0] = নাম, person[2] = লক্ষ্য, person[6] = জমা (আপনার ইনডেক্স অনুযায়ী)
            if(person[0] && person[0].trim() !== "") {
                const name = person[0];
                const target = parseFloat(person[2]) || 0; 
                const paid = parseFloat(person[currentMonth]) || 0; 
               
                const due = target - paid;
                totalCollection += paid;

                const row = `
                    <tr>
                        <td>${name}</td>
                        <td>৳${target}</td>
                        <td>৳${paid}</td>
                        <td><span class="badge ${due <= 0 ? 'paid' : 'due'}">${due <= 0 ? 'পেইড' : 'বাকি: ' + due}</span></td>
                    </tr>`;
                tableBody.innerHTML += row;
            }
        });

        // ড্যাশবোর্ডের কার্ডগুলো আপডেট
        document.getElementById('totalCol').innerText = "৳ " + totalCollection;
        document.getElementById('totalOut').innerText = "৳ " + currentPayout; 
        document.getElementById('currentHand').innerText = "৳ " + currentBalance;
    }

    function searchName() {
        let input = document.getElementById("searchInput").value.toUpperCase();
        let tr = document.getElementById("donorTable").getElementsByTagName("tr");
        for (let i = 1; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                tr[i].style.display = td.innerText.toUpperCase().indexOf(input) > -1 ? "" : "none";
            }
        }
    }

    window.onload = fetchSheetData;
