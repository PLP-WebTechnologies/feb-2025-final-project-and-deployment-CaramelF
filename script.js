//JavaScript for mobile menu toggle

            document.addEventListener('DOMContentLoaded', function() {
                const hamburger = document.getElementById('hamburger');
                const navLinks = document.getElementById('navLinks');
                
                hamburger.addEventListener('click', function() {
                    navLinks.classList.toggle('active');
                });
                
                // Close menu when clicking on a link
                const links = document.querySelectorAll('.nav-links a');
                links.forEach(link => {
                    link.addEventListener('click', function() {
                        navLinks.classList.remove('active');
                    });
                });
                
                // Smooth scrolling for anchor links
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function(e) {
                        e.preventDefault();
                        
                        document.querySelector(this.getAttribute('href')).scrollIntoView({
                            behavior: 'smooth'
                        });
                    });
                });
            });
       