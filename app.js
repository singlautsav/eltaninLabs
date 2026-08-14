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
