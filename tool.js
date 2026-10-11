let rootDirHandle = null;

const selectFolderBtn = document.getElementById('select-folder-btn');
const folderStatus = document.getElementById('folder-status');
const clipForm = document.getElementById('clip-form');
const folderStep = document.getElementById('folder-step');
const videoSelect = document.getElementById('video-id');
const successMsg = document.getElementById('success-msg');
const audioInput = document.getElementById('audio-file');
const audioPreview = document.getElementById('audio-preview');

// Step 1: Request folder access from the browser
selectFolderBtn.addEventListener('click', async () => {
    try {
        rootDirHandle = await window.showDirectoryPicker();
        
        // Verify this is the correct project folder by checking if data.js exists
        const dataFileHandle = await rootDirHandle.getFileHandle('data.js');
        const file = await dataFileHandle.getFile();
        const text = await file.text();

        // Parse videos and sentences out of data.js safely
        const projectData = parseDataJs(text);
        if (!projectData || !projectData.videos) {
            throw new Error("Invalid data.js structure.");
        }

        // Populate video dropdown
        videoSelect.innerHTML = "";
        projectData.videos.forEach(v => {
            const opt = document.createElement('option');
            opt.value = v.id;
            opt.textContent = `${v.id} — ${v.title}`;
            videoSelect.appendChild(opt);
        });

        // Unlock the form
        folderStatus.textContent = `Connected! Found ${projectData.videos.length} videos and ${projectData.sentences.length} sentences.`;
        folderStep.classList.remove('active');
        clipForm.classList.remove('disabled-section');
    } catch (err) {
        console.error(err);
        alert("Folder connection failed. Make sure you select your main project folder that contains data.js.");
    }
});

// Helper to parse data.js content in the browser
function parseDataJs(text) {
    let modified = text
        .replace(/const\s+videos\s*=/g, 'window._videos =')
        .replace(/const\s+sentences\s*=/g, 'window._sentences =');
    const evaluator = new Function(modified + '; return { videos: window._videos, sentences: window._sentences };');
    return evaluator();
}

// Preview audio as soon as a file is selected/dragged in
audioInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        audioPreview.src = fileURL;
        audioPreview.classList.remove('hidden');
    } else {
        audioPreview.src = '';
        audioPreview.classList.add('hidden');
    }
});

// Step 2: Handle form submission, directly saving as {nextId}.mp3 and updating data.js
clipForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!rootDirHandle) {
        alert("Please connect your project folder first.");
        return;
    }

    if (audioInput.files.length === 0) {
        alert("Please select an audio file.");
        return;
    }

    const audioFile = audioInput.files[0];
    const videoId = document.getElementById('video-id').value;
    const english = document.getElementById('english').value;
    const punjabi = document.getElementById('punjabi').value;
    const notes = document.getElementById('notes').value;

    try {
        // Re-read data.js to get the latest state/ID count
        const dataFileHandle = await rootDirHandle.getFileHandle('data.js');
        const file = await dataFileHandle.getFile();
        const text = await file.text();
        const currentData = parseDataJs(text);

        // Automatically calculate next ID
        const nextId = currentData.sentences.length > 0 
            ? Math.max(...currentData.sentences.map(s => s.id)) + 1 
            : 1;

        // Directly save the incoming file into the audio folder under the correct ID name ({nextId}.mp3)
        const audioDirHandle = await rootDirHandle.getDirectoryHandle('audio', { create: true });
        const newAudioFileName = `${nextId}.mp3`;
        const newAudioFileHandle = await audioDirHandle.getFileHandle(newAudioFileName, { create: true });
        
        const writableAudio = await newAudioFileHandle.createWritable();
        await writableAudio.write(audioFile);
        await writableAudio.close();

        // Construct the new sentence object code block
        const newSentenceObj = `  {
    id: ${nextId},
    videoId: ${Number(videoId)},
    english: "${escapeJsString(english)}",
    punjabi: "${escapeJsString(punjabi)}",
    notes: "${escapeJsString(notes)}",
    audio: "audio/${newAudioFileName}"
  }`;

        // Insert new object into the sentences array inside data.js text
        const lastBracketIndex = text.lastIndexOf(']');
        const substringBefore = text.substring(0, lastBracketIndex).trim();
        const needsComma = !substringBefore.endsWith('[');
        const insertion = (needsComma ? ",\n" : "\n") + newSentenceObj + "\n";
        const updatedText = text.substring(0, lastBracketIndex) + insertion + text.substring(lastBracketIndex);

        // Write the updated code back to data.js
        const writableData = await dataFileHandle.createWritable();
        await writableData.write(updatedText);
        await writableData.close();

        // Show success banner
        successMsg.textContent = `Success! Saved audio/${newAudioFileName} directly and added Sentence #${nextId} to data.js.`;
        successMsg.style.display = 'block';

        // Clear form fields and hide preview for the next clip
        audioInput.value = '';
        audioPreview.src = '';
        audioPreview.classList.add('hidden');
        document.getElementById('english').value = '';
        document.getElementById('punjabi').value = '';
        document.getElementById('notes').value = '';

    } catch (err) {
        console.error(err);
        alert("An error occurred while saving: " + err.message);
    }
});

function escapeJsString(str) {
    if (!str) return "";
    return str.replace(/"/g, '\\"').replace(/\n/g, ' ');
}