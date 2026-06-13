"use strict";

// Datos consolidados desde bbdd_unif.xlsx para alimentar todas las vistas del dashboard.
const dashboardData = {
  account: {
    name: "Constructora del Río S.A.S",
    relationshipYears: 2.5,
    projects: 18,
    provisionedUsers: 125,
    usersWithLogin: 40,
    usersWithoutLogin: 85,
    projectViews: 2653,
  },
  kpis: [
    {
      value: 18,
      label: "Proyectos activos",
      copy: "Cobertura del portafolio",
      tone: "blue",
      icon: "projects",
    },
    {
      value: 6189,
      label: "Fotografías",
      copy: "Activo visual acumulado",
      tone: "teal",
      icon: "camera",
    },
    {
      value: 2653,
      label: "Vistas de proyectos",
      copy: "Uso de la evidencia",
      tone: "navy",
      icon: "eye",
    },
    {
      value: 431,
      label: "Incidencias",
      copy: "Trazabilidad de hallazgos",
      tone: "orange",
      icon: "alert",
    },
    {
      value: 200,
      label: "Recorridos 360°",
      copy: "Seguimiento inmersivo",
      tone: "purple",
      icon: "view",
    },
    {
      value: 119,
      label: "Fotogrametrias",
      copy: "Replica geoespacial",
      tone: "cyan",
      icon: "orbit",
    },
    {
      value: 297,
      label: "Documentos",
      copy: "Repositorio",
      tone: "rose",
      icon: "document",
    },
  ],
  content: [
    { label: "Fotografías", value: 6189 },
    { label: "Incidencias", value: 431 },
    { label: "Documentos", value: 297 },
    { label: "Recorridos 360", value: 200 },
    { label: "Visitas", value: 137 },
    { label: "Fotogrametrías", value: 119 },
  ],
  contentTimeline: [
    ["2023-12", 3, 287, 3, 6, 0, 0, 0],
    ["2024-01", 4, 334, 4, 3, 0, 0, 0],
    ["2024-02", 3, 201, 3, 4, 0, 0, 0],
    ["2024-03", 3, 288, 3, 3, 0, 0, 0],
    ["2024-04", 5, 540, 6, 5, 0, 3, 0],
    ["2024-05", 2, 78, 2, 2, 0, 0, 0],
    ["2024-06", 3, 260, 3, 3, 0, 0, 0],
    ["2024-07", 2, 150, 2, 2, 0, 0, 0],
    ["2024-08", 1, 46, 1, 1, 0, 0, 0],
    ["2024-09", 2, 106, 2, 3, 1, 0, 0],
    ["2024-10", 2, 138, 1, 2, 2, 0, 0],
    ["2024-11", 2, 168, 2, 3, 2, 73, 0],
    ["2024-12", 4, 310, 4, 8, 4, 119, 9],
    ["2025-01", 3, 149, 3, 4, 3, 0, 4],
    ["2025-02", 6, 340, 6, 7, 7, 1, 0],
    ["2025-03", 4, 146, 4, 4, 4, 0, 7],
    ["2025-04", 6, 264, 6, 6, 6, 2, 12],
    ["2025-05", 7, 295, 8, 11, 10, 9, 25],
    ["2025-06", 6, 246, 6, 6, 8, 0, 27],
    ["2025-07", 7, 316, 7, 7, 7, 0, 24],
    ["2025-08", 2, 91, 2, 2, 2, 0, 35],
    ["2025-09", 5, 151, 3, 3, 8, 2, 33],
    ["2025-10", 20, 423, 7, 8, 9, 0, 29],
    ["2025-11", 11, 218, 3, 3, 5, 84, 48],
    ["2025-12", 10, 168, 72, 3, 18, 0, 37],
    ["2026-01", 6, 115, 32, 7, 11, 3, 18],
    ["2026-02", 2, 85, 2, 2, 2, 0, 55],
    ["2026-03", 2, 59, 1, 1, 1, 1, 32],
    ["2026-04", 4, 217, 2, 2, 9, 0, 36],
  ],
  adoption: [
    { label: "Con login", value: 40, color: "#14b89c" },
    { label: "Sin login", value: 85, color: "#f5a524" },
  ],
  roleUsage: [
    { role: "Inspector de calidad", users: 12, events: 921 },
    { role: "Ingeniero de Calidad", users: 9, events: 440 },
    { role: "Dibujante Técnico", users: 1, events: 395 },
    { role: "Jefe de Innovación", users: 1, events: 186 },
    { role: "Gerente de Calidad", users: 2, events: 100 },
    { role: "Proyectos", users: 1, events: 98 },
    { role: "Jefe de calidad", users: 2, events: 75 },
    { role: "Gerente Comercial", users: 3, events: 66 },
    { role: "Coordinador de Calidad y Materiales", users: 1, events: 49 },
    { role: "Responsable de obra", users: 1, events: 39 },
  ],
  projects: [
    { name: "Quora", views: 797, visits: 66, photos: 1432, tours: 130, photogrammetries: 69, documents: 8, incidents: 178 },
    { name: "Puente calle 13 lote 1", views: 607, visits: 5, photos: 383, tours: 5, photogrammetries: 7, documents: 0, incidents: 34 },
    { name: "Planta de Prefabricados (PREFA)", views: 417, visits: 1, photos: 37, tours: 1, photogrammetries: 1, documents: 0, incidents: 49 },
    { name: "Hacienda El Otoño", views: 159, visits: 1, photos: 35, tours: 1, photogrammetries: 1, documents: 0, incidents: 27 },
    { name: "Acanto", views: 148, visits: 2, photos: 140, tours: 2, photogrammetries: 2, documents: 0, incidents: 20 },
    { name: "Puerto Manzanillo", views: 119, visits: 1, photos: 0, tours: 0, photogrammetries: 0, documents: 0, incidents: 43 },
    { name: "Navarra", views: 101, visits: 1, photos: 37, tours: 1, photogrammetries: 1, documents: 0, incidents: 9 },
    { name: "Hacienda el Bosque", views: 76, visits: 24, photos: 2158, tours: 25, photogrammetries: 9, documents: 3, incidents: 35 },
    { name: "Puente Venecia", views: 72, visits: 5, photos: 237, tours: 5, photogrammetries: 2, documents: 3, incidents: 9 },
    { name: "Vizcaya", views: 46, visits: 1, photos: 36, tours: 1, photogrammetries: 2, documents: 0, incidents: 4 },
    { name: "La Scala", views: 32, visits: 1, photos: 32, tours: 1, photogrammetries: 1, documents: 0, incidents: 3 },
    { name: "Vivo Park", views: 26, visits: 3, photos: 136, tours: 4, photogrammetries: 3, documents: 2, incidents: 0 },
    { name: "Verona", views: 14, visits: 3, photos: 46, tours: 2, photogrammetries: 5, documents: 84, incidents: 0 },
    { name: "Los Nogales", views: 13, visits: 2, photos: 89, tours: 2, photogrammetries: 2, documents: 0, incidents: 6 },
    { name: "Car - Velodromo", views: 10, visits: 12, photos: 876, tours: 11, photogrammetries: 11, documents: 192, incidents: 14 },
    { name: "Francachela", views: 8, visits: 1, photos: 42, tours: 1, photogrammetries: 1, documents: 0, incidents: 0 },
    { name: "Bosques de Guaymaral Verdania", views: 5, visits: 2, photos: 104, tours: 2, photogrammetries: 2, documents: 5, incidents: 0 },
    { name: "Puente Intersección Av. Bosa - NQS", views: 3, visits: 6, photos: 369, tours: 6, photogrammetries: 0, documents: 0, incidents: 0 },
  ],
  plan: [
    {
      audience: "Dirección de proyectos",
      title: "Visibilidad ejecutiva para priorizar",
      description:
        "Dar una lectura rápida del estado real de cada proyecto y de los frentes que requieren atención.",
      deliverables: ["Resumen semanal", "Estado de incidencias", "Alertas de riesgo"],
      icon: "users",
    },
    {
      audience: "Operación en obra",
      title: "Convertir evidencia en seguimiento",
      description:
        "Integrar residentes, coordinadores y encargados de obra al seguimiento de avance y hallazgos.",
      deliverables: ["Avance visual", "Incidencias críticas", "Hallazgos recurrentes"],
      icon: "replicate",
    },
    {
      audience: "Gerencia y finanzas",
      title: "Demostrar valor y retorno",
      description:
        "Conectar adopción, evidencia y decisiones para justificar la inversión y reducir reprocesos.",
      deliverables: ["Uso de licencias", "Adopción por proyecto", "Valor operativo"],
      icon: "automation",
    },
  ],
};

const palette = {
  blue: { accent: "#2873e8", soft: "#e8f1ff" },
  teal: { accent: "#14b89c", soft: "#ddf7f1" },
  orange: { accent: "#f0913c", soft: "#fff0e3" },
  purple: { accent: "#7468d8", soft: "#efedff" },
  green: { accent: "#15a776", soft: "#e2f7ef" },
  warning: { accent: "#f5a524", soft: "#fff4dc" },
  navy: { accent: "#244d70", soft: "#e8f0f6" },
  cyan: { accent: "#0891b2", soft: "#e0f7fb" },
  rose: { accent: "#d94878", soft: "#fde8f0" },
};

const icons = {
  projects:
    '<svg viewBox="0 0 24 24"><path d="M3 5h7v6H3V5Zm11 0h7v6h-7V5ZM3 14h7v5H3v-5Zm11 0h7v5h-7v-5Z"/></svg>',
  camera:
    '<svg viewBox="0 0 24 24"><path d="M9 4 7.5 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3.5L15 4H9Zm3 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/></svg>',
  alert:
    '<svg viewBox="0 0 24 24"><path d="M12 2 1 21h22L12 2Zm1 14h-2v-5h2v5Zm0 3h-2v-2h2v2Z"/></svg>',
  view: '<svg viewBox="0 0 24 24"><path d="M12 5C6.5 5 2.2 9.4 1 12c1.2 2.6 5.5 7 11 7s9.8-4.4 11-7c-1.2-2.6-5.5-7-11-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>',
  orbit:
    '<svg viewBox="0 0 24 24"><path d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm8.5-4.5c-1.6-1.6-5.2-.6-8.5 1.8C8.7 4.9 5.1 3.9 3.5 5.5 1.9 7.1 2.9 10.7 5.3 14c-2.4 3.3-3.4 6.9-1.8 8.5 1.6 1.6 5.2.6 8.5-1.8 3.3 2.4 6.9 3.4 8.5 1.8 1.6-1.6.6-5.2-1.8-8.5 2.4-3.3 3.4-6.9 1.8-8.5ZM4.9 6.9c.7-.7 2.9-.2 5.4 1.5a27 27 0 0 0-3.9 3.9C4.7 9.8 4.2 7.6 4.9 6.9Zm0 14.2c-.7-.7-.2-2.9 1.5-5.4a27 27 0 0 0 3.9 3.9c-2.5 1.7-4.7 2.2-5.4 1.5ZM12 18.4A24.8 24.8 0 0 1 7.6 14 24.8 24.8 0 0 1 12 9.6a24.8 24.8 0 0 1 4.4 4.4 24.8 24.8 0 0 1-4.4 4.4Zm7.1 2.7c-.7.7-2.9.2-5.4-1.5a27 27 0 0 0 3.9-3.9c1.7 2.5 2.2 4.7 1.5 5.4Zm-1.5-8.8a27 27 0 0 0-3.9-3.9c2.5-1.7 4.7-2.2 5.4-1.5.7.7.2 2.9-1.5 5.4Z"/></svg>',
  document:
    '<svg viewBox="0 0 24 24"><path d="M6 2h8l5 5v15H6V2Zm8 2.5V8h3.5L14 4.5ZM9 12h7v-2H9v2Zm0 4h7v-2H9v2Zm0 4h5v-2H9v2Z"/></svg>',
  userCheck:
    '<svg viewBox="0 0 24 24"><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.4 0-7 2.4-7 5v2h10.7a7 7 0 0 1-.7-3c0-1.3.4-2.6 1-3.6-1.1-.3-2.4-.4-4-.4Zm9 1-3 3 1.5 1.5L18 17l3 3 1.5-1.5L18 14Z"/></svg>',
  userAlert:
    '<svg viewBox="0 0 24 24"><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.4 0-7 2.4-7 5v2h9.4a6 6 0 0 1-.4-2c0-1.7.7-3.3 1.8-4.4A16 16 0 0 0 9 13Zm10-1 5 9H14l5-9Zm1 6h-2v2h2v-2Zm0-3h-2v2h2v-2Z"/></svg>',
  eye: '<svg viewBox="0 0 24 24"><path d="M12 5C6.5 5 2.2 9.4 1 12c1.2 2.6 5.5 7 11 7s9.8-4.4 11-7c-1.2-2.6-5.5-7-11-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/></svg>',
  users:
    '<svg viewBox="0 0 24 24"><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.4 0-7 2.4-7 5v2h12v-2c0-2.6-2.6-5-7-5Zm9-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm1 2c-1 0-1.9.1-2.7.4A6.2 6.2 0 0 1 19 18v2h5v-2c0-2.6-1.8-5-5-5Z"/></svg>',
  replicate:
    '<svg viewBox="0 0 24 24"><path d="M7 7h11l-3-3 1.4-1.4L21.8 8l-5.4 5.4L15 12l3-3H7a3 3 0 0 0-3 3v1H2v-1a5 5 0 0 1 5-5Zm10 10H6l3 3-1.4 1.4L2.2 16l5.4-5.4L9 12l-3 3h11a3 3 0 0 0 3-3v-1h2v1a5 5 0 0 1-5 5Z"/></svg>',
  automation:
    '<svg viewBox="0 0 24 24"><path d="M13 2 4.5 13H11l-1 9 8.5-11H12l1-9Z"/></svg>',
};

const numberFormatter = new Intl.NumberFormat("es-CO");

function formatNumber(value) {
  return numberFormatter.format(value);
}

// Construye las tarjetas del resumen ejecutivo a partir de la configuración de KPIs.
function renderKpis() {
  const container = document.querySelector("#kpiGrid");
  container.innerHTML = dashboardData.kpis
    .map((kpi) => {
      const colors = palette[kpi.tone];
      return `
        <article
          class="kpi-card ${kpi.alert ? "alert" : ""}"
          style="--card-accent:${colors.accent}; --card-soft:${colors.soft}"
        >
          <span class="kpi-icon" aria-hidden="true">${icons[kpi.icon]}</span>
          <strong class="kpi-value">${formatNumber(kpi.value)}</strong>
          <span class="kpi-label">${kpi.label}</span>
          <span class="kpi-copy">${kpi.copy}</span>
        </article>
      `;
    })
    .join("");
}

// Compara vistas contra contenido registrado para detectar referentes y proyectos subutilizados.
function renderProjectEfficiency() {
  const readings = {
    "Planta de Prefabricados (PREFA)":
      "Alta consulta sobre una base compacta. Es un patrón eficiente de adopción.",
    "Puerto Manzanillo":
      "El contenido disponible se consulta con frecuencia; conviene ampliar el registro.",
    "Puente Intersección Av. Bosa - NQS":
      "Existe evidencia, pero casi no entra al ciclo de consulta y decisión.",
    "Car - Velodromo":
      "Gran volumen documental con uso mínimo. Requiere activación inmediata.",
    "Hacienda el Bosque":
      "Es el mayor activo digital de la cuenta, pero su aprovechamiento sigue siendo bajo.",
  };
  const projects = dashboardData.projects
    .map((project) => {
      const content =
        project.photos +
        project.tours +
        project.photogrammetries +
        project.documents +
        project.incidents;
      return {
        ...project,
        content,
        efficiency: content ? project.views / content : 0,
      };
    })
    .filter((project) => project.content > 0);
  const bestProjects = [...projects].sort(
    (projectA, projectB) => projectB.efficiency - projectA.efficiency,
  ).slice(0, 2);
  const priorityProjects = [...projects].sort(
    (projectA, projectB) => projectA.efficiency - projectB.efficiency,
  ).slice(0, 3);
  const scaleReference = projects.find((project) => project.name === "Quora");

  const renderCards = (items, status) =>
    items
      .map(
        (project, index) => `
          <article class="efficiency-card ${status}">
            <div class="efficiency-card-heading">
              <span class="efficiency-rank">${index + 1}</span>
              <div>
                <h3>${project.name}</h3>
                <span>${status === "positive" ? "Buen aprovechamiento" : "Requiere atención"}</span>
              </div>
              <strong>${project.efficiency.toFixed(2).replace(".", ",")}</strong>
            </div>
            <div class="efficiency-metrics">
              <span><strong>${formatNumber(project.content)}</strong> contenidos</span>
              <span><strong>${formatNumber(project.views)}</strong> vistas</span>
              <span><strong>${project.efficiency.toFixed(2).replace(".", ",")}</strong> vistas por contenido</span>
            </div>
            <p>${readings[project.name]}</p>
          </article>
        `,
      )
      .join("");

  document.querySelector("#bestEfficiencyProjects").innerHTML = renderCards(
    bestProjects,
    "positive",
  );
  document.querySelector("#priorityEfficiencyProjects").innerHTML = renderCards(
    priorityProjects,
    "warning",
  );
  document.querySelector("#scaleReferenceProject").innerHTML = `
    <div class="reference-copy">
      <span>Referente integral</span>
      <h3>${scaleReference.name}</h3>
      <p>
        Lidera en consulta y mantiene una base robusta de contenido. Su modelo de uso es el que
        tiene mayor capacidad de impulsar la adopción en otros proyectos.
      </p>
    </div>
    <div class="reference-metrics">
      <span><strong>${formatNumber(scaleReference.content)}</strong> contenidos</span>
      <span><strong>${formatNumber(scaleReference.views)}</strong> vistas</span>
      <span><strong>${scaleReference.efficiency.toFixed(2).replace(".", ",")}</strong> vistas por contenido</span>
    </div>
  `;
}

// Presenta las acciones recomendadas para dirección, operación, gerencia y finanzas.
function renderPlan() {
  const container = document.querySelector("#planGrid");
  container.innerHTML = dashboardData.plan
    .map(
      (item, index) => `
        <article class="plan-card">
          <span class="plan-number">0${index + 1}</span>
          <span class="plan-icon" aria-hidden="true">${icons[item.icon]}</span>
          <span class="plan-audience">${item.audience}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="plan-deliverables">
            ${item.deliverables.map((deliverable) => `<span>${deliverable}</span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

// Mantiene una configuración visual consistente en todos los gráficos de Chart.js.
function getChartDefaults() {
  Chart.defaults.font.family = 'Inter, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  Chart.defaults.color = "#667789";
  Chart.defaults.animation.duration = 900;
  Chart.defaults.plugins.legend.display = false;
  Chart.defaults.plugins.tooltip.backgroundColor = "#071b2d";
  Chart.defaults.plugins.tooltip.titleFont = { size: 11, weight: "600" };
  Chart.defaults.plugins.tooltip.bodyFont = { size: 11 };
  Chart.defaults.plugins.tooltip.padding = 10;
  Chart.defaults.plugins.tooltip.cornerRadius = 8;
}

// Muestra la evolución del activo digital y permite alternar entre periodos y vista acumulada.
function renderValueChart() {
  const source = dashboardData.contentTimeline.map(
    ([month, visits, photos, tours, layers, photogrammetries, documents, incidents]) => ({
      month,
      visits,
      photos,
      incidents,
      documents,
      tours,
      layers,
      photogrammetries,
      other: visits + layers,
    }),
  );
  let runningTotal = 0;
  source.forEach((item) => {
    item.total =
      item.photos +
      item.incidents +
      item.documents +
      item.tours +
      item.photogrammetries +
      item.other;
    runningTotal += item.total;
    item.cumulative = runningTotal;
  });

  document.querySelector("#valueTotal").textContent = `${formatNumber(runningTotal)} activos`;

  const monthFormatter = new Intl.DateTimeFormat("es-CO", {
    month: "short",
    year: "2-digit",
    timeZone: "UTC",
  });
  const formatMonth = (month) => {
    const [year, monthNumber] = month.split("-").map(Number);
    return monthFormatter
      .format(new Date(Date.UTC(year, monthNumber - 1, 1)))
      .replace(".", "")
      .replace(" de ", " ");
  };
  const series = [
    { key: "photos", label: "Fotografías", color: "#14b89c" },
    { key: "incidents", label: "Incidencias", color: "#f0913c" },
    { key: "documents", label: "Documentos", color: "#d94878" },
    { key: "tours", label: "Recorridos 360", color: "#7468d8" },
    { key: "photogrammetries", label: "Fotogrametrías", color: "#0891b2" },
    { key: "other", label: "Otros", color: "#b8c5d1" },
  ];
  const createChartData = (visibleData) => ({
    labels: visibleData.map((item) => formatMonth(item.month)),
    datasets: [
      ...series.map((item) => ({
        type: "bar",
        label: item.label,
        data: visibleData.map((month) => month[item.key]),
        backgroundColor: item.color,
        hoverBackgroundColor: item.color,
        borderWidth: 0,
        borderRadius: 3,
        borderSkipped: false,
        maxBarThickness: 24,
        stack: "content",
        yAxisID: "y",
        order: 1,
      })),
      {
        type: "line",
        label: "Acumulado",
        data: visibleData.map((item) => item.cumulative),
        borderColor: "#244d70",
        backgroundColor: "#244d70",
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#244d70",
        pointBorderWidth: 2,
        pointRadius: visibleData.length <= 12 ? 3 : 0,
        pointHoverRadius: 5,
        borderWidth: 2.5,
        tension: 0.28,
        fill: false,
        yAxisID: "yCumulative",
        order: 0,
      },
    ],
  });
  const summarySeries = [
    { key: "photos", label: "Fotografías", color: "#14b89c" },
    { key: "incidents", label: "Incidencias", color: "#f0913c" },
    { key: "documents", label: "Documentos", color: "#d94878" },
    { key: "tours", label: "Recorridos 360", color: "#7468d8" },
    { key: "photogrammetries", label: "Fotogrametrías", color: "#0891b2" },
    { key: "visits", label: "Visitas", color: "#2873e8" },
    { key: "layers", label: "Capas de mapa", color: "#7b8b99" },
  ];
  const createSummaryData = () => ({
    labels: summarySeries.map((item) => item.label),
    datasets: [
      {
        type: "bar",
        label: "Total",
        data: summarySeries.map((item) =>
          source.reduce((sum, month) => sum + month[item.key], 0),
        ),
        backgroundColor: summarySeries.map((item) => item.color),
        hoverBackgroundColor: summarySeries.map((item) => item.color),
        borderWidth: 0,
        borderRadius: 7,
        borderSkipped: false,
        maxBarThickness: 58,
        yAxisID: "y",
      },
    ],
  });
  let currentView = "timeline";

  const chart = new Chart(document.querySelector("#valueChart"), {
    data: createChartData(source.slice(-12)),
    options: {
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      layout: { padding: { top: 4 } },
      scales: {
        x: {
          stacked: true,
          grid: { display: false },
          border: { display: false },
          ticks: { color: "#667789", font: { size: 9 }, maxRotation: 0 },
        },
        y: {
          stacked: true,
          beginAtZero: true,
          border: { display: false },
          grid: { color: "#edf1f4" },
          ticks: { color: "#93a0ab", font: { size: 9 } },
        },
        yCumulative: {
          position: "right",
          beginAtZero: true,
          border: { display: false },
          grid: { display: false },
          ticks: {
            color: "#244d70",
            font: { size: 9, weight: "600" },
            callback: (value) => (value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value),
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            boxWidth: 8,
            boxHeight: 8,
            usePointStyle: true,
            pointStyle: "circle",
            padding: 14,
            color: "#667789",
            font: { size: 9 },
          },
        },
        tooltip: {
          callbacks: {
            title: (items) => items[0]?.label ?? "",
            label: (context) => {
              if (currentView === "summary") {
                return ` ${formatNumber(context.raw)} activos`;
              }
              return context.dataset.label === "Acumulado"
                ? ` Acumulado: ${formatNumber(context.raw)} activos`
                : ` ${context.dataset.label}: ${formatNumber(context.raw)}`;
            },
            footer: (items) => {
              if (currentView === "summary") return "";
              const barTotal = items
                .filter((item) => item.dataset.type === "bar")
                .reduce((sum, item) => sum + item.raw, 0);
              return `Total visible del mes: ${formatNumber(barTotal)}`;
            },
          },
        },
      },
    },
    plugins: [
      {
        id: "summaryValues",
        afterDatasetsDraw(currentChart) {
          if (currentView !== "summary") return;
          const { ctx } = currentChart;
          ctx.save();
          ctx.fillStyle = "#435568";
          ctx.font = '700 9px Inter, "Segoe UI", sans-serif';
          ctx.textAlign = "center";
          currentChart.getDatasetMeta(0).data.forEach((bar, index) => {
            const value = currentChart.data.datasets[0].data[index];
            ctx.fillText(formatNumber(value), bar.x, Math.max(bar.y - 8, 10));
          });
          ctx.restore();
        },
      },
    ],
  });

  document.querySelectorAll("[data-value-range]").forEach((button) => {
    button.addEventListener("click", () => {
      const range = button.dataset.valueRange;
      currentView = range === "summary" ? "summary" : "timeline";

      if (currentView === "summary") {
        chart.data = createSummaryData();
        chart.options.scales.x.stacked = false;
        chart.options.scales.y.stacked = false;
        chart.options.scales.yCumulative.display = false;
        chart.options.plugins.legend.display = false;
        chart.options.interaction.mode = "nearest";
      } else {
        const visibleData = range === "all" ? source : source.slice(-Number(range));
        chart.data = createChartData(visibleData);
        chart.options.scales.x.stacked = true;
        chart.options.scales.y.stacked = true;
        chart.options.scales.yCumulative.display = true;
        chart.options.plugins.legend.display = true;
        chart.options.interaction.mode = "index";
      }
      document.querySelectorAll("[data-value-range]").forEach((item) => {
        item.classList.toggle("active", item === button);
        item.setAttribute("aria-pressed", item === button ? "true" : "false");
      });
      chart.update();
    });
  });
}

// Representa la concentración de actividad en los diez roles con mayor número de eventos.
function renderAdoptionChart() {
  const container = document.querySelector("#roleUsageChart");
  const roles = dashboardData.roleUsage;
  const maxEvents = roles[0].events;

  container.innerHTML = roles
    .map(
      (item, index) => `
        <div
          class="role-usage-row"
          title="${item.role}: ${formatNumber(item.events)} eventos · ${item.users} ${
            item.users === 1 ? "usuario" : "usuarios"
          }"
        >
          <span class="role-rank">${index + 1}</span>
          <div class="role-usage-main">
            <div class="role-usage-label">
              <span>${item.role}</span>
              <strong>${formatNumber(item.events)}</strong>
            </div>
            <div class="role-usage-track">
              <span style="width:${Math.max((item.events / maxEvents) * 100, 4)}%"></span>
            </div>
          </div>
        </div>
      `,
    )
    .join("");
}

// Permite comparar consulta, registro y aprovechamiento para los 18 proyectos.
function renderProjectsChart() {
  const metrics = {
    views: { label: "Vistas", singular: "vista", color: "#2873e8", dimension: "consultation" },
    visits: { label: "Visitas", singular: "visita", color: "#244d70", dimension: "registration" },
    registered: {
      label: "Total registrado",
      singular: "activo registrado",
      color: "#14b89c",
      dimension: "registration",
    },
    photos: { label: "Fotografías", singular: "fotografía", color: "#14b89c", dimension: "registration" },
    tours: { label: "Recorridos 360", singular: "recorrido", color: "#7468d8", dimension: "registration" },
    photogrammetries: {
      label: "Fotogrametrías",
      singular: "fotogrametría",
      color: "#0891b2",
      dimension: "registration",
    },
    documents: { label: "Documentos", singular: "documento", color: "#d94878", dimension: "registration" },
    incidents: { label: "Incidencias", singular: "incidencia", color: "#f0913c", dimension: "registration" },
    utilization: {
      label: "Vistas por contenido",
      singular: "vista por contenido",
      color: "#15a776",
      dimension: "relationship",
    },
  };
  dashboardData.projects.forEach((project) => {
    project.registered =
      project.photos +
      project.tours +
      project.photogrammetries +
      project.documents +
      project.incidents;
    project.utilization = project.registered ? project.views / project.registered : 0;
  });
  let activeMetric = "views";
  let projects = [...dashboardData.projects].sort(
    (projectA, projectB) => projectB[activeMetric] - projectA[activeMetric],
  );

  const updateSummary = () => {
    const total = projects.reduce((sum, project) => sum + project[activeMetric], 0);
    const topThree = projects.slice(0, 3).reduce((sum, project) => sum + project[activeMetric], 0);
    const share = total ? (topThree / total) * 100 : 0;
    const metric = metrics[activeMetric];

    if (metric.dimension === "relationship") {
      const totalViews = dashboardData.projects.reduce((sum, project) => sum + project.views, 0);
      const totalRegistered = dashboardData.projects.reduce(
        (sum, project) => sum + project.registered,
        0,
      );
      const accountUtilization = totalViews / totalRegistered;
      document.querySelector("#projectConcentrationValue").textContent = accountUtilization
        .toFixed(2)
        .replace(".", ",");
      document.querySelector("#projectConcentrationCopy").innerHTML =
        "vistas por cada<br />activo registrado";
      document.querySelector("#projectInsight").innerHTML =
        `Este indicador relaciona consulta y registro. <strong>Un valor bajo señala mucho contenido disponible con poca consulta;</strong> un valor alto indica mayor aprovechamiento del activo digital.`;
      return;
    }

    document.querySelector("#projectConcentrationValue").textContent =
      `${share.toFixed(1).replace(".", ",")}%`;
    document.querySelector("#projectConcentrationCopy").innerHTML =
      `de ${formatNumber(total)} ${metric.label.toLowerCase()}<br />están en 3 proyectos`;
    document.querySelector("#projectInsight").innerHTML =
      metric.dimension === "consultation"
        ? `Los 3 proyectos principales concentran <strong>${formatNumber(topThree)} de ${formatNumber(
            total,
          )} ${metric.label.toLowerCase()}.</strong> Esta vista muestra dónde los usuarios consultan la plataforma.`
        : `Los 3 proyectos principales concentran <strong>${formatNumber(topThree)} de ${formatNumber(
            total,
          )} ${metric.label.toLowerCase()}.</strong> Esta vista muestra dónde se está construyendo el activo digital.`;
  };

  const chart = new Chart(document.querySelector("#projectsChart"), {
    type: "bar",
    data: {
      labels: projects.map((project) => project.name),
      datasets: [
        {
          data: projects.map((project) => project[activeMetric]),
          backgroundColor: projects.map((_, index) =>
            index < 3 ? metrics[activeMetric].color : `${metrics[activeMetric].color}35`,
          ),
          hoverBackgroundColor: metrics[activeMetric].color,
          borderRadius: 6,
          borderSkipped: false,
          maxBarThickness: 12,
        },
      ],
    },
    options: {
      indexAxis: "y",
      maintainAspectRatio: false,
      layout: { padding: { right: 45 } },
      scales: {
        x: {
          beginAtZero: true,
          border: { display: false },
          grid: { color: "#edf1f4" },
          ticks: {
            color: "#93a0ab",
            font: { size: 9 },
            callback: (value) => (value >= 1000 ? `${value / 1000}k` : value),
          },
        },
        y: {
          border: { display: false },
          grid: { display: false },
          ticks: {
            color: "#526476",
            font: { size: 9, weight: "600" },
            autoSkip: false,
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (context) =>
              ` ${
                activeMetric === "utilization"
                  ? context.raw.toFixed(2).replace(".", ",")
                  : formatNumber(context.raw)
              } ${
                context.raw === 1
                  ? metrics[activeMetric].singular
                  : metrics[activeMetric].label.toLowerCase()
              }`,
          },
        },
      },
    },
    plugins: [
      {
        id: "projectValues",
        afterDatasetsDraw(chart) {
          const { ctx } = chart;
          ctx.save();
          ctx.fillStyle = "#516477";
          ctx.font = '600 9px Inter, "Segoe UI", sans-serif';
          ctx.textBaseline = "middle";
          chart.getDatasetMeta(0).data.forEach((bar, index) => {
            const value = projects[index][activeMetric];
            ctx.fillText(
              activeMetric === "utilization"
                ? value.toFixed(2).replace(".", ",")
                : formatNumber(value),
              bar.x + 8,
              bar.y,
            );
          });
          ctx.restore();
        },
      },
    ],
  });

  updateSummary();

  document.querySelectorAll("[data-project-metric]").forEach((button) => {
    button.addEventListener("click", () => {
      activeMetric = button.dataset.projectMetric;
      projects = [...dashboardData.projects].sort(
        (projectA, projectB) => projectB[activeMetric] - projectA[activeMetric],
      );
      chart.data.labels = projects.map((project) => project.name);
      chart.data.datasets[0].data = projects.map((project) => project[activeMetric]);
      chart.data.datasets[0].backgroundColor = projects.map((_, index) =>
        index < 3 ? metrics[activeMetric].color : `${metrics[activeMetric].color}35`,
      );
      chart.data.datasets[0].hoverBackgroundColor = metrics[activeMetric].color;
      document.querySelectorAll("[data-project-metric]").forEach((item) => {
        item.classList.toggle("active", item === button);
        item.setAttribute("aria-pressed", item === button ? "true" : "false");
      });
      updateSummary();
      chart.update();
    });
  });
}

// Coordina la carga de visualizaciones y controla el caso en que Chart.js no esté disponible.
function renderCharts() {
  renderAdoptionChart();

  if (typeof Chart === "undefined") {
    document.querySelectorAll(".chart-wrap").forEach((container) => {
      container.innerHTML =
        '<p style="color:#e96a5c;font-size:12px">No fue posible cargar Chart.js. Verifica la conexión a internet.</p>';
    });
    return;
  }

  getChartDefaults();
  renderValueChart();
  renderProjectsChart();
}

// Actualiza la navegación lateral según la sección visible en pantalla.
function setupNavigation() {
  const links = [...document.querySelectorAll(".nav-item")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (!visible) return;
      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-25% 0px -60% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
}

// Punto de entrada: renderiza los componentes cuando el documento está listo.
function initializeDashboard() {
  renderKpis();
  renderProjectEfficiency();
  renderPlan();
  renderCharts();
  setupNavigation();
}

document.addEventListener("DOMContentLoaded", initializeDashboard);
