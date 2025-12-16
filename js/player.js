const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// URL থেকে data নিলাম
const params = new URLSearchParams(window.location.search);
const encoded = params.get("data");

if (!encoded) {
  document.body.innerText = "No video data";
  throw "No data";
}

// decode করলাম
const decoded = atob(encoded);

// format: anime-720-FILEID
const parts = decoded.split("-");
const quality = parts[1];
const fileId = parts[2];

// title দেখালাম
document.getElementById("title").innerText =
  "Quality: " + quality + "p";

// Google Drive video play
const video = document.getElementById("player");
video.src = "https://drive.google.com/uc?export=download&id=" + fileId;
video.controls = true;
video.autoplay = true;
