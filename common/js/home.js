document.addEventListener('DOMContentLoaded', () => {
  // 프로젝트, 서비스, 특징, 고객 리뷰 및 뉴스 항목에 마우스 오버 효과 추가
  const projects = document.querySelectorAll('.project');
  const services = document.querySelectorAll('.service');
  const testimonials = document.querySelectorAll('.testimonial');
  const newsItems = document.querySelectorAll('.news-item');
  const features = document.querySelectorAll('.features li');

  function addHoverEffect(elements) {
    elements.forEach(element => {
      element.addEventListener('mouseover', () => {
        element.style.transform = 'scale(1.05)';
        element.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
      });

      element.addEventListener('mouseout', () => {
        element.style.transform = 'scale(1)';
        element.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
      });

      element.addEventListener('click', () => {
        alert('상세 페이지로 이동합니다.');
        // 여기에 상세 페이지로 이동하는 코드 추가
      });
    });
  }

  addHoverEffect(projects);
  addHoverEffect(services);
  addHoverEffect(testimonials);
  addHoverEffect(newsItems);
  addHoverEffect(features);
});
