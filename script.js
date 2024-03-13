document.addEventListener('DOMContentLoaded', function () {
    const courses = document.querySelectorAll('.column-course');
    const sortSelect = document.getElementById('sort_by');

    sortSelect.addEventListener('change', function () {
      const sortBy = this.value;

      if (sortBy === 'priceAsc') {
        sortCoursesByPrice(true);
      } else if (sortBy === 'priceDesc') {
        sortCoursesByPrice(false);
      }
    });

    function sortCoursesByPrice(ascending) {
      const sortedCourses = Array.from(courses).sort((a, b) => {
        const priceA = parseInt(a.querySelector('.actual-price').textContent.replace(/\D/g, ''), 10);
        const priceB = parseInt(b.querySelector('.actual-price').textContent.replace(/\D/g, ''), 10);

        return ascending ? priceA - priceB : priceB - priceA;
      });

      // Remove existing courses
      courses.forEach(course => course.parentNode.removeChild(course));

      // Append sorted courses
      sortedCourses.forEach(course => {
        document.querySelector('.container-course').appendChild(course);
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
  var boxes = document.querySelectorAll('.box');

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function showBoxes() {
    boxes.forEach(function(box) {
      if (isInViewport(box)) {
        box.classList.add('show');
      }
    });
  }

  // Initial check
  showBoxes();

  // Check on scroll
  document.addEventListener('scroll', showBoxes);
});
