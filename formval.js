const textInput = document.getElementById("textInput");
        const wordCount = document.getElementById("wordCount");
        const charCount = document.getElementById("charCount");

        textInput.addEventListener("input", () => {
            let text = textInput.value.trim();
            charCount.textContent = text.length;
            wordCount.textContent = text.length > 0 ? text.split(/\s+/).filter(word => word !== "").length : 0;
        });