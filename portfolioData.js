/* ============================================================
   portfolioData.js
   Every piece of content on the portfolio lives in this file.
   The page (portfolio.html) loops over these lists and draws the
   sections, so you never need to touch the page code to add things.

   QUICK GUIDE
   - New project      -> copy a block inside `projects`, paste it at the end, edit it.
   - New certificate  -> add an image to certs/, then add a block inside `certifications`.
   - New article      -> add a block inside `writing` (newest first).
   - New skill        -> add a string to one of the rows in `skills.rows`.
   - New timeline item-> add a block at the top of `experience` (newest first).
   The counts at the top of the page (projects, articles, certifications)
   update on their own.
   ============================================================ */

window.portfolioData = {

  /* ---------- who you are ---------- */
  profile: {
    firstName: "Laksh",
    lastName: "Kumar",
    location: "Hyderabad, PK",
    locationFull: "Hyderabad, Sindh, Pakistan",
    school: "Bluejays School System",
    avatar: "avatar.jpg",
    email: "kumarlaksh651@gmail.com",
    linkedinFollowers: 1143,
    // these lines type themselves out under your name
    roles: [
      "AI enthusiast",
      "Robotics explorer",
      "Researcher",
      "Python builder",
      "Student leader",
      "SEO and marketing learner"
    ],
    lead: "A-levels computer science student in Hyderabad. I build web tools in Python, study what AI costs the planet, and lead student initiatives at school.",
    stack: "Python · Git · GitHub · Vercel",
    interestsLine: "Robotics · AI · Research",
    links: {
      github: "https://github.com/kumarlaksh651-web",
      linkedin: "https://www.linkedin.com/in/laksh-kumar-05191141b"
    }
  },

  /* ---------- about me ---------- */
  about: {
    heading: "Student by day, builder by default",
    paragraphs: [
      "I'm a pre-engineering student at Bluejays School System with a big interest in how artificial intelligence is shaping our world. I work in Python and use AI to debug and optimise my code.",
      "Outside the editor I use Git and GitHub, SEO, digital marketing and Excel, so what I build can also be found and understood. At school I lead student initiatives, and I do my best work where technology, leadership and teamwork meet."
    ]
  },

  /* ---------- education ---------- */
  education: {
    degree: "A-Levels, Computer Science",
    school: "Bluejays School System",
    place: "Hyderabad, Sindh",
    tags: ["Currently studying", "Pre-engineering", "Student initiatives"]
  },

  /* ---------- skills ---------- */
  // icon names: spark, orbit, code
  coreSkills: [
    { icon: "spark", title: "Generative AI", text: "Using language models to write, debug and research faster. Completed Google Cloud's introduction course." },
    { icon: "orbit", title: "Agentic AI",    text: "Systems that plan, use tools and act on their own, which I explore through Claude Code." },
    { icon: "code",  title: "Claude Code",   text: "Certified by Anthropic through Claude Code 101, and part of how I build and ship projects." }
  ],

  // two scrolling rows. A plain string is a normal chip; { label, more: true } gets an amber dot.
  skills: {
    rows: [
      ["Python", "AI", "GitHub", "Git", "SEO", "Excel", "Vercel", "Digital Marketing", "Prompt Engineering", "Claude Code"],
      ["React", "Web Development", "Data Visualisation", "AI Search", "Research & Writing", "Student Leadership", "Community Work", "Teamwork", { label: "and many more", more: true }]
    ]
  },

  /* ---------- projects ---------- */
  // size: how wide the card is on desktop (5, 7 or 12 out of 12 columns)
  // link: { label, url } shows a link. note: shows plain text instead.
  projects: [
    {
      title: "WAWET",
      kind: "Research tool · Live",
      size: 7,
      description: "The Water & Waste Estimation Tracker. A live dashboard that estimates the freshwater used to cool AI infrastructure and the e-waste it creates, with overview, projections, operations and live telemetry views, including real-time streamflow data.",
      figures: [
        { value: "1,200–5,000K t", label: "projected AI e-waste, 2020–2030" },
        { value: "16–86%", label: "possible cut from circular strategies" }
      ],
      tags: ["Python", "Dashboard", "Research"],
      link: { label: "Open live site", url: "https://waste-and-water-tracker.vercel.app/" }
    },
    {
      title: "Pakistan Budget & Debt Visualizer",
      kind: "Data visualisation · Live",
      size: 5,
      description: "Turns Pakistan's large, unstructured government budget PDFs into clear visuals, including a flow diagram of where revenue comes from and where every rupee goes. Built to make financial data readable for ordinary citizens.",
      tags: ["Python", "Vercel V0", "Data viz"],
      link: { label: "Open live site", url: "https://pakistan-budget-and-debt-visualizer.vercel.app/" }
    },
    {
      title: "Maheshwari Connect",
      kind: "Community platform · Live",
      size: 5,
      description: "A platform for the Maheshwari community, designed to help members feel connected wherever they live around the world.",
      tags: ["AI", "Vercel V0"],
      link: { label: "Open live site", url: "https://maheshwari-connect-app.vercel.app/" }
    },
    {
      title: "Halcyon Clinic",
      kind: "Healthcare web app · Demo",
      status: "In progress",
      size: 7,
      description: "A web platform for streamlining patient care: six areas of care, a doctors directory with filters, a patient portal and online appointment booking. Built with a modern look, smooth micro-interactions and a patient-first experience. The booking flow and backend are still being refined.",
      tags: ["React", "Frontend", "UI design"],
      link: { label: "Open the demo", url: "halcyon-clinic.html" }
    },
    {
      title: "This portfolio",
      kind: "Personal site · You are here",
      size: 12,
      description: "The site you're reading. All of its content lives in one data file, and the page loops over that file to draw the projects, skills, writing and certificates. It also has a live particle background, a command terminal and a certificate viewer.",
      tags: ["HTML", "CSS", "JavaScript", "Claude Code"],
      note: "Add a project to portfolioData.js and it appears here."
    }
  ],

  /* ---------- interests ---------- */
  // icon names: gear, network, trace
  interests: [
    { icon: "gear",    title: "Robotics",                text: "Machines that sense and act. It's where my pre-engineering path is heading." },
    { icon: "network", title: "Artificial intelligence", text: "How it works, how I can use it to build faster, and what it costs the world around it." },
    { icon: "trace",   title: "Research",                text: "Data-center water use, e-waste, Pakistan's economy and education. I dig in, then write it up." }
  ],

  /* ---------- writing (newest first) ---------- */
  writing: [
    {
      date: "Oct 6, 2026",
      title: "Data Center Water Usage & Compute Efficiency: The Unseen Cost of Model Inference",
      summary: "Is AI really \"drinking\" millions of gallons of water? The thermal physics behind data-center cooling, and why closed-loop and direct-to-chip designs change the picture.",
      venue: "LinkedIn article"
    },
    {
      date: "Sep 3, 2026",
      title: "The Digital Iron Curtain: Taxing Text into Extinction",
      summary: "The clash between Pakistan's digital-economy ambitions and policies such as heavy hardware tariffs, internet throttling and strict regulatory controls.",
      venue: "LinkedIn article"
    },
    {
      date: "Aug 20, 2026",
      title: "Degrees Without Dignity: The Bitter Reality of Pakistan's University Graduates",
      summary: "Why universities that produce thousands of graduates every year leave many of them without room to think for themselves.",
      venue: "The Youth Blog"
    }
  ],

  /* ---------- certifications ---------- */
  // image: full certificate shown in the pop-up. thumb: small preview on the card.
  // group: the filter button the certificate belongs to.
  // verifyUrl / verifyLabel: optional link to check or download the original.
  certifications: [
    {
      title: "Claude Code 101", group: "Anthropic", issuer: "Anthropic",
      meta: "Certificate of completion · Aug 2026",
      image: "certs/claude-code-101.jpg", thumb: "certs/claude-code-101-thumb.jpg",
      verifyUrl: "https://verify.skilljar.com/c/6fedu42pc6kx", verifyLabel: "Verify credential"
    },
    {
      title: "Claude 101", group: "Anthropic", issuer: "Anthropic",
      meta: "Certificate of completion · Aug 2026",
      image: "certs/claude-101.jpg", thumb: "certs/claude-101-thumb.jpg",
      verifyUrl: "https://verify.skilljar.com/c/9pbhm4do6skz", verifyLabel: "Verify credential"
    },
    {
      title: "Introduction to Responsible AI", group: "Google Cloud", issuer: "Google Cloud · Simplilearn SkillUP",
      meta: "Declaration of completion · 2 Aug 2026", id: "Certificate code 10547255",
      image: "certs/responsible-ai.jpg", thumb: "certs/responsible-ai-thumb.jpg"
    },
    {
      title: "Introduction to Generative AI", group: "Google Cloud", issuer: "Google Cloud · Simplilearn SkillUP",
      meta: "Declaration of completion · 2 Aug 2026", id: "Certificate code 10547438",
      image: "certs/generative-ai.jpg", thumb: "certs/generative-ai-thumb.jpg"
    },
    {
      title: "AI Search Operating System", group: "Semrush", issuer: "Semrush Academy",
      meta: "Certificate of achievement · Aug 2026",
      image: "certs/semrush-ai-search.jpg", thumb: "certs/semrush-ai-search-thumb.jpg",
      verifyUrl: "https://static.semrush.com/academy/certificates/8bc060aede/laksh-kumar_37.pdf", verifyLabel: "Open PDF"
    },
    {
      title: "Become an AI-Powered Marketer", group: "Semrush", issuer: "Semrush Academy",
      meta: "Certificate of completion · valid to 1 Aug 2027", id: "Completion ID 2f6da1db7c",
      image: "certs/semrush-ai-marketer.jpg", thumb: "certs/semrush-ai-marketer-thumb.jpg",
      verifyUrl: "https://static.semrush.com/academy/certificates/2f6da1db7c/laksh-kumar_26.pdf", verifyLabel: "Open PDF"
    }
  ],

  /* ---------- experience: the build log timeline (newest first) ---------- */
  experience: [
    { date: "Oct 28, 2026", iso: "2026-10-28", title: "Portfolio launched, Halcyon Clinic demo published", text: "This site went live with all projects, writing and certificates, and the Halcyon Clinic demo became open to view." },
    { date: "Oct 6, 2026",  iso: "2026-10-06", title: "Data-center water article and a first look at Halcyon Clinic", text: "Published the article on the cost of model inference, and shared a preview of the clinic platform for feedback." },
    { date: "Sep 3, 2026",  iso: "2026-09-03", title: "The Digital Iron Curtain", text: "Published on LinkedIn, on tariffs, throttling and Pakistan's digital economy." },
    { date: "Aug 20, 2026", iso: "2026-08-20", title: "Degrees Without Dignity", text: "Published on The Youth Blog." },
    { date: "Aug 11, 2026", iso: "2026-08-11", title: "Pakistan Budget & Debt Visualizer", text: "Shared the tool that turns budget PDFs into visuals anyone can read." },
    { date: "Aug 5, 2026",  iso: "2026-08-05", title: "Claude 101 and Claude Code 101", text: "Both Anthropic certifications completed." },
    { date: "Aug 2, 2026",  iso: "2026-08-02", title: "WAWET goes live, plus two Google Cloud courses", text: "Shared the live AI water and e-waste dashboard, and finished Introduction to Responsible AI and Introduction to Generative AI." },
    { date: "Aug 1, 2026",  iso: "2026-08-01", title: "Two Semrush certifications", text: "AI Search Operating System and Become an AI-Powered Marketer." }
  ]
};
