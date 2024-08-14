function handleInfoControlsClick() {
  const icons = document.querySelectorAll('[data-controls-icon]');
  if (icons) {
    icons.forEach((icon) => {
      icon.addEventListener('click', () => {
        if (icon.classList.contains('active')) {
          icon.classList.remove('active');
        } else {
          icons.forEach((el) => el.classList.remove('active'));
          icon.classList.add('active');
        }
      });
    });

    const iconTextarea = document.querySelectorAll(
      '[data-controls-icon-comment]'
    );
    iconTextarea.forEach((icon) => {
      icon.addEventListener('click', () => {
        if (icon.classList.contains('active')) {
          icon.classList.remove('active');
        } else {
          icons.forEach((el) => el.classList.remove('active'));
          icon.classList.add('active');
        }
      });
    });

    const commentIcons = document.querySelectorAll(
      '[data-controls-icon-comment]'
    );

    commentIcons.forEach((icon) => {
      icon.addEventListener('click', () => {
        const infoControls = icon.closest('.info-controls');

        if (infoControls) {
          const textArea = infoControls.querySelector(
            '.info-controls-textarea'
          );

          if (textArea) {
            if (textArea.classList.contains('hidden')) {
              textArea.classList.remove('hidden');
            } else {
              textArea.classList.add('hidden');
            }
          }
        }
      });
    });
  }
}

export default handleInfoControlsClick;
