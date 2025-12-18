const tg = window.Telegram.WebApp;
tg.expand();

// -------- Payload Read --------
let payload = tg.initDataUnsafe?.start_param;

if (payload) {
  try {
    const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    const [ani_id, drive_id, qual] = decoded.split("|");

    sessionStorage.setItem("drive_id", drive_id);
    sessionStorage.setItem("qual", qual);

    const q = document.getElementById("quality");
    if (q) q.innerText = "Quality: " + qual;

  } catch (e) {
    alert("Invalid payload");
  }
}

// -------- Continue Button --------
const continueBtn = document.getElementById("continueBtn");
if (continueBtn) {
  continueBtn.onclick = () => {
    window.location.href = "player.html";
  };
}

// -------- Player Page Buttons --------
const drive_id = sessionStorage.getItem("drive_id");

const streamBtn = document.getElementById("streamBtn");
if (streamBtn && drive_id) {
  streamBtn.onclick = () => {
    window.open(
      `https://drive.google.com/file/d/${drive_id}/preview`,
      "_blank"
    );
  };
}

const downloadBtn = document.getElementById("downloadBtn");
if (downloadBtn && drive_id) {
  downloadBtn.onclick = () => {
    window.open(
      `https://drive.google.com/uc?export=download&id=${drive_id}`,
      "_blank"
    );
  };
}

const tgBtn = document.getElementById("tgBtn");
if (tgBtn) {
  tgBtn.onclick = () => {
    tg.close();
  };
}
