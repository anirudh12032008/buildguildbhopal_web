document.addEventListener('DOMContentLoaded', () => {
  const projectData = [
    {
      title: 'Cyberboard V2',
      image: 'https://github.com/notaroomba/cyberboard/blob/main/assets/banner.png?raw=true',
      alt: 'A circuit board on a desk',
      description: 'A Raspberry Pi Pico-sized STM32 development board with Bluetooth, battery support, IMU and a barometer!'
    },
    {
      title: 'AngstromIO-devboard',
      image: 'https://private-user-images.githubusercontent.com/151221667/556464246-633cc341-a372-48ec-8386-ac6ccdab7370.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzU1MzMzNDQsIm5iZiI6MTc3NTUzMzA0NCwicGF0aCI6Ii8xNTEyMjE2NjcvNTU2NDY0MjQ2LTYzM2NjMzQxLWEzNzItNDhlYy04Mzg2LWFjNmNjZGFiNzM3MC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNDA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDQwN1QwMzM3MjRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NDg0ZjQ0Mjg0M2IxYzdhNGNmZDAxMmI2N2M5NWNkYTE1YTZjZmJjYzM1ZGY2Y2I1MWUwNGFiNWFlMjY1YzI4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.LY2EuO6r_qxJgb9ZHE1F9pOIh2dTVDW5CRxBoMB-0o0',
      alt: 'Electronics prototyping setup',
      description: 'AngstromIO is one of the smallest devboards out there, barely longer than a USB-C connector.'
    },
    {
      title: 'ES_01 E-ink Smartwatch',
      image: '/watch.png',
      alt: 'LED lights and electronics',
      description: 'An ultra-thin ESP32S3-based smartwatch'
    },
    {
      title: 'KillerSplit',
      image: 'https://private-user-images.githubusercontent.com/122672193/530468387-f562f993-20c8-43f6-930b-d2d696f2134c.jpeg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzU1MzMxODQsIm5iZiI6MTc3NTUzMjg4NCwicGF0aCI6Ii8xMjI2NzIxOTMvNTMwNDY4Mzg3LWY1NjJmOTkzLTIwYzgtNDNmNi05MzBiLWQyZDY5NmYyMTM0Yy5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDQwNyUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA0MDdUMDMzNDQ0WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MDA3YjgxYTBkZTg3MGJmNzdmZTdjMjRkN2IxN2Y5ZWI4NjMwYTkwNDAzYWEyNDBkZmQ0Mzk0ZWQ4NjMxNjlkMyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.fkDVsaW5-HYp7W-p4sNOWdWUFsyBUvetfudmpBKPFk0',
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
      <article class="project-card">
        <img src="${entry.image}" alt="${entry.alt}">
        <div class="project-overlay">
          <h3>${entry.title}</h3>
          <p>${entry.description}</p>
        </div>
      </article>
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
