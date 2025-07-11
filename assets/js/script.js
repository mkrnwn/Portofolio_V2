// ------------- DATA DINAMIS ------------- //
const skillData = [
  // Baris 1
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript' },

  // Baris 2
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg', name: 'Bootstrap' },
  { icon: 'https://images.seeklogo.com/logo-png/41/1/laragon-logo-png_seeklogo-412671.png', name: 'Laragon' },

  // Baris 3
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', name: 'PHP' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg', name: 'Blender' },
  { icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', name: 'ChatGPT' }
];


const projectData = [
  {
    img: 'projek1.jpg',
    title: 'Landing Page',
    desc: 'Landing page produk skincare dengan animasi GSAP.'
  },
  {
    img: 'projek2.jpg',
    title: 'Dashboard Admin',
    desc: 'Dashboard responsif berbasis React & Chart.js.'
  },
];

const certificateData = [
  {
    img: 'sertifikat1.jpg',
    desc: 'Sertifikat Frontend Dicoding 2024'
  },
  {
    img: 'sertifikat2.jpg',
    desc: 'Google UI/UX Professional 2023'
  },
];

// ------------- RENDER FUNGSI ------------- //
function renderSkills() {
  const container = document.getElementById('skills-row');
  if (!container) return;

  container.innerHTML = ''; // Kosongkan terlebih dahulu
  const rendered = new Set();

  let currentRow;

  skillData.forEach(({ icon, name }, index) => {
    if (rendered.has(name)) return;
    rendered.add(name);

    // Buat baris baru setiap 3 item
    if (index % 3 === 0) {
      currentRow = document.createElement('div');
      currentRow.className = 'row';
      container.appendChild(currentRow);
    }

    const col = document.createElement('div');
    col.className = 'col-4 mb-4';

    const card = document.createElement('div');
    card.className = 'card p-3 h-100 bg-transparent border-0 text-white text-center';

    const img = document.createElement('img');
    img.src = icon;
    img.alt = name;
    img.style.width = "60px";
    img.className = "mx-auto mb-3";

    const title = document.createElement('h6');
    title.className = 'mb-0';
    title.textContent = name;

    card.appendChild(img);
    card.appendChild(title);
    col.appendChild(card);
    currentRow.appendChild(col);
  });
}



function renderProjects() {
  const row = document.getElementById('projects-row');
  if (!row) return;
  row.innerHTML = '';

  projectData.forEach(({ img, title, desc }) => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="assets/img/${img}" class="card-img-top" alt="${title}"/>
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${desc}</p>
        </div>
      </div>`;
    row.appendChild(col);
  });
}

function renderCertificates() {
  const row = document.getElementById('certificates-row');
  if (!row) return;
  row.innerHTML = '';

  certificateData.forEach(({ img, desc }) => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="assets/img/${img}" class="card-img-top" alt="${desc}"/>
        <div class="card-body">
          <p class="card-text">${desc}</p>
        </div>
      </div>`;
    row.appendChild(col);
  });
}

// ------------- INISIALISASI SAAT DOM SIAP ------------- //
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  renderCertificates();

  // Init AOS (Animasi on Scroll)
  AOS.init({ once: true, duration: 800 });

  // Init ScrollReveal (bagian .reveal)
  const sr = ScrollReveal({ distance: '50px', duration: 800, easing: 'ease-out', reset: false });
  sr.reveal('.reveal');
});
