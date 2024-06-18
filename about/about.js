// about.js - 회사소개 페이지의 JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target); // 애니메이션이 완료되면 옵저버에서 제거
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  