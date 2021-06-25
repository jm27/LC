function validatePIN (pin) {
    // Create regex 
    let reg = /^(\d{4}|\d{6})$/;
    return reg.test(pin)
}
