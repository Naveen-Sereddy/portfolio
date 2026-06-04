/* =========================================================================
   Naveen Madhav, Portfolio interactions
   ========================================================================= */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ------------------------------------------------------------ year */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ------------------------------------------------------------ marquee */
  // Tools with a real brand logo roll as logos; methodology terms roll as text.
  const ICONS = {
    figma:
      "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.491 4.49-4.491h4.588v8.981zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.491 4.49-4.491h4.588v4.441c0 2.503-2.047 4.54-4.563 4.54zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.069v-2.969H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.491 4.49-4.491h.098c2.476 0 4.49 2.015 4.49 4.491s-2.014 4.49-4.49 4.49zm-.098-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h.098c1.665 0 3.019-1.354 3.019-3.019s-1.354-3.019-3.019-3.019h-.098z",
    react:
      "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.094.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.635 1.175.225.39.465.775.705 1.153a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM12 14.48c.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565.44.024.89.034 1.345.034zm-2.218 1.92c.65.905 1.335 1.726 2.02 2.447-1.595 1.473-3.097 2.28-4.11 2.28a1.185 1.185 0 0 1-.563-.132c-.66-.385-.943-1.835-.714-3.705.054-.46.142-.944.25-1.44.804.246 1.78.426 3.078.55zm7.6.002a23.49 23.49 0 0 0 3.107.535c-.108.495-.196.98-.25 1.438-.225 1.868-.515 3.32-.73 3.704-.152.083-.333.127-.558.127v.006c-1.018 0-2.514-.81-4.106-2.292.685-.72 1.37-1.539 2.02-2.444z",
    tailwind:
      "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z",
    html5:
      "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",
    css3:
      "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z",
    javascript:
      "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.003-.336z",
    git:
      "M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187",
  };
  const marqueeItems = [
    { label: "Figma", icon: ICONS.figma },
    { label: "User Research" },
    { label: "React", icon: ICONS.react },
    { label: "Wireframing" },
    { label: "Tailwind CSS", icon: ICONS.tailwind },
    { label: "Prototyping" },
    { label: "JavaScript", icon: ICONS.javascript },
    { label: "Usability Testing" },
    { label: "HTML5", icon: ICONS.html5 },
    { label: "Design Systems" },
    { label: "CSS3", icon: ICONS.css3 },
    { label: "Accessibility" },
    { label: "Git", icon: ICONS.git },
    { label: "Responsive Design" },
  ];
  const marquee = $("[data-marquee]");
  if (marquee) {
    const render = (it) => {
      const logo = it.icon
        ? `<svg class="h-6 w-6 shrink-0 text-gold sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${it.icon}"/></svg>`
        : "";
      return `<span class="flex items-center gap-3.5">${logo}<span>${it.label}</span><span class="ml-3.5 text-base text-gold">✦</span></span>`;
    };
    const set = marqueeItems.map(render).join("");
    marquee.innerHTML = set + set; // duplicate for seamless loop
  }

  /* ------------------------------------------------------------ contact form (no backend) */
  // On submit, compose a prefilled email and open the visitor's mail app.
  // No server, no error states — just a graceful hand-off to email.
  const contactForm = $("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const get = (id) => (document.getElementById(id)?.value || "").trim();
      const name = get("cName");
      const email = get("cEmail");
      const message = get("cMessage");
      const subject = encodeURIComponent(name ? `Portfolio inquiry from ${name}` : "Portfolio inquiry");
      const bodyLines = [
        message || "(your message)",
        "",
        "—",
        name ? `From: ${name}` : "",
        email ? `Reply to: ${email}` : "",
      ].filter(Boolean);
      const body = encodeURIComponent(bodyLines.join("\n"));
      const note = $("#formNote");
      if (note) note.classList.remove("hidden");
      window.location.href = `mailto:naveen.workpath@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  /* ------------------------------------------------------------ project data */
  const projects = [
    {
      id: "medbridge",
      index: "01",
      title: "MedBridge",
      meta: "UX Case Study · Healthcare · 2026",
      desc:
        "End-to-end redesign of a patient portal, appointments, prescriptions, records, and billing unified into one calm, secure experience.",
      roles: ["Product Design", "Information Architecture", "Design System", "WCAG 2.1"],
      outcome: { value: "5 core flows", label: "redesigned & unified" },
      study: {
        problem: "Healthcare portals are often hard to navigate, especially when patients manage appointments, prescriptions, medical records, and provider communication across multiple screens and workflows.",
        role: "Led the end-to-end UX process: research, user flows, information architecture, wireframing, visual design, prototyping, usability evaluation, and design-system creation.",
        process: [
          "Analyzed patient and provider workflows",
          "Created personas and journey maps",
          "Mapped appointment, prescription, and records experiences",
          "Designed responsive patient-facing interfaces",
          "Built a reusable, healthcare-focused design system",
          "Iterated on workflows to reduce friction and improve task completion",
        ],
        result: "A unified patient portal that simplifies healthcare interactions while improving navigation, accessibility, and information discoverability.",
        credibility: "The biggest challenge was balancing clinical information density with simplicity. Patients needed access to a large amount of information, but the interface had to stay understandable for users with very different levels of technical literacy.",
      },
      url: null,
      urlLabel: null,
      shots: [
        { src: "assets/projects/medbridge/medbridge-2.png", cap: "Patient dashboard, appointments, prescriptions & health summary at a glance" },
        { src: "assets/projects/medbridge/medbridge-3.png", cap: "Find a doctor, filterable provider directory with instant booking" },
        { src: "assets/projects/medbridge/medbridge-5.png", cap: "Billing, invoices, balances and insurance in plain language" },
        { src: "assets/projects/medbridge/medbridge-4.png", cap: "Account & accessibility preferences" },
        { src: "assets/projects/medbridge/medbridge-1.png", cap: "Secure sign-in with contrast-verified inputs" },
      ],
    },
    {
      id: "finflow",
      index: "02",
      title: "FinFlow",
      meta: "UX Case Study · B2B Fintech · 2026",
      desc:
        "A B2B expense-management platform designed from research through usability testing across three roles, admin, manager, and employee.",
      roles: ["User Research", "Usability Testing", "Data Visualisation", "Design System"],
      outcome: { value: "73% → 89%", label: "task completion in testing" },
      study: {
        problem: "Finance teams often manage expenses, approvals, reimbursements, reporting, and card programs across disconnected systems, creating inefficiency and added administrative overhead.",
        role: "Owned the product design process from research and workflow analysis through information architecture, interaction design, design systems, prototyping, accessibility review, and product strategy.",
        process: [
          "Studied finance operations workflows",
          "Defined user roles and responsibilities",
          "Created personas and journey maps",
          "Designed approval and expense management flows",
          "Built a scalable design system",
          "Developed high-fidelity prototypes and documentation",
        ],
        result: "A role-based expense management platform that streamlines submission, approvals, reporting, and financial operations while improving visibility for finance teams.",
        credibility: "The most important decision was recognizing that employees, managers, and finance admins have completely different priorities. Instead of one generic dashboard, I designed workflows around each role's primary responsibilities and decisions.",
      },
      url: null,
      urlLabel: null,
      shots: [
        { src: "assets/projects/finflow/finflow-2.png", cap: "Finance admin, spend, approvals and runway in a single view" },
        { src: "assets/projects/finflow/finflow-3.png", cap: "All expenses, a sortable, filterable ledger with clear status tags" },
        { src: "assets/projects/finflow/finflow-4.png", cap: "Corporate cards, issue, freeze and track spend per holder" },
        { src: "assets/projects/finflow/finflow-5.png", cap: "Manager view, team spend and a focused approvals queue" },
        { src: "assets/projects/finflow/finflow-6.png", cap: "Employee view, personal spend, receipts and reimbursements" },
      ],
    },
    {
      id: "bins",
      index: "03",
      title: "Bins & Deals",
      meta: "Design & Development · Live Site · 2026",
      desc:
        "Brand, design, and front-end build for a real retail liquidation store, from blank canvas to a live marketing site that drives store visits.",
      roles: ["Web Design", "Front-End Dev", "React", "Tailwind CSS"],
      outcome: { value: "Live", label: "shipped to production" },
      study: {
        problem: "The store relied heavily on social media and in-store traffic, but many first-time customers did not understand the liquidation pricing model, the product categories, or how the store operated.",
        role: "Worked directly with the business owner on customer questions, business goals, and operational challenges, while handling UX design, UI design, front-end development, deployment, and SEO.",
        process: [
          "Conducted stakeholder discussions",
          "Identified common customer questions",
          "Organized the content architecture",
          "Designed responsive layouts",
          "Built the site with React and Tailwind CSS",
          "Implemented SEO and deployment",
        ],
        result: "A centralized digital presence that clearly explains the business model, improves customer understanding, and provides quick access to store information.",
        credibility: "This project was not about adding more features, it was about reducing confusion. Most design decisions focused on helping new customers quickly understand how liquidation pricing works before they visit the store.",
      },
      url: "https://binsanddeals.com",
      urlLabel: "binsanddeals.com",
      shots: [
        { src: "assets/projects/bins-and-deals/bins-1.png", cap: "Landing hero, bold display type and a clear deals-from-$2 offer" },
        { src: "assets/projects/bins-and-deals/bins-2.png", cap: "Color-tag pricing system, every item priced by its tag, no haggling" },
        { src: "assets/projects/bins-and-deals/bins-3.png", cap: "In-store claw machine, a playful reason to come browse" },
        { src: "assets/projects/bins-and-deals/bins-4.png", cap: "Store hours and weekly schedule, with contact details" },
        { src: "assets/projects/bins-and-deals/bins-5.png", cap: "Find us online, Facebook and Marketplace funnels" },
      ],
    },
  ];

  // Flat registry for the lightbox
  const galleries = {};

  /* ------------------------------------------------------------ render projects */
  const wrap = $("#projects");
  if (wrap) {
    projects.forEach((p, i) => {
      galleries[p.id] = p.shots;
      const flip = i % 2 === 1; // alternate sides on desktop
      const thumbs = p.shots
        .slice(1)
        .map(
          (s, k) => `
          <button class="thumb aspect-[16/10]" data-gallery="${p.id}" data-idx="${k + 1}" aria-label="View: ${s.cap.replace(/"/g, "")}">
            <img src="${s.src}" alt="${s.cap.replace(/"/g, "")}" loading="lazy" decoding="async" width="1760" height="1100" class="h-full w-full object-cover object-top" />
          </button>`
        )
        .join("");

      const liveBtn = p.url
        ? `<a href="${p.url}" target="_blank" rel="noopener" class="btn-primary !px-5 !py-2.5 text-[0.8rem]">
             Visit live site
             <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M9 7h8v8"/></svg>
           </a>`
        : "";

      const study = p.study
        ? `
        <!-- case study -->
        <div class="case-study border-t border-line/[0.08] pt-9">
          <div class="grid gap-x-12 gap-y-9 md:grid-cols-2">
            <div>
              <p class="eyebrow mb-3">The problem</p>
              <p class="max-w-prose leading-relaxed text-bone-muted">${p.study.problem}</p>
            </div>
            <div>
              <p class="eyebrow mb-3">My role</p>
              <p class="max-w-prose leading-relaxed text-bone-muted">${p.study.role}</p>
            </div>
            <div>
              <p class="eyebrow mb-4">Process</p>
              <ol class="space-y-2.5">
                ${p.study.process
                  .map(
                    (s, idx) =>
                      `<li class="flex gap-3 text-sm leading-relaxed text-bone-muted"><span class="pt-0.5 font-mono text-[0.7rem] text-gold">${String(idx + 1).padStart(2, "0")}</span><span>${s}</span></li>`
                  )
                  .join("")}
              </ol>
            </div>
            <div>
              <p class="eyebrow mb-3">Outcome</p>
              <p class="max-w-prose leading-relaxed text-bone-muted">${p.study.result}</p>
            </div>
          </div>
          <figure class="mt-9 rounded-2xl border-l-2 border-gold bg-line/[0.05] p-6 sm:p-7">
            <p class="eyebrow mb-3 text-gold">What made it hard</p>
            <blockquote class="font-serif text-lg font-normal leading-relaxed text-bone sm:text-xl">${p.study.credibility}</blockquote>
          </figure>
        </div>`
        : "";

      const block = document.createElement("article");
      block.className = "reveal project flex flex-col gap-10";
      block.innerHTML = `
        <div class="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <!-- info -->
        <div class="lg:col-span-5 ${flip ? "lg:order-2 lg:pl-4" : ""}">
          <div class="flex items-center gap-4">
            <span class="font-mono text-sm text-gold">${p.index}</span>
            <span class="h-px flex-1 max-w-[60px] bg-line/15"></span>
            <span class="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-bone-dim">${p.meta}</span>
          </div>

          <h3 class="mt-5 text-[clamp(2rem,4.5vw,3rem)] font-normal leading-none">${p.title}</h3>

          <p class="mt-5 max-w-md leading-relaxed text-bone-muted">${p.desc}</p>

          <div class="mt-6 flex flex-wrap gap-2">
            ${p.roles.map((r) => `<span class="chip">${r}</span>`).join("")}
          </div>

          <div class="mt-8 flex items-center gap-5 border-t border-line/[0.08] pt-6">
            <div>
              <div class="font-serif text-2xl text-gold">${p.outcome.value}</div>
              <div class="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-bone-dim">${p.outcome.label}</div>
            </div>
          </div>

          <div class="mt-7 flex flex-wrap items-center gap-3">
            <button class="btn-ghost text-[0.8rem] !px-5 !py-2.5" data-gallery="${p.id}" data-idx="0">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 5h18v14H3zM3 9h18"/></svg>
              View gallery
            </button>
            ${liveBtn}
          </div>
        </div>

        <!-- gallery -->
        <div class="lg:col-span-7 ${flip ? "lg:order-1" : ""}">
          <div class="browser-frame group/frame cursor-pointer" data-gallery="${p.id}" data-idx="0" role="button" tabindex="0" aria-label="Open ${p.title} gallery">
            <div class="browser-bar">
              <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]/70"></span>
              <span class="ml-3 truncate font-mono text-[0.62rem] text-bone-dim">${p.id}, ${p.shots[0].cap.split(",")[0].trim().toLowerCase()}</span>
            </div>
            <div class="relative overflow-hidden">
              <img src="${p.shots[0].src}" alt="${p.shots[0].cap.replace(/"/g, "")}" loading="lazy" decoding="async" width="1760" height="1100"
                   class="aspect-[16/10] w-full object-cover object-top transition-transform duration-[800ms] ease-out-expo group-hover/frame:scale-[1.035]" />
            </div>
          </div>
          <div class="mt-3 grid grid-cols-3 gap-2.5 sm:grid-cols-4 sm:gap-3">${thumbs}</div>
        </div>
        </div>
        ${study}
      `;
      wrap.appendChild(block);
    });
  }

  /* ------------------------------------------------------------ reveal on scroll */
  const revealEls = $$(".reveal, .line-mask");
  if (reduceMotion) {
    revealEls.forEach((el) => el.classList.add("is-in"));
  } else if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-in"));
  }

  /* ------------------------------------------------------------ count-up */
  const counters = $$("[data-count]");
  const runCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    if (reduceMotion) { el.textContent = target + suffix; return; }
    const dur = 1400;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ("IntersectionObserver" in window) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { runCount(e.target); cio.unobserve(e.target); }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((c) => cio.observe(c));
  } else {
    counters.forEach(runCount);
  }

  /* ------------------------------------------------------------ scroll progress + nav */
  const progress = $("#progress");
  const nav = $("#nav");
  let ticking = false;
  const onScroll = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (progress) progress.style.width = pct + "%";
    if (nav) nav.classList.toggle("translate-y-[-4px]", h.scrollTop > 20);
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* ------------------------------------------------------------ parallax (hero) */
  if (!reduceMotion) {
    const px = $$("[data-parallax]");
    window.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        px.forEach((el) => {
          const amt = parseFloat(el.dataset.parallax) || 0.05;
          el.style.transform = `translate3d(0, ${y * amt * -1}px, 0)`;
        });
      });
    }, { passive: true });
  }

  /* ------------------------------------------------------------ mobile menu */
  const menuBtn = $("#menuBtn");
  const menu = $("#mobileMenu");
  const menuClose = $("#menuClose");
  const openMenu = () => {
    menu.classList.remove("hidden");
    menu.classList.add("flex");
    document.body.classList.add("no-scroll");
    menuBtn.setAttribute("aria-expanded", "true");
    if (window.__lenis) window.__lenis.stop();
  };
  const closeMenu = () => {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
    document.body.classList.remove("no-scroll");
    menuBtn.setAttribute("aria-expanded", "false");
    if (window.__lenis) window.__lenis.start();
  };
  if (menuBtn) menuBtn.addEventListener("click", openMenu);
  if (menuClose) menuClose.addEventListener("click", closeMenu);
  $$(".mobile-link").forEach((a) => a.addEventListener("click", closeMenu));

  /* ------------------------------------------------------------ theme toggle */
  const root = document.documentElement;
  const themeBtn = $("#themeBtn");
  const moonIcon = $(".theme-moon");
  const sunIcon = $(".theme-sun");
  const metaTheme = document.querySelector('meta[name="theme-color"]');

  const syncTheme = () => {
    const isDark = root.classList.contains("dark");
    if (moonIcon) moonIcon.classList.toggle("hidden", isDark); // moon shows in light (go dark)
    if (sunIcon) sunIcon.classList.toggle("hidden", !isDark);  // sun shows in dark (go light)
    if (metaTheme) metaTheme.setAttribute("content", isDark ? "#0E1B2C" : "#E9E4D8");
    if (themeBtn) themeBtn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  };
  syncTheme(); // reflect the theme applied pre-paint by the head script

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const isDark = root.classList.toggle("dark");
      try { localStorage.setItem("theme", isDark ? "dark" : "light"); } catch (e) {}
      syncTheme();
    });
  }


  /* ------------------------------------------------------------ lightbox */
  const lb = $("#lightbox");
  const lbImg = $("#lbImg");
  const lbCap = $("#lbCaption");
  const lbCount = $("#lbCount");
  let curGallery = [];
  let curIdx = 0;

  const renderLb = () => {
    const item = curGallery[curIdx];
    if (!item) return;
    lbImg.src = item.src;
    lbImg.alt = item.cap;
    lbCap.textContent = item.cap;
    lbCount.textContent = `${String(curIdx + 1).padStart(2, "0")} / ${String(curGallery.length).padStart(2, "0")}`;
  };
  const openLb = (id, idx) => {
    curGallery = galleries[id] || [];
    curIdx = idx || 0;
    renderLb();
    lb.classList.remove("hidden");
    lb.classList.add("flex");
    document.body.classList.add("no-scroll");
    if (window.__lenis) window.__lenis.stop();
  };
  const closeLb = () => {
    lb.classList.add("hidden");
    lb.classList.remove("flex");
    document.body.classList.remove("no-scroll");
    if (window.__lenis) window.__lenis.start();
  };
  const step = (d) => {
    curIdx = (curIdx + d + curGallery.length) % curGallery.length;
    renderLb();
  };

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-gallery]");
    if (trigger) {
      e.preventDefault();
      openLb(trigger.dataset.gallery, parseInt(trigger.dataset.idx, 10) || 0);
    }
  });
  document.addEventListener("keydown", (e) => {
    // keyboard-activate frame triggers
    if ((e.key === "Enter" || e.key === " ") && document.activeElement?.dataset?.gallery && lb.classList.contains("hidden")) {
      e.preventDefault();
      const t = document.activeElement;
      openLb(t.dataset.gallery, parseInt(t.dataset.idx, 10) || 0);
      return;
    }
    if (lb.classList.contains("hidden")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });
  $("#lbClose").addEventListener("click", closeLb);
  $("#lbNext").addEventListener("click", () => step(1));
  $("#lbPrev").addEventListener("click", () => step(-1));
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });

  /* ------------------------------------------------------------ sparkles (tsParticles) */
  // Gold sparkle field behind the hero portrait. Vanilla tsParticles, no React.
  // Skipped entirely when the user prefers reduced motion.
  if (!reduceMotion && $("#sparkles") && window.tsParticles) {
    window.tsParticles
      .load({
        id: "sparkles",
        options: {
          fullScreen: { enable: false },
          fpsLimit: 120,
          detectRetina: true,
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 90, density: { enable: true, width: 400, height: 400 } },
            color: { value: ["#D9B47E", "#E8CFA0", "#F5EFE3"] },
            shape: { type: "circle" },
            size: { value: { min: 0.4, max: 1.7 } },
            opacity: {
              value: { min: 0.1, max: 0.9 },
              animation: { enable: true, speed: 3, sync: false, startValue: "random" },
            },
            move: {
              enable: true,
              direction: "none",
              speed: { min: 0.05, max: 0.45 },
              straight: false,
              outModes: { default: "out" },
            },
            links: { enable: false },
          },
        },
      })
      .catch(() => {/* CDN blocked / offline, portrait still has its static glow */});
  }

  /* ------------------------------------------------------------ smooth scroll (Lenis) */
  let lenis = null;
  if (!reduceMotion && window.Lenis) {
    lenis = new window.Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    window.__lenis = lenis;
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }

  // In-page anchor links: smooth-scroll with nav offset, close mobile menu.
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (menu && !menu.classList.contains("hidden")) closeMenu();
      if (lenis) lenis.scrollTo(target, { offset: -84 });
      else target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    });
  });

  /* ------------------------------------------------------------ nav active-section */
  const navLinks = $$('#nav a[href^="#work"], #nav a[href^="#about"], #nav a[href^="#contact"]');
  if ("IntersectionObserver" in window && navLinks.length) {
    const navIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const href = "#" + en.target.id;
            navLinks.forEach((l) => l.classList.toggle("nav-active", l.getAttribute("href") === href));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ["work", "about", "contact"].forEach((id) => {
      const s = document.getElementById(id);
      if (s) navIO.observe(s);
    });
  }

  /* ------------------------------------------------------------ pointer-driven flourishes */
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  if (!reduceMotion && finePointer) {
    // Magnetic CTAs
    $$(".btn-primary, .btn-ghost").forEach((btn) => {
      const strength = 0.25;
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
      btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
    });

    // Subtle 3D tilt on project frames
    $$(".browser-frame").forEach((frame) => {
      // transform follows instantly (no transition), shadow animates separately via CSS
      frame.addEventListener("pointerenter", () => { frame.style.transition = "box-shadow 0.4s ease"; });
      frame.addEventListener("pointermove", (e) => {
        const r = frame.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        frame.style.transform = `perspective(1000px) rotateY(${px * 4.5}deg) rotateX(${-py * 4.5}deg) translateY(-4px)`;
      });
      frame.addEventListener("pointerleave", () => {
        frame.style.transition = "transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease";
        frame.style.transform = "";
      });
    });
  }
})();
