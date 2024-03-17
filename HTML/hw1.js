function generatePassword() {
    // Get value
    const length = document.getElementById("length").value;
    const upper = document.getElementById("upper").checked;
    const normal = document.getElementById("normal").checked;
    const number = document.getElementById("number").checked;
    const special = document.getElementById("special").checked;
    // Check tickbox
    let charset = "";
    if (upper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (normal) charset += "abcdefghijklmnopqrstuvwxyz";
    if (number) charset += "0123456789";
    if (special) charset += "!@#$%^&*()_-+=";
    // Check if tickbox is empty
    if (charset === "") {
        alert("Please select at least one character type.");
        return;
    }
    //Generate password
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    //Print password
    document.getElementById("password").innerText = password;
}