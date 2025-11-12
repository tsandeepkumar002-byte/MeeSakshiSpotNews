// Connect Reporter Submission form to Flask backend
async function submitNews() {
    const heading = document.getElementById("heading").value;
    const subheading = document.getElementById("subheading").value;
    const details = document.getElementById("details").value;

    if (!heading || !details) {
        alert("Please enter both heading and details!");
        return;
    }

    try {
        const response = await fetch("https://mee-sakshi-news-backend.onrender.com/approve", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ index })
});

                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                heading: heading,
                subheading: subheading,
                details: details
            })
        });

        const result = await response.json();
        alert(result.message || "✅ News submitted successfully!");
    } catch (error) {
        alert("❌ Could not reach the backend. Please make sure Flask is running.");
        console.error(error);
    }
}