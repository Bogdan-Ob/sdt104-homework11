import { courses } from './data.js';
import { setupModal } from './main.js';
setupModal();
function renderCards(dataArray) {
    const container = document.querySelector('.cont-grid'); 

    dataArray.forEach(course => {
        const card = document.createElement('article');
        card.className = 'course-card';

        card.innerHTML = `
            <div class="course-image">
                <img src="${course.imageUrl}" alt="${course.title}">
            </div>
            <div class="course-content">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <button class="course-btn">View Program</button>
            </div>
        `;

        card.addEventListener('click', () => {
            document.querySelectorAll('.course-card').forEach(el => el.style.background = '');
            card.style.background = 'var(--gradient2)';
            console.log(`Clicked on: ${course.title}`);
        });

        const btn = card.querySelector('.course-btn');
        btn.addEventListener('click', (event) => {
            event.stopPropagation();
            alert(`Opening details for: ${course.title}`);
        });

        container.append(card);
    });
}

renderCards(courses);

const titles = courses.map(c => c.title);
console.log("Titles List:", titles);

const filtered = courses.filter(c => c.description.includes("Python"));
console.log("Filtered Courses:", filtered);

const sorted = [...courses].sort((a, b) => a.title.localeCompare(b.title));
console.log("Sorted Alphabetically:", sorted);

const totalLength = courses.reduce((acc, c) => acc + c.title.length, 0);
console.log("Total Title Characters:", totalLength);