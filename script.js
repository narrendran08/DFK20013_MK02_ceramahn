document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var category = document.getElementById("category").value;
    var slot = document.getElementById("slot").value;

    var price = 150;
    var total = price * slot;

    document.getElementById("output").innerHTML =
        "<p><strong>Nama Penuh:</strong> " + name + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Nombor Telefon:</strong> " + phone + "</p>" +
        "<p><strong>Kategori Peserta:</strong> " + category + "</p>" +
        "<p><strong>Bilangan Slot:</strong> " + slot + "</p>" +
        "<p><strong>Jumlah Yuran:</strong> RM " + total + "</p>";

    document.getElementById("confirmation").style.display = "block";
});
