// ✅ Live API connection for Render backend
async function submitNews() {
  const reporter = document.getElementById("reporter").value;
  const dateline = document.getElementById("dateline").value;
  const heading = document.getElementById("heading").value;
  const subheading = document.getElementById("subheading").value;
  const details = document.getElementById("details").value;
  const imageInput = document.getElementById("image");

  if (!heading || !details) {
    alert("Please enter both heading and details!");
    return;
  }

  const formData = new FormData();
  formData.append("reporter", reporter);
  formData.append("dateline", dateline);
  formData.append("heading", heading);
  formData.append("subheading", subheading);
  formData.append("details", details);
  if (imageInput.files.length > 0) {
    formData.append("image", imageInput.files[0]);
  }

  try {
    const response = await fetch("https://mee-sakshi-news-backend.onrender.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    alert(result.message || "✅ News submitted successfully!");
  } catch (error) {
    alert("❌ Could not reach the backend. Please check your connection.");
    console.error(error);
  }
}

// Preview image
document.getElementById("image").addEventListener("change", (event) => {
  const preview = document.getElementById("preview");
  preview.innerHTML = "";
  const file = event.target.files[0];
  if (file) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    preview.appendChild(img);
  }
});
