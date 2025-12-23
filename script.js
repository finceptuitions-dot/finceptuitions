// script.js

// Hamburger toggle
const menuBtn = document.getElementById('menu-btn');
const hamburgerMenu = document.getElementById('hamburger-menu');

menuBtn.addEventListener('click', () => {
    if (hamburgerMenu.style.display === 'flex') {
        hamburgerMenu.style.display = 'none';
    } else {
        hamburgerMenu.style.display = 'flex';
    }
});



// Notifications button
const notifBtn = document.getElementById("notif-btn");
notifBtn.addEventListener("click", () => {
    alert("You have no new notifications."); // You can enhance this to show real notifications
});

// Logout button
const logoutBtn = document.getElementById("logout-btn");
logoutBtn.addEventListener("click", () => {
    if(confirm("Are you sure you want to log out?")) {
        window.location.href = "index.html";
    }
});

// Optional: Redirect for Videos/Documents page if using selection
function openVideoOrDocument(type, grade, term) {
    let url = "";
    if(type === "video") {
        url = `videos/vid_grade${grade}_term${term}.html`;
    } else if(type === "document") {
        url = `documents/doc_grade${grade}_term${term}.html`;
    }
    window.open(url, "_blank"); // Open in new tab
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker registered"))
    .catch((err) => console.log("SW registration failed:", err));
}

// Show trial days remaining
const trialDaysElement = document.getElementById('trial-days');

function calculateTrialDays() {
    // Get account creation date from localStorage (or Firestore)
    let accountCreated = localStorage.getItem('accountCreated'); 

    if(!accountCreated) {
        // If not set (for demo), set to today
        accountCreated = new Date().toISOString();
        localStorage.setItem('accountCreated', accountCreated);
    }

    const createdDate = new Date(accountCreated);
    const today = new Date();
    const trialPeriod = 30; // 30-day trial

    const diffTime = today - createdDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const remainingDays = trialPeriod - diffDays;

    if(remainingDays > 0){
        trialDaysElement.textContent = `Trial Days Remaining: ${remainingDays}`;
    } else {
        trialDaysElement.textContent = `Trial Expired`;
    }
}

// Call the function
calculateTrialDays();
let deferredPrompt;
const installBtn = document.getElementById('install-btn');

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the automatic prompt
    e.preventDefault();
    deferredPrompt = e;
    // Show the install button
    installBtn.style.display = 'block';
});

installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt(); // Show the browser install prompt
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response: ${outcome}`);
        deferredPrompt = null;
        installBtn.style.display = 'none'; // hide button after installing or dismissing
    }
});
