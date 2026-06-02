document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const dropdownToggle = document.getElementById('dropdownToggle');
  const servicesDropdown = document.getElementById('servicesDropdown');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    const navLinks = document.querySelectorAll('.nav-link:not(#dropdownToggle), .dropdown-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  if (dropdownToggle && servicesDropdown) {
    dropdownToggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        servicesDropdown.classList.toggle('active');
        const arrowIcon = dropdownToggle.querySelector('i');
        if (arrowIcon) {
          arrowIcon.style.transform = servicesDropdown.classList.contains('active')
            ? 'rotate(180deg)'
            : 'rotate(0deg)';
        }
      }
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      if (servicesDropdown) {
        servicesDropdown.classList.remove('active');
        servicesDropdown.style.maxHeight = '';
      }
      if (navMenu) {
        navMenu.classList.remove('active');
      }
      if (menuToggle) {
        menuToggle.classList.remove('active');
      }
      document.body.style.overflow = '';
      const arrowIcon = dropdownToggle ? dropdownToggle.querySelector('i') : null;
      if (arrowIcon) {
        arrowIcon.style.transform = '';
      }
    }
  });


  if (typeof gsap !== 'undefined') {
    try {
      gsap.registerPlugin(ScrollTrigger);
      const loadTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      loadTimeline
        .fromTo("#mainHeader",
          { y: -80, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1 }
        )

        .fromTo(".hero-content .badge",
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8 },
          "-=0.6"
        )

        .fromTo(".hero-title",
          { y: 40, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8 },
          "-=0.6"
        )

        .fromTo(".hero-tagline",
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8 },
          "-=0.6"
        )

        .fromTo(".hero-actions",
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8 },
          "-=0.6"
        )

        .fromTo(".visual-canvas",
          { scale: 0.92, y: 50, autoAlpha: 0 },
          { scale: 1, y: 0, autoAlpha: 1, duration: 1 },
          "-=0.8"
        );


      const bars = document.querySelectorAll('.chart-bar');
      const barHeights = ['40%', '75%', '50%', '95%', '60%'];

      bars.forEach((bar, index) => {
        loadTimeline.to(bar, {
          height: barHeights[index],
          duration: 1,
          ease: "power3.out"
        }, `-=${index === 0 ? 0.7 : 0.85}`);
      });


      loadTimeline.add(() => {
        bars.forEach((bar) => {
          gsap.to(bar, {
            scaleY: 0.65,
            duration: 1.5 + Math.random() * 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            transformOrigin: "bottom"
          });
        });
      });


      loadTimeline.fromTo(".visual-overlay-card",
        { x: 60, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.8, ease: "back.out(1.5)" },
        "-=0.5"
      );


      loadTimeline.add(() => {
        gsap.to(".visual-overlay-card", {
          y: -10,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });

      gsap.fromTo(".trust-stats",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".trust-stats",
            start: "top 85%",
            toggleActions: "play none none none",
            onEnter: () => {
              document.querySelectorAll('.stat-number').forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'), 10);
                gsap.to(stat, {
                  innerText: target,
                  duration: 2,
                  snap: { innerText: 1 },
                  ease: "power2.out"
                });
              });
            }
          }
        }
      );


      gsap.fromTo(".features .section-header",
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features .section-header",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );


      gsap.fromTo(".feature-card",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );


      gsap.fromTo(".cta-container",
        { scale: 0.95, y: 40, autoAlpha: 0 },
        {
          scale: 1,
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-container",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );


      window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const xPercent = (clientX / window.innerWidth - 0.5) * 2;
        const yPercent = (clientY / window.innerHeight - 0.5) * 2;

        gsap.to(".glow-1", {
          x: xPercent * 25,
          y: yPercent * 25,
          duration: 1.2,
          ease: "power2.out"
        });

        gsap.to(".glow-2", {
          x: -xPercent * 35,
          y: -yPercent * 35,
          duration: 1.2,
          ease: "power2.out"
        });

        gsap.to(".glow-3", {
          x: xPercent * 20,
          y: -yPercent * 20,
          duration: 1.2,
          ease: "power2.out"
        });
      });

    } catch (e) {
      console.error("Error executing GSAP animations:", e);
      revealFallback();
    }
  } else {
    console.warn("GSAP library not loaded. Running fallback reveal.");
    revealFallback();
  }

  function revealFallback() {
    document.querySelectorAll('.reveal-hidden').forEach(el => {
      el.style.opacity = '1';
      el.style.visibility = 'visible';
    });
  }

  console.log('🚀 MainCrafts Landing Page successfully initialized!');
});
