let currentLevel = 1;

const levels = {
  1: {
    tag: "Level 1",
    title: "What is Sargassum?",
    description: "Sargassum is a floating brown seaweed found in the Atlantic Ocean. It plays an ecological role at sea, but in large coastal accumulations it can affect beaches and nearby communities.",
    image: "images/img1.jpg"
  },
  2: {
    tag: "Level 2",
    title: "Types and Behavior",
    description: "Sargassum may remain offshore, move nearshore, or accumulate on beaches depending on ocean currents, wind, and coastal dynamics.",
    image: "images/img2.jpg"
  },
  3: {
    tag: "Level 3",
    title: "Use Cases",
    description: "When properly collected and processed, Sargassum can support applications in cosmetics, agriculture, biomaterials, and other industrial uses.",
    image: "images/img3.jpg"
  },
  4: {
    tag: "Level 4",
    title: "Impacts",
    description: "Large accumulations of Sargassum can have significant impacts on marine ecosystems, coastal economies, and local communities.",
    image: "images/img4.jpg"
  },
    5: {
    tag: "Level 5",
    title: "Monitoring",
    description: "Effective monitoring of Sargassum accumulations is crucial for managing their impacts and supporting adaptive management strategies.",
    image: "images/img5.jpg"
  },
    6: {
    tag: "Level 6",
    title: "Journey completed",
    description: "You completed the Sargassum learning journey. You now have a structured overview of the topic and are ready to explore practical impacts, monitoring, and next-step resources.",
    isFinal: true
    }
};




function startJourney(level) {
  currentLevel = level;
  document.getElementById("calibration-step").classList.add("hidden");
  document.getElementById("learning-module").classList.remove("hidden");
  renderLevel();
}

function renderLevel() {
  const data = levels[currentLevel];

  document.getElementById("level-tag").innerText = data.tag;
  document.getElementById("progress-fill").style.width = (currentLevel / 6) * 100 + "%";

  const levelTitle = document.getElementById("level-title");
  const levelDescription = document.getElementById("level-description");

  levelTitle.innerText = data.title;
  levelDescription.innerText = data.description;

  if (data.isFinal) {
    levelTitle.classList.add("hidden");
    levelDescription.classList.add("hidden");
  } else {
    levelTitle.classList.remove("hidden");
    levelDescription.classList.remove("hidden");
  }

  const visual = document.querySelector(".visual");
  const finalCard = document.getElementById("final-card");
  const nextBtn = document.getElementById("next-btn");
  const journeyFinish = document.getElementById("journey-finish");

  if (data.isFinal) {
    visual.classList.add("hidden");
    finalCard.classList.remove("hidden");
    nextBtn.classList.add("hidden");
    journeyFinish.classList.remove("hidden");
  } else {
    visual.classList.remove("hidden");
    finalCard.classList.add("hidden");
    document.getElementById("level-image").src = data.image;
    nextBtn.classList.remove("hidden");
    journeyFinish.classList.add("hidden");
  }
}

function nextLevel() {
  if (currentLevel < 6) {
    currentLevel++;
    renderLevel();
  }
}

/* AI Agent */

function askQuestion(id) {
  const chat = document.getElementById("chat-box");

  const questions = {
    1: "What is Sargassum and why is it increasing?",
    2: "Why does Sargassum accumulate on beaches?",
    3: "What are the impacts of Sargassum on people and the environment?"
  };

  const answers = {
    1: "Sargassum is a type of floating brown seaweed that naturally occurs in the Atlantic Ocean, especially in the Sargasso Sea. In recent years, its abundance has increased due to a combination of factors such as rising ocean temperatures, nutrient runoff from rivers, and changes in ocean circulation. These conditions create an environment where Sargassum can grow more rapidly and spread over large areas.",
    2: "Sargassum accumulates on beaches mainly due to wind patterns, ocean currents, and coastal geography. When large floating mats drift toward the shore, they are pushed by waves and tides, eventually settling on beaches. Certain coastlines are more prone to accumulation because of their orientation and local current dynamics, which can trap the seaweed nearshore.",
    3: "Sargassum can have both positive and negative impacts. In the open ocean, it provides habitat for marine life. However, when it accumulates in large quantities on beaches, it can affect tourism, produce unpleasant odors as it decomposes, and release gases like hydrogen sulfide. It may also impact local ecosystems and fishing activities if not properly managed."
  };

  chat.innerHTML += `<div class="message user-msg">${questions[id]}</div>`;
  chat.innerHTML += `<div class="message agent-msg">${answers[id]}</div>`;

  chat.scrollTop = chat.scrollHeight;
}