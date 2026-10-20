const setupPanel = document.getElementById('setup-panel');
const playerPanel = document.getElementById('player-panel');
const videoCheckboxesDiv = document.getElementById('video-checkboxes');
const startBtn = document.getElementById('start-btn');
const pauseResumeBtn = document.getElementById('pause-resume-btn');
const skipBtn = document.getElementById('skip-btn');
const stopBtn = document.getElementById('stop-btn');

const sessionProgress = document.getElementById('session-progress');
const statusPhase = document.getElementById('status-phase');
const statusEnglish = document.getElementById('status-english');
const statusTimer = document.getElementById('status-timer');
const statusNotes = document.getElementById('status-notes');
const hiddenAudio = document.getElementById('hidden-audio');

let sessionQueue = [];
let currentIndex = 0;
let isPaused = false;
let currentSpeech = null;

// Countdown timer state
let countdownInterval = null;
let timeLeft = 0;

// Populate video selection checkboxes on load
function initVideoCheckboxes() {
    videos.forEach(video => {
        const label = document.createElement('label');
        label.className = 'checkbox-label';
        label.innerHTML = `
            <input type="checkbox" value="${video.id}" checked style="width: auto; min-height: auto;">
            <span>Video ${video.id} — ${video.title}</span>
        `;
        videoCheckboxesDiv.appendChild(label);
    });
}

document.getElementById('select-all-btn').addEventListener('click', () => {
    videoCheckboxesDiv.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = true);
});

document.getElementById('deselect-all-btn').addEventListener('click', () => {
    videoCheckboxesDiv.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
});

// Start session
startBtn.addEventListener('click', () => {
    const selectedVideoIds = Array.from(videoCheckboxesDiv.querySelectorAll('input[type="checkbox"]:checked'))
        .map(cb => Number(cb.value));

    if (selectedVideoIds.length === 0) {
        alert("Please select at least one video/lesson to practice.");
        return;
    }

    sessionQueue = sentences.filter(s => selectedVideoIds.includes(s.videoId));

    if (sessionQueue.length === 0) {
        alert("No sentences found for the selected videos.");
        return;
    }

    const shouldShuffle = document.getElementById('shuffle-toggle').checked;
    if (shouldShuffle) {
        sessionQueue.sort(() => Math.random() - 0.5);
    }

    currentIndex = 0;
    setupPanel.classList.add('hidden');
    playerPanel.classList.remove('hidden');
    isPaused = false;
    pauseResumeBtn.textContent = "Pause";

    playCurrentSentence();
});

// Core practice loop handler
function playCurrentSentence() {
    if (isPaused) return;

    if (currentIndex >= sessionQueue.length) {
        const shouldShuffle = document.getElementById('shuffle-toggle').checked;
        if (shouldShuffle) {
            sessionQueue.sort(() => Math.random() - 0.5);
        }
        currentIndex = 0;
    }

    const item = sessionQueue[currentIndex];
    sessionProgress.textContent = `Clip ${currentIndex + 1} of ${sessionQueue.length}`;
    statusEnglish.textContent = item.english;
    statusNotes.textContent = item.notes ? `Note: ${item.notes}` : "";
    statusTimer.textContent = "⏳ —";

    const breakBeforeSec = Number(document.getElementById('break-before').value) || 0;
    const breakAfterSec = Number(document.getElementById('break-after').value) || 0;

    // Phase 1: Speak English Translation
    statusPhase.textContent = "🔊 Listen (English)";
    speakText(item.english, () => {
        if (isPaused) return;

        // Phase 2: Thinking Break 1 (Silence + Countdown)
        statusPhase.textContent = "🤔 Think in Punjabi...";
        startCountdown(breakBeforeSec, () => {
            if (isPaused) return;

            // Phase 3: Play Punjabi Audio Clip
            statusPhase.textContent = "🗣️ Punjabi Audio Clip";
            statusTimer.textContent = "⏳ —";
            hiddenAudio.src = item.audio;
            hiddenAudio.play().catch(err => {
                console.error("Audio playback error:", err);
                proceedToNextAfterBreak(breakAfterSec);
            });

            hiddenAudio.onended = () => {
                if (isPaused) return;
                
                // Phase 4: Thinking Break 2 (Reflection + Countdown)
                statusPhase.textContent = "🧘 Reflect / Break";
                startCountdown(breakAfterSec, () => {
                    currentIndex++;
                    playCurrentSentence();
                });
            };
        });
    });
}

// Reusable countdown timer function with visual updates
function startCountdown(durationSec, onComplete) {
    if (durationSec <= 0) {
        statusTimer.textContent = "⏳ —";
        onComplete();
        return;
    }

    timeLeft = durationSec;
    statusTimer.textContent = `⏳ Time left: ${timeLeft}s`;

    if (countdownInterval) clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        if (isPaused) return; // Freeze timer if paused

        timeLeft--;
        if (timeLeft > 0) {
            statusTimer.textContent = `⏳ Time left: ${timeLeft}s`;
        } else {
            clearInterval(countdownInterval);
            countdownInterval = null;
            statusTimer.textContent = "⏳ —";
            onComplete();
        }
    }, 1000);
}

function proceedToNextAfterBreak(delaySec) {
    startCountdown(delaySec, () => {
        currentIndex++;
        playCurrentSentence();
    });
}

// Web Speech API helper for English audio
function speakText(text, onEndedCallback) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        currentSpeech = new SpeechSynthesisUtterance(text);
        currentSpeech.lang = 'en-US';
        currentSpeech.rate = 1.0;
        currentSpeech.onend = () => {
            if (!isPaused) onEndedCallback();
        };
        window.speechSynthesis.speak(currentSpeech);
    } else {
        setTimeout(onEndedCallback, 1500);
    }
}

// Control buttons
pauseResumeBtn.addEventListener('click', () => {
    isPaused = !isPaused;
    if (isPaused) {
        pauseResumeBtn.textContent = "Resume";
        window.speechSynthesis.pause();
        hiddenAudio.pause();
        statusPhase.textContent = "⏸️ Paused";
    } else {
        pauseResumeBtn.textContent = "Pause";
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
        }
    }
});

skipBtn.addEventListener('click', () => {
    window.speechSynthesis.cancel();
    hiddenAudio.pause();
    if (countdownInterval) clearInterval(countdownInterval);
    statusTimer.textContent = "⏳ —";
    currentIndex++;
    playCurrentSentence();
});

stopBtn.addEventListener('click', () => {
    window.speechSynthesis.cancel();
    hiddenAudio.pause();
    if (countdownInterval) clearInterval(countdownInterval);
    statusTimer.textContent = "⏳ —";
    playerPanel.classList.add('hidden');
    setupPanel.classList.remove('hidden');
});

initVideoCheckboxes();