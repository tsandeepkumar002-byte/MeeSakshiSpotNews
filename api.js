// ✅ Live API connection for Render backend
async function submitNews() {
  const heading = document.getElementById("heading").value.trim();
  const subheading = document.getElementById("subheading").value.trim();
  const details = document.getElementById("details").value.trim();

  if (!heading || !details) {
    alert("⚠️ Please enter both heading and details!");
    return;
  }

  try {
    const response = await fetch("https://mee-sakshi-news-backend.onrender.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        heading: heading,
        subheading: subheading,
        details: details
      })
    });

    const result = await response.json();

    if (response.ok) {
      alert("✅ " + (result.message || "News submitted successfully!"));
      document.getElementById("heading").value = "";
      document.getElementById("subheading").value = "";
      document.getElementById("details").value = "";
    } else {
      alert("⚠️ Submission failed: " + (result.error || "Unknown error"));
    }

  } catch (error) {
    alert("❌ Could not reach the backend. Please check your connection.");
    console.error(error);
  }
}
