/* Website behaviour. Normally you should only need to edit data.js. */

const searchInput = document.getElementById("search");
const videoFilter = document.getElementById("video-filter");
const sortOrder = document.getElementById("sort-order");
const sentenceList = document.getElementById("sentence-list");
const resultCount = document.getElementById("result-count");
const emptyState = document.getElementById("empty-state");
const videoInfo = document.getElementById("video-info");

document.getElementById("video-count").textContent = videos.length;
document.getElementById("sentence-count").textContent = sentences.length;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function getVideo(videoId) {
  return videos.find(video => String(video.id) === String(videoId));
}

function getDriveFileId(url) {
  if (!url) return "";
  const match = url.match(/\/file\/d\/([^/]+)/) || url.match(/[?&]id=([^&]+)/);
  return match ? match[1] : "";
}

function getDirectAudioUrl(url) {
  const fileId = getDriveFileId(url);
  return fileId ? `https://drive.google.com/uc?export=download&id=${encodeURIComponent(fileId)}` : url;
}

function populateVideoFilter() {
  videos.forEach(video => {
    const option = document.createElement("option");
    option.value = video.id;
    option.textContent = `${video.id} — ${video.title}`;
    videoFilter.appendChild(option);
  });
}

function updateVideoInfo(videoId) {
  const video = getVideo(videoId);

  if (!video) {
    videoInfo.classList.add("hidden");
    return;
  }

  document.getElementById("video-title").textContent = `${video.id} — ${video.title}`;
  document.getElementById("video-summary").textContent = video.summary || "No summary added yet.";
  const videoLink = document.getElementById("video-link");
  videoLink.href = video.url;
  videoInfo.classList.remove("hidden");
}

function renderSentences() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedVideo = videoFilter.value;
  const order = sortOrder.value;

  let results = sentences.filter(sentence => {
    const video = getVideo(sentence.videoId);
    const searchableText = [
      sentence.english,
      sentence.punjabi,
      sentence.notes,
      sentence.id,
      sentence.videoId,
      video ? video.title : "",
      video ? video.summary : ""
    ].join(" ").toLowerCase();

    const matchesSearch = !query || searchableText.includes(query);
    const matchesVideo = !selectedVideo || String(sentence.videoId) === selectedVideo;
    return matchesSearch && matchesVideo;
  });

  if (order === "random") {
    results = [...results].sort(() => Math.random() - 0.5);
  } else if (order === "video") {
    results = [...results].sort((a, b) =>
      String(a.videoId).localeCompare(String(b.videoId), undefined, { numeric: true }) ||
      a.id - b.id
    );
  } else {
    results = [...results].sort((a, b) => a.id - b.id);
  }

  sentenceList.innerHTML = "";
  resultCount.textContent = `${results.length} result${results.length === 1 ? "" : "s"}`;
  emptyState.classList.toggle("hidden", results.length > 0);

  results.forEach(sentence => {
    const video = getVideo(sentence.videoId);
    const card = document.createElement("article");
    card.className = "sentence-card";

    const audioUrl = sentence.audio ? getDirectAudioUrl(sentence.audio) : "";
    const fallbackLink = sentence.audio
      ? `<a class="button-link" href="${escapeHtml(sentence.audio)}" target="_blank" rel="noopener noreferrer">Open audio file ↗</a>`
      : "";

    card.innerHTML = `
      <div class="card-top">
        <div>
          <div class="sentence-id">Sentence ${escapeHtml(sentence.id)}</div>
          <div class="english">${escapeHtml(sentence.english || "No English meaning added yet.")}</div>
          ${sentence.punjabi ? `<div class="punjabi">${escapeHtml(sentence.punjabi)}</div>` : ""}
          ${sentence.notes ? `<p class="notes">${escapeHtml(sentence.notes)}</p>` : ""}
          <div class="video-tag">${video ? `Video ${escapeHtml(video.id)} — ${escapeHtml(video.title)}` : `Video ${escapeHtml(sentence.videoId || "not assigned")}`}</div>
        </div>
      </div>
      ${audioUrl ? `<audio class="audio-player" controls preload="none" src="${escapeHtml(audioUrl)}"></audio>` : `<p class="notes">No audio link added yet.</p>`}
      <div class="card-actions">
        ${fallbackLink}
        ${video ? `<a class="button-link" href="${escapeHtml(video.url)}" target="_blank" rel="noopener noreferrer">Open YouTube video ↗</a>` : ""}
      </div>
    `;

    sentenceList.appendChild(card);
  });

  // If a specific video is selected, show its title and summary.
  if (selectedVideo) {
    updateVideoInfo(selectedVideo);
  } else {
    videoInfo.classList.add("hidden");
  }
}

searchInput.addEventListener("input", renderSentences);
videoFilter.addEventListener("change", renderSentences);
sortOrder.addEventListener("change", renderSentences);

document.getElementById("shuffle-button").addEventListener("click", () => {
  sortOrder.value = "random";
  renderSentences();
});

populateVideoFilter();
renderSentences();
