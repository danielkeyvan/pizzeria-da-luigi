// Booking Form Handler
const bookingForm = document.getElementById('bookingForm');
const successMessage = document.getElementById('successMessage');
const formContainer = document.querySelector('.booking-form-container');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const nome = document.getElementById('nome').value;
        const cognome = document.getElementById('cognome').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const data = document.getElementById('data').value;
        const ora = document.getElementById('ora').value;
        const persone = document.getElementById('persone').value;
        const tavolo = document.getElementById('tavolo').value;
        const occasione = document.getElementById('occasione').value;
        const note = document.getElementById('note').value;
        
        // Generate confirmation number
        const confirmNumber = 'PLG-' + Date.now();
        
        // Log booking details (in a real app, this would be sent to a server)
        console.log('Booking Details:', {
            nome,
            cognome,
            email,
            telefono,
            data,
            ora,
            persone,
            tavolo,
            occasione,
            note,
            confirmNumber,
            timestamp: new Date().toLocaleString('it-IT')
        });
        
        // Hide form and show success message
        bookingForm.style.display = 'none';
        
        // Update confirmation number
        document.getElementById('confirmNumber').textContent = confirmNumber;
        
        // Show success message with animation
        successMessage.style.display = 'block';
        successMessage.style.animation = 'slideIn 0.5s ease';
        
        // Send confirmation email (simulated)
        alert(`Prenotazione confermata!\n\nNome: ${nome} ${cognome}\nData: ${data}\nOra: ${ora}\nPersone: ${persone}\n\nNumero di Conferma: ${confirmNumber}\n\nTi abbiamo inviato una conferma a: ${email}`);
        
        // Save to localStorage for records
        const booking = {
            confirmNumber,
            nome,
            cognome,
            email,
            telefono,
            data,
            ora,
            persone,
            tavolo,
            occasione,
            note,
            timestamp: new Date().toISOString()
        };
        
        let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(bookings));
    });
}

// Reset booking when returning from success page
const resetBtn = document.querySelector('.success-message .btn-secondary');
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        bookingForm.style.display = 'block';
        successMessage.style.display = 'none';
        bookingForm.reset();
    });
}

console.log('Reservations script loaded');