// projects.js - 프로젝트 페이지의 JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const closeBtn = document.getElementsByClassName('close')[0];

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

  // 모달 열기
  document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', () => {
      modalImg.src = item.getAttribute('data-img');
      modalTitle.textContent = item.getAttribute('data-title');
      modalDescription.textContent = item.getAttribute('data-description');
      modal.style.display = 'block';
    });
  });

  // 모달 닫기
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});
