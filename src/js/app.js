import bootstrapInit from './libs/bootstrap.bundle.min.js';

bootstrapInit();

function initializeFileInputHandlers() {
  if (document.getElementById('file')) {
    document.getElementById('file').addEventListener('change', function () {
      if (this.files && this.files.length > 0) {
        const file = this.files[0];

        document.getElementById('employment-file').classList.add('hidden');
        document
          .getElementById('employment-file-info')
          .classList.remove('hidden');

        document.querySelector('.employment-info-name').textContent = file.name;
        document.querySelector('.employment-info-size').textContent =
          (file.size / 1024).toFixed(2) + ' KB';
      }
    });

    document
      .querySelector('.employment-info-trash')
      .addEventListener('click', function () {
        document.getElementById('employment-file-info').classList.add('hidden');
        document.getElementById('employment-file').classList.remove('hidden');

        // Очищення вибраного файлу
        document.getElementById('file').value = '';
        document.querySelector('.employment-info-name').textContent = '';
        document.querySelector('.employment-info-size').textContent = '';
      });
  }
}

initializeFileInputHandlers();
