document.getElementById("summarizeBtn").addEventListener("click", () => {
  const text = document.getElementById("inputText").value;
  chrome.summarizer.summarize({ text }).then(response => {
    document.getElementById("output").textContent = response.summary;
  });
});

document.getElementById("proofreadBtn").addEventListener("click", () => {
  const text = document.getElementById("inputText").value;
  chrome.proofreader.proofread({ text }).then(response => {
    document.getElementById("output").textContent = response.corrected_text;
  });
});

document.getElementById("promptBtn").addEventListener("click", () => {
  const prompt = document.getElementById("inputText").value;
  chrome.prompt.sendTask({ prompt, output_format: "text" }).then(response => {
    document.getElementById("output").textContent = response.output;
  });
});
