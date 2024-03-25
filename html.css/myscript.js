const toggleSwitch = document.querySelector('.navbar-toggler');

    toggleSwitch.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });