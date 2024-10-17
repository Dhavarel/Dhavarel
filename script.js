AOS.init();

var musik = "";

var audio = document.querySelector(".audio");
if (musik) {
  audio.src = musik;
}

function mulai() {
  audio.play();
  window.scrollTo(0, 0);
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll";
  setTimeout(function() {
    document.querySelector(".open").style.display = "none";
  }, 1200);
}

function wa(isi) {
  window.open("https://api.whatsapp.com/send?text=maaciii%20acaall%20udah%20ucapinn%20ulang%20tahuun%20akuuuu,%20di%20hari%20spesial%20ini%20akuuu%20mauuu " + isi);
}

async function tanya() {
  var {
    value: kado
  } = await swal.fire({
    imageUrl: 'foto-4.png',
    title: 'Di Ulang Tahun Kamu kali ini, kamu mau apa?🤔',
    input: 'text',
    showCancelButton: false
  });

  if (kado) {
    await swal.fire({
      imageUrl: 'resources/wa.png',
      title: 'Maaci suda jawab call, jawabannya kirim ke WA aku yaw!'
    });
    wa(kado);
  } else {
    await swal.fire({
      icon: 'error',
      title: 'JAWAB DONG ACAL😡😡😡'
    });
    tanya();
  }
}