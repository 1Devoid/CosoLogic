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
  }
}

export default initializeFileInputHandlers;
