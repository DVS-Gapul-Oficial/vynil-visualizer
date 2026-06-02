const vinyl = document.getElementById("vinyl");
const rpm = document.getElementById("rpm");
const color = document.getElementById("colorPicker");
const audio = document.getElementById("audio");

const imageInput = document.getElementById("imageInput");
const audioInput = document.getElementById("audioInput");

// 🎚️ RPM control
rpm.addEventListener("input", () => {
  const speed = 60 / rpm.value;
  vinyl.style.animationDuration = `${speed}s`;
});

// 🎨 Color control
color.addEventListener("input", () => {
  vinyl.style.background = color.value;
});

// 🖼️ Imagen del vinilo
imageInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  vinyl.style.backgroundImage = `url(${url})`;
  vinyl.style.backgroundSize = "cover";
});

// 🎵 Audio
audioInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  audio.src = url;
});
