import { courses, whyDescriptions } from './data.js';
import { setupModal } from './main.js';

document.addEventListener('DOMContentLoaded', () => {
    setupModal();
    const banner = document.querySelector('.sect1-right');
    const courseTitle = banner.querySelector('h2');
    const leftBtn = document.querySelector('.left-arr');
    const rightBtn = document.querySelector('.right-arr');

    let currentIndex = 0;

    function updateBanner(index) {
        const course = courses[index];
        courseTitle.textContent = course.title;

        banner.style.opacity = '0';

        setTimeout(() => {
            banner.style.backgroundImage = `url('${course.imageUrl}')`;
            banner.style.opacity = '1';
        }, 100);
    }

    rightBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % courses.length;
        updateBanner(currentIndex);
    });

    leftBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + courses.length) % courses.length;
        updateBanner(currentIndex);
    });

    updateBanner(currentIndex);


    const description = document.querySelector('.description');
    const whyButtons = document.querySelectorAll('.why-left button');


    function setWhyUsActive(button) {
        whyButtons.forEach(b => b.classList.remove('active'));
    
        button.classList.add('active');
    
        const id = parseInt(button.dataset.id);
        const desc = whyDescriptions.find(d => d.id === id);
    
        if (desc) {
            description.style.opacity = 0;
            setTimeout(() => {
                description.textContent = desc.text;
                description.style.opacity = 1;
            }, 150);
        }
    }

    whyButtons.forEach(btn => {
        btn.addEventListener('click', () => setWhyUsActive(btn));
    });

    if (whyButtons.length > 0) {
        setWhyUsActive(whyButtons[0]);
    }
});

