const csvURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTIiySzV_is5Fjn10rayI1wG9fo142QmR6G43sRK01jB3311pkAAL13ZF_xbp_p6GSMyZP1AwJeSNch/pub?gid=0&single=true&output=csv";
let donors = [];
let payoutFromSheet = 0;
let currentBalance = 0;
let currentMonth = 0;
let currentMonthName ="";

    async function fetchSheetData() {
        try {
            const response = await fetch(csvURL);
            const data = await response.text();
            
            // CSV ডাটাকে ভেঙে rows তৈরি করা
            const rows = data.split('\n').map(row => row.split(','));
            
            // --- পে-আউট রিচ করার লজিক ---
            // আপনি দিয়েছিলেন rows[2][9] -> এর মানে ৩ নম্বর সারির ১০ নম্বর কলাম (J3)
            // আপনার শিটে যদি ২ নম্বর সারির J কলামে ডাটা থাকে, তবে হবে [1][9]
            payoutFromSheet = parseFloat(rows[3][10])||0; 
            
            console.log(payoutFromSheet)
            // console.log(payoutFromSheet)
            // মুসল্লিদের লিস্ট (৭ নম্বর সারি থেকে ৩০ নম্বর সারি)
            let firstRange = parseFloat(rows[4][17]);
            let lastRange =parseFloat(rows[4][18]);
            donors = rows.slice(firstRange, lastRange);
            currentMonth = parseFloat(rows[3][17]) + 2;
            currentMonthName = rows[5][currentMonth];
            currentBalance = parseFloat(rows[1][10]);
            
            // ফাংশন কল করার সময় ডাটা পাঠিয়ে দিন
            renderTable(donors, payoutFromSheet, currentMonth,currentMonthName,currentBalance);

            document.getElementById('loading').style.display = 'none';
            document.getElementById('contentWrapper').style.display = 'block';
            
        } catch (error) {
            console.error("ডাটা লোড করতে সমস্যা:", error);
            document.getElementById('loading').innerText = "ডাটা লোড হতে সমস্যা হয়েছে।";
        }
    }

    function renderTable(donorsList, payout, monthIndex, monthName, balance) {
    const tableBody = document.getElementById('tableData');
    let totalCollection = 0;
    
    tableBody.innerHTML = "";
    // মাসের নাম আপডেট করা
    document.getElementById('motCol').innerText = `${monthName} মাসের মোট কালেকশন`;

    donorsList.forEach(person => {
        if(person[0] && person[0].trim() !== "") {
            const name = person[0];
            const target = parseFloat(person[2]) || 0; 
            
            // এই 'monthIndex' হলো সেই কলাম যেখান থেকে টাকা নেবে
            const paid = parseFloat(person[monthIndex]) || 0; 
           
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
    let currentBalance= balance - payout;
    console.log(currentBalance)
    document.getElementById('totalCol').innerText = "৳ " + totalCollection;
    document.getElementById('totalOut').innerText = "৳ " + payout; 
    document.getElementById('currentHand').innerText = "৳ " + currentBalance.toFixed(2);
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
    function updateTable() {
    // ১. ড্রপ-ডাউন থেকে ইনডেক্স নেওয়া
    const selectIndex = parseInt(document.getElementById("monthFilter").value);
    
    // ২. ড্রপ-ডাউন থেকে মাসের নাম নেওয়া (এটি না দিলে মাসের নাম আপডেট হবে না)
    const selectMonthName = document.getElementById("monthFilter").options[document.getElementById("monthFilter").selectedIndex].text;

    // ৩. সঠিক সিরিয়ালে ডাটা পাঠানো: (donorsList, payout, monthIndex, monthName, balance)
    // মনে রাখবেন, রেন্ডার টেবিলে যেভাবে সিরিয়াল দিয়েছেন, এখানেও ঠিক সেভাবেই পাঠাতে হবে।
    renderTable(donors, payoutFromSheet, selectIndex, selectMonthName, currentBalance);
    
    console.log("সিলেক্ট করা ইনডেক্স:", selectIndex);
}

    window.onload = fetchSheetData;


