function formValidation(event){
    event.preventDefault();

    var username = document.getElementById('username');
    var gender = document.getElementById('gender');
    var maleGender = document.getElementById("maleGen");
    var femaleGender = document.getElementById("femaleGen");
    var email = document.getElementById('email');
    var address = document.getElementById('address');
    var terms = document.getElementById('terms');
    var letter = document.getElementById('letter');

    if(username.value == '') {
        alert("Username diperlukan!");
    } else if(!maleGender.checked && !femaleGender.checked) {
        alert("Pililah jenis kelamin anda!");
    } else if(email.value === '') {
        alert("Email dibutuhkan!");
    } else if(address.value === '') {
        alert("Alamat fisik dibutuhkan!");
    } else if(!terms.checked) {
        alert("Anda harus menyutujui syarat dan ketentuan!");
    } else if(!letter.checked) {
        alert("Anda harus setuju untuk menerima buletin harian!");
    } else {
        alert("Pendaftaran sukses!");
    }
}