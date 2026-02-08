
const fs = require('fs');

const baseUrl = "https://sarkariexamall.onrender.com";
const today = new Date().toISOString().split('T')[0];

const staticPages = [
    "",
    "blog",
    "about",
    "contact",
    "eligibility-checker",
    "document-guide",
    "preparation-guides",
    "location-guides",
    "locations",
    "success-stories",
    "career-counseling",
    "partner",
    "exam-requirements",
    "privacy-policy",
    "terms-of-service"
];

const articles = [
    { slug: "upsc-cse-2026-notification", priority: "0.8" },
    { slug: "ssc-cgl-2026-exam-calendar", priority: "0.8" },
    { slug: "ibps-po-2026-eligibility-criteria", priority: "0.8" },
    { slug: "railway-rrb-ntpc-2026-update", priority: "0.8" },
    { slug: "state-psc-2026-syllabus-changes", priority: "0.8" },
    { slug: "defense-exams-nda-cds-2026", priority: "0.8" },
    { slug: "ssc-cgl-2026-complete-guide", priority: "0.8" },
    { slug: "upsc-civil-services-2026-guide", priority: "0.8" },
    { slug: "banking-sector-2026-opportunities", priority: "0.8" }
];

// Generated logic
for (let i = 4; i <= 60; i++) {
    const categories = ['2026 Exams', 'Eligibility Guides', 'Career Opportunities'];
    const category = categories[i % 3];
    let titlePrefix = "";
    if (category === '2026 Exams') titlePrefix = 'Railway RRB';
    else if (category === 'Eligibility Guides') titlePrefix = 'State PCS';
    else titlePrefix = 'Defense Services';

    const title = `${titlePrefix} Complete Master Guide ${i}`;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    articles.push({ slug, priority: "0.7" });
}

const locations = [
    "delhi-ncr-government-exams",
    "mumbai-government-exams",
    "bangalore-government-exams",
    "hyderabad-government-exams",
    "chennai-government-exams",
    "kolkata-government-exams",
    "pune-government-exams",
    "ahmedabad-government-exams",
    "jaipur-government-exams",
    "lucknow-government-exams",
    "patna-government-exams",
    "bhopal-government-exams",
    "chandigarh-government-exams",
    "guwahati-government-exams",
    "kochi-government-exams",
    "indore-government-exams",
    "bhubaneswar-government-exams",
    "dehradun-government-exams",
    "ranchi-government-exams",
    "kanpur-government-exams"
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

staticPages.forEach(page => {
    const path = page ? `/${page}` : '/';
    const priority = page === "" ? "1.0" : ["blog", "eligibility-checker"].includes(page) ? "0.9" : "0.8";
    xml += `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
});

xml += `
  <!-- Blog Articles -->`;
articles.forEach(article => {
    xml += `
  <url>
    <loc>${baseUrl}/${article.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${article.priority}</priority>
  </url>`;
});

locations.forEach(slug => {
    xml += `
  <url>
    <loc>${baseUrl}/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
});

xml += `
</urlset>`;

console.log(xml);
