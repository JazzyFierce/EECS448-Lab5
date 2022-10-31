const on_confirm = function() {
    let field1 = document.getElementById("FirstPassword");
    let field2 = document.getElementById("ConfirmPassword");

    if (field1.value != field2.value) {
        alert("Passwords much match")
    }

    if (field1.value.length < 8 || field2.value.length < 8) {
        alert("Password must be at least 8 characters")
    }
}