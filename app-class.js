
// Modal Image Gallery
const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('.main-img');
const modalImages = modal.querySelectorAll('.modal-img');
const prevBtn = modal.querySelector('.prev-btn');
const nextBtn = modal.querySelector('.next-btn');
const closeBtn = modal.querySelector('.close-btn');

// Open modal when an image is clicked
document.querySelectorAll('.img').forEach((image) => {
  image.addEventListener('click', function () {
    const imgSrc = this.src;
    modal.style.display = 'flex';
    modalImg.src = imgSrc;

    // Set the selected thumbnail
    modalImages.forEach((thumb) => {
      thumb.classList.remove('selected');
      if (thumb.src === imgSrc) {
        thumb.classList.add('selected');
      }
    });
  });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

// Show next image
nextBtn.addEventListener('click', function () {
  const selectedImage = modal.querySelector('.modal-img.selected');
  let nextImage = selectedImage.nextElementSibling;
  if (!nextImage) nextImage = modalImages[0];

  selectedImage.classList.remove('selected');
  nextImage.classList.add('selected');
  modalImg.src = nextImage.src;
});

// Show previous image
prevBtn.addEventListener('click', function () {
  const selectedImage = modal.querySelector('.modal-img.selected');
  let prevImage = selectedImage.previousElementSibling;
  if (!prevImage) prevImage = modalImages[modalImages.length - 1];

  selectedImage.classList.remove('selected');
  prevImage.classList.add('selected');
  modalImg.src = prevImage.src;
});

// Review Section Functionality
const reviews = [
  {
    name: 'Jones SinClair',
    job: 'UI-UX Designer',
    img: './images/yy.jpg',
    info: '"Website Bagus Cocok Untuk Pemula"',
  },
  {
    name: 'Chris Evans',
    job: 'Web Developer',
    img: './images/cc.jpg',
    info: '"Sangat Menginspirasi"',
  },
  {
    name: 'Connor Kenway',
    job: 'Graphic Designer',
    img: './images/k.jpeg',
    info: '"Menarik"',
  },
  {
    name: 'Lewis DuFronc',
    job: 'Designer of Havard',
    img: './images/lo.jpg',
    info: '"Teknologi Sangatlah Penting untuk Masa Depan"',
  },
  {
    name: 'Kelly Jordan',
    job: 'Graphic Designer & VA artist',
    img: './images/ap.jpg',
    info: '"Menjadi Alternatif"',
  },
  {
    name: 'Mr.Ambatukam',
    job: 'Prof.Ngawi University',
    img: './images/amba.jpeg',
    info: '"Kelazzz"',
  },
];

let currentIndex = 0;

const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const personImg = document.getElementById('person-img');

// Function to change review
function changeReview(index) {
  const review = reviews[index];
  author.textContent = review.name;
  job.textContent = review.job;
  info.textContent = review.info;
  personImg.src = review.img;
}

// Next button functionality for reviews
const nextBtnReview = document.querySelector('.next-btn');
nextBtnReview.addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % reviews.length;
  changeReview(currentIndex);
});

// Previous button functionality for reviews
const prevBtnReview = document.querySelector('.prev-btn');
prevBtnReview.addEventListener('click', function () {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  changeReview(currentIndex);
});

// Surprise me functionality for reviews
const randomBtn = document.querySelector('.random-btn');
randomBtn.addEventListener('click', function () {
  currentIndex = Math.floor(Math.random() * reviews.length);
  changeReview(currentIndex);
});

// Initialize the first review
changeReview(currentIndex);
