/* =========================================================
   NAVIGATION
========================================================= */

const nav = document.getElementById('nav');
const menu = document.getElementById('menu');

menu?.addEventListener('click', () => {
  nav?.classList.toggle('open');
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
  });
});


/* =========================================================
   SCROLL PROGRESS
========================================================= */

const progress = document.getElementById('progress');

window.addEventListener('scroll', () => {
  if (!progress) return;

  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrollPercentage =
    maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;

  progress.style.width = `${scrollPercentage}%`;
});


/* =========================================================
   CURSOR GLOW
========================================================= */

const glow = document.getElementById('cursorGlow');

window.addEventListener('pointermove', event => {
  if (!glow) return;

  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll('.reveal').forEach(element => {
  observer.observe(element);
});


/* =========================================================
   FOOTER YEAR
========================================================= */

const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = {

  sales: {
    type: 'POWER BI · EXCEL · DAX',
    title: 'Sales Performance Dashboard',
    summary:
      'An interactive dashboard designed around management visibility: what is selling, where performance is strongest, how trends are moving and where attention is required.',
    approach:
      'Structure the sales data, define relevant KPIs, analyse monthly, regional and product performance and translate the findings into an interactive reporting layer.',
    tools:
      'Power BI · Excel · DAX',
    insights:
      'Sales trends, regional performance, product contribution and KPI movement.',
    outcome:
      'A decision-oriented reporting view designed to make recurring performance reviews clearer.'
  },

  business: {
    type: 'POWER BI · EXCEL',
    title: 'Business Analytics Dashboard',
    summary:
      'A concise management-reporting concept focused on performance visibility and KPI monitoring.',
    approach:
      'Start from business questions, define measurable indicators, identify trends and present the information in a compact decision-making interface.',
    tools:
      'Power BI · Excel',
    insights:
      'Performance trends and areas requiring management attention.',
    outcome:
      'A structured reporting layer suitable for recurring business reviews.'
  },

  customer: {
    type: 'EXCEL · POWER BI',
    title: 'Customer & Marketing Analytics',
    summary:
      'A customer-focused analytics project covering segmentation, revenue contribution and marketing performance.',
    approach:
      'Explore customer behaviour, segment the available data, compare contribution and identify opportunities for action.',
    tools:
      'Excel · Power BI',
    insights:
      'Customer trends, revenue contribution and marketing performance patterns.',
    outcome:
      'Action-oriented recommendations derived from customer and marketing evidence.'
  },

  hr: {
    type: 'POWER BI · EXCEL',
    title: 'HR Analytics Dashboard',
    summary:
      'A workforce analytics view covering employee metrics, departments and attrition signals.',
    approach:
      'Organise workforce information around useful HR KPIs and visualise trends by department and employee attributes.',
    tools:
      'Power BI · Excel',
    insights:
      'Workforce trends, department-level patterns and attrition signals.',
    outcome:
      'A clearer view of workforce metrics for HR reporting.'
  },

  case: {
    type: 'BUSINESS ANALYSIS',
    title: 'Business Analyst Case Study',
    summary:
      'A structured BA workflow demonstrating how a business problem can become an actionable recommendation.',
    approach:
      'Define the problem, capture requirements, identify inputs, analyse evidence, communicate insights and formulate recommendations.',
    tools:
      'Requirements · Analysis · Reporting',
    insights:
      'Traceability from the original requirement to evidence, insight and recommendation.',
    outcome:
      'A reusable framework demonstrating structured Business Analyst thinking.'
  },

  nuturio: {
    type: 'BUSINESS · WEB · FMCG',
    title: 'NUTURIO Business & Website',
    summary:
      'An entrepreneurial project combining product presentation, B2B/B2C thinking and web technology.',
    approach:
      'Combine a business concept with product presentation, website development and a customer-facing digital experience.',
    tools:
      'HTML · CSS · JavaScript · Business Strategy',
    insights:
      'Product positioning, digital presentation and business/technology integration.',
    outcome:
      'A practical project demonstrating entrepreneurial thinking alongside technology implementation.'
  }

};


/* =========================================================
   PROJECT MODAL
========================================================= */

const modal = document.getElementById('modal');

document.querySelectorAll('.work-item').forEach(card => {

  card.addEventListener('click', () => {

    const projectId = card.dataset.project;
    const project = projects[projectId];

    if (!project || !modal) return;

    const type = document.getElementById('mType');
    const title = document.getElementById('mTitle');
    const summary = document.getElementById('mSummary');
    const approach = document.getElementById('mApproach');
    const tools = document.getElementById('mTools');
    const insights = document.getElementById('mInsights');
    const outcome = document.getElementById('mOutcome');

    if (type) type.textContent = project.type;
    if (title) title.textContent = project.title;
    if (summary) summary.textContent = project.summary;
    if (approach) approach.textContent = project.approach;
    if (tools) tools.textContent = project.tools;
    if (insights) insights.textContent = project.insights;
    if (outcome) outcome.textContent = project.outcome;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');

  });

});


/* =========================================================
   CLOSE PROJECT MODAL
========================================================= */

document.querySelectorAll('[data-close]').forEach(element => {

  element.addEventListener('click', () => {

    if (!modal) return;

    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');

  });

});


/* =========================================================
   ESC KEY - CLOSE MODAL
========================================================= */

document.addEventListener('keydown', event => {

  if (event.key === 'Escape' && modal) {

    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');

  }

});


/* =========================================================
   PLACEHOLDER LINKS / TOAST
========================================================= */

const toast = document.getElementById('toast');

document.querySelectorAll('[data-placeholder]').forEach(link => {

  link.addEventListener('click', event => {

    event.preventDefault();

    if (!toast) return;

    toast.textContent =
      `${link.dataset.placeholder} is a placeholder — add your real URL in index.html.`;

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);

  });

});


/* =========================================================
   CREDENTIALS - VIEW MORE / VIEW LESS
========================================================= */

const credentialsToggle =
  document.getElementById('credentialsToggle');

const credentialGrid =
  document.querySelector('.credential-grid');


if (credentialsToggle && credentialGrid) {

  credentialsToggle.addEventListener('click', () => {

    credentialGrid.classList.toggle('show-all');

    const showingAll =
      credentialGrid.classList.contains('show-all');

    if (showingAll) {

      credentialsToggle.innerHTML =
        'SHOW LESS <span>↗</span>';

    } else {

      credentialsToggle.innerHTML =
        'VIEW MORE <span>↘</span>';

    }

  });

}

/* =========================================
   EXPERIENCE — VIEW MORE / VIEW LESS
========================================= */

const experienceMore = document.getElementById('experienceMore');
const experienceHidden = document.getElementById('experienceHidden');

experienceMore?.addEventListener('click', () => {
  const isOpen = experienceHidden.classList.toggle('show');

  experienceMore.setAttribute('aria-expanded', isOpen);

  if (isOpen) {
    experienceMore.innerHTML = 'VIEW LESS <span>↖</span>';
  } else {
    experienceMore.innerHTML = 'VIEW MORE <span>↗</span>';
  }
});

/* =========================================
   WORK — VIEW MORE
========================================= */
const workMore = document.getElementById('workMore');
const workHidden = document.getElementById('workHidden');
workMore?.addEventListener('click', () => {
  // Show remaining projects
  workHidden.classList.add('show');
  // Hide the VIEW MORE button
  workMore.style.display = 'none';
});