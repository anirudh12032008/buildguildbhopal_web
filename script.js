document.addEventListener('DOMContentLoaded', () => {
  const projectData = [
    {
      title: 'Cyberboard V2',
      href: 'https://github.com/notaroomba/cyberboard',
      image: 'https://github.com/notaroomba/cyberboard/blob/main/assets/banner.png?raw=true',
      alt: 'A circuit board on a desk',
      description: 'A Raspberry Pi Pico-sized STM32 development board with Bluetooth, battery support, IMU and a barometer!'
    },
    {
      title: 'AngstromIO-devboard',
      href: 'https://github.com/Dieu-de-l-elec/AngstromIO-devboard',
      image: '/1.png',
      alt: 'Electronics prototyping setup',
      description: 'AngstromIO is one of the smallest devboards out there, barely longer than a USB-C connector.'
    },
    {
      title: 'ES_01 E-ink Smartwatch',
      href: 'https://github.com/sandgum/Triangulate-ES_01-Watch',
      image: '/watch.png',
      alt: 'LED lights and electronics',
      description: 'An ultra-thin ESP32S3-based smartwatch'
    },
    {
      title: 'KillerSplit',
      href: 'https://github.com/MrKillerShaunBa/KillerSplit',
      image: '/2.png',
      alt: 'Drone and hardware project',
      description: 'An ergonomic, wireless, split, low-profile keyboard.'
    }
  ];

  const eventData = [
    {
      title: 'UNDERCITY',
      href: 'https://undercity.hackclub.com',
      image: 'https://undercity.hackclub.com/finalpic.png',
      alt: 'Hack Clubbers at Undercity with their projects',
      description: 'A 4-day hardware hackathon at GitHub HQ where teens built 75 projects in 72 hours.'
    },
    {
      title: 'SHIPWRECKED',
      href: 'https://shipwrecked.hackclub.com',
      image: 'https://hackclub.com/_next/image/?url=%2Fhackathons%2Fassemble.JPG&w=1080&q=75&dpl=dpl_7ES77uKsPqVCAF137xsd3Re5LLrp',
      alt: 'A live Hack Club hackathon scene on stage',
      description: 'A piratey island adventure in Boston Harbor where teens spent four days building together.'
    },
    {
      title: 'OVERGLADE',
      href: 'https://overglade.hackclub.com',
      image: 'https://hackclub.com/_next/image/?url=%2Fhome%2Fzephyr-spacex.jpeg&w=3840&q=75&dpl=dpl_7ES77uKsPqVCAF137xsd3Re5LLrp',
      alt: 'Hack Clubbers gathered at an IRL Hack Club event',
      description: 'A hyper-immersive game jam where teens from around the world built something strange and wonderful.'
    },
    {
      title: 'OUTERNET',
      href: 'https://outernet.hackclub.com',
      image: 'https://hackclub.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fouternet-110.ce42bc67.jpg&w=1080&q=75&dpl=dpl_7ES77uKsPqVCAF137xsd3Re5LLrp',
      alt: 'Hack Clubbers gathering outdoors at Outernet',
      description: 'A four-day experimental coding and camping trip that turned a campsite into a hacker oasis.'
    }
  ];

  const pastEventsGrid = document.getElementById('pastEventsGrid');
  const projectStrip = document.getElementById('projectStrip');

  if (pastEventsGrid) {
    pastEventsGrid.innerHTML = eventData.map((entry) => `
      <a class="past-event-link" href="${entry.href}" target="_blank" rel="noreferrer">
        <article class="past-event-card">
          <img src="${entry.image}" alt="${entry.alt}">
          <div class="past-event-overlay">
            <h3>${entry.title}</h3>
            <p>${entry.description}</p>
          </div>
        </article>
      </a>
    `).join('');
  }

  if (projectStrip) {
    projectStrip.innerHTML = projectData.map((entry) => `
      <a class="project-link" href="${entry.href}" target="_blank" rel="noreferrer">
        <article class="project-card">
          <img src="${entry.image}" alt="${entry.alt}">
          <div class="project-overlay">
            <h3>${entry.title}</h3>
            <p>${entry.description}</p>
          </div>
        </article>
      </a>
    `).join('');
  }

  document.querySelectorAll('.carousel-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      if (!targetId) {
        return;
      }

      const track = document.getElementById(targetId);
      if (!track) {
        return;
      }

      const firstCard = track.querySelector('.project-card, .past-event-card');
      const gap = 16;
      const step = firstCard ? (firstCard.getBoundingClientRect().width + gap) : 320;
      const direction = button.classList.contains('carousel-btn-next') ? 1 : -1;

      track.scrollBy({
        left: direction * step,
        behavior: 'smooth'
      });
    });
  });

  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') {
        return;
      }

      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }

      event.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    });
  });
});
