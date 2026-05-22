
   function abrir() {
    const item = document.getElementById('itens');
    if (item.style.display === 'none' || item.style.display === '') {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
}
function copiarTexto() {
    const texto = document.getElementById("texto").innerText;
  navigator.clipboard.writeText(texto).then(() => {
    alert("Texto copiado!");
  }).catch(err => {
    alert("Erro ao copiar: " + err);
  });
}

  // --- SLIDE PATROCINADORES ---
  const patrocinadoresImgs = [
    "imgPatrocinadores/KJ(1).png",
    "imgPatrocinadores/20260507_132328331_iOS.png",
    "imgPatrocinadores/20260508_202756730_iOS.jpg",
    "imgPatrocinadores/20260508_210838035_iOS.png",
    "imgPatrocinadores/20260508_210926220_iOS.png",
    "imgPatrocinadores/20260508_222730952_iOS.png",
    "imgPatrocinadores/20260508_222741731_iOS.png",
    "imgPatrocinadores/20260508_222745308_iOS.png",
    "imgPatrocinadores/20260508_222749868_iOS.png",
    "imgPatrocinadores/20260508_222754916_iOS.png",
    "imgPatrocinadores/20260508_222800582_iOS.jpg",
    "imgPatrocinadores/20260508_222806510_iOS.png",
    "imgPatrocinadores/20260508_222813639_iOS.png",
    "imgPatrocinadores/20260508_222821132_iOS.png",
    "imgPatrocinadores/20260508_222831638_iOS.png",
    "imgPatrocinadores/20260508_222837059_iOS.png",
    "imgPatrocinadores/20260508_222847099_iOS.png",
    "imgPatrocinadores/20260508_222850158_iOS.png",
    "imgPatrocinadores/20260508_222901570_iOS.png",
    "imgPatrocinadores/20260508_222908217_iOS.png",
    "imgPatrocinadores/20260508_222917432_iOS.png",
    "imgPatrocinadores/20260508_222924691_iOS.png",
    "imgPatrocinadores/20260508_222929941_iOS.png",
    "imgPatrocinadores/20260508_222934907_iOS.png",
    "imgPatrocinadores/20260508_222940242_iOS.png",
    "imgPatrocinadores/20260508_222945635_iOS.png",
    "imgPatrocinadores/20260508_222952981_iOS.png",
    "imgPatrocinadores/20260508_222958365_iOS.png",
    "imgPatrocinadores/20260508_223003636_iOS.png",
    "imgPatrocinadores/20260508_223009168_iOS.png",
    "imgPatrocinadores/20260508_223015274_iOS.png",
    "imgPatrocinadores/KJ.png"
  ];

  let slideIndex = 0;

  function showSlidePatrocinadores(idx) {
    const container = document.getElementById('slide-img-container');
    if (!container) return;
    // Loop
    if (idx < 0) slideIndex = patrocinadoresImgs.length - 1;
    else if (idx >= patrocinadoresImgs.length) slideIndex = 0;
    else slideIndex = idx;
    container.innerHTML = `<img src="${patrocinadoresImgs[slideIndex]}" class="slide-img" style="max-width: 300px; max-height: 120px; border-radius: 10px; box-shadow: 0 2px 8px #0002;" alt="Patrocinador">`;
  }

  document.addEventListener('DOMContentLoaded', function() {
    showSlidePatrocinadores(slideIndex);
    const prev = document.getElementById('slide-prev');
    const next = document.getElementById('slide-next');
    if (prev && next) {
      prev.onclick = () => showSlidePatrocinadores(slideIndex - 1);
      next.onclick = () => showSlidePatrocinadores(slideIndex + 1);
    }
    // Opcional: auto-slide
    setInterval(() => {
      showSlidePatrocinadores(slideIndex + 1);
    }, 2000);
  });
