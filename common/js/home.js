document.addEventListener('DOMContentLoaded', () => {
  // 프로젝트와 서비스 항목에 마우스 오버 애니메이션 추가
  const items = document.querySelectorAll('.project, .service');
  items.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.transform = 'scale(1.05)';
      item.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
    });
    item.addEventListener('mouseout', () => {
      item.style.transform = 'scale(1)';
      item.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    });
  });

  // 스크롤 시 페이드 인 효과 추가
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
