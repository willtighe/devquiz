// ─── Game State ───────────────────────────────────────────────────────────────

// TRACK_NAMES: flat list used for state initialisation and rendering.
// TRACKS and LEVELS (arrays of objects) come from questions.js, loaded first.
const TRACK_NAMES = [
  "How It All Works",
  "Terminal & Git",
  "VS Code & Claude Code",
  "Building & Shipping",
  "History of Programming & Development"
];

const POINTS_PER_LEVEL = { 1: 10, 2: 20, 3: 30 };
const CORRECT_TO_COMPLETE = 5;

let state = {
  currentTrack: null,
  currentLevel: null,
  lives: 3,
  score: 0,
  questionsAnswered: 0,
  questionsCorrect: 0,
  correctInCurrentLevel: 0,
  unlockedLevels: {},
  usedQuestionIds: new Set(),
  currentQuestion: null,
  gameOver: false
};

function initState() {
  state.lives = 3;
  state.score = 0;
  state.questionsAnswered = 0;
  state.questionsCorrect = 0;
  state.correctInCurrentLevel = 0;
  state.usedQuestionIds = new Set();
  state.currentQuestion = null;
  state.gameOver = false;
  state.unlockedLevels = {};
  TRACK_NAMES.forEach(track => {
    state.unlockedLevels[track] = { 1: true, 2: false, 3: false };
  });
}

// ─── Question Pool ────────────────────────────────────────────────────────────

function getPool(track, level) {
  return QUESTIONS.filter(
    q => q.track === track && q.level === level && !state.usedQuestionIds.has(q.id)
  );
}

function pickQuestion(track, level) {
  let pool = getPool(track, level);
  if (pool.length === 0) {
    QUESTIONS
      .filter(q => q.track === track && q.level === level)
      .forEach(q => state.usedQuestionIds.delete(q.id));
    pool = getPool(track, level);
  }
  const q = pool[Math.floor(Math.random() * pool.length)];
  state.usedQuestionIds.add(q.id);
  return q;
}

// ─── Shuffle helper ───────────────────────────────────────────────────────────

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Screen Management ────────────────────────────────────────────────────────

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
    s.style.display = "none";
  });
  const target = document.getElementById(id);
  if (target) {
    target.style.display = "flex";
    target.classList.add("active");
    target.scrollTop = 0;
  }
}

// ─── Game Flow ────────────────────────────────────────────────────────────────

function startGame() {
  initState();
  showScreen("track-select");
  renderTrackSelect();
}

// Internal helper — UI now routes through showTrackOverview first.
function selectTrack(track) {
  state.currentTrack = track;
  state.correctInCurrentLevel = 0;
  showScreen("level-select");
  renderLevelSelect(track);
}

function loadNextQuestion() {
  state.currentQuestion = pickQuestion(state.currentTrack, state.currentLevel);
  showScreen("gameplay");
  renderGameplay(state.currentQuestion);
}

function startQuiz() {
  loadNextQuestion();
}

function submitAnswer(chosen) {
  const q = state.currentQuestion;
  const correct = chosen === q.answer;
  state.questionsAnswered++;

  if (correct) {
    state.score += POINTS_PER_LEVEL[state.currentLevel];
    state.questionsCorrect++;
    state.correctInCurrentLevel++;
  } else {
    state.lives--;
  }

  showScreen("feedback");
  renderFeedback(q, chosen, correct);

  if (state.lives <= 0) {
    state.gameOver = true;
  }
}

function nextAfterFeedback() {
  if (state.gameOver) {
    showScreen("game-over");
    renderGameOver();
    return;
  }

  if (state.correctInCurrentLevel >= CORRECT_TO_COMPLETE) {
    unlockNextLevel();
    showScreen("level-complete");
    renderLevelComplete();
    return;
  }

  loadNextQuestion();
}

function unlockNextLevel() {
  const next = state.currentLevel + 1;
  if (next <= 3) {
    state.unlockedLevels[state.currentTrack][next] = true;
  }
}

// After completing a level, return to level-select so the unlocked level is visible.
function continueToNextLevel() {
  const next = state.currentLevel + 1;
  if (next <= 3 && state.unlockedLevels[state.currentTrack][next]) {
    showLevelSelect(state.currentTrack);
  } else {
    showScreen("track-select");
    renderTrackSelect();
  }
}

// ─── New Screen Controllers ───────────────────────────────────────────────────

function showTrackOverview(trackName) {
  state.currentTrack = trackName;
  const trackData = TRACKS.find(t => t.track === trackName);
  if (!trackData) return;

  document.getElementById("tov-track-name").textContent = trackName.toUpperCase();
  document.getElementById("tov-title").textContent = trackData.overview.title;

  const bodyEl = document.getElementById("tov-body");
  bodyEl.innerHTML = trackData.overview.body.map(p => `<p>${p}</p>`).join('');

  document.getElementById("tov-highlight-label").textContent = trackData.overview.highlight.label;
  document.getElementById("tov-highlight-text").textContent = trackData.overview.highlight.text;

  showScreen("track-overview-screen");
}

function showLevelSelect(trackName) {
  showScreen("level-select");
  renderLevelSelect(trackName);
}

function showLearnScreen(trackName, levelNumber) {
  if (!state.unlockedLevels[trackName][levelNumber]) return;
  state.currentTrack = trackName;
  state.currentLevel = levelNumber;
  state.correctInCurrentLevel = 0;

  const levelData = LEVELS.find(l => l.track === trackName && l.level === levelNumber);
  if (!levelData) return;

  document.getElementById("ls-track-label").textContent = trackName.toUpperCase();
  document.getElementById("ls-level-label").textContent = `Level ${levelNumber}`;
  document.getElementById("ls-title").textContent = levelData.lesson.title;

  const bodyEl = document.getElementById("ls-body");
  bodyEl.innerHTML = levelData.lesson.body.map(p => `<p>${p}</p>`).join('');

  document.getElementById("ls-example-label").textContent = levelData.lesson.example.label;
  document.getElementById("ls-example-code").textContent = levelData.lesson.example.code;

  showScreen("learn-screen");
}

// ─── Renderers ────────────────────────────────────────────────────────────────

function renderTrackSelect() {
  const grid = document.getElementById("track-grid");
  grid.innerHTML = TRACK_NAMES.map(track => {
    const levels = state.unlockedLevels[track];
    return `
      <div class="track-card" onclick='showTrackOverview(${JSON.stringify(track)})'>
        <div class="track-name">${track}</div>
        <div class="track-levels">
          ${[1,2,3].map(l => `
            <span class="level-pip ${levels[l] ? 'unlocked' : 'locked'}">
              ${levels[l] ? `LVL ${l}` : '&#128274; LVL ' + l}
            </span>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function renderLevelSelect(track) {
  document.getElementById("level-track-name").textContent = track;
  const container = document.getElementById("level-buttons");
  container.innerHTML = [1,2,3].map(l => {
    const unlocked = state.unlockedLevels[track][l];
    const labels = ["", "BEGINNER", "INTERMEDIATE", "ADVANCED"];
    return `
      <button
        class="level-btn ${unlocked ? '' : 'locked'}"
        onclick='${unlocked ? `showLearnScreen(${JSON.stringify(track)}, ${l})` : ""}'
        ${unlocked ? '' : 'disabled'}
      >
        <span class="level-num">LEVEL ${l}</span>
        <span class="level-label">${labels[l]}</span>
        ${unlocked ? '' : '<span class="lock-icon">&#128274;</span>'}
      </button>
    `;
  }).join('');
}

function renderGameplay(q) {
  document.getElementById("gp-track").textContent = state.currentTrack;
  document.getElementById("gp-level").textContent = `Level ${state.currentLevel}`;
  document.getElementById("gp-score").textContent = `Score: ${state.score}`;
  document.getElementById("gp-progress").textContent =
    `${state.correctInCurrentLevel}/${CORRECT_TO_COMPLETE} correct`;

  const livesEl = document.getElementById("gp-lives");
  livesEl.innerHTML = Array.from({ length: 3 }, (_, i) =>
    `<span class="${i < state.lives ? 'life-active' : 'life-lost'}">&#9650;</span>`
  ).join('');

  document.getElementById("gp-question").textContent = q.question;

  const shuffledOptions = shuffle(q.options);
  const grid = document.getElementById("gp-options");
  grid.innerHTML = shuffledOptions.map(opt => `
    <button class="answer-btn" onclick='submitAnswer(${JSON.stringify(opt)})'>
      ${opt}
    </button>
  `).join('');
}

function renderFeedback(q, chosen, correct) {
  const banner = document.getElementById("fb-banner");
  banner.textContent = correct ? "> CORRECT" : "> WRONG";
  banner.className = `feedback-banner ${correct ? 'correct' : 'wrong'}`;

  document.getElementById("fb-chosen").textContent = `You answered: ${chosen}`;
  if (!correct) {
    document.getElementById("fb-correct-line").style.display = "block";
    document.getElementById("fb-correct-answer").textContent = `Correct answer: ${q.answer}`;
  } else {
    document.getElementById("fb-correct-line").style.display = "none";
  }

  document.getElementById("fb-explanation").textContent = q.explanation;
  document.getElementById("fb-detail").textContent = q.detail;

  const learnMore = document.getElementById("fb-learn-more");
  learnMore.style.display = "none";
  document.getElementById("fb-learn-toggle").textContent = "[+ Learn More]";

  document.getElementById("fb-lives").innerHTML = Array.from({ length: 3 }, (_, i) =>
    `<span class="${i < state.lives ? 'life-active' : 'life-lost'}">&#9650;</span>`
  ).join('');

  document.getElementById("fb-score").textContent = `Score: ${state.score}`;

  const nextBtn = document.getElementById("fb-next");
  if (state.gameOver) {
    nextBtn.textContent = "> GAME OVER — VIEW SCORE";
  } else if (state.correctInCurrentLevel >= CORRECT_TO_COMPLETE) {
    nextBtn.textContent = "> LEVEL COMPLETE";
  } else {
    nextBtn.textContent = "> NEXT QUESTION";
  }
}

function toggleLearnMore() {
  const panel = document.getElementById("fb-learn-more");
  const btn = document.getElementById("fb-learn-toggle");
  const open = panel.style.display === "block";
  panel.style.display = open ? "none" : "block";
  btn.textContent = open ? "[+ Learn More]" : "[- Collapse]";
}

function renderLevelComplete() {
  const track = state.currentTrack;
  const level = state.currentLevel;
  const earned = CORRECT_TO_COMPLETE * POINTS_PER_LEVEL[level];
  document.getElementById("lc-track").textContent = track;
  document.getElementById("lc-level").textContent = level;
  document.getElementById("lc-earned").textContent = earned;
  document.getElementById("lc-score").textContent = state.score;

  const nextLevel = level + 1;
  const nextBtn = document.getElementById("lc-next");
  if (nextLevel <= 3) {
    nextBtn.textContent = `> NEXT: LEVEL ${nextLevel}`;
    nextBtn.onclick = continueToNextLevel;
  } else {
    nextBtn.textContent = "> BACK TO TRACKS";
    nextBtn.onclick = () => { showScreen("track-select"); renderTrackSelect(); };
  }
}

function renderGameOver() {
  document.getElementById("go-score").textContent = state.score;
  document.getElementById("go-answered").textContent = state.questionsAnswered;
  document.getElementById("go-correct").textContent = state.questionsCorrect;
  const pct = state.questionsAnswered > 0
    ? Math.round((state.questionsCorrect / state.questionsAnswered) * 100)
    : 0;
  document.getElementById("go-pct").textContent = pct;
}
