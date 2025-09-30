// Philosophy Paradoxes Dashboard JavaScript

// Data from the provided JSON
const paradoxesData = {
  "paradoxes": [
    {
      "id": "liar",
      "title": "The Liar Paradox",
      "category": "Logical",
      "philosopher": "Ancient Greeks / Russell",
      "summary": "A statement that refers to itself as false, creating an infinite logical contradiction.",
      "description": "The classical liar paradox is the statement 'This sentence is false.' If true, then it's false; if false, then it's true. This creates an endless logical loop that challenges our understanding of truth and self-reference.",
      "structure": [
        "Statement: 'This sentence is false'",
        "If true → the content makes it false",
        "If false → the statement about being false is actually true",
        "Result: Both true and false simultaneously"
      ],
      "examples": [
        "'I am lying right now'",
        "'The statement in this box is false'",
        "Epimenides paradox: 'All Cretans are liars' (said by a Cretan)"
      ],
      "modernRelevance": "Computer science recursion problems, legal contradictions, social media misinformation loops",
      "visualMetaphor": "Möbius strip - an endless loop with no clear beginning or end",
      "color": "#FF6B6B"
    },
    {
      "id": "theseus",
      "title": "Ship of Theseus",
      "category": "Metaphysical",
      "philosopher": "Plutarch / Thomas Hobbes",
      "summary": "If all parts of a ship are gradually replaced, is it still the same ship?",
      "description": "The Ship of Theseus paradox questions identity through change. As the legendary ship's wooden planks rotted and were replaced one by one, philosophers asked: when does it cease to be the original ship? This challenges our understanding of what makes something 'the same' over time.",
      "structure": [
        "Original ship with all original parts",
        "Parts gradually replaced due to decay", 
        "Eventually no original parts remain",
        "Question: Same ship or different ship?"
      ],
      "examples": [
        "Human bodies replacing cells over 7 years",
        "Classic cars with replaced parts",
        "Companies changing all employees over time",
        "Digital identity with updated profiles"
      ],
      "modernRelevance": "Personal identity philosophy, AI consciousness debates, corporate identity, digital restoration",
      "visualMetaphor": "Ship with parts highlighted in different colors showing replacement over time",
      "color": "#4ECDC4"
    },
    {
      "id": "trolley",
      "title": "The Trolley Problem",
      "category": "Ethical",
      "philosopher": "Philippa Foot / Judith Jarvis Thomson",
      "summary": "Is it morally acceptable to sacrifice one person to save five others?",
      "description": "A runaway trolley heads toward five people on the tracks. You can pull a lever to divert it to another track, killing one person instead of five. Most say yes. But what if you must push a large person off a bridge to stop the trolley? Most say no. This explores the difference between killing and letting die.",
      "structure": [
        "Scenario 1: Pull lever, divert trolley (1 dies, 5 saved)",
        "Scenario 2: Push person off bridge (1 dies, 5 saved)",
        "Same outcome, different moral intuitions",
        "Explores action vs inaction, intention vs consequence"
      ],
      "examples": [
        "Medical triage decisions",
        "Wartime civilian casualties", 
        "Self-driving car programming",
        "Resource allocation during emergencies"
      ],
      "modernRelevance": "Autonomous vehicle ethics, medical AI decisions, military drone targeting, pandemic response policies",
      "visualMetaphor": "Railway junction with switch lever, showing the moral choice visually",
      "color": "#FFE66D"
    },
    {
      "id": "mary",
      "title": "Mary's Room",
      "category": "Philosophy of Mind",
      "philosopher": "Frank Jackson",
      "summary": "Can complete physical knowledge about color exist without experiencing color?",
      "description": "Mary is a brilliant scientist who knows everything about color but has lived in a black and white room her whole life. When she finally sees red for the first time, does she learn something new? This challenges physicalism - the view that everything is physical.",
      "structure": [
        "Mary knows all physical facts about color",
        "Mary has never experienced color herself",
        "Mary sees red for the first time",
        "Question: Does she learn something new?"
      ],
      "examples": [
        "Learning about music theory vs hearing music",
        "Studying pain vs feeling pain",
        "Reading about love vs experiencing love",
        "AI understanding vs human consciousness"
      ],
      "modernRelevance": "AI consciousness debates, virtual reality experiences, neuroscience of qualia, machine learning limitations",
      "visualMetaphor": "Black and white room with a single splash of red color emerging",
      "color": "#A8E6CF"
    },
    {
      "id": "chinese-room",
      "title": "Chinese Room",
      "category": "Philosophy of Mind",
      "philosopher": "John Searle",
      "summary": "Can a computer truly understand language or just manipulate symbols?",
      "description": "A person in a room follows English instructions to respond to Chinese characters, appearing to speak Chinese fluently to outsiders. But they understand nothing. Searle argues this shows computers can simulate understanding without true comprehension.",
      "structure": [
        "Person in room receives Chinese text",
        "Follows English rulebook to respond",
        "Produces perfect Chinese responses",
        "But understands no Chinese at all"
      ],
      "examples": [
        "Google Translate accuracy without comprehension",
        "Chatbots passing Turing tests",
        "Chess computers winning without 'understanding' chess",
        "AI medical diagnoses without grasping medicine"
      ],
      "modernRelevance": "Large language models like GPT, AI consciousness debates, machine understanding vs simulation",
      "visualMetaphor": "Room with symbols flowing in and out, representing syntax without semantics",
      "color": "#FFAAA5"
    },
    {
      "id": "russell",
      "title": "Russell's Paradox",
      "category": "Logical",
      "philosopher": "Bertrand Russell", 
      "summary": "The set of all sets that do not contain themselves - does it contain itself?",
      "description": "Russell's Paradox asks about the set R of all sets that are not members of themselves. If R contains itself, then it shouldn't (by definition). If it doesn't contain itself, then it should. This paradox shook the foundations of mathematics.",
      "structure": [
        "Define R = {sets that don't contain themselves}",
        "Does R contain itself?",
        "If yes → R shouldn't contain itself (contradiction)",
        "If no → R should contain itself (contradiction)"
      ],
      "examples": [
        "The catalog of all catalogs that don't list themselves",
        "The library of all libraries that don't contain themselves",
        "The list of all lists that don't include themselves"
      ],
      "modernRelevance": "Computer science recursion limits, database design paradoxes, programming logic errors",
      "visualMetaphor": "Nested circles representing sets, with paradoxical self-containment",
      "color": "#C7CEEA"
    },
    {
      "id": "zeno",
      "title": "Zeno's Paradoxes",
      "category": "Logical",
      "philosopher": "Zeno of Elea",
      "summary": "Achilles can never overtake a tortoise if motion consists of infinite steps.",
      "description": "In Zeno's race, Achilles gives a tortoise a head start. To catch up, Achilles must first reach where the tortoise was, but by then the tortoise has moved further. This continues infinitely, suggesting Achilles never catches up - despite our experience that he obviously would.",
      "structure": [
        "Achilles starts behind the tortoise",
        "To catch up, he must reach tortoise's position",
        "But tortoise moves forward during this time",  
        "Process repeats infinitely with smaller distances"
      ],
      "examples": [
        "Any object catching up to another",
        "Walking across a room (infinite halfway points)",
        "Digital zoom revealing infinite detail",
        "Calculus limits and infinite series"
      ],
      "modernRelevance": "Mathematical limits, calculus foundations, digital physics, quantum mechanics",
      "visualMetaphor": "Race track with infinite subdivision markers showing the paradox",
      "color": "#95E1D3"
    },
    {
      "id": "choice",
      "title": "Paradox of Choice",
      "category": "Psychological",
      "philosopher": "Barry Schwartz",
      "summary": "Having too many options can lead to less satisfaction and more anxiety.",
      "description": "The Paradox of Choice suggests that while some choice is better than none, too many options can overwhelm us, leading to decision paralysis, regret, and decreased satisfaction. More choices require more mental effort and create more opportunities for regret.",
      "structure": [
        "More options should increase satisfaction",
        "But too many options create cognitive overload",
        "Decision fatigue and analysis paralysis result",
        "Final choice brings less satisfaction and more regret"
      ],
      "examples": [
        "Grocery store with 300+ cereal brands",
        "Netflix decision paralysis",
        "Career path overwhelming options",
        "Restaurant menus that are too extensive"
      ],
      "modernRelevance": "Consumer psychology, UX design, digital overwhelm, life satisfaction research",
      "visualMetaphor": "Multiple doors/paths leading to confusion and paralysis",
      "color": "#F38BA8"
    },
    {
      "id": "grandfather",
      "title": "Grandfather Paradox",
      "category": "Temporal",
      "philosopher": "René Barjavel / Science Fiction",
      "summary": "If you travel back in time and kill your grandfather, how could you exist to do so?",
      "description": "The Grandfather Paradox illustrates the logical problems of time travel. If you traveled back and prevented your grandfather from having children, you would never be born. But then who killed the grandfather? This creates a logical contradiction about causality.",
      "structure": [
        "Time traveler goes to the past",
        "Kills grandfather before having children",
        "Traveler's parent is never born",
        "Traveler is never born - so who killed grandfather?"
      ],
      "examples": [
        "Killing Hitler before WWII",
        "Preventing your parents from meeting",
        "Changing any significant historical event",
        "Bootstrap paradox - giving yourself information"
      ],
      "modernRelevance": "Theoretical physics, closed timelike curves, multiverse theories, science fiction plots",
      "visualMetaphor": "Timeline loop showing causality breaking and reforming",
      "color": "#DDA0DD"
    },
    {
      "id": "tolerance",
      "title": "Paradox of Tolerance",
      "category": "Political",
      "philosopher": "Karl Popper",
      "summary": "Must a tolerant society tolerate intolerance, even if it destroys tolerance?",
      "description": "Popper's Paradox of Tolerance argues that unlimited tolerance leads to its own destruction. If we tolerate those who are intolerant, they may use this freedom to eliminate tolerance itself. Therefore, a tolerant society must not tolerate intolerance.",
      "structure": [
        "Tolerant society allows all viewpoints",
        "Intolerant groups exploit this freedom",
        "They work to eliminate tolerance",
        "Paradox: tolerance must be intolerant of intolerance"
      ],
      "examples": [
        "Nazi rise to power in Weimar Republic",
        "Hate speech vs free speech debates",
        "Social media platform content policies",
        "Democratic societies facing authoritarianism"
      ],
      "modernRelevance": "Social media content moderation, democratic backsliding, free speech debates, platform governance",
      "visualMetaphor": "Balance scales showing the tension between tolerance and its limits",
      "color": "#87CEEB"
    }
  ],
  "categories": {
    "Logical": "Paradoxes involving contradictions in reasoning or formal logic",
    "Ethical": "Paradoxes exploring moral dilemmas and conflicting values", 
    "Metaphysical": "Paradoxes about the nature of existence, identity, and reality",
    "Philosophy of Mind": "Paradoxes concerning consciousness, understanding, and mental states",
    "Psychological": "Paradoxes revealing quirks in human cognition and behavior",
    "Temporal": "Paradoxes involving time, causality, and temporal logic",
    "Political": "Paradoxes in political philosophy and social organization"
  }
};

// Application state
let exploredParadoxes = new Set();
let bookmarkedParadoxes = new Set();
let currentParadoxIndex = 0;
let filteredParadoxes = paradoxesData.paradoxes;

// Visual metaphor icons
const visualIcons = {
  'liar': '∞',
  'theseus': '🚢',
  'trolley': '🚃',
  'mary': '👩‍🔬',
  'chinese-room': '🏠',
  'russell': '🔄',
  'zeno': '🏃‍♂️',
  'choice': '🚪',
  'grandfather': '⏰',
  'tolerance': '⚖️'
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  renderParadoxGrid();
  setupEventListeners();
  updateProgress();
});

// Setup all event listeners
function setupEventListeners() {
  // Theme toggle
  document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
  
  // Search functionality
  document.querySelector('.search-input').addEventListener('input', handleSearch);
  
  // Category filter
  document.querySelector('.category-filter').addEventListener('change', handleCategoryFilter);
  
  // Modal navigation
  document.getElementById('prevParadox').addEventListener('click', () => navigateParadox(-1));
  document.getElementById('nextParadox').addEventListener('click', () => navigateParadox(1));
  
  // Keyboard navigation
  document.addEventListener('keydown', handleKeyNavigation);
}

// Render the main paradox grid
function renderParadoxGrid() {
  const grid = document.getElementById('paradoxGrid');
  
  const gridHTML = filteredParadoxes.map(paradox => `
    <div class="paradox-card ${exploredParadoxes.has(paradox.id) ? 'explored' : ''}" 
         data-category="${paradox.category}"
         data-id="${paradox.id}"
         onclick="openParadoxModal('${paradox.id}')">
      <div class="paradox-card__header">
        <div>
          <div class="paradox-card__title">${paradox.title}</div>
          <div class="paradox-card__category">${paradox.category}</div>
        </div>
        <button class="bookmark-btn ${bookmarkedParadoxes.has(paradox.id) ? 'bookmarked' : ''}"
                onclick="event.stopPropagation(); toggleBookmark('${paradox.id}')"
                aria-label="Bookmark this paradox">
          ${bookmarkedParadoxes.has(paradox.id) ? '★' : '☆'}
        </button>
      </div>
      <div class="paradox-card__philosopher">${paradox.philosopher}</div>
      <div class="paradox-card__visual">${visualIcons[paradox.id] || '🤔'}</div>
      <div class="paradox-card__summary">${paradox.summary}</div>
    </div>
  `).join('');
  
  grid.innerHTML = gridHTML;
}

// Open paradox modal with detailed view
function openParadoxModal(paradoxId) {
  const paradox = paradoxesData.paradoxes.find(p => p.id === paradoxId);
  if (!paradox) return;
  
  // Mark as explored
  if (!exploredParadoxes.has(paradoxId)) {
    exploredParadoxes.add(paradoxId);
    updateProgress();
    // Add animation class
    const card = document.querySelector(`[data-id="${paradoxId}"]`);
    if (card) {
      card.classList.add('just-explored', 'explored');
      setTimeout(() => card.classList.remove('just-explored'), 500);
    }
  }
  
  currentParadoxIndex = paradoxesData.paradoxes.findIndex(p => p.id === paradoxId);
  
  const modal = document.getElementById('paradoxModal');
  const modalBody = document.getElementById('modalBody');
  
  // Set modal category for styling
  modal.setAttribute('data-category', paradox.category);
  
  modalBody.innerHTML = generateParadoxDetailHTML(paradox);
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  // Setup interactive elements
  setupInteractiveElements(paradox);
}

// Generate detailed HTML for a paradox
function generateParadoxDetailHTML(paradox) {
  const quizQuestions = generateQuizQuestions(paradox);
  
  return `
    <div class="paradox-detail__header">
      <h2 class="paradox-detail__title">${paradox.title}</h2>
      <div class="paradox-detail__meta">
        <span class="status status--info">${paradox.category}</span>
        <span class="paradox-detail__philosopher">${paradox.philosopher}</span>
        <button class="bookmark-btn ${bookmarkedParadoxes.has(paradox.id) ? 'bookmarked' : ''}"
                onclick="toggleBookmark('${paradox.id}')"
                aria-label="Bookmark this paradox">
          ${bookmarkedParadoxes.has(paradox.id) ? '★ Bookmarked' : '☆ Bookmark'}
        </button>
      </div>
      <div class="paradox-detail__description">${paradox.description}</div>
    </div>
    
    <div class="visual-metaphor">
      <div class="visual-metaphor__content">${generateVisualMetaphor(paradox)}</div>
      <p><em>${paradox.visualMetaphor}</em></p>
    </div>
    
    <div class="paradox-section">
      <h3 class="paradox-section__title">🔍 Logical Structure</h3>
      <div class="paradox-section__content">
        ${paradox.structure.map((step, index) => `
          <div class="structure-step">
            <div class="step-number">${index + 1}</div>
            <div>${step}</div>
          </div>
        `).join('')}
      </div>
    </div>
    
    <div class="paradox-section">
      <h3 class="paradox-section__title">💡 Examples</h3>
      <div class="paradox-section__content">
        ${paradox.examples.map(example => `
          <div class="example-item">
            <div class="example-icon">💭</div>
            <div>${example}</div>
          </div>
        `).join('')}
      </div>
    </div>
    
    <div class="paradox-section">
      <h3 class="paradox-section__title">🌐 Modern Relevance</h3>
      <div class="paradox-section__content">
        <div class="relevance-item">
          <div class="relevance-icon">🔬</div>
          <div>${paradox.modernRelevance}</div>
        </div>
      </div>
    </div>
    
    ${generateInteractiveSection(paradox)}
    
    <div class="quiz-section">
      <h3 class="paradox-section__title">🤔 Reflection Question</h3>
      <div class="quiz-question">${quizQuestions.question}</div>
      <div class="quiz-options">
        ${quizQuestions.options.map((option, index) => `
          <div class="quiz-option" onclick="selectQuizOption(this, ${index})">
            ${option}
          </div>
        `).join('')}
      </div>
      <div class="quiz-result hidden" id="quizResult"></div>
    </div>
  `;
}

// Generate visual metaphor content
function generateVisualMetaphor(paradox) {
  switch (paradox.id) {
    case 'liar':
      return '<div class="mobius-strip"></div>';
    case 'theseus':
      return `<div class="ship-visual">
        ${Array(5).fill(0).map((_, i) => `<div class="ship-part" id="part-${i}"></div>`).join('')}
      </div>`;
    case 'trolley':
      return '🚃➡️👥👥👥👥👥<br>⬇️<br>👤';
    case 'mary':
      return '⬜⬜⬜⬜⬜<br>⬜👩‍🔬⬜<br>⬜⬜🔴⬜⬜';
    case 'chinese-room':
      return '📥中文➡️🏠➡️中文📤<br>❓理解❓';
    case 'russell':
      return '🔄{A ∉ A} ∈ ?';
    case 'zeno':
      return '🏃‍♂️...½...¼...⅛...🐢';
    case 'choice':
      return '🚪🚪🚪🚪🚪<br>😵‍💫';
    case 'grandfather':
      return '👴❌➡️👶❌➡️👤❌';
    case 'tolerance':
      return '⚖️📊📉';
    default:
      return visualIcons[paradox.id] || '🤔';
  }
}

// Generate interactive section based on paradox type
function generateInteractiveSection(paradox) {
  if (paradox.id === 'trolley') {
    return `
      <div class="paradox-section">
        <h3 class="paradox-section__title">🚃 Interactive Scenario</h3>
        <div class="trolley-interactive" id="trolleyInteractive">
          <div class="trolley-scenario">
            <div class="trolley-track">
              <div class="trolley-cart">🚃</div>
              <div class="trolley-people main-track">👥👥👥👥👥</div>
              <div class="trolley-people side-track">👤</div>
              <button class="trolley-lever" id="trolleyLever" onclick="animateTrolley()">Switch Track</button>
            </div>
            <div class="trolley-question">
              <p>The trolley is heading toward 5 people. You can pull the lever to divert it, killing 1 person instead. What do you choose?</p>
              <div class="trolley-buttons">
                <button class="btn btn--primary" onclick="trolleyChoice('pull')">Pull Lever (Save 5, Kill 1)</button>
                <button class="btn btn--secondary" onclick="trolleyChoice('nothing')">Do Nothing (Kill 5)</button>
              </div>
              <div class="trolley-result hidden" id="trolleyResult"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  if (paradox.id === 'mary') {
    return `
      <div class="paradox-section">
        <h3 class="paradox-section__title">🎨 Mary's Experience</h3>
        <div class="mary-room" id="maryRoom">
          <div class="room-container">
            <div class="room black-white" id="maryRoomVisual">
              <div class="room-mary">👩‍🔬</div>
              <div class="room-objects">📚📺🖥️</div>
              <button class="btn btn--primary room-button" onclick="showColor()">Show Mary a Red Apple</button>
              <div class="color-revelation hidden" id="colorRevelation">
                <div class="red-apple">🍎</div>
                <p><strong>Mary sees red for the first time!</strong><br>Did she learn something new?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  if (paradox.id === 'theseus') {
    return `
      <div class="paradox-section">
        <h3 class="paradox-section__title">🚢 Ship Transformation</h3>
        <div class="visual-metaphor">
          <button class="btn btn--primary" onclick="animateShipReplacement()">Replace Ship Parts</button>
          <p id="shipStatus">Original ship with all original parts</p>
        </div>
      </div>
    `;
  }
  
  return '';
}

// Generate quiz questions for each paradox
function generateQuizQuestions(paradox) {
  const quizData = {
    'liar': {
      question: "How might the Liar Paradox be resolved?",
      options: [
        "Ban all self-referential statements",
        "Accept that some statements are neither true nor false",
        "Ignore the paradox as meaningless",
        "Create separate levels of truth"
      ],
      correct: 1
    },
    'theseus': {
      question: "What makes something 'the same' over time?",
      options: [
        "Physical continuity of parts",
        "Functional continuity",
        "Historical continuity",
        "All of the above could be valid"
      ],
      correct: 3
    },
    'trolley': {
      question: "Why do most people have different intuitions about pulling a lever vs. pushing someone?",
      options: [
        "The outcomes are actually different",
        "Direct action feels more morally significant than indirect action",
        "People don't think rationally about ethics",
        "Cultural conditioning affects our responses"
      ],
      correct: 1
    }
    // Add more quiz questions for other paradoxes...
  };
  
  return quizData[paradox.id] || {
    question: "What does this paradox teach us about human reasoning?",
    options: [
      "Our intuitions can be contradictory",
      "Logic has limitations",
      "Philosophy helps clarify thinking",
      "All of the above"
    ],
    correct: 3
  };
}

// Setup interactive elements for specific paradoxes
function setupInteractiveElements(paradox) {
  if (paradox.id === 'theseus') {
    // Setup ship part replacement animation
    let replacedParts = 0;
    const totalParts = 5;
    
    window.animateShipReplacement = function() {
      if (replacedParts < totalParts) {
        const part = document.getElementById(`part-${replacedParts}`);
        if (part) {
          part.classList.add('replaced');
          replacedParts++;
          
          const status = document.getElementById('shipStatus');
          if (status) {
            if (replacedParts === totalParts) {
              status.textContent = "All parts replaced! Is this still the same ship?";
            } else {
              status.textContent = `${replacedParts}/${totalParts} parts replaced`;
            }
          }
        }
      }
    };
  }
}

// Handle trolley problem choice
function trolleyChoice(choice) {
  const result = document.getElementById('trolleyResult');
  result.classList.remove('hidden');
  
  if (choice === 'pull') {
    result.innerHTML = `
      <p><strong>You chose to pull the lever.</strong></p>
      <p>You actively caused one death to prevent five. This utilitarian choice maximizes overall well-being, but you directly caused harm. How does this make you feel?</p>
    `;
  } else {
    result.innerHTML = `
      <p><strong>You chose to do nothing.</strong></p>
      <p>You allowed five deaths to avoid actively causing one. This respects the moral distinction between killing and letting die, but results in more deaths overall. Was this the right choice?</p>
    `;
  }
}

// Show color in Mary's room
function showColor() {
  const room = document.getElementById('maryRoomVisual');
  const revelation = document.getElementById('colorRevelation');
  
  if (room && revelation) {
    room.style.filter = 'none';
    revelation.classList.remove('hidden');
  }
}

// Animate trolley movement
function animateTrolley() {
  const cart = document.querySelector('.trolley-cart');
  if (cart) {
    cart.style.left = '60%';
    setTimeout(() => {
      cart.style.left = '20px';
    }, 2000);
  }
}

// Handle search functionality
function handleSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  filteredParadoxes = paradoxesData.paradoxes.filter(paradox => 
    paradox.title.toLowerCase().includes(searchTerm) ||
    paradox.category.toLowerCase().includes(searchTerm) ||
    paradox.philosopher.toLowerCase().includes(searchTerm) ||
    paradox.summary.toLowerCase().includes(searchTerm)
  );
  renderParadoxGrid();
}

// Handle category filter
function handleCategoryFilter(event) {
  const category = event.target.value;
  if (category === '') {
    filteredParadoxes = paradoxesData.paradoxes;
  } else {
    filteredParadoxes = paradoxesData.paradoxes.filter(paradox => 
      paradox.category === category
    );
  }
  renderParadoxGrid();
}

// Toggle theme
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-color-scheme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-color-scheme', newTheme);
}

// Toggle bookmark
function toggleBookmark(paradoxId) {
  if (bookmarkedParadoxes.has(paradoxId)) {
    bookmarkedParadoxes.delete(paradoxId);
  } else {
    bookmarkedParadoxes.add(paradoxId);
  }
  renderParadoxGrid();
  
  // Update modal if open
  const modal = document.getElementById('paradoxModal');
  if (!modal.classList.contains('hidden')) {
    const bookmarkBtn = modal.querySelector('.bookmark-btn');
    if (bookmarkBtn) {
      bookmarkBtn.classList.toggle('bookmarked', bookmarkedParadoxes.has(paradoxId));
      bookmarkBtn.innerHTML = bookmarkedParadoxes.has(paradoxId) ? '★ Bookmarked' : '☆ Bookmark';
    }
  }
}

// Navigate between paradoxes in modal
function navigateParadox(direction) {
  const newIndex = currentParadoxIndex + direction;
  if (newIndex >= 0 && newIndex < paradoxesData.paradoxes.length) {
    const newParadoxId = paradoxesData.paradoxes[newIndex].id;
    openParadoxModal(newParadoxId);
  }
}

// Close modal
function closeModal() {
  const modal = document.getElementById('paradoxModal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Handle keyboard navigation
function handleKeyNavigation(event) {
  const modal = document.getElementById('paradoxModal');
  if (!modal.classList.contains('hidden')) {
    switch (event.key) {
      case 'Escape':
        closeModal();
        break;
      case 'ArrowLeft':
        navigateParadox(-1);
        break;
      case 'ArrowRight':
        navigateParadox(1);
        break;
    }
  }
}

// Select quiz option
function selectQuizOption(element, index) {
  // Remove previous selections
  const options = element.parentNode.querySelectorAll('.quiz-option');
  options.forEach(option => option.classList.remove('selected'));
  
  // Select clicked option
  element.classList.add('selected');
  
  // Show result
  const result = document.getElementById('quizResult');
  if (result) {
    result.classList.remove('hidden');
    result.innerHTML = `
      <p><strong>Interesting choice!</strong> This paradox shows how philosophical thinking can challenge our assumptions and reveal the complexity of seemingly simple concepts.</p>
    `;
  }
}

// Update progress indicator
function updateProgress() {
  const progressCount = document.querySelector('.progress-count');
  const progressFill = document.querySelector('.progress-fill');
  
  if (progressCount && progressFill) {
    const count = exploredParadoxes.size;
    const total = paradoxesData.paradoxes.length;
    const percentage = (count / total) * 100;
    
    progressCount.textContent = count;
    progressFill.style.width = `${percentage}%`;
  }
}
