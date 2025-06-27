document.addEventListener('DOMContentLoaded', function() {
      const animateOnScroll = () => {
        const animatedElements = document.querySelectorAll(
          '.div-style-de1cdd0b, .div-style-d42ce3bc, .div-style-c6911f82, ' +
          '.div-style-fe54fcd1, .div-style-7a0b5b78, .div-style-77f7c066, ' +
          '.div-style-9a6aed4d, .div-style-db3b5b03, .div-style-213ca08b, ' +
          '.div-style-8f99d9b4, .div-style-bc47e873, .div-style-34b535ba'
        );

        const handleScroll = () => {
          animatedElements.forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }
          });
        };

        animatedElements.forEach(el => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(30px)';
          el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        });

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 
      };

      const parallaxEffect = () => {
        const parallaxElements = document.querySelectorAll('.div-style-5cbad7f8');
        
        window.addEventListener('scroll', () => {
          const scrollPosition = window.pageYOffset;
          
          parallaxElements.forEach(el => {
            el.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
          });
        });
      };

      const animateNumbers = () => {
        const statItems = [
          
        ];

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              statItems.forEach(item => {
                if (item.element && !item.element.dataset.animated) {
                  animateValue(item.element, 0, item.final, item.duration);
                  item.element.dataset.animated = true;
                }
              });
              observer.disconnect();
            }
          });
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.div-style-f87a118e');
        if (statsSection) observer.observe(statsSection);

        function animateValue(element, start, end, duration) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = end > 1000 ? value.toLocaleString() : value;
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      };

      const smoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
              });
            }
          });
        });
      };

      const buttonHoverEffects = () => {
        const buttons = document.querySelectorAll(
          '.Button-style-b32ef763, .register-button, .earn-button, ' +
          '.primary-btn, .secondary-btn, .profit-button'
        );

        buttons.forEach(button => {
          button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
          });
          button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
          });
        });
      };

      animateOnScroll();
      parallaxEffect();
      animateNumbers();
      smoothScroll();
      buttonHoverEffects();

      const faqItems = document.querySelectorAll('.custom-select, .selector-wrapper');
      faqItems.forEach(item => {
        item.addEventListener('click', function() {
          const content = this.nextElementSibling;
          if (content && content.classList.contains('select-dropdown')) {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
          }
          
          const arrow = this.querySelector('.select-arrow, .dropdown-icon');
          if (arrow) {
            arrow.style.transform = arrow.style.transform === 'rotate(180deg)' ? 'rotate(0)' : 'rotate(180deg)';
          }
        });
      });
    });


     document.addEventListener('DOMContentLoaded', function() {
      // Анимация при скролле
      const animateOnScroll = () => {
        const animatedElements = document.querySelectorAll('[data-animated]');
        
        const handleScroll = () => {
          animatedElements.forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
              el.classList.add('animate');
            }
          });
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll();
      };
      
      // Параллакс эффект
      const parallaxElements = document.querySelectorAll('.parallax');
      if (parallaxElements.length > 0) {
        window.addEventListener('scroll', function() {
          const scrollPosition = window.pageYOffset;
          
          parallaxElements.forEach(el => {
            el.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
          });
        });
      }
      
      // Анимация чисел
      const animateNumbers = () => {
        const statItems = [
          { element: document.querySelector('.stat-clients'), final: 960696, duration: 2000 },
          { element: document.querySelector('.stat-days'), final: 932, duration: 1500 },
          { element: document.querySelector('.stat-new'), final: 67, duration: 1000 },
          { element: document.querySelector('.stat-avg'), final: 109500, duration: 2000 }
        ].filter(item => item.element);
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              statItems.forEach(item => {
                if (item.element && !item.element.dataset.animated) {
                  animateValue(item.element, 0, item.final, item.duration);
                  item.element.dataset.animated = true;
                }
              });
            }
          });
        }, { threshold: 0.5 });
        
        const statsSection = document.querySelector('.stats');
        if (statsSection) observer.observe(statsSection);
        
        function animateValue(element, start, end, duration) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = end > 1000 ? value.toLocaleString() : value;
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      };
      
      // Аккордеон FAQ
      const accordionItems = document.querySelectorAll('.accordion-item');
      accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
          const currentlyActive = document.querySelector('.accordion-item.active');
          
          if (currentlyActive && currentlyActive !== item) {
            currentlyActive.classList.remove('active');
            currentlyActive.querySelector('.accordion-content').style.maxHeight = null;
          }
          
          item.classList.toggle('active');
          const content = item.querySelector('.accordion-content');
          
          if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            content.style.maxHeight = null;
          }
        });
      });
      
      // Инициализация всех функций
      animateOnScroll();
      animateNumbers();
      
      // Эффекты при наведении на кнопки
      const buttons = document.querySelectorAll('.btn');
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          button.style.transform = 'translateY(-2px)';
        });
        button.addEventListener('mouseleave', () => {
          button.style.transform = 'translateY(0)';
        });
      });
    });