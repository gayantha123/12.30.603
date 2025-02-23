
        // JavaScript for Dark/Light Mode Toggle
        function toggleMode() {
            const body = document.body;
            const modeSwitch = document.querySelector('.mode-switch i');

            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                modeSwitch.classList.remove('fa-moon');
                modeSwitch.classList.add('fa-sun');
            } else {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                modeSwitch.classList.remove('fa-sun');
                modeSwitch.classList.add('fa-moon');
            }
        }

        // JavaScript for Page Transitions
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('.page-transition');
            sections.forEach(section => {
                section.classList.add('active');
            });
        });

        // JavaScript for Counter Animation
        function animateCounter(element, target, duration) {
            let start = 0;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                element.textContent = Math.floor(start).toLocaleString();
                if (start >= target) {
                    clearInterval(timer);
                    element.textContent = target.toLocaleString();
                }
            }, 16);
        }

        document.addEventListener('DOMContentLoaded', () => {
            animateCounter(document.getElementById('subscriber-count'), 322000);
            animateCounter(document.getElementById('views-count'), 22691549);
        });
   