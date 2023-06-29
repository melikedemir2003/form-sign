<script>
document.addEventListener('DOMContentLoaded', function() {
document.querySelector('form').addEventListener('submit', function(event) {
event.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için
    
var password = document.getElementById('password').value;
var repeatPassword = document.getElementById('repeatpassword').value;
    
var errorMessage = '';
if (password.length < 8) {
errorMessage += 'Parola en az 8 karakter olmalıdır.<br>';
}
if (password !== repeatPassword) {
errorMessage += 'Parolalar eşleşmiyor.';
}
if (errorMessage !== '') {
showError(errorMessage);
} else {
// Formu gönder
this.submit();
}
});
function showError(message) {
var errorDiv = document.createElement('div');
errorDiv.className = 'error-message';
errorDiv.innerHTML = message;
    
var form = document.querySelector('form');
form.appendChild(errorDiv);
}
});
</script>