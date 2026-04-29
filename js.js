
const courses = [
    {
        id: 1,
        title: "Full-Stack Web Development",
        description: "Master modern HTML5, CSS3, and JavaScript to build responsive apps.",
        imageUrl: "photo/web-dev.png",
        link: "#"
    },
    {
        id: 2,
        title: "Data Science & Machine Learning",
        description: "Turn data into insights using Python and SQL for business intelligence.",
        imageUrl: "photo/data-sci.png",
        link: "#"
    },
    {
        id: 3,
        title: "Cybersecurity Expert",
        description: "Protect systems from threats. Learn ethical hacking and network security.",
        imageUrl: "photo/cyber-sec.png",
        link: "#"
    },
    {
        id: 4,
        title: "UI/UX Design Professional",
        description: "Design intuitive digital products. Master Figma, wireframing, and user psychology to create user-friendly interfaces for modern web and mobile platforms.",
        imageUrl: "photo/ui-des.png",
        link: "#"
    },
    {
        id: 5,
        title: "Mobile App Development",
        description: "Build native and cross-platform apps. Master Flutter and Swift to create high-performance mobile applications for iOS and Android devices.",
        imageUrl: "photo/app-dev.png",
        link: "#"
    }
];

function renderCards(dataArray) {
    const container = document.querySelector('.cont-grid'); 
    container.innerHTML = '';

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