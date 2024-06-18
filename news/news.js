// news.js - 소식 페이지의 JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const newsItems = [
      {
        img: "../common/img/news1.webp",
        title: "뉴스 제목 1",
        description: "뉴스 1에 대한 간략한 설명입니다.",
        link: "news1.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      {
        img: "../common/img/news2.webp",
        title: "뉴스 제목 2",
        description: "뉴스 2에 대한 간략한 설명입니다.",
        link: "news2.html"
      },
      // 추가적인 뉴스 항목들...
    ];
  
    const itemsPerPage = 5;
    let currentPage = 1;
  
    function displayNewsItems(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const paginatedItems = newsItems.slice(start, end);
  
      const tbody = document.querySelector('#news-table tbody');
      tbody.innerHTML = "";
  
      paginatedItems.forEach(item => {
        const tr = document.createElement('tr');
        tr.classList.add('news-item');
        tr.innerHTML = `
          <td><img src="${item.img}" alt="${item.title}"></td>
          <td>${item.title}</td>
          <td>${item.description}</td>
          <td><a href="${item.link}" class="read-more">더보기</a></td>
        `;
        tbody.appendChild(tr);
      });
    }
  
    function setupPagination() {
      const pageCount = Math.ceil(newsItems.length / itemsPerPage);
      const pagination = document.getElementById('pagination');
      pagination.innerHTML = "";
  
      if (pageCount <= 1) return;
  
      const firstButton = createButton('<<', () => {
        currentPage = 1;
        displayNewsItems(currentPage);
        updatePagination();
      });
      pagination.appendChild(firstButton);
  
      const prevButton = createButton('<', () => {
        if (currentPage > 1) {
          currentPage--;
          displayNewsItems(currentPage);
          updatePagination();
        }
      });
      pagination.appendChild(prevButton);
  
      const pageInfo = document.createElement('span');
      pageInfo.classList.add('page-info');
      pagination.appendChild(pageInfo);
  
      const nextButton = createButton('>', () => {
        if (currentPage < pageCount) {
          currentPage++;
          displayNewsItems(currentPage);
          updatePagination();
        }
      });
      pagination.appendChild(nextButton);
  
      const lastButton = createButton('>>', () => {
        currentPage = pageCount;
        displayNewsItems(currentPage);
        updatePagination();
      });
      pagination.appendChild(lastButton);
  
      updatePagination();
    }
  
    function createButton(text, onClick) {
      const button = document.createElement('button');
      button.innerText = text;
      button.addEventListener('click', onClick);
      return button;
    }
  
    function updatePagination() {
      const pageCount = Math.ceil(newsItems.length / itemsPerPage);
      const pagination = document.getElementById('pagination');
      const buttons = pagination.querySelectorAll('button');
      const pageInfo = pagination.querySelector('.page-info');
  
      buttons.forEach(button => button.classList.remove('active'));
  
      const firstButton = buttons[0];
      const prevButton = buttons[1];
      const nextButton = buttons[buttons.length - 2];
      const lastButton = buttons[buttons.length - 1];
  
      firstButton.disabled = currentPage === 1;
      prevButton.disabled = currentPage === 1;
      nextButton.disabled = currentPage === pageCount;
      lastButton.disabled = currentPage === pageCount;
  
      pageInfo.innerText = `${currentPage}/${pageCount}`;
    }
  
    displayNewsItems(currentPage);
    setupPagination();
  });
  