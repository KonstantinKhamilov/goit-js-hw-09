/*export function naviFunction() {
  const prevPage = document.getElementById('prevPage');
  const nextPage = document.getElementById('nextPage');

  if (prevPage && nextPage) {
    prevPage.addEventListener('click', function (event) {
      event.preventDefault();
      const currentPage = document.querySelector('.pagination a.active');
      if (currentPage.previousElementSibling.id !== 'prevPage') {
        window.location.href = currentPage.previousElementSibling.href;
      }
    });

    nextPage.addEventListener('click', function (event) {
      event.preventDefault();
      const currentPage = document.querySelector('.pagination a.active');
      if (currentPage.nextElementSibling.id !== 'nextPage') {
        window.location.href = currentPage.nextElementSibling.href;
      }
    });
  }
}*/
