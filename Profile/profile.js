let otplessUser = JSON.parse(localStorage.getItem("otplessUser"));
if (!otplessUser) {
    location.href = "../index.html"
} else {
    showProfile()
}
// console.log(otplessUser.email.email,
//     otplessUser.email.name,
//     otplessUser.mobile.number.slice(-10))


function showProfile() {
    const { email: { name, email }, mobile: { number }, timestamp, timezone, token, waNumber } = otplessUser
    console.log(name, email, timestamp, timezone, token, waNumber)
    let profileContEl = document.querySelector(".profileCont");

    profileContEl.innerHTML = `
    <h1>User Profile</h1>
    ${name ? `<div><strong>Name:</strong><span>${name}</span></div>` : ""}
    <div><strong>Email:</strong><span>${email}</span></div>
    <div><strong>WhatsApp Number:</strong><span>${number.slice(-10)}</span></div>
    <div><strong>Login At:</strong><span>${timestamp}</span></div>
    <button class="signOutBtn">Sign out</button>`
}

document.querySelector(".signOutBtn").onclick = function () {
    localStorage.removeItem("otplessUser");
    location.href = "../index.html"
    console.log("bt clicked")
}