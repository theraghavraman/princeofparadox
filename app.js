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
    },

  // ─────────────────────────────────────────────────────────────────────
  // EXTENDED ARCHIVE — 50 additional Western + Eastern thought experiments
  // Each specimen follows the original engine schema so all existing
  // search, filtering, bookmarking, exploration, modal and quiz systems work.
  // ─────────────────────────────────────────────────────────────────────
  {
    id:"sorites", title:"Sorites Paradox", category:"Logical", philosopher:"Eubulides of Miletus",
    summary:"If removing one grain cannot make a heap cease to be a heap, when does the heap disappear?",
    description:"The Sorites paradox arises from vague predicates. A heap remains a heap after removing one grain; repeating that apparently harmless step eventually removes every grain. Where, exactly, does the concept change?",
    structure:["A million grains clearly form a heap","Remove one grain and it still seems a heap","Repeat the same reasoning grain by grain","Vagueness makes the boundary impossible to locate"],
    examples:["Baldness","Tall versus short","When a collection becomes a crowd","When a pile becomes a pile of nothing"],
    modernRelevance:"AI classification thresholds, fuzzy logic, law, medical diagnosis and machine-learning decision boundaries",
    visualMetaphor:"A heap dissolving grain by grain while the label remains unchanged", color:"#ff8a65"
  },
  {
    id:"barber", title:"The Barber Paradox", category:"Logical", philosopher:"Bertrand Russell",
    summary:"A barber shaves all and only those men in the village who do not shave themselves. Who shaves the barber?",
    description:"If the barber shaves himself, he violates the rule. If he does not, the rule requires him to shave himself. The apparently ordinary definition generates an impossible object.",
    structure:["Define the barber by a universal rule","Ask whether the barber shaves himself","If yes, the rule is broken","If no, the rule requires him to shave himself"],
    examples:["Self-excluding membership rules","Recursive software permissions","Systems that define their own exceptions"],
    modernRelevance:"Type systems, access-control logic, automated policy engines and recursive definitions",
    visualMetaphor:"A razor circling back toward its own handle", color:"#7c8cff"
  },
  {
    id:"berry", title:"Berry's Paradox", category:"Linguistic", philosopher:"G. G. Berry / Bertrand Russell",
    summary:"How can a phrase refer to the smallest number that cannot be described in fewer than a certain number of words?",
    description:"Berry's paradox exposes how natural language can generate self-referential descriptions that seem to define an object while simultaneously defeating the constraints of the definition.",
    structure:["Specify a word-length limit","Refer to the first number not describable within that limit","The phrase itself appears to describe it","Language has escaped the rule it stated"],
    examples:["Self-referential definitions","Search queries that define their own target","AI prompts that describe impossible specifications"],
    modernRelevance:"Natural-language AI, computability, prompt interpretation and semantic ambiguity",
    visualMetaphor:"A sentence folding into a smaller sentence that points back to itself", color:"#a78bfa"
  },
  {
    id:"grelling", title:"Grelling–Nelson Paradox", category:"Linguistic", philosopher:"Kurt Grelling / Leonard Nelson",
    summary:"Is the word 'heterological' heterological if it does not describe itself?",
    description:"Words that describe themselves are autological; words that do not are heterological. Asking whether 'heterological' describes itself creates a semantic loop resembling the Liar paradox.",
    structure:["Classify predicates as self-describing or not","Ask whether 'heterological' describes itself","Either answer flips the classification","The predicate destabilizes its own definition"],
    examples:["Adjectives that describe themselves","Meta-language classification","Programming labels that alter their own semantics"],
    modernRelevance:"Natural-language processing, type systems and semantic self-reference",
    visualMetaphor:"A label attached to a word that changes when you read the label", color:"#ff5ca8"
  },
  {
    id:"curry", title:"Curry's Paradox", category:"Logical", philosopher:"Haskell Curry",
    summary:"A conditional that merely refers to itself can appear to prove almost anything.",
    description:"Curry's paradox shows that certain combinations of implication, self-reference and naive truth rules can trivialize a logical system without using negation.",
    structure:["Construct a self-referential conditional","Assume the antecedent","Use the system's own implication rules","The arbitrary conclusion appears derivable"],
    examples:["Self-referential proofs","Programming languages with unsafe recursion","Naive semantic theories"],
    modernRelevance:"Formal verification, theorem provers, programming-language semantics and foundations of logic",
    visualMetaphor:"A proof arrow that loops around and points to every possible conclusion", color:"#5eead4"
  },
  {
    id:"pinocchio", title:"Pinocchio Paradox", category:"Logical", philosopher:"Veronica Frenkel",
    summary:"Pinocchio says, 'My nose is growing.' If it grows, he spoke truth; if it does not, he lied.",
    description:"The Pinocchio paradox turns a fictional character's physical response to lying into a self-referential truth problem.",
    structure:["Pinocchio makes a prediction about his nose","If it grows, the statement was true","If it does not, the statement was false and should trigger growth","The causal rule loops back into truth"],
    examples:["Automated fact-checkers","Sensors responding to their own predictions","Feedback-controlled systems"],
    modernRelevance:"AI agents, feedback loops, prediction systems and cybernetics",
    visualMetaphor:"A growing nose becoming a circular feedback signal", color:"#fb7185"
  },
  {
    id:"unexpected-exam", title:"Unexpected Hanging / Surprise Exam", category:"Epistemic", philosopher:"Carl Hempel / Lennart",
    summary:"If a punishment must be unexpected, can logical reasoning eliminate every possible day?",
    description:"The surprise-exam family of puzzles asks whether perfect reasoning about another person's knowledge can destroy the very surprise being predicted.",
    structure:["An event will occur on one of several days","It must be unexpected when it occurs","Backward reasoning appears to eliminate the final day","The same reasoning propagates backward until every day seems impossible"],
    examples:["Surprise tests","Court judgments","Public announcements and prediction"],
    modernRelevance:"Epistemic logic, game theory, security and adversarial reasoning",
    visualMetaphor:"A calendar whose dates disappear as soon as they are predicted", color:"#facc15"
  },
  {
    id:"crocodile", title:"Crocodile Paradox", category:"Logical", philosopher:"Ancient Greek logical tradition",
    summary:"A crocodile promises to return a child only if the parent's prediction about its choice is correct.",
    description:"A promise about a future decision creates a loop between the crocodile's action and the truth of the parent's prediction.",
    structure:["Crocodile takes a child","Parent predicts whether the child will be returned","Crocodile uses truth of prediction as its condition","Either response can destabilize the promise"],
    examples:["Conditional contracts","Self-referential promises","Automated decision policies"],
    modernRelevance:"Legal logic, contract design and strategic AI systems",
    visualMetaphor:"Two jaws closing around a conditional statement", color:"#84cc16"
  },
  {
    id:"raven", title:"Raven Paradox", category:"Epistemic", philosopher:"Carl Hempel",
    summary:"If observing a non-black non-raven confirms that all ravens are black, why does a green apple teach us about ravens?",
    description:"Hempel's confirmation paradox challenges our intuition about inductive evidence. Logically equivalent formulations of a hypothesis can make radically different observations appear relevant.",
    structure:["Hypothesis: all ravens are black","Equivalent form: all non-black things are non-ravens","A green apple is non-black and non-raven","Does observing the apple confirm the raven hypothesis?"],
    examples:["Scientific sampling","Medical evidence","Machine-learning datasets"],
    modernRelevance:"Statistics, scientific inference, data selection and AI evaluation",
    visualMetaphor:"A black raven connected by an impossible evidence line to a green apple", color:"#22d3ee"
  },
  {
    id:"monty-hall", title:"Monty Hall Problem", category:"Psychological", philosopher:"Steve Selvin / Monty Hall",
    summary:"After one losing door is revealed, switching doors gives a better chance of winning.",
    description:"Three doors hide one prize and two losses. After your first choice, the host reveals a losing door. Your intuition says the remaining doors are equal; probability says switching is better.",
    structure:["Choose one of three doors","Host reveals a losing door you did not choose","Two doors remain","Switching doubles the original probability of winning"],
    examples:["Game shows","Medical testing","Sequential decision-making"],
    modernRelevance:"Bayesian reasoning, statistics, risk analysis and algorithmic decision systems",
    visualMetaphor:"Three luminous doors with one probability path changing after revelation", color:"#60a5fa"
  },
  {
    id:"newcomb", title:"Newcomb's Paradox", category:"Ethical", philosopher:"William Newcomb / Robert Nozick",
    summary:"Should you choose by causal reasoning or by predicting what a nearly perfect predictor already placed in the boxes?",
    description:"Newcomb's paradox pits dominance reasoning against evidential reasoning. A predictor has filled boxes based on what it expects you will choose, producing incompatible but compelling strategies.",
    structure:["A highly accurate predictor fills two boxes","You may take one box or both","Taking both dominates after the prediction is fixed","Yet the prediction makes one-boxing appear more likely to win"],
    examples:["Strategic games","AI prediction markets","Decision-making under predictive models"],
    modernRelevance:"Game theory, algorithmic prediction, free will and AI forecasting",
    visualMetaphor:"Two transparent boxes with a prediction signal arriving from the future", color:"#c084fc"
  },
  {
    id:"prisoners", title:"Prisoner's Dilemma", category:"Ethical", philosopher:"Merrill Flood / Melvin Dresher",
    summary:"Rational self-interest can lead two people to a worse outcome than cooperation.",
    description:"Two prisoners independently choose cooperation or betrayal. Each has a reason to betray, yet mutual betrayal leaves both worse off than mutual cooperation.",
    structure:["Each player chooses without knowing the other's choice","Betrayal dominates under standard incentives","Both rationally betray","The collective result is worse than cooperation"],
    examples:["Arms races","Price competition","Climate agreements","Repeated social cooperation"],
    modernRelevance:"Game theory, geopolitics, climate policy and multi-agent AI",
    visualMetaphor:"Two branching decision trees whose best local moves create the worst shared branch", color:"#f97316"
  },
  {
    id:"sleeping-beauty", title:"Sleeping Beauty Problem", category:"Epistemic", philosopher:"Adam Elga",
    summary:"When should a person assign probability after awakening if memory of previous awakenings is erased?",
    description:"Sleeping Beauty's probability estimate depends on how one interprets repeated awakenings and evidence that does not distinguish between possible worlds.",
    structure:["A coin is tossed","Beauty is awakened according to a conditional schedule","Her memory is erased between awakenings","She must estimate the probability of heads"],
    examples:["Repeated experiments","Sampling problems","Observer selection"],
    modernRelevance:"Probability theory, anthropic reasoning and AI agent uncertainty",
    visualMetaphor:"A sleeping chamber splitting into two probabilistic timelines", color:"#818cf8"
  },
  {
    id:"experience-machine", title:"Experience Machine", category:"Ethical", philosopher:"Robert Nozick",
    summary:"If a machine could guarantee perfect experiences, would you plug in forever?",
    description:"Nozick's experience machine asks whether pleasure and subjective experience are all that matter. If you refuse, perhaps reality, agency and authenticity have value beyond felt experience.",
    structure:["Imagine a machine that simulates a perfect life","You can choose any experiences","The simulation feels completely real","Would you sacrifice reality for perfect experience?"],
    examples:["Virtual reality","Entertainment addiction","Synthetic companionship"],
    modernRelevance:"VR, generative worlds, AI companions and digital identity",
    visualMetaphor:"A neural interface suspended between a real horizon and an artificial one", color:"#a78bfa"
  },
  {
    id:"brain-vat", title:"Brain in a Vat", category:"Epistemic", philosopher:"Hilary Putnam / skeptical tradition",
    summary:"How can you know you are not a brain receiving perfectly simulated signals?",
    description:"The brain-in-a-vat scenario asks whether experience alone can establish an external world. If every sensory signal were generated artificially, ordinary evidence might look exactly as it does now.",
    structure:["Imagine a brain isolated from the world","A system supplies perfectly matching sensory signals","Every experience appears normal","What evidence could distinguish simulation from reality?"],
    examples:["Virtual reality","Dreams","Simulation hypotheses"],
    modernRelevance:"AI-generated realities, VR, epistemology and digital simulation",
    visualMetaphor:"A glowing neural network suspended inside a transparent computational vessel", color:"#38bdf8"
  },
  {
    id:"teleporter", title:"Teleportation Paradox", category:"Metaphysical", philosopher:"Derek Parfit",
    summary:"If a machine destroys your body and recreates an exact copy elsewhere, did you travel?",
    description:"Teleportation separates physical continuity from psychological continuity. If the replica has your memories and personality, is it you, a successor, or merely a perfect copy?",
    structure:["A scanner records every physical detail","The original body is destroyed","An exact psychological and physical replica appears elsewhere","Question: survival, death or duplication?"],
    examples:["Digital backups","Mind uploading","Perfect cloning"],
    modernRelevance:"AI identity, digital twins, brain emulation and personal data",
    visualMetaphor:"A human silhouette dissolving into particles and reforming across a luminous gate", color:"#2dd4bf"
  },
  {
    id:"fission", title:"Personal Identity Fission", category:"Metaphysical", philosopher:"Derek Parfit",
    summary:"If one person becomes two equally continuous successors, which one is the original?",
    description:"Fission pushes identity beyond simple one-to-one continuity. If two people inherit your memories and character equally, numerical identity cannot straightforwardly select just one.",
    structure:["One person has a complete psychological history","Two successors inherit that history","Both claim continuity with the original","Ordinary identity becomes inadequate"],
    examples:["Cloning","Digital copies","Split-brain thought experiments"],
    modernRelevance:"AI replicas, digital immortality and legal identity",
    visualMetaphor:"One luminous identity stream branching into two equal paths", color:"#14b8a6"
  },
  {
    id:"twin-earth", title:"Twin Earth", category:"Philosophy of Mind", philosopher:"Hilary Putnam",
    summary:"If an identical world uses a different substance for water, does the word 'water' mean the same thing?",
    description:"Twin Earth challenges the idea that meaning exists entirely inside an individual's head. External environment and social usage can partly determine reference.",
    structure:["Imagine a planet identical to Earth","Its lakes contain a different liquid with the same appearance","People use the word 'water' for that substance","Meaning appears partly dependent on the external world"],
    examples:["Words and reference","Scientific categories","AI grounding"],
    modernRelevance:"Language models, semantic grounding and embodied AI",
    visualMetaphor:"Two mirrored planets with identical labels attached to different liquids", color:"#06b6d4"
  },
  {
    id:"swampman", title:"Swampman", category:"Metaphysical", philosopher:"Donald Davidson",
    summary:"If a person is accidentally recreated molecule-for-molecule, does the replica have the original person's beliefs?",
    description:"Davidson's Swampman thought experiment challenges whether meaning and mental content can arise instantaneously from physical duplication without causal history.",
    structure:["A person is destroyed by lightning","An identical organism appears by chance","It behaves exactly like the original","Does it have genuine beliefs, memories and meaning?"],
    examples:["Instant cloning","Artificial minds","Digital reconstruction"],
    modernRelevance:"AI agents, machine consciousness and causal accounts of meaning",
    visualMetaphor:"A human silhouette reconstructed from a flash of static electricity", color:"#7dd3fc"
  },
  {
    id:"frenchman", title:"The Frenchman and the Englishman", category:"Linguistic", philosopher:"Philosophical language tradition",
    summary:"Can a statement change truth merely because different speakers use the same words differently?",
    description:"Indexicals, context and reference can make apparently identical statements behave differently across speakers and situations.",
    structure:["Two speakers utter the same sentence","Their contexts differ","Reference shifts with speaker or situation","Identical words can carry different truth conditions"],
    examples:["I / here / now","Legal testimony","Cross-cultural translation"],
    modernRelevance:"Natural-language AI, translation and conversational agents",
    visualMetaphor:"Two speech bubbles pointing to different coordinates", color:"#f472b6"
  },
  {
    id:"omnipotence", title:"Omnipotence Paradox", category:"Religious", philosopher:"Medieval theological tradition",
    summary:"Can an omnipotent being create a stone so heavy that it cannot lift it?",
    description:"The paradox asks whether unlimited power is coherent when a task is defined to contradict the very concept of unlimited power.",
    structure:["Define omnipotence as unlimited ability","Ask whether an omnipotent being can create an unliftable object","If yes, lifting it becomes impossible","If no, omnipotence appears limited"],
    examples:["Divine attributes","Logical possibility","Definitions of power"],
    modernRelevance:"Philosophy of religion, modal logic and AI discussions of capability",
    visualMetaphor:"A cosmic hand facing a stone engraved with an impossible instruction", color:"#fbbf24"
  },
  {
    id:"euthyphro", title:"Euthyphro Dilemma", category:"Religious", philosopher:"Plato",
    summary:"Is something good because the gods command it, or do the gods command it because it is good?",
    description:"The Euthyphro dilemma separates morality from divine command or makes divine command the source of morality, creating a difficult fork for theories of ethics.",
    structure:["Assume divine commands determine goodness","Ask whether goodness exists independently","If independent, commands do not create goodness","If not, morality risks becoming arbitrary"],
    examples:["Divine command theory","Moral realism","Religious ethics"],
    modernRelevance:"AI ethics, moral foundations and secular versus religious normativity",
    visualMetaphor:"Two luminous paths branching from one moral question", color:"#f59e0b"
  },
  {
    id:"buridan", title:"Buridan's Ass", category:"Psychological", philosopher:"Jean Buridan",
    summary:"An equally hungry animal placed exactly between two identical sources of food cannot rationally choose either.",
    description:"The thought experiment questions whether pure rational calculation can produce action when alternatives have exactly equal reasons.",
    structure:["Two identical options are equally desirable","No preference distinguishes them","Perfect symmetry removes a deciding reason","The agent risks remaining motionless"],
    examples:["Decision paralysis","Tie-breaking algorithms","Indecision under symmetry"],
    modernRelevance:"AI decision policies, optimization and randomization strategies",
    visualMetaphor:"A symmetric decision node with two identical glowing paths", color:"#84cc16"
  },
  {
    id:"pascal-wager", title:"Pascal's Wager", category:"Existential", philosopher:"Blaise Pascal",
    summary:"If belief has infinite possible payoff, can practical reason justify believing?",
    description:"Pascal frames belief as a decision under uncertainty: finite costs may appear negligible beside an infinite possible reward, raising questions about rational choice and belief.",
    structure:["Consider belief and disbelief","Assign radically different possible outcomes","Compare expected consequences","Ask whether infinite stakes change rational action"],
    examples:["Risk decisions","Insurance","Existential uncertainty"],
    modernRelevance:"Decision theory, risk communication and rational choice",
    visualMetaphor:"A finite coin balanced against an infinite vertical axis", color:"#facc15"
  },
  {
    id:"free-will", title:"Free Will vs Determinism", category:"Metaphysical", philosopher:"Hume / Kant / contemporary philosophy",
    summary:"If every action has prior causes, in what sense could a person have chosen otherwise?",
    description:"The problem of free will asks whether causal determination excludes genuine agency or whether freedom can be understood as acting according to one's reasons without external coercion.",
    structure:["Every event appears to have prior causes","Human choices are events","If causes fix choices, alternatives seem impossible","Yet responsibility presupposes agency"],
    examples:["Criminal responsibility","Addiction and compulsion","AI autonomy"],
    modernRelevance:"Neuroscience, law, autonomous systems and moral responsibility",
    visualMetaphor:"A branching tree whose branches are connected by hidden causal threads", color:"#8b5cf6"
  },
  {
    id:"heaps", title:"Heap / Vagueness Revisited", category:"Linguistic", philosopher:"Ancient Greek logical tradition",
    summary:"When does a collection stop being a collection after tiny changes?",
    description:"The heap family shows how concepts with no sharp boundary can defeat apparently valid step-by-step reasoning.",
    structure:["A clear case exists","A tiny change seems unable to alter the category","Repeat the tiny change many times","The original category eventually disappears"],
    examples:["Rich and poor","Old and young","Safe and dangerous"],
    modernRelevance:"Regulation, threshold design, machine classification and policy",
    visualMetaphor:"A gradient field slowly crossing an invisible semantic boundary", color:"#fb7185"
  },
  {
    id:"gambler", title:"Gambler's Fallacy", category:"Psychological", philosopher:"Probability theory tradition",
    summary:"After many tails, people often feel heads is 'due' even when trials are independent.",
    description:"Independent random events can produce streaks without creating a compensating force. Human pattern detection turns random sequences into stories of balance.",
    structure:["Coin tosses are independent","A streak appears","The mind expects reversal","Probability gives no memory to the coin"],
    examples:["Casino betting","Lottery numbers","Market timing"],
    modernRelevance:"Behavioral finance, statistics, gambling psychology and AI forecasting",
    visualMetaphor:"A probability wheel whose past spins leave no physical trace", color:"#fb923c"
  },
  {
    id:"clustering", title:"Clustering Illusion", category:"Psychological", philosopher:"Daniel Kahneman / Amos Tversky",
    summary:"Random events often look meaningful because humans are poor at recognizing genuine randomness.",
    description:"Random processes naturally create clusters. Observers can mistake those clusters for patterns, intention or hidden causes.",
    structure:["Generate a random sequence","Clusters naturally appear","Observer searches for explanation","Noise is interpreted as signal"],
    examples:["Sports streaks","Stock charts","Coin-toss patterns"],
    modernRelevance:"Data science, anomaly detection, AI pattern recognition and misinformation",
    visualMetaphor:"A field of random points forming accidental constellations", color:"#38bdf8"
  },
  {
    id:"braess", title:"Braess's Paradox", category:"Political", philosopher:"Dietrich Braess",
    summary:"Adding a road to a network can make everyone's journey slower.",
    description:"A seemingly beneficial new connection can worsen the equilibrium of a network because individually rational route choices interact.",
    structure:["A traffic network has an equilibrium","Add a seemingly useful shortcut","Drivers change routes independently","Total travel time can increase"],
    examples:["Road planning","Internet routing","Supply chains"],
    modernRelevance:"Network science, smart cities, distributed computing and congestion pricing",
    visualMetaphor:"A glowing network gaining one edge while every route turns red", color:"#ef4444"
  },
  {
    id:"simpson", title:"Simpson's Paradox", category:"Epistemic", philosopher:"Edward Simpson",
    summary:"A trend can appear in several groups but reverse when the groups are combined.",
    description:"Aggregated data can tell a different story from every subgroup because a hidden variable changes the weighting of observations.",
    structure:["Compare two groups","Each subgroup favors one outcome","Combine the groups","The overall trend reverses"],
    examples:["Medical studies","University admissions","Hiring statistics"],
    modernRelevance:"Data analytics, causal inference, dashboards and AI fairness",
    visualMetaphor:"Two downward graphs merging into one upward graph", color:"#22c55e"
  },
  {
    id:"monty-variation", title:"Bertrand's Box / Three Boxes", category:"Logical", philosopher:"Joseph Bertrand",
    summary:"Random selection can hide conditional information that radically changes the odds.",
    description:"Bertrand's probability puzzles show how the procedure used to obtain information can matter as much as the information itself.",
    structure:["Construct apparently symmetric cases","Reveal information conditionally","The cases are no longer equally likely","The sampling mechanism changes the answer"],
    examples:["Bayesian diagnosis","Randomized experiments","Selection bias"],
    modernRelevance:"Statistics, machine learning and experimental design",
    visualMetaphor:"Three boxes whose probabilities rearrange when one is opened", color:"#14b8a6"
  },
  {
    id:"doomsday", title:"Doomsday Argument", category:"Temporal", philosopher:"Brandon Carter",
    summary:"Can your position in the sequence of all humans tell you something about humanity's future?",
    description:"The Doomsday argument uses an observer's apparently ordinary birth rank to reason about the possible total number of humans who will ever live.",
    structure:["Imagine all humans ordered by birth","You observe your own approximate position","Assume your position is not unusually special","Infer something about the possible total population"],
    examples:["Population forecasts","Anthropic reasoning","Longevity predictions"],
    modernRelevance:"Longtermism, existential risk and Bayesian anthropic reasoning",
    visualMetaphor:"A timeline extending into darkness with one illuminated observer marker", color:"#6366f1"
  },
  {
    id:"fermi", title:"Fermi Paradox", category:"Existential", philosopher:"Enrico Fermi",
    summary:"If intelligent extraterrestrial life should be common, why have we seen no clear evidence of it?",
    description:"The Fermi paradox contrasts the enormous number of potentially habitable worlds with the absence of unambiguous signs of advanced extraterrestrial civilizations.",
    structure:["The universe contains vast numbers of stars","Many systems could support life","Civilizations might have had enormous time to spread","Yet the sky remains conspicuously quiet"],
    examples:["Drake equation","Great Filter","Technological civilizations"],
    modernRelevance:"Astrobiology, existential risk and humanity's cosmic future",
    visualMetaphor:"A dense star field interrupted by one silent radio signal", color:"#60a5fa"
  },
  {
    id:"bootstrap", title:"Bootstrap Paradox", category:"Temporal", philosopher:"Robert Heinlein / time-travel tradition",
    summary:"Can an object or idea exist in a time loop without ever having an original source?",
    description:"A traveler receives a book from the future, publishes it in the past, and later receives the same book. Where did the information originate?",
    structure:["An object or idea travels backward in time","It becomes the cause of its own earlier existence","The loop closes","No original source can be identified"],
    examples:["Time-loop inventions","Future knowledge","Predestination narratives"],
    modernRelevance:"Causal models, time-travel physics and information theory",
    visualMetaphor:"A glowing object moving around a closed temporal ring", color:"#c084fc"
  },
  {
    id:"predestination", title:"Predestination Paradox", category:"Temporal", philosopher:"Time-travel thought-experiment tradition",
    summary:"Trying to prevent an event may become the very cause that makes it happen.",
    description:"A traveler goes back to prevent an event and unknowingly performs the actions that guarantee it. The attempt to change history becomes part of history.",
    structure:["A future event motivates intervention","Traveler enters the past","Intervention creates the conditions for the event","The attempt to prevent it ensures it"],
    examples:["Time-travel fiction","Causal loops","Self-fulfilling predictions"],
    modernRelevance:"Causal inference and feedback systems",
    visualMetaphor:"A timeline whose two ends meet at the same event", color:"#a855f7"
  },
  {
    id:"unexpected-utility", title:"The Utility Monster", category:"Ethical", philosopher:"Robert Nozick",
    summary:"What if one being gains vastly more utility from every resource than everyone else?",
    description:"The utility monster challenges utilitarian aggregation by imagining a being whose capacity for pleasure dwarfs that of everyone else.",
    structure:["Assume utility can be compared between people","Imagine one being with extreme utility capacity","Giving resources to it maximizes aggregate utility","Intuition resists sacrificing everyone else"],
    examples:["Resource allocation","AI optimization","Population ethics"],
    modernRelevance:"AI alignment, welfare economics and optimization objectives",
    visualMetaphor:"One expanding utility curve consuming an entire finite resource field", color:"#f43f5e"
  },
  {
    id:"repugnant-conclusion", title:"Repugnant Conclusion", category:"Ethical", philosopher:"Derek Parfit",
    summary:"Could a very large population living barely worthwhile lives be judged better than a smaller population living excellent lives?",
    description:"Population ethics creates tension between total welfare and quality of life when population size can vary.",
    structure:["Compare a small population with excellent lives","Gradually increase population while lowering average welfare","Total welfare can continue rising","Eventually an enormous barely-good population appears preferable"],
    examples:["Future population policy","Climate trade-offs","Resource distribution"],
    modernRelevance:"Longtermism, AI ethics and global policy",
    visualMetaphor:"A small bright city transforming into an immense dim horizon", color:"#fb7185"
  },
  {
    id:"nonidentity", title:"Non-Identity Problem", category:"Ethical", philosopher:"Derek Parfit",
    summary:"How can a decision harm future people if the decision changes who will exist?",
    description:"Some choices affect the identities of future people rather than merely their circumstances. A harmful policy may produce people whose lives are still worth living, complicating the idea of harm.",
    structure:["A present choice changes future conditions","That choice also changes who will be born","The affected person would not exist under the alternative","Can the person say the decision harmed them?"],
    examples:["Climate policy","Reproductive ethics","Intergenerational justice"],
    modernRelevance:"Climate change, population ethics and long-term governance",
    visualMetaphor:"Two future timelines containing entirely different faces", color:"#2dd4bf"
  },
  {
    id:"veils", title:"Veil of Ignorance", category:"Political", philosopher:"John Rawls",
    summary:"What principles would you choose if you did not know your own place in society?",
    description:"Rawls asks decision-makers to design social rules behind a veil that hides their class, wealth, gender, abilities and status.",
    structure:["Imagine designing society's rules","Remove knowledge of your future social position","Choose principles without knowing whether you benefit","Evaluate whether the resulting system is fair"],
    examples:["Constitutions","Tax policy","Healthcare allocation"],
    modernRelevance:"Algorithmic fairness, public policy and institutional design",
    visualMetaphor:"Anonymous silhouettes designing a society behind translucent glass", color:"#06b6d4"
  },
  {
    id:"scapegoat", title:"Scapegoat Mechanism", category:"Political", philosopher:"René Girard",
    summary:"Can a community restore unity by collectively blaming one person?",
    description:"Girard's mimetic theory describes how rivalry can converge on a victim, temporarily restoring social order while concealing the mechanism that produced the conflict.",
    structure:["Desire spreads through imitation","Rivalry increases","A group converges on a single victim","Violence temporarily restores unity"],
    examples:["Political blame","Moral panics","Online pile-ons"],
    modernRelevance:"Social media dynamics, propaganda and collective behavior",
    visualMetaphor:"Many identical arrows converging on one illuminated silhouette", color:"#ef4444"
  },
  {
    id:"abdication", title:"The Prisoner's Dilemma of Nations", category:"Political", philosopher:"Thomas Hobbes / Game Theory",
    summary:"Two states can rationally prepare for conflict even when both would prefer peace.",
    description:"Security decisions can create a feedback loop: each side arms because it fears the other, making the other side more fearful in return.",
    structure:["Both actors prefer peace","Each fears the other's intentions","Defensive action appears individually rational","Mutual escalation produces the feared outcome"],
    examples:["Arms races","Cybersecurity","Trade retaliation"],
    modernRelevance:"Geopolitics, cyber conflict and AI arms races",
    visualMetaphor:"Two mirrored defense systems powering up in response to each other", color:"#f97316"
  },
  {
    id:"avicenna", title:"Avicenna's Flying Man", category:"Eastern Philosophy", philosopher:"Ibn Sina (Avicenna)",
    summary:"Could a person suspended without sensory contact still be aware of their own existence?",
    description:"Avicenna imagines a person created fully formed and suspended in air, deprived of sensory contact. The thought experiment argues that self-awareness may not depend entirely on bodily sensation.",
    structure:["Imagine a person isolated from all sensory input","Remove visual, tactile and auditory contact","Ask whether self-awareness remains","The self appears as an immediate datum"],
    examples:["Self-awareness","Embodied cognition","Meditation and introspection"],
    modernRelevance:"Consciousness research, phenomenology and artificial self-models",
    visualMetaphor:"A luminous human silhouette floating inside an empty sensory void", color:"#22d3ee"
  },
  {
    id:"ghazali", title:"Al-Ghazali's Causal Puzzle", category:"Eastern Philosophy", philosopher:"Abu Hamid al-Ghazali",
    summary:"When one event follows another, do we observe causation itself or only habitual succession?",
    description:"Al-Ghazali questioned whether fire necessarily causes cotton to burn or whether causal necessity is something we infer from regular succession.",
    structure:["Fire repeatedly precedes burning","We observe succession","Necessity itself is not directly seen","Causation becomes a philosophical question rather than a simple visual fact"],
    examples:["Natural laws","Miracles","Scientific explanation"],
    modernRelevance:"Causal inference, philosophy of science and machine learning",
    visualMetaphor:"A flame separated from its expected effect by a thin conceptual gap", color:"#fb923c"
  },
  {
    id:"flying-man-advaita", title:"The Witness and the World", category:"Eastern Philosophy", philosopher:"Advaita Vedānta tradition",
    summary:"If the witness of experience is distinct from every changing experience, what exactly is the self?",
    description:"Advaita inquiry repeatedly asks whether the changing body, sensations, thoughts and roles can be identical with the witnessing awareness that notices them.",
    structure:["Observe the body as an object of awareness","Observe sensations and thoughts as changing","Ask what remains as the witness","The distinction between self and experience becomes unstable"],
    examples:["Meditation","Self-inquiry","Observer consciousness"],
    modernRelevance:"Consciousness studies, contemplative science and identity models",
    visualMetaphor:"A still luminous point surrounded by changing concentric worlds", color:"#a78bfa"
  },
  {
    id:"neti-neti", title:"Neti Neti — The Negative Self", category:"Eastern Philosophy", philosopher:"Upanishadic tradition",
    summary:"If the self is not the body, not the mind and not any object of awareness, what remains?",
    description:"The method of neti neti ('not this, not this') approaches identity by removing everything that can be observed or conceptualized.",
    structure:["Identify something as 'me'","Notice that it can be observed or changed","Reject it as the final identity","Continue until ordinary descriptions of self become inadequate"],
    examples:["Body","Thoughts","Roles","Memories"],
    modernRelevance:"Meditation, phenomenology and philosophical theories of self",
    visualMetaphor:"Layers of identity peeling away toward an empty luminous center", color:"#c084fc"
  },
  {
    id:"nagarjuna", title:"Nagarjuna's Catuskoti", category:"Eastern Philosophy", philosopher:"Nāgārjuna",
    summary:"Can a proposition be true, false, both, or neither without fitting neatly into any one of the four?",
    description:"Madhyamaka analysis challenges the tendency to treat concepts as possessing independent, fixed essence. The catuskoti examines four logical possibilities and questions the assumptions behind each.",
    structure:["Consider a proposition","Examine true","Examine false","Examine both and neither"],
    examples:["Self and emptiness","Causation","Existence and non-existence"],
    modernRelevance:"Logic, ontology, philosophy of language and conceptual analysis",
    visualMetaphor:"Four paths leaving one central question and curving back toward emptiness", color:"#67e8f9"
  },
  {
    id:"two-truths", title:"Two Truths", category:"Eastern Philosophy", philosopher:"Madhyamaka Buddhist tradition",
    summary:"How can something be conventionally real while lacking ultimate independent existence?",
    description:"The two-truths framework distinguishes conventional truth, where language and ordinary distinctions function, from ultimate analysis, where independent essence cannot be found.",
    structure:["Use ordinary concepts successfully","Analyze them for independent essence","The concept works conventionally","Ultimate analysis dissolves its independent status"],
    examples:["Self","Cause and effect","Objects and labels"],
    modernRelevance:"Ontology, language, cognitive science and systems thinking",
    visualMetaphor:"A city visible in daylight and dissolving into a network of relations under a second lens", color:"#14b8a6"
  },
  {
    id:"buddha-arrow", title:"The Second Arrow", category:"Eastern Philosophy", philosopher:"Early Buddhist tradition",
    summary:"Pain is one arrow; the mind's resistance can become a second arrow.",
    description:"The Buddhist second-arrow teaching distinguishes unavoidable pain from the additional suffering created by craving, resistance and mental proliferation.",
    structure:["An unpleasant event occurs","Raw pain is experienced","The mind adds judgment and resistance","Secondary suffering compounds the first"],
    examples:["Physical pain","Insult and resentment","Anxiety about anxiety"],
    modernRelevance:"Psychology, mindfulness, pain science and emotional regulation",
    visualMetaphor:"Two arrows crossing the same target, one physical and one conceptual", color:"#f59e0b"
  },
  {
    id:"buddha-raft", title:"The Raft Parable", category:"Eastern Philosophy", philosopher:"Early Buddhist tradition",
    summary:"If a teaching is a raft for crossing a river, should you carry the raft after reaching the shore?",
    description:"The raft simile questions attachment even to useful doctrines. A method can be valuable precisely because it is eventually relinquished.",
    structure:["Use a raft to cross dangerous water","The raft is essential during crossing","After reaching shore, carrying it becomes unnecessary","Useful concepts can become burdens when clung to"],
    examples:["Meditation techniques","Philosophical systems","Rules and rituals"],
    modernRelevance:"Learning systems, ideology, productivity methods and intellectual flexibility",
    visualMetaphor:"A raft left at the shore while the traveler walks toward open ground", color:"#2dd4bf"
  },
  {
    id:"butterfly-dream", title:"Zhuangzi's Butterfly Dream", category:"Eastern Philosophy", philosopher:"Zhuangzi",
    summary:"If you dream you are a butterfly, how certain are you that you are now a human dreaming?",
    description:"Zhuangzi's famous dream destabilizes the distinction between waking identity and dream identity, inviting questions about transformation and certainty.",
    structure:["Zhuangzi dreams he is a butterfly","The dream is vivid and complete","He wakes as Zhuangzi","Was a human dreaming a butterfly, or a butterfly dreaming Zhuangzi?"],
    examples:["Dreams","Virtual worlds","Changing identity"],
    modernRelevance:"Virtual reality, simulation theory and consciousness",
    visualMetaphor:"A human silhouette and butterfly exchanging places inside a dream loop", color:"#f472b6"
  },
  {
    id:"zhuangzi-usefulness", title:"The Useless Tree", category:"Eastern Philosophy", philosopher:"Zhuangzi",
    summary:"Can being considered useless become the very thing that allows something to survive?",
    description:"Zhuangzi's tree is too twisted for timber and therefore escapes the axe. What looks like uselessness from one perspective becomes survival from another.",
    structure:["A tree fails the standard of usefulness","Woodcutters ignore it","Its apparent uselessness protects it","The standard of value becomes the source of danger"],
    examples:["Non-productive time","Alternative lifestyles","Systems that resist optimization"],
    modernRelevance:"AI optimization, ecological thinking and critiques of productivity",
    visualMetaphor:"A crooked tree glowing while perfectly straight trees disappear into the forest", color:"#84cc16"
  },
  {
    id:"wu-wei", title:"Wu Wei Paradox", category:"Eastern Philosophy", philosopher:"Laozi / Daoist tradition",
    summary:"How can deliberate non-forcing produce more effective action than forceful control?",
    description:"Daoist wu wei is often translated as effortless or non-coercive action. The paradox is that cultivating non-forcing is itself a disciplined practice.",
    structure:["Direct control appears efficient","Force creates resistance","Non-forcing follows the structure of the situation","Action becomes effective by not fighting the grain"],
    examples:["Leadership","Martial arts","Water shaping stone"],
    modernRelevance:"Organizational design, adaptive systems and human-computer interaction",
    visualMetaphor:"Water flowing around obstacles while reaching the same destination", color:"#38bdf8"
  },
  {
    id:"dao-name", title:"The Dao That Can Be Named", category:"Eastern Philosophy", philosopher:"Laozi",
    summary:"If the ultimate Dao can be completely named, can that name still capture what the Dao is?",
    description:"The opening tension of the Dao De Jing questions whether ultimate reality can be fully captured by the concepts used to describe it.",
    structure:["Attempt to name ultimate reality","A name creates a conceptual boundary","The boundary distinguishes and limits","What exceeds the name remains unnamed"],
    examples:["Words and reality","Maps and territories","Definitions of consciousness"],
    modernRelevance:"AI language models, semantic compression and philosophy of language",
    visualMetaphor:"A word label dissolving into an infinite landscape", color:"#67e8f9"
  },
  {
    id:"jain-syadvada", title:"Syādvāda — The Many-Sided Truth", category:"Eastern Philosophy", philosopher:"Jain philosophical tradition",
    summary:"Can a proposition be true from one standpoint and false from another without either view being complete?",
    description:"Jain anekāntavāda emphasizes the many-sidedness of reality. Syādvāda qualifies claims by standpoint rather than treating a single perspective as exhaustive.",
    structure:["Observe an object from one standpoint","A claim appears true","Change the standpoint","The claim requires qualification rather than absolute certainty"],
    examples:["The blind men and elephant","Scientific models","Conflicting eyewitness accounts"],
    modernRelevance:"Pluralism, epistemic humility, multi-perspective AI and conflict resolution",
    visualMetaphor:"Several geometric projections converging on one multidimensional object", color:"#facc15"
  },
  {
    id:"blind-men-elephant", title:"Blind Men and the Elephant", category:"Eastern Philosophy", philosopher:"Indian parable tradition",
    summary:"Can several incomplete descriptions of the same reality all be correct yet mutually contradictory?",
    description:"Different observers touch different parts of an elephant and describe rope, wall, spear or tree. Each report is locally accurate but globally incomplete.",
    structure:["Each observer encounters one part","Each forms a confident description","Descriptions conflict","A larger reality contains each partial perspective"],
    examples:["Scientific models","Political viewpoints","Interdisciplinary research"],
    modernRelevance:"Data fusion, AI multimodality and epistemic humility",
    visualMetaphor:"Many colored beams illuminating different parts of one hidden form", color:"#f59e0b"
  },
  {
    id:"maya", title:"Māyā and Appearance", category:"Eastern Philosophy", philosopher:"Vedānta traditions",
    summary:"If appearance is experientially real but not ultimately what it seems, what status does reality have?",
    description:"Vedāntic discussions of māyā explore the gap between ordinary appearance and ultimate understanding, without reducing everyday experience to simple nonexistence.",
    structure:["An appearance is experienced","It seems independently real","Deeper inquiry changes how it is interpreted","The relation between appearance and reality becomes the question"],
    examples:["Rope and snake","Dream imagery","Perceptual illusions"],
    modernRelevance:"Virtual reality, perception and cognitive construction",
    visualMetaphor:"A rope casting the projection of a snake that dissolves under closer inspection", color:"#c084fc"
  },
  {
    id:"rope-snake", title:"Rope and Snake", category:"Eastern Philosophy", philosopher:"Advaita Vedānta tradition",
    summary:"A rope mistaken for a snake is terrifying until better knowledge changes the object without changing the rope.",
    description:"The rope-snake example illustrates how perception, ignorance and interpretation can transform experience while the underlying object remains unchanged.",
    structure:["Low light obscures an object","Mind interprets it as a snake","Fear follows the interpretation","Light reveals a rope and changes the experience"],
    examples:["Perceptual illusion","Rumors","Anxiety-driven interpretation"],
    modernRelevance:"Cognitive bias, misinformation and predictive perception",
    visualMetaphor:"A coiled rope whose shadow briefly forms a serpent", color:"#a78bfa"
  },
  {
    id:"selfless-self", title:"The Selfless Self", category:"Eastern Philosophy", philosopher:"Buddhist tradition",
    summary:"If no permanent self can be found, who experiences, remembers and acts?",
    description:"Buddhist analysis of the aggregates challenges the idea of a permanent independent self while still accounting for continuity, responsibility and experience.",
    structure:["Examine body, sensation, perception, formations and consciousness","Each changes over time","No permanent owner is isolated","Yet causal continuity persists"],
    examples:["Personal identity","Memory","Moral responsibility"],
    modernRelevance:"Neuroscience, cognitive science and theories of personal identity",
    visualMetaphor:"Five flowing streams forming the temporary outline of a person", color:"#2dd4bf"
  },
  {
    id:"indras-net", title:"Indra's Net", category:"Eastern Philosophy", philosopher:"Huayan Buddhist tradition",
    summary:"If every jewel reflects every other jewel, where does one thing end and another begin?",
    description:"Indra's Net imagines an infinite network of jewels, each reflecting every other. The metaphor challenges isolated substances and emphasizes relational existence.",
    structure:["Imagine an infinite web of jewels","Every jewel reflects all others","Each reflection contains further reflections","No element exists independently of the network"],
    examples:["Ecology","Social networks","Complex systems"],
    modernRelevance:"Network science, distributed systems and systems philosophy",
    visualMetaphor:"An infinite lattice of luminous nodes reflecting one another", color:"#22d3ee"
  },
  {
    id:"dependent-origination", title:"Dependent Origination", category:"Eastern Philosophy", philosopher:"Buddhist tradition",
    summary:"If each condition depends on other conditions, where can an independent first cause be found?",
    description:"Dependent origination presents phenomena as arising through conditions rather than from isolated permanent essences.",
    structure:["Identify an event","Trace its conditions","Each condition depends on others","The search for an independent isolated origin keeps receding"],
    examples:["Emotion","Social conflict","Ecological systems"],
    modernRelevance:"Systems thinking, causal graphs and networked causality",
    visualMetaphor:"A chain of luminous nodes with every link branching into further causes", color:"#14b8a6"
  },
  {
    id:"sufi-lover", title:"The Lover and the Beloved", category:"Eastern Philosophy", philosopher:"Sufi mystical tradition",
    summary:"If the seeker seeks union with the beloved, what happens to the distinction between seeker and sought?",
    description:"Sufi poetry repeatedly plays with the paradox that the search for the divine can dissolve the very identity of the seeker who began the search.",
    structure:["A seeker distinguishes self from beloved","The seeker moves toward union","The distinction between seeker and beloved weakens","The one who seeks may be transformed by the search"],
    examples:["Mystical poetry","Devotional practice","Self-transcendence"],
    modernRelevance:"Identity, contemplative psychology and transformative learning",
    visualMetaphor:"Two luminous circles merging until their boundary disappears", color:"#f472b6"
  },
  {
    id:"ghazali-doubt", title:"Al-Ghazali's Skeptical Crisis", category:"Eastern Philosophy", philosopher:"Abu Hamid al-Ghazali",
    summary:"If every source of knowledge can be doubted, what finally restores confidence in knowledge?",
    description:"Al-Ghazali's intellectual crisis explores radical doubt about sensory and rational certainty before a transformed mode of trust and understanding.",
    structure:["Doubt sensory perception","Question rational inference","Notice that doubt itself requires standards","Ask what kind of certainty can survive radical skepticism"],
    examples:["Dream skepticism","Mathematical certainty","Religious knowledge"],
    modernRelevance:"Epistemology, AI uncertainty and foundations of knowledge",
    visualMetaphor:"A staircase of certainty disappearing beneath each step as it is questioned", color:"#8b5cf6"
  },
  {
    id:"four-causes", title:"Four Causes", category:"Eastern Philosophy", philosopher:"Aristotle",
    summary:"Can one explanation capture material, formal, efficient and final causes at once?",
    description:"Aristotle's four causes reveal that asking 'why?' can mean several different explanatory questions rather than one.",
    structure:["Identify what something is made of","Ask what form it has","Ask what produced it","Ask what purpose or end it serves"],
    examples:["A statue","A house","A biological organ"],
    modernRelevance:"Causal modeling, engineering and multidisciplinary explanation",
    visualMetaphor:"Four colored beams converging on one object from different explanatory directions", color:"#f59e0b"
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
  'liar': '<span class="glyph glyph--liar">∞</span>',
  'theseus': '<span class="glyph glyph--theseus">◈</span>',
  'trolley': '<span class="glyph glyph--trolley">⚡</span>',
  'mary': '<span class="glyph glyph--mary">●</span>',
  'chinese-room': '<span class="glyph glyph--chinese">Ψ</span>',
  'russell': '<span class="glyph glyph--russell">⟳</span>',
  'zeno': '<span class="glyph glyph--zeno">½</span>',
  'choice': '<span class="glyph glyph--choice">◇</span>',
  'grandfather': '<span class="glyph glyph--grandfather">⏳</span>',
  'tolerance': '<span class="glyph glyph--tolerance">⚖</span>'
};


const extendedVisualIcons = {
  liar:"∞", theseus:"◈", trolley:"⚡", mary:"●", "chinese-room":"Ψ", russell:"⟳", zeno:"½", choice:"◇", grandfather:"⏳", tolerance:"⚖",
  sorites:"∴", barber:"⌁", berry:"≋", grelling:"≠", curry:"⊢", pinocchio:"↻", "unexpected-exam":"!", crocodile:"◌", raven:"◐", "monty-hall":"3", newcomb:"▣", prisoners:"⇄", "sleeping-beauty":"☾", "experience-machine":"◉", "brain-vat":"Ψ", teleporter:"⇥", fission:"⑂", "twin-earth":"◎", swampman:"✦", frenchman:"Aa", omnipotence:"∞", euthyphro:"?", buridan:"⇆", "pascal-wager":"∞", "free-will":"⑂", heaps:"≈", gambler:"⊙", clustering:"⁙", braess:"⌁", simpson:"∿", "monty-variation":"◇", doomsday:"⌛", fermi:"✦", bootstrap:"⟳", predestination:"↺", "unexpected-utility":"Σ", "repugnant-conclusion":"∑", nonidentity:"∅", veils:"◫", scapegoat:"→", abdication:"⚔",
  avicenna:"◌", ghazali:"∴", "flying-man-advaita":"ॐ", "neti-neti":"∅", nagarjuna:"◌", "two-truths":"☯", "buddha-arrow":"⇢", "buddha-raft":"⌁", "butterfly-dream":"蝶", "zhuangzi-usefulness":"木", "wu-wei":"≈", "dao-name":"道", "jain-syadvada":"∞", "blind-men-elephant":"◈", maya:"✧", "rope-snake":"∿", "selfless-self":"∅", "indras-net":"✺", "dependent-origination":"⛓", "sufi-lover":"♥", "ghazali-doubt":"?", "four-causes":"✣"
};
Object.entries(extendedVisualIcons).forEach(([id,symbol]) => {
  const cls = id.replace(/[^a-z0-9]+/g,"-");
  visualIcons[id] = '<span class="glyph glyph--'+cls+'">'+symbol+'</span>';
});

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
      <div class="paradox-card__visual">${visualIcons[paradox.id] || '<span class="glyph">?</span>'}</div>
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
      <h3 class="paradox-section__title">∴ Logical Structure</h3>
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
      <h3 class="paradox-section__title">◇ Examples</h3>
      <div class="paradox-section__content">
        ${paradox.examples.map(example => `
          <div class="example-item">
            <div class="example-icon">→</div>
            <div>${example}</div>
          </div>
        `).join('')}
      </div>
    </div>
    
    <div class="paradox-section">
      <h3 class="paradox-section__title">⊕ Modern Relevance</h3>
      <div class="paradox-section__content">
        <div class="relevance-item">
          <div class="relevance-icon">⊕</div>
          <div>${paradox.modernRelevance}</div>
        </div>
      </div>
    </div>
    
    ${generateInteractiveSection(paradox)}
    
    <div class="quiz-section">
      <h3 class="paradox-section__title">? Reflection Question</h3>
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
      return '<div class="glyph glyph--trolley">⚡</div>';
    case 'mary':
      return '<div class="glyph glyph--mary">●</div>';
    case 'chinese-room':
      return '<div class="glyph glyph--chinese">Ψ</div>';
    case 'russell':
      return '<div class="glyph glyph--russell">⟳</div>';
    case 'zeno':
      return '<div class="glyph glyph--zeno">½</div>';
    case 'choice':
      return '<div class="glyph glyph--choice">◇</div>';
    case 'grandfather':
      return '<div class="glyph glyph--grandfather">⏳</div>';
    case 'tolerance':
      return '<div class="glyph glyph--tolerance">⚖</div>';
    default:
      return visualIcons[paradox.id] || '🤔';
  }
}

// Generate interactive section based on paradox type
function generateInteractiveSection(paradox) {
  if (paradox.id === 'trolley') {
    return `
      <div class="paradox-section">
        <h3 class="paradox-section__title">⚡ Interactive Scenario</h3>
        <div class="trolley-interactive" id="trolleyInteractive">
          <div class="trolley-scenario">
            <div class="trolley-track">
              <div class="trolley-cart"><span class="mini-glyph">⚡</span></div>
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
              <div class="room-mary"><span class="character-mark">M</span></div>
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
        <h3 class="paradox-section__title">◈ Ship Transformation</h3>
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
