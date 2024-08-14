function initializeFileInputHandlers() {
  if (document.getElementById('file')) {
    document.getElementById('file').addEventListener('change', function () {
      if (this.files && this.files.length > 0) {
        const file = this.files[0];

        document.getElementById('employment-file').classList.add('hidden');

        document
          .getElementById('employment-file-info')
          .classList.remove('hidden');

        document
          .querySelector('.employment-info-done')
          .classList.add('loading');

        document.querySelector('.employment-info-name').textContent = file.name;
        document.querySelector('.employment-info-size').textContent =
          (file.size / 1024).toFixed(2) + ' KB';

        const progressBar = document.querySelector(
          '.employment-info-progress-bar'
        );

        const progressCount = document.querySelector(
          '.employment-info-progress-count'
        );

        let width = 0;

        const interval = setInterval(() => {
          if (width >= 100) {
            clearInterval(interval);
          } else {
            width++;
            progressBar.style.width = width + '%';
            progressCount.textContent = width + '%';
          }
        }, 30);

        setTimeout(() => {
          document
            .querySelector('.employment-info-done')
            .classList.remove('loading');
        }, 3000);
      }
    });

    document
      .querySelector('.employment-info-trash')
      .addEventListener('click', function () {
        document.getElementById('employment-file-info').classList.add('hidden');
        document.getElementById('employment-file').classList.remove('hidden');

        document.getElementById('file').value = '';
        document.querySelector('.employment-info-name').textContent = '';
        document.querySelector('.employment-info-size').textContent = '';
      });

    // logic to check that the file has been downloaded
    document
      .querySelector('.employment-next')
      .addEventListener('click', function () {
        let fileInput = document.getElementById('file');
        if (fileInput.files.length > 0) {
          window.location.href =
            'https://1devoid.github.io/CosoLogic/confirm-page.html';
        }
      });

    // logic to check that the file has been downloaded or fields is not empty
    function checkEmploymentForm() {
      const form = document.querySelector('.employment-form');
      const inputs = form.querySelectorAll(
        'input[type="text"], input[type="number"], input[type="email"], input[type="file"]'
      );
      const nextButton = document.querySelector('.employment-next');
      let isFilled = false;

      inputs.forEach((input) => {
        if (
          (input.type === 'file' && input.files.length > 0) ||
          (input.type !== 'file' && input.value.trim() !== '')
        ) {
          isFilled = true;
        }
      });

      if (isFilled) {
        nextButton.classList.remove('disabled');
      } else {
        nextButton.classList.add('disabled');
      }
    }

    document.querySelectorAll('.employment-form input').forEach((input) => {
      input.addEventListener('input', checkEmploymentForm);
      input.addEventListener('change', checkEmploymentForm);
    });
  }
}

export default initializeFileInputHandlers;
