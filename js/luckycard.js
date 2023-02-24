

  var boxContainer = document.querySelector('.box-container');
  var boxImage = document.querySelector('.box-image');
  var cardImage = document.querySelector('.card-image');

// Lấy thẻ button và bắt sự kiện click chuột
  var showBoxButton = document.getElementById('show-box');

  showBoxButton.addEventListener('click', function() {
      boxImage.classList.add('shake');
      setTimeout(() => {
      boxImage.classList.remove('shake');
      }, 3000);
  });


          // Bắt sự kiện click vào nút bấm
  showBoxButton.addEventListener('click', function() {

  // Hiển thị hình ảnh
      cardImage.style.transform = 'translateY(0)';
  });


