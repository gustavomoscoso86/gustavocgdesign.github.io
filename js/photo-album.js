(function(){
    const lightboxLinks = document.querySelectorAll('.lightbox');
    const overlay = document.createElement('div');
    overlay.classList.add('lightbox-overlay');
    document.body.appendChild(overlay);
  
    lightboxLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const src = link.getAttribute('href');
        const type = link.dataset.type;
        overlay.innerHTML = ''; // Limpiar overlay
  
        if (type === 'image') {
          const img = document.createElement('img');
          img.src = src;
          overlay.appendChild(img);
        } else if (type === 'video') {
          const video = document.createElement('video');
          video.src = src;
          video.controls = true;
          video.autoplay = true;
          overlay.appendChild(video);
        }
  
        overlay.style.display = 'flex';
      });
    });
  
    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
      overlay.innerHTML = '';
    });
  })();