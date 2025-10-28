// Motivational Quotes Array
const motivationalQuotes = [
  "Push yourself, because no one else is going to do it for you.",
  "The only bad workout is the one that didn't happen.",
  "Sweat is just fat crying.",
  "Your body can do it. It's your mind you have to convince.",
  "Fitness is not about being better than someone else. It's about being better than you used to be.",
  "Don't stop when you're tired. Stop when you're done.",
  "The hardest lift of all is lifting your butt off the couch.",
  "Excuses don't burn calories.",
  "Train insane or remain the same.",
  "You miss 100% of the shots you don't take. Same goes for workouts."
];

// Function to get a random quote
function getRandomQuote() {
  return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
}

// Function to display daily quote
function displayDailyQuote() {
  const today = new Date().toDateString();
  const storedDate = localStorage.getItem('quoteDate');
  let quote = localStorage.getItem('dailyQuote');

  if (storedDate !== today || !quote) {
    quote = getRandomQuote();
    localStorage.setItem('dailyQuote', quote);
    localStorage.setItem('quoteDate', today);
  }

  const quoteElement = document.getElementById('dailyQuote');
  if (quoteElement) {
    quoteElement.textContent = `"${quote}"`;
  }
}

// Virtual Coach Messages
const coachMessages = [
  "Great job starting your workout! Keep pushing!",
  "Remember, consistency is key. You're doing amazing!",
  "Hydrate and stay strong! 💪",
  "Every rep counts. You've got this!",
  "Finish strong – you're almost there!"
];

// Function to show random coach message
function showCoachMessage() {
  const message = coachMessages[Math.floor(Math.random() * coachMessages.length)];
  // Create a toast notification
  const toast = document.createElement('div');
  toast.className = 'toast align-items-center text-white bg-success border-0 position-fixed';
  toast.style.cssText = 'top: 20px; right: 20px; z-index: 1050; min-width: 300px;';
  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">
        <i class="fas fa-dumbbell me-2"></i> Coach Says: ${message}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
    </div>
  `;
  document.body.appendChild(toast);
  const bsToast = new bootstrap.Toast(toast);
  bsToast.show();
  setTimeout(() => toast.remove(), 5000);
}

// Push Notification System
function requestNotificationPermission() {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('Notification permission granted');
      }
    });
  }
}

function sendWorkoutReminder() {
  if ('Notification' in window && Notification.permission === 'granted') {
    const notification = new Notification('BeFit Reminder', {
      body: 'Time for your workout! Stay consistent and crush your goals.',
      icon: './Images/logo.webp',
      badge: './Images/logo.webp'
    });

    notification.onclick = function() {
      window.focus();
      notification.close();
    };

    setTimeout(() => notification.close(), 10000);
  }
}

// Initialize motivational features
document.addEventListener('DOMContentLoaded', function() {
  displayDailyQuote();
  requestNotificationPermission();

  // Show coach message on page load (random chance)
  if (Math.random() < 0.3) { // 30% chance
    setTimeout(showCoachMessage, 3000);
  }

  // Set workout reminder every 2 hours (if permission granted)
  setInterval(sendWorkoutReminder, 2 * 60 * 60 * 1000); // 2 hours in milliseconds
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

const carousel = document.querySelector('#carouselExampleCaptions');
if (carousel) {
  carousel.addEventListener('mouseenter', () => {
    const bsCarousel = new bootstrap.Carousel(carousel);
    bsCarousel.pause();
  });
  carousel.addEventListener('mouseleave', () => {
    const bsCarousel = new bootstrap.Carousel(carousel);
    bsCarousel.cycle();
  });
}


// script of search function
// Get the search input and all course cards

const searchInput = document.getElementById('courseSearch');
const courseCards = document.querySelectorAll('.course-card');
const searchBtn = document.getElementById('searchBtn');


searchBtn.addEventListener('click', function(e) {
  e.preventDefault(); // <-- add this
  const query = searchInput.value.toLowerCase();

  courseCards.forEach(card => {
    const title = card.querySelector('h5').textContent.toLowerCase();
    if (title.includes(query)) {
      card.closest('.col-md-4').style.display = 'block';
    } else {
      card.closest('.col-md-4').style.display = 'none';
    }
  });
});






searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase(); // get the typed text in lowercase

  courseCards.forEach(card => {
    const title = card.querySelector('h5').textContent.toLowerCase();
    if(title.includes(query)) {
      card.closest('.col-md-4').style.display = 'block';
card.closest('.col-md-4').style.display = 'none';

    } else {
      card.closest('.col-md-4').style.display = 'block';
card.closest('.col-md-4').style.display = 'none';

    }
  });
});

function filterCourses() {
  const query = searchInput.value.toLowerCase();
  courseCards.forEach(card => {
    const title = card.querySelector('h5').textContent.toLowerCase();
    if(title.includes(query)){
      card.closest('.col-md-4').style.display = 'block';
    } else {
      card.closest('.col-md-4').style.display = 'none';
    }
  });
}

searchInput.addEventListener('input', filterCourses);
searchBtn.addEventListener('click', function(e){
  e.preventDefault();
  filterCourses();
});


function filterCourses() {
  const query = searchInput.value.toLowerCase().trim(); // remove extra spaces
  courseCards.forEach(card => {
    const title = card.querySelector('h5').textContent.toLowerCase().trim(); // trim spaces
    if(title.includes(query)){
      card.closest('.col-md-4').style.display = 'block';
    } else {
      card.closest('.col-md-4').style.display = 'none';
    }
  });
}








