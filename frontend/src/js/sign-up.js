let currentSection = 0;
const formSections = document.querySelectorAll('.form-section');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');

function navigate(direction) {
    formSections[currentSection].classList.remove('active');
    currentSection += direction;
    formSections[currentSection].classList.add('active');

    if (currentSection === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }

    if (currentSection === formSections.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Here you can handle form submission, e.g., sending data to a server
    alert('Form submitted successfully!');
});