/* Eltanin Labs — Interactive Application Scripts */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavbarScroll();
  initMobileMenu();
  initHeroMatchWidget();
  initPodExplorer();
  initCostCalculator();
  initTechStackTabs();
  initFaqAccordion();
  initFlightScrollytelling();
  initModals();
});

/* 1. Dark / Light Theme Switcher */
function initThemeToggle() {
  const toggleBtn = document.querySelector('.theme-toggle');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('eltanin_theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('eltanin_theme', newTheme);
    });
  }
}

/* 2. Navbar Scroll Glassmorphism */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* 3. Mobile Navigation Drawer */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const closeBtn = document.querySelector('.mobile-menu-close-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a, .mobile-menu .btn');

  if (!menuBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* 4. Interactive Hero AI Match Engine Widget */
const heroMatchData = {
  salesforce: {
    title: "Salesforce Technical Architecture Unit",
    tags: ["Sales Cloud", "Apex", "LWC", "MuleSoft", "Multi-Org Integration"],
    benchmarks: [
      { title: "Architectural Lead Capacity", desc: "CTA Certified · 8+ yrs avg experience", badge: "Vetted Fit" },
      { title: "Integration & Development Pod", desc: "MuleSoft & LWC Specialists ready", badge: "5-7 Days SLA" }
    ]
  },
  ai: {
    title: "GenAI & LLM Platform Squad",
    tags: ["LangChain", "PyTorch", "RAG Pipeline", "Vector DB", "MLOps"],
    benchmarks: [
      { title: "Senior AI Engineer Capacity", desc: "Custom LLM Fine-Tuning & Vector Search", badge: "Vetted Fit" },
      { title: "AI Product & Data Pod", desc: "Full-Stack MLOps & Guardrails Specialists", badge: "3-5 Days SLA" }
    ]
  },
  cloud: {
    title: "Cloud Infrastructure & SecOps Pod",
    tags: ["AWS/GCP", "Kubernetes", "Terraform", "GitOps", "Zero Trust"],
    benchmarks: [
      { title: "Principal Cloud Architect Capacity", desc: "Multi-Cloud & Compliance Certified", badge: "Vetted Fit" },
      { title: "DevOps & SRE Delivery Unit", desc: "Automated CI/CD & Security Hardening", badge: "3-5 Days SLA" }
    ]
  },
  fullstack: {
    title: "High-Scale Modern Product Squad",
    tags: ["React/Next.js", "Node.js", "TypeScript", "GraphQL", "PostgreSQL"],
    benchmarks: [
      { title: "Staff Full-Stack Architect Capacity", desc: "Micro-Frontends & API Design", badge: "Vetted Fit" },
      { title: "Product Engineering Unit", desc: "React + Node.js Senior Engineers", badge: "3-5 Days SLA" }
    ]
  }
};

function initHeroMatchWidget() {
  const tabs = document.querySelectorAll('.role-tab');
  const roleTitle = document.getElementById('widget-role-title');
  const roleTags = document.getElementById('widget-role-tags');
  const candidatesContainer = document.getElementById('widget-candidates');

  if (!tabs.length || !roleTitle) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const roleKey = tab.dataset.role;
      const data = heroMatchData[roleKey];
      if (!data) return;

      roleTitle.textContent = data.title;
      
      roleTags.innerHTML = data.tags.map(t => `<span class="tag">${t}</span>`).join('');
      
      candidatesContainer.innerHTML = data.benchmarks.map(b => `
        <div class="benchmark-card">
          <div class="benchmark-icon">◈</div>
          <div class="benchmark-info">
            <h4>${b.title}</h4>
            <p>${b.desc}</p>
          </div>
          <span class="match-score">${b.badge}</span>
        </div>
      `).join('');
    });
  });
}

/* 5. Pod Capabilities Explorer */
const podCapabilitiesPool = [
  // Salesforce Category (4 pods)
  {
    id: "p1",
    title: "Salesforce Technical Architecture Pod",
    category: "salesforce",
    badge: "CTA Managed Pod",
    sla: "Ready in 5-7 Business Days",
    features: [
      "CTA-Certified Lead Architecture Oversight",
      "Sales, Service, Health & Marketing Cloud",
      "Apex, LWC & MuleSoft Middleware Integration",
      "Multi-Org Governance & DevOps Pipelines"
    ]
  },
  {
    id: "p2",
    title: "Salesforce Core CRM & Experience Unit",
    category: "salesforce",
    badge: "CRM Specialists",
    sla: "Ready in 3-5 Business Days",
    features: [
      "Sales & Service Cloud Customization",
      "Experience Cloud Customer Portals & Community",
      "Flow Automation & Lightning Web Components",
      "Data Migration & Standard Object Design"
    ]
  },
  {
    id: "p3",
    title: "MuleSoft & Salesforce Integration Squad",
    category: "salesforce",
    badge: "Integration Pod",
    sla: "Ready in 5-7 Business Days",
    features: [
      "MuleSoft Anypoint Platform & API Management",
      "Real-Time Salesforce Event Mesh & Pub/Sub",
      "Enterprise ERP & SAP Connector Middleware",
      "High-Throughput ETL & Data Sync"
    ]
  },
  {
    id: "p4",
    title: "CPQ & Revenue Cloud Optimization Pod",
    category: "salesforce",
    badge: "Revenue Tech",
    sla: "Ready in 5-7 Business Days",
    features: [
      "Salesforce CPQ & Billing Engine Setup",
      "Complex Product Catalog & Pricing Rules",
      "Subscription & Renewal Flow Automation",
      "ERP Contract & Billing Systems Integration"
    ]
  },

  // Data & AI
  {
    id: "p5",
    title: "GenAI & LLM Platform Squad",
    category: "ai",
    badge: "Autonomous AI Unit",
    sla: "Ready in 5-7 Business Days",
    features: [
      "Custom RAG & Vector Search Architecture",
      "PyTorch, LangChain & LlamaIndex Stack",
      "LLM Fine-Tuning, Prompt & MLOps Pipelines",
      "Enterprise Data Privacy & Security Guardrails"
    ]
  },
  {
    id: "p5b",
    title: "Data Engineering & Analytics Pod",
    category: "ai",
    badge: "Data Platform",
    sla: "Ready in 3-5 Business Days",
    features: [
      "Snowflake, Databricks & dbt Data Modeling",
      "Apache Kafka & Spark Real-Time Streaming",
      "Automated ETL/ELT Pipelines & Governance",
      "Executive BI Dashboards & Semantic Layer"
    ]
  },

  // Cloud & DevOps
  {
    id: "p6",
    title: "Cloud DevOps & Platform Security Pod",
    category: "cloud",
    badge: "Platform Resilience",
    sla: "Ready in 3-5 Business Days",
    features: [
      "AWS & GCP Cloud Architecture as Code (Terraform)",
      "Kubernetes, Helm & Docker Orchestration",
      "GitOps, Automated CI/CD & Datadog Observability",
      "Zero-Trust Security & Compliance Hardening"
    ]
  },

  // Full-Stack
  {
    id: "p7",
    title: "Staff Modern Product & Full-Stack Squad",
    category: "fullstack",
    badge: "Engineering Squad",
    sla: "Ready in 3-5 Business Days",
    features: [
      "React & Next.js Micro-Frontend Systems",
      "Node.js & TypeScript High-Scale Backend",
      "GraphQL APIs, PostgreSQL & Redis Caching",
      "Automated Testing (Playwright/Cypress)"
    ]
  },

  // Enterprise Systems
  {
    id: "p8",
    title: "Enterprise Middleware & Systems Integration Unit",
    category: "enterprise",
    badge: "Integration Pod",
    sla: "Ready in 5-7 Business Days",
    features: [
      "MuleSoft & SAP Integration Middleware",
      "Kafka High-Throughput Event Streaming",
      "Legacy Systems Modernization & REST Migration",
      "Enterprise OAuth2 & Identity Security"
    ]
  }
];

function initPodExplorer() {
  const container = document.getElementById('pod-cards-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('talent-search');

  if (!container) return;

  function renderPods(items) {
    if (items.length === 0) {
      container.className = 'pod-grid';
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
          No capability pods match your filter criteria. Try adjusting your search.
        </div>
      `;
      return;
    }

    if (items.length === 1) {
      container.className = 'pod-grid single-item';
    } else {
      container.className = 'pod-grid';
    }

    container.innerHTML = items.map(pod => `
      <div class="pod-card">
        <div>
          <div class="pod-card-header">
            <h3>${pod.title}</h3>
            <span class="pod-badge">${pod.badge}</span>
          </div>
          <ul class="pod-specs-list">
            ${pod.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
        <div class="pod-footer">
          <span class="pod-sla">⚡ ${pod.sla}</span>
          <button class="btn btn-outline btn-sm request-pod-btn" data-title="${pod.title}">Request Pod Proposal →</button>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.request-pod-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.dataset.title;
        openContactModal(`Proposal Request for ${title}`);
      });
    });
  }

  // Default initial filter is Salesforce
  filterAndRender('salesforce', '');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
      
      filterAndRender(filter, searchTerm);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeFilterBtn = document.querySelector('.filter-btn.active');
      const activeFilter = activeFilterBtn ? activeFilterBtn.dataset.filter : 'salesforce';
      const searchTerm = e.target.value.toLowerCase().trim();
      filterAndRender(activeFilter, searchTerm);
    });
  }

  function filterAndRender(categoryFilter, searchTerm) {
    let filtered = podCapabilitiesPool;
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(item => item.category === categoryFilter);
    }
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm) ||
        item.features.some(f => f.toLowerCase().includes(searchTerm))
      );
    }
    renderPods(filtered);
  }
}

/* 6. Self-Service Cost Estimator Calculator */
function initCostCalculator() {
  const teamSlider = document.getElementById('calc-team-size');
  const teamVal = document.getElementById('val-team-size');
  const durationSlider = document.getElementById('calc-duration');
  const durationVal = document.getElementById('val-duration');
  const modelSelect = document.getElementById('calc-model');
  
  const amountDisplay = document.getElementById('calc-amount');
  const detailsDisplay = document.getElementById('calc-details');
  const ctaBtn = document.getElementById('calc-cta');

  if (!teamSlider || !amountDisplay) return;

  function calculate() {
    const teamSize = parseInt(teamSlider.value, 10);
    const duration = parseInt(durationSlider.value, 10);
    const model = modelSelect ? modelSelect.value : 'pod';

    if (teamVal) teamVal.textContent = `${teamSize} ${teamSize === 1 ? 'Engineer' : 'Engineers'}`;
    if (durationVal) durationVal.textContent = `${duration} ${duration === 1 ? 'Month' : 'Months'}`;

    let monthlyRate = 0;
    let modelName = "";

    if (model === 'solo') {
      monthlyRate = teamSize * 8800;
      modelName = "Individual Staff Augmentation";
    } else if (model === 'pod') {
      const basePodRate = 12500;
      const additionalHeadRate = 3500;
      if (teamSize <= 3) {
        monthlyRate = basePodRate;
      } else {
        monthlyRate = basePodRate + ((teamSize - 3) * additionalHeadRate);
      }
      modelName = "Dedicated Managed Pod";
    } else {
      monthlyRate = Math.round((teamSize * 9500));
      modelName = "Fixed Project Sprint";
    }

    let discount = 0;
    if (duration >= 6) discount = 0.10;
    else if (duration >= 3) discount = 0.05;

    const finalMonthly = Math.round(monthlyRate * (1 - discount));
    const formattedAmount = `$${finalMonthly.toLocaleString()} / mo`;

    amountDisplay.textContent = formattedAmount;

    if (detailsDisplay) {
      const discountText = discount > 0 ? ` Includes ${discount * 100}% term savings.` : '';
      detailsDisplay.textContent = `Ballpark estimate for ${teamSize} ${teamSize === 1 ? 'Specialist' : 'Engineers'} (${modelName}) over ${duration} ${duration === 1 ? 'month' : 'months'}.${discountText} Backed by 14-day zero-risk trial.`;
    }
  }

  teamSlider.addEventListener('input', calculate);
  durationSlider.addEventListener('input', calculate);
  if (modelSelect) modelSelect.addEventListener('change', calculate);

  calculate();

  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      const teamSize = teamSlider.value;
      const duration = durationSlider.value;
      const model = modelSelect ? modelSelect.options[modelSelect.selectedIndex].text : 'Pod';
      const amount = amountDisplay.textContent;
      openContactModal(`Estimate Proposal Request: ${teamSize} Heads (${model}) for ${duration} Mo - ${amount}`);
    });
  }
}

/* 7. Tech Stack Category Tabs */
const techStackData = {
  salesforce: [
    { title: "Sales Cloud", desc: "Core CRM Architecture" },
    { title: "Service Cloud", desc: "Customer Support & Omni-Channel" },
    { title: "Experience Cloud", desc: "Digital Portals & Web Communities" },
    { title: "Marketing Cloud", desc: "Omni-channel Automation" },
    { title: "Apex & LWC", desc: "Custom Backend & Modern UI" },
    { title: "MuleSoft", desc: "Enterprise Anypoint Integration" },
    { title: "CPQ & Billing", desc: "Revenue Operations Tech" },
    { title: "Salesforce Data Cloud", desc: "Real-time Customer Data Platform" }
  ],
  ai: [
    { title: "LangChain & LlamaIndex", desc: "RAG & Vector Frameworks" },
    { title: "PyTorch & TensorFlow", desc: "Deep Learning Foundations" },
    { title: "Pinecone & Qdrant", desc: "High-Performance Vector DBs" },
    { title: "OpenAI & Anthropic", desc: "LLM API Integration & Prompts" },
    { title: "vLLM & Ollama", desc: "Self-Hosted Local LLM Inference" },
    { title: "Snowflake & dbt", desc: "Modern Analytics & Data Warehouse" },
    { title: "Apache Spark & Kafka", desc: "Real-Time Streaming Pipelines" },
    { title: "MLflow & Weights/Biases", desc: "MLOps Model Governance" }
  ],
  cloud: [
    { title: "AWS Cloud Native", desc: "EKS, ECS, Lambda, DynamoDB" },
    { title: "Google Cloud Platform", desc: "GKE, BigQuery, Vertex AI" },
    { title: "Terraform & Pulumi", desc: "Infrastructure as Code (IaC)" },
    { title: "Kubernetes & Helm", desc: "Container Orchestration" },
    { title: "Datadog & Grafana", desc: "Full-Stack Observability & Metrics" },
    { title: "GitHub Actions & ArgoCD", desc: "GitOps CI/CD Automation" },
    { title: "HashiCorp Vault", desc: "Zero-Trust Secrets Management" },
    { title: "Cloudflare & Fastly", desc: "Global Edge CDN & Security" }
  ],
  fullstack: [
    { title: "React & Next.js", desc: "Modern SSR & SPA Frontend" },
    { title: "TypeScript & Node.js", desc: "Type-Safe Enterprise Backend" },
    { title: "GraphQL & REST", desc: "Scalable API Architecture" },
    { title: "PostgreSQL & Prisma", desc: "Relational Database & ORM" },
    { title: "Redis & Memcached", desc: "Low-Latency In-Memory Caching" },
    { title: "Tailwind & CSS Modules", desc: "Responsive Design Systems" },
    { title: "Python & FastAPI", desc: "High-Performance Microservices" },
    { title: "Playwright & Cypress", desc: "Automated End-to-End QA Testing" }
  ]
};

function initTechStackTabs() {
  const tabs = document.querySelectorAll('.stack-tab-btn');
  const displayGrid = document.getElementById('stack-display-grid');

  if (!tabs.length || !displayGrid) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const stackKey = tab.dataset.stack;
      const items = techStackData[stackKey];
      if (!items) return;

      displayGrid.innerHTML = items.map(item => `
        <div class="stack-item">
          <b>${item.title}</b>
          <span>${item.desc}</span>
        </div>
      `).join('');
    });
  });
}

/* 8. FAQ Accordion */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      faqItems.forEach(i => i.classList.remove('open'));

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* 9. Contact Modal System */
function openContactModal(prefillSubject = "") {
  const modal = document.getElementById('contact-modal');
  const subjectInput = document.getElementById('contact-subject');

  if (!modal) return;

  if (subjectInput && prefillSubject) {
    subjectInput.value = prefillSubject;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeContactModal() {
  const modal = document.getElementById('contact-modal');
  if (!modal) return;

  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function initModals() {
  const openBtns = document.querySelectorAll('.open-contact-modal');
  const closeBtn = document.querySelector('.close-modal-btn');
  const modal = document.getElementById('contact-modal');
  const leadForm = document.getElementById('lead-contact-form');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openContactModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeContactModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeContactModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeContactModal();
    }
  });

  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      
      const body = document.getElementById('modal-content-body');
      if (body) {
        body.innerHTML = `
          <div style="text-align: center; padding: 32px 16px;">
            <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(16, 185, 129, 0.15); color: var(--brand-emerald); display: grid; place-items: center; font-size: 1.6rem; margin: 0 auto 16px;">✓</div>
            <h3 style="font-size: 1.35rem; margin-bottom: 10px;">Requirement Submitted!</h3>
            <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 24px;">
              Thank you, <strong>${name}</strong>. Our technical director will review your stack requirements and reach out to <strong>${email}</strong> within 12 hours.
            </p>
            <button class="btn btn-primary" onclick="closeContactModal()">Done</button>
          </div>
        `;
      }
    });
  }
}

/* =========================================================================
   10. 4-STEP SCROLLYTELLING: "THE GLOBAL DEPLOYMENT FLIGHT" (PARALLAX ENGINE)
   ========================================================================= */
function initFlightScrollytelling() {
  const canvas = document.getElementById('scrolly-flight-canvas');
  const canvasWrapper = document.querySelector('.scrolly-canvas-wrapper');
  const track = document.getElementById('scrolly-track');
  const tabBtns = document.querySelectorAll('.scrolly-tab-btn');
  const cards = document.querySelectorAll('.scrolly-card');
  const nextBtns = document.querySelectorAll('.scrolly-next-btn');
  const prevBtns = document.querySelectorAll('.scrolly-prev-btn');
  const hudMode = document.getElementById('scrolly-hud-mode');
  const hudTelemetry = document.getElementById('scrolly-hud-telemetry');
  const hudStatus = document.getElementById('scrolly-hud-status');
  const hudSla = document.getElementById('scrolly-hud-sla');

  if (!canvas || !track) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let dpr = window.devicePixelRatio || 1;

  // Animation & Parallax state variables
  let currentProgress = 0.0; // 0.0 to 3.0
  let targetProgress = 0.0;
  let animTime = 0;
  let animationFrameId = null;

  // Mouse Parallax Physics
  let mouseX = 0, mouseY = 0;
  let targetMouseX = 0, targetMouseY = 0;

  if (canvasWrapper) {
    canvasWrapper.addEventListener('mousemove', (e) => {
      const rect = canvasWrapper.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
      targetMouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    });

    canvasWrapper.addEventListener('mouseleave', () => {
      targetMouseX = 0;
      targetMouseY = 0;
    });
  }

  // Background stars
  const stars = [];
  const numStars = 110;
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.4,
      alpha: Math.random() * 0.7 + 0.3,
      speed: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
      depth: Math.random() * 0.8 + 0.2, // Parallax depth layer
      color: Math.random() > 0.35 ? '#5d5df9' : (Math.random() > 0.5 ? '#38bdf8' : '#ffffff')
    });
  }

  // Constellation nodes (Draco / capability matrix)
  const constellationNodes = [
    { name: "Apex / LWC", x: 0.26, y: 0.24, size: 4.5, depth: 0.6 },
    { name: "MuleSoft Mesh", x: 0.42, y: 0.16, size: 4, depth: 0.8 },
    { name: "Eltanin Star", x: 0.54, y: 0.30, size: 8, isStar: true, depth: 1.0 },
    { name: "GenAI / RAG", x: 0.74, y: 0.22, size: 5.5, depth: 0.7 },
    { name: "PyTorch MLOps", x: 0.84, y: 0.42, size: 4, depth: 0.5 },
    { name: "Cloud DevOps", x: 0.68, y: 0.54, size: 4.5, depth: 0.65 },
    { name: "Full-Stack API", x: 0.36, y: 0.50, size: 4.5, depth: 0.75 }
  ];

  const constellationLinks = [
    [0, 1], [1, 2], [2, 3], [3, 4], [3, 5], [5, 6], [6, 0], [2, 6]
  ];

  // Global City Hubs for Earth Horizon
  const cityHubs = [
    { name: "San Francisco", u: 0.18, label: "SF · Lead CTA" },
    { name: "New York", u: 0.34, label: "NYC · Enterprise Hub" },
    { name: "London", u: 0.50, label: "LDN · Delivery Lead" },
    { name: "Bangalore", u: 0.70, label: "BLR · GenAI Squad" },
    { name: "Tokyo", u: 0.86, label: "TYO · Cloud Pod" }
  ];

  // High-Speed Data Arcs for Stage 4
  const dataArcs = [
    { from: 3, to: 0, speed: 0.85, progress: 0.1 },  // Bangalore -> SF
    { from: 2, to: 1, speed: 0.95, progress: 0.45 }, // London -> NYC
    { from: 3, to: 2, speed: 0.75, progress: 0.75 }, // Bangalore -> London
    { from: 0, to: 4, speed: 0.90, progress: 0.25 }  // SF -> Tokyo
  ];

  // Resize canvas
  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Scroll Progress Calculator with Smooth Section Clamping
  function updateScrollProgress() {
    const trackRect = track.getBoundingClientRect();
    const trackHeight = track.offsetHeight - window.innerHeight;
    
    if (trackHeight <= 0) {
      targetProgress = 0;
      return;
    }

    const scrolled = -trackRect.top;
    const rawProgress = Math.max(0, Math.min(1, scrolled / trackHeight));
    
    // Scale 0.0 to 3.0 across 4 steps
    targetProgress = rawProgress * 3.0;
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  function jumpToStep(stepIdx) {
    targetProgress = stepIdx;
    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    const trackHeight = track.offsetHeight - window.innerHeight;
    if (trackHeight > 0) {
      const targetY = trackTop + (stepIdx / 3.0) * trackHeight + 5;
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    }
  }

  // Click-to-Jump Tab Handlers
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const stepIdx = parseInt(btn.dataset.step, 10);
      jumpToStep(stepIdx);
    });
  });

  // Next / Prev Button Handlers inside Cards
  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const nextStep = parseInt(btn.dataset.next, 10);
      jumpToStep(nextStep);
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const prevStep = parseInt(btn.dataset.prev, 10);
      jumpToStep(prevStep);
    });
  });

  // HUD Update Function
  const hudData = [
    {
      mode: "FLIGHT STAGE: 01 // ZENITH SIGNAL",
      telemetry: "RA 17h 56m · DEC +51°29′ · DRACO",
      status: "PULSING REQUIREMENT",
      statusColor: "var(--brand-cyan)",
      sla: "3–5 DAYS TARGET",
      slaColor: "var(--brand-emerald)"
    },
    {
      mode: "FLIGHT STAGE: 02 // VECTOR MATCHING",
      telemetry: "DRACO MATRIX · 98.4% MATCH FIT",
      status: "AI VECTOR MATCHING",
      statusColor: "var(--brand-blue)",
      sla: "TOP 1% VETTED",
      slaColor: "var(--brand-cyan)"
    },
    {
      mode: "FLIGHT STAGE: 03 // HORIZON DESCENT",
      telemetry: "GLOBAL ORBIT · 5 TECH HUBS",
      status: "CAPABILITY VETTED",
      statusColor: "var(--brand-amber)",
      sla: "14-DAY TRIAL SLA",
      slaColor: "var(--brand-emerald)"
    },
    {
      mode: "FLIGHT STAGE: 04 // GLOBAL ACTIVATION",
      telemetry: "EVENT MESH · MULTI-ORG SYNC",
      status: "POD ACTIVE · DAY 1 READY",
      statusColor: "var(--brand-emerald)",
      sla: "100% SLA COMMITTED",
      slaColor: "var(--brand-emerald)"
    }
  ];

  function syncDomStates(stepIdx) {
    // Update Tab Buttons
    tabBtns.forEach((btn, idx) => {
      if (idx === stepIdx) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update Story Cards
    cards.forEach((card, idx) => {
      if (idx === stepIdx) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    // Update HUD elements
    if (hudMode && hudData[stepIdx]) {
      const data = hudData[stepIdx];
      hudMode.textContent = data.mode;
      hudTelemetry.textContent = data.telemetry;
      hudStatus.textContent = data.status;
      hudStatus.style.color = data.statusColor;
      hudSla.textContent = data.sla;
      hudSla.style.color = data.slaColor;
    }
  }

  // Draw Official Eltanin 8-Ray Compass Star in Canvas
  function drawEltaninStar(cx, cy, scale, opacity, pulse) {
    if (opacity <= 0.01) return;

    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.translate(cx, cy);

    // Starlight Ambient Halo
    const haloRadius = 46 * scale * (1 + 0.15 * Math.sin(pulse));
    const haloGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, haloRadius);
    haloGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
    haloGrad.addColorStop(0.2, 'rgba(93, 93, 249, 0.75)');
    haloGrad.addColorStop(0.6, 'rgba(93, 93, 249, 0.25)');
    haloGrad.addColorStop(1, 'rgba(93, 93, 249, 0)');
    ctx.fillStyle = haloGrad;
    ctx.beginPath();
    ctx.arc(0, 0, haloRadius, 0, Math.PI * 2);
    ctx.fill();

    // Ultra-fine Horizontal/Vertical Rays
    ctx.fillStyle = 'rgba(93, 93, 249, 0.85)';
    ctx.beginPath();
    ctx.ellipse(0, 0, 80 * scale, 1.4 * scale, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(0, 0, 1.4 * scale, 80 * scale, 0, 0, Math.PI * 2);
    ctx.fill();

    // 4 Diagonal Blue Ray Spikes in #5d5df9
    for (let angle of [Math.PI / 4, -Math.PI / 4]) {
      ctx.save();
      ctx.rotate(angle);
      const rayLen = 44 * scale;
      const rayW = 6 * scale;
      ctx.fillStyle = '#5d5df9';
      ctx.beginPath();
      ctx.moveTo(0, -rayLen);
      ctx.lineTo(rayW, 0);
      ctx.lineTo(0, rayLen);
      ctx.lineTo(-rayW, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // 4 Outer Curved White Blades (North, South, East, West)
    const topL = 54 * scale;
    const botL = 62 * scale; // South is longest
    const sideL = 48 * scale;

    // Top Blade
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(0, -topL);
    ctx.quadraticCurveTo(-10 * scale, -12 * scale, 0, 0);
    ctx.lineTo(0, -topL);
    ctx.fill();
    ctx.fillStyle = '#cbd5e1';
    ctx.beginPath();
    ctx.moveTo(0, -topL);
    ctx.quadraticCurveTo(10 * scale, -12 * scale, 0, 0);
    ctx.lineTo(0, -topL);
    ctx.fill();

    // Bottom Blade
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(0, botL);
    ctx.quadraticCurveTo(-10 * scale, 12 * scale, 0, 0);
    ctx.lineTo(0, botL);
    ctx.fill();
    ctx.fillStyle = '#cbd5e1';
    ctx.beginPath();
    ctx.moveTo(0, botL);
    ctx.quadraticCurveTo(10 * scale, 12 * scale, 0, 0);
    ctx.lineTo(0, botL);
    ctx.fill();

    // Left Blade
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(-sideL, 0);
    ctx.quadraticCurveTo(-12 * scale, -10 * scale, 0, 0);
    ctx.lineTo(-sideL, 0);
    ctx.fill();
    ctx.fillStyle = '#cbd5e1';
    ctx.beginPath();
    ctx.moveTo(-sideL, 0);
    ctx.quadraticCurveTo(-12 * scale, 10 * scale, 0, 0);
    ctx.lineTo(-sideL, 0);
    ctx.fill();

    // Right Blade
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(sideL, 0);
    ctx.quadraticCurveTo(12 * scale, -10 * scale, 0, 0);
    ctx.lineTo(sideL, 0);
    ctx.fill();
    ctx.fillStyle = '#cbd5e1';
    ctx.beginPath();
    ctx.moveTo(sideL, 0);
    ctx.quadraticCurveTo(12 * scale, 10 * scale, 0, 0);
    ctx.lineTo(sideL, 0);
    ctx.fill();

    // Center 4-pointed Star in #5d5df9
    const centerStarLen = 22 * scale;
    const centerStarW = 4.5 * scale;
    ctx.fillStyle = '#5d5df9';
    ctx.beginPath();
    ctx.moveTo(0, -centerStarLen);
    ctx.lineTo(centerStarW, 0);
    ctx.lineTo(0, centerStarLen);
    ctx.lineTo(-centerStarW, 0);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(-centerStarLen, 0);
    ctx.lineTo(0, centerStarW);
    ctx.lineTo(centerStarLen, 0);
    ctx.lineTo(0, -centerStarW);
    ctx.closePath();
    ctx.fill();

    // Brilliant White Radiant Core
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(0, 0, 3.5 * scale, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  // Draw Rounded Holographic Badge in Canvas
  function drawCanvasTag(x, y, text, subtext, color = '#5d5df9', pulse = 0) {
    ctx.save();
    ctx.font = '600 11px Inter, sans-serif';
    const textWidth = ctx.measureText(text).width;
    const paddingX = 10;
    const boxW = Math.max(textWidth + paddingX * 2, 100);
    const boxH = subtext ? 36 : 24;

    const rx = x - boxW / 2;
    const ry = y - boxH / 2;

    // Background Glass Box
    ctx.fillStyle = 'rgba(5, 12, 36, 0.88)';
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(rx, ry, boxW, boxH, 6);
    ctx.fill();
    ctx.stroke();

    // Text
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = subtext ? 'top' : 'middle';
    ctx.fillText(text, x, subtext ? ry + 5 : y);

    if (subtext) {
      ctx.font = '500 9px Inter, sans-serif';
      ctx.fillStyle = color;
      ctx.fillText(subtext, x, ry + 20);
    }

    ctx.restore();
  }

  // Master Render Loop with Multi-Layer Parallax Physics
  function render() {
    animTime += 0.025;

    // Smooth scroll interpolation (lerp)
    currentProgress += (targetProgress - currentProgress) * 0.09;
    const clampedProgress = Math.max(0, Math.min(3, currentProgress));
    const activeStep = Math.min(3, Math.floor(clampedProgress + 0.4));

    // Smooth mouse parallax physics (lerp)
    mouseX += (targetMouseX - mouseX) * 0.07;
    mouseY += (targetMouseY - mouseY) * 0.07;

    syncDomStates(activeStep);

    // Clear Canvas
    ctx.clearRect(0, 0, width, height);

    // 1. Deep Space Parallax Background
    ctx.fillStyle = '#01030e';
    ctx.fillRect(0, 0, width, height);

    // Ambient Space Nebula Glow with Mouse Parallax
    const nebGrad = ctx.createRadialGradient(
      width * 0.5 + mouseX * 25, 
      height * 0.4 + mouseY * 25, 
      0, 
      width * 0.5, 
      height * 0.4, 
      width * 0.75
    );
    nebGrad.addColorStop(0, 'rgba(93, 93, 249, 0.15)');
    nebGrad.addColorStop(0.5, 'rgba(168, 85, 247, 0.07)');
    nebGrad.addColorStop(1, 'rgba(1, 3, 14, 0)');
    ctx.fillStyle = nebGrad;
    ctx.fillRect(0, 0, width, height);

    // Draw Twinkling Background Stars with Depth Parallax
    stars.forEach(st => {
      const alpha = st.alpha * (0.6 + 0.4 * Math.sin(animTime * 2 + st.phase));
      const px = st.x * width + mouseX * 12 * st.depth;
      const py = st.y * height + mouseY * 12 * st.depth;
      ctx.fillStyle = st.color;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(px, py, st.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    // =========================================================================
    // STAGE 0 & 1: Deep Space Eltanin Star & Requirement Signal Pulse (0.0 -> 1.0)
    // =========================================================================
    if (clampedProgress < 1.4) {
      const stageAlpha = clampedProgress <= 0.8 ? 1 : Math.max(0, 1 - (clampedProgress - 0.8) / 0.6);
      
      // Star moves with mouse parallax and scroll ascent
      const starCx = width * 0.5 + mouseX * 18;
      const starCy = height * 0.45 + mouseY * 18 - clampedProgress * 20;

      // Concentric Radar Scan Rings radiating from Eltanin Star
      const pulsePhase = (animTime * 0.8) % 1;
      for (let r = 0; r < 3; r++) {
        const ringProg = (pulsePhase + r * 0.33) % 1;
        const ringRadius = 30 + ringProg * 140;
        const ringAlpha = (1 - ringProg) * 0.55 * stageAlpha;

        ctx.strokeStyle = '#5d5df9';
        ctx.lineWidth = 1.2;
        ctx.globalAlpha = ringAlpha;
        ctx.beginPath();
        ctx.arc(starCx, starCy, ringRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Scan Ring Compass Markers
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(starCx + ringRadius - 2, starCy - 2, 4, 4);
        ctx.fillRect(starCx - ringRadius - 2, starCy - 2, 4, 4);
      }
      ctx.globalAlpha = 1;

      // Draw Main Eltanin Star Beacon with dynamic scale
      const starScale = 1.15 - clampedProgress * 0.2;
      drawEltaninStar(starCx, starCy, starScale, stageAlpha, animTime * 3);

      // Floating Requirement Telemetry Chips (Stage 1)
      if (stageAlpha > 0.1) {
        ctx.save();
        ctx.globalAlpha = stageAlpha;

        // Line 1: Top Left Requirement
        const t1X = starCx - 110 + mouseX * 8;
        const t1Y = starCy - 70 + mouseY * 8;
        ctx.strokeStyle = 'rgba(93, 93, 249, 0.45)';
        ctx.beginPath();
        ctx.moveTo(starCx - 20, starCy - 20);
        ctx.lineTo(t1X, t1Y);
        ctx.stroke();
        drawCanvasTag(t1X, t1Y, "☁️ Salesforce CTA", "ARCHITECT LEAD", "#5d5df9");

        // Line 2: Top Right Requirement
        const t2X = starCx + 110 + mouseX * 8;
        const t2Y = starCy - 60 + mouseY * 8;
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
        ctx.beginPath();
        ctx.moveTo(starCx + 20, starCy - 20);
        ctx.lineTo(t2X, t2Y);
        ctx.stroke();
        drawCanvasTag(t2X, t2Y, "🧠 GenAI / LLMs", "RAG & MLOps", "#38bdf8");

        // Line 3: Bottom Center SLA
        const t3X = starCx + mouseX * 6;
        const t3Y = starCy + 85 + mouseY * 6;
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.45)';
        ctx.beginPath();
        ctx.moveTo(starCx, starCy + 25);
        ctx.lineTo(t3X, t3Y);
        ctx.stroke();
        drawCanvasTag(t3X, t3Y, "⚡ Day 1 Velocity", "3–5 DAYS SLA", "#10b981");

        ctx.restore();
      }
    }

    // =========================================================================
    // STAGE 1 & 2: Draco Constellation & AI Matching Matrix (0.4 -> 2.3)
    // =========================================================================
    if (clampedProgress >= 0.4 && clampedProgress <= 2.3) {
      let stageAlpha = 1;
      if (clampedProgress < 1.0) {
        stageAlpha = (clampedProgress - 0.4) / 0.6;
      } else if (clampedProgress > 1.8) {
        stageAlpha = Math.max(0, 1 - (clampedProgress - 1.8) / 0.5);
      }

      ctx.save();
      ctx.globalAlpha = stageAlpha;

      // Draw Constellation Connecting Lines with Mouse Parallax
      constellationLinks.forEach(([idxA, idxB]) => {
        const nodeA = constellationNodes[idxA];
        const nodeB = constellationNodes[idxB];
        const ax = nodeA.x * width + mouseX * 15 * nodeA.depth;
        const ay = nodeA.y * height + mouseY * 15 * nodeA.depth;
        const bx = nodeB.x * width + mouseX * 15 * nodeB.depth;
        const by = nodeB.y * height + mouseY * 15 * nodeB.depth;

        ctx.strokeStyle = 'rgba(93, 93, 249, 0.5)';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.stroke();

        // Animated Energy Packet flowing along link
        const linkPhase = (animTime * 0.7 + idxA * 0.2) % 1;
        const px = ax + (bx - ax) * linkPhase;
        const py = ay + (by - ay) * linkPhase;

        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(px, py, 2.8, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Constellation Star Nodes
      constellationNodes.forEach((node, idx) => {
        const nx = node.x * width + mouseX * 15 * node.depth;
        const ny = node.y * height + mouseY * 15 * node.depth;

        if (node.isStar) {
          drawEltaninStar(nx, ny, 0.75, stageAlpha, animTime * 3);
        } else {
          // Node Glow
          ctx.fillStyle = 'rgba(93, 93, 249, 0.35)';
          ctx.beginPath();
          ctx.arc(nx, ny, node.size * 2.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(nx, ny, node.size, 0, Math.PI * 2);
          ctx.fill();

          // Node Label
          drawCanvasTag(nx, ny + 18, node.name, null, "#5d5df9");
        }
      });

      // AI Match Matrix Central Focus Box (Step 02)
      if (clampedProgress >= 0.8 && clampedProgress <= 1.8) {
        const focusNode = constellationNodes[2]; // Eltanin star
        const focusX = focusNode.x * width + mouseX * 15 * focusNode.depth;
        const focusY = focusNode.y * height + mouseY * 15 * focusNode.depth;
        const focusAngle = animTime * 0.8;

        // Rotating Reticle HUD
        ctx.save();
        ctx.translate(focusX, focusY);
        ctx.rotate(focusAngle);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 6]);
        ctx.beginPath();
        ctx.arc(0, 0, 38, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        drawCanvasTag(focusX, focusY - 54, "AI MATCH ENGINE", "98.8% PRECISION", "#38bdf8");
      }

      ctx.restore();
    }

    // =========================================================================
    // STAGE 2 & 3: Atmospheric Horizon Descent & Global Data Arcs (1.5 -> 3.0)
    // =========================================================================
    if (clampedProgress >= 1.4) {
      const stageAlpha = Math.min(1, (clampedProgress - 1.4) / 0.5);
      
      ctx.save();
      ctx.globalAlpha = stageAlpha;

      // Parallax Horizon Rise: As you scroll, Earth rises from bottom into full view
      const horizonProgress = Math.min(1, (clampedProgress - 1.4) / 1.6);
      const horizonCenterY = height * 1.55 - horizonProgress * (height * 0.35) + mouseY * 10;
      const horizonRadius = height * 0.95;

      // 1. Atmosphere Radial Glow Haze
      const atmoGrad = ctx.createRadialGradient(
        width * 0.5 + mouseX * 10, horizonCenterY, horizonRadius * 0.85,
        width * 0.5 + mouseX * 10, horizonCenterY, horizonRadius * 1.25
      );
      atmoGrad.addColorStop(0, 'rgba(93, 93, 249, 0.48)');
      atmoGrad.addColorStop(0.4, 'rgba(56, 189, 248, 0.28)');
      atmoGrad.addColorStop(0.8, 'rgba(93, 93, 249, 0.08)');
      atmoGrad.addColorStop(1, 'rgba(1, 3, 14, 0)');

      ctx.fillStyle = atmoGrad;
      ctx.beginPath();
      ctx.arc(width * 0.5 + mouseX * 10, horizonCenterY, horizonRadius * 1.25, 0, Math.PI * 2);
      ctx.fill();

      // 2. Earth Planet Body (Deep Dark Cosmic Blue with Atmosphere Line)
      ctx.fillStyle = '#02071a';
      ctx.beginPath();
      ctx.arc(width * 0.5 + mouseX * 10, horizonCenterY, horizonRadius, 0, Math.PI * 2);
      ctx.fill();

      // Sharp glowing limb horizon line
      ctx.strokeStyle = '#5d5df9';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#5d5df9';
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.arc(width * 0.5 + mouseX * 10, horizonCenterY, horizonRadius, Math.PI * 1.15, Math.PI * 1.85);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Calculate Coordinates for City Nodes along the Horizon Arc
      const nodeCoords = cityHubs.map(hub => {
        const angle = Math.PI * (1.22 + hub.u * 0.56);
        const nx = width * 0.5 + mouseX * 10 + Math.cos(angle) * horizonRadius;
        const ny = horizonCenterY + Math.sin(angle) * horizonRadius;
        return { ...hub, x: nx, y: ny };
      });

      // 3. Draw City Hub Nodes
      nodeCoords.forEach((node, idx) => {
        // Vertical Starlight Beacons rising into space
        const beamGrad = ctx.createLinearGradient(node.x, node.y, node.x, node.y - 45);
        beamGrad.addColorStop(0, 'rgba(93, 93, 249, 0.85)');
        beamGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.strokeStyle = beamGrad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(node.x, node.y - 42);
        ctx.stroke();

        // Pulsing Beacon Pin
        const pinPulse = (animTime * 2 + idx * 0.5) % 1;
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4 + pinPulse * 12, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Node Tooltip Card (Stage 3 & 4)
        if (clampedProgress >= 1.8) {
          drawCanvasTag(node.x, node.y - 52, node.name, node.label, idx % 2 === 0 ? '#5d5df9' : '#38bdf8');
        }
      });

      // =======================================================================
      // STAGE 4: High-Speed Parabolic Data Arcs (2.2 -> 3.0)
      // =======================================================================
      if (clampedProgress >= 2.2) {
        const stage4Alpha = Math.min(1, (clampedProgress - 2.2) / 0.5);
        ctx.globalAlpha = stageAlpha * stage4Alpha;

        dataArcs.forEach((arcData, arcIdx) => {
          const fromNode = nodeCoords[arcData.from];
          const toNode = nodeCoords[arcData.to];
          if (!fromNode || !toNode) return;

          // Parabolic Control Point High Above Horizon
          const midX = (fromNode.x + toNode.x) * 0.5;
          const midY = Math.min(fromNode.y, toNode.y) - 65 - arcIdx * 15;

          // Draw Glowing Arc Path
          ctx.strokeStyle = 'rgba(93, 93, 249, 0.55)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.quadraticCurveTo(midX, midY, toNode.x, toNode.y);
          ctx.stroke();

          // Animate Traveling Starlight Photon Particles along Bezier
          arcData.progress = (arcData.progress + 0.015 * arcData.speed) % 1;
          const t = arcData.progress;
          const invT = 1 - t;

          // Quadratic Bezier Calculation: B(t) = (1-t)^2*P0 + 2(1-t)t*P1 + t^2*P2
          const curX = invT * invT * fromNode.x + 2 * invT * t * midX + t * t * toNode.x;
          const curY = invT * invT * fromNode.y + 2 * invT * t * midY + t * t * toNode.y;

          // Photon Particle Core + Halo
          ctx.fillStyle = 'rgba(56, 189, 248, 0.45)';
          ctx.beginPath();
          ctx.arc(curX, curY, 8, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(curX, curY, 3, 0, Math.PI * 2);
          ctx.fill();
        });

        // Stage 4 Activation Badge Overlay in Canvas
        const badgeX = width * 0.5 + mouseX * 10;
        const badgeY = height * 0.20 + mouseY * 6;
        drawCanvasTag(badgeX, badgeY, "⚡ POD ACTIVATED", "SLA COMMITTED · DAY 1 READY", "#10b981");
      }

      ctx.restore();
    }

    // Loop
    animationFrameId = requestAnimationFrame(render);
  }

  // Start Animation Loop
  animationFrameId = requestAnimationFrame(render);
}
