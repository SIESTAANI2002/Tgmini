const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const params = new URLSearchParams(window.location.search);
const encoded = params.get("data");

if (!encoded) {
  document.body.innerHTML = "❌ No episode data received";
  throw new Error("No payload");
}

const decoded = atob(encoded);
const parts = decoded.split("-");

const aniId = parts[1];
const msgId = parts[2];
const quality = parts[3];

document.getElementById("title").innerText =
  `Episode • ${quality}p`;

// Test video (replace later)
document.getElementById("player").src =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
