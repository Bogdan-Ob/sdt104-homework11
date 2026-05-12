import {courses} from './data.js';

export function setupModal() {
    const modal = document.getElementById('registrationModal');
    const closeModal = document.querySelector('.close-modal');
    const regForm = document.getElementById('registrationForm');
    const courseSelect = document.getElementById('courseSelect');
    
    const openButtons = document.querySelectorAll('.nav-cons, .course-btn');

    if (courseSelect) {
        courseSelect.innerHTML = '';
        courses.forEach(course => {
            const option = document.createElement('option');
            option.value = course.title;
            option.textContent = course.title;
            courseSelect.appendChild(option);
        });
    }

    openButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', () => modal.style.display = 'none');
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! We will contact you soon.');
            modal.style.display = 'none';
            regForm.reset();
        });
    }
}