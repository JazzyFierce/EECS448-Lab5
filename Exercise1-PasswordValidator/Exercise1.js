const on_confirm = function() {
    let field1 = document.getElementById("FirstPassword");
    let field2 = document.getElementById("ConfirmPassword");

    let alert_msg = "";
    if (field1.value != field2.value) {
        alert_msg += "Error: Passwords much match\n"
    }

    if (field1.value.length < 8 || field2.value.length < 8) {
        alert_msg += "Error Password must be at least 8 characters"
    }

    if (alert_msg) {
        alert(alert_msg)
    }
}