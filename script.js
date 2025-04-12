function triggerPipeline() {
    const messages = [
      "🚀 Jenkins Pipeline Triggered!",
      "✅ Build in progress...",
      "📦 Docker container is deploying...",
      "🎉 All systems go!",
      "🔁 Ready for another test!"
    ];
  
    const random = Math.floor(Math.random() * messages.length);
    document.getElementById("status").textContent = messages[random];
  }
  