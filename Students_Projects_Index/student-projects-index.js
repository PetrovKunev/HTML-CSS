// Примерни данни за проектите по класове
const projects = {
    '12b': [
        {
            name: "Калоян Керемедчиев, Кубрат Кирилов",
            title: "Информативен сайт за играта белот",
            description: "Сайт, който представя правилата на играта белот, както и стратегии за игра.",
            tags: ["HTML", "CSS", "JavaScript"],
            url: "#"
        },
        {
            name: "Елена Гюрова, Стела Пожарлиева",
            title: "NatureX",
            description: "",
            tags: ["HTML", "CSS", "JavaScript"],
            url: "#"
        },
        {
            name: "Димитър Цонев, Кристиян Георгиев",
            title: "Quiz App",
            description: "Приложение за викторина с въпроси и отговори по различни теми.",
            tags: ["HTML", "CSS", "JavaScript"],
            url: "#"
        },
        {
            name: "Раян Иванов, София Иванова",
            title: "Калкулатор",
            description: "Калкулатор, който обхваща " +
                        "основните клонове на математиката " +
                        "и предоставя инструменти за " +
                        "изчисления.",
            tags: ["HTML", "CSS", "JavaScript", "NoSQL", "Vue.js", "Tailwind CSS", "Math.js", "Аppwrite" ],
            url: "https://premium-calculator-rho.vercel.app/"
        },
        {
            name: "Мартин Андонов, Филип Иванов",
            title: "Листовки",
            description: "Сайт, който представя информация за листовките и предоставя възможност за упражняване на тестове.",
            tags: ["HTML", "CSS", "JavaScript"],
            url: "#"
        },
        {
            name: "Мария Велчева, Рая Цонева",
            title: "My style",
            description: "Сайт, който представя представя персонализирани модни тенденции и стилове.",
            tags: ["HTML", "CSS", "JavaScript", "E-commerce"],
            url: "#"
        },
        // Добавете още проекти за 12Б
    ],
    '12d': [
        {
            name: "Мартин Ваклев, Ерик Джукев, Никола Мартулков",
            title: "Knockout gym",
            description: "Сайтът промотира залата ни \"Нокаут\", в която има различни видове тренировки за всякакъв тип хора, много екстри и допълнителни продукти. Представяме екипа ни, начина ни на работа и всички плюсове, които предоставяме на членовете на залата.",
            tags: ["HTML", "CSS"],
            url: "https://knockoutgym.free.bg/"
        },
        {
            name: "Никол Димитрова, Люба Матуска, Мартина Тончева, Ралица Григорова",
            title: "Future Fashion",
            description: "Нашият сайт представлява онлайн магазин за дрехи. Той е стилен и модерен, и предоставя лесен достъп до всички артикули в него. Сайтът предлага голямо разнообразие от дрехи, както за жени, така и за мъже.",
            tags: ["HTML", "CSS"],
            url: "https://futurefashion.free.bg/"
        },
        {
            name: "Ели Венева, Ирина Кожухарова, Леа Цолова",
            title: "Softblush Beauty",
            description: "Нашия сайт предлага различни козметични продукти, като грим и грижа за кожата. Има богат избор от висококачествени артикули, с които да изглеждате прекрасно. ",
            tags: ["HTML", "CSS"],
            url: "https://softblushbeauty.free.bg/"
        },
        // Добавете още проекти за 12Д
    ],
    '12e': [
        {
            name: "Георги Димитров",
            title: "Спортна Статистика",
            description: "Платформа за следене на спортни резултати и статистики в реално време.",
            tags: ["React", "Node.js", "API"],
            url: "#"
        },
        // Добавете още проекти за 12Е
    ]
};

function createProjectCard(project, className) {
    return `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p><strong>Екип: </strong> ${project.name}</p>
            <p>${project.description}</p>
            <div class="tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${project.url}" class="visit-btn" target="_blank">Разгледай проекта</a>
        </div>
    `;
}

function renderProjects(filteredProjects = null) {
    const projectsToRender = filteredProjects || projects;

    // Render 12Б projects
    const projects12B = document.getElementById('projects12B');
    if (projects12B && projectsToRender['12b']) {
        projects12B.innerHTML = projectsToRender['12b']
            .map(project => createProjectCard(project, '12b'))
            .join('');
    } else {
        projects12B.innerHTML = '';
    }

    // Render 12Д projects
    const projects12D = document.getElementById('projects12D');
    if (projects12D && projectsToRender['12d']) {
        projects12D.innerHTML = projectsToRender['12d']
            .map(project => createProjectCard(project, '12d'))
            .join('');
    } else {
        projects12D.innerHTML = '';
    }

    // Render 12E projects
    const projects12E = document.getElementById('projects12E');
    if (projects12E && projectsToRender['12e']) {
        projects12E.innerHTML = projectsToRender['12e']
            .map(project => createProjectCard(project, '12e'))
            .join('');
    } else {
        projects12E.innerHTML = '';
    }
}

function filterProjects(searchText, selectedClass) {
    let filteredProjects = {};

    // Loop through each class
    Object.entries(projects).forEach(([className, classProjects]) => {
        // Only include the class if it matches the filter or if showing all classes
        if (selectedClass === 'all' || selectedClass === className) {
            // Filter projects within the class
            const filtered = classProjects.filter(project =>
                project.name.toLowerCase().includes(searchText.toLowerCase()) ||
                project.title.toLowerCase().includes(searchText.toLowerCase()) ||
                project.description.toLowerCase().includes(searchText.toLowerCase()) ||
                project.tags.some(tag => tag.toLowerCase().includes(searchText.toLowerCase()))
            );

            // Only add the class to filtered results if it has matching projects
            if (filtered.length > 0) {
                filteredProjects[className] = filtered;
            }
        }
    });

    return filteredProjects;
}

// Show/hide class sections based on filter
function toggleClassSections(selectedClass) {
    const sections = document.querySelectorAll('.class-section');
    sections.forEach(section => {
        if (selectedClass === 'all') {
            section.style.display = 'block';
        } else if (section.classList.contains(`class-${selectedClass.toLowerCase()}`)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Инициализиране на страницата
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderProjects();

    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.class-filter-btn');
    let selectedClass = 'all';

    searchInput.addEventListener('input', (e) => {
        const filteredProjects = filterProjects(e.target.value, selectedClass);
        renderProjects(filteredProjects);
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            selectedClass = button.dataset.class;
            const filteredProjects = filterProjects(searchInput.value, selectedClass);
            renderProjects(filteredProjects);
            toggleClassSections(selectedClass);
        });
    });
    toggleClassSections(selectedClass);
});

document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }


});