const fs = require('fs');

// Simple article template for remaining articles
const simpleArticles = [
  {id:'15',slug:'sbi-clerk-to-officer-career-timeline',title:'SBI Clerk to Officer Career Path',category:'Banking',date:'Jan 25, 2026'},
  {id:'16',slug:'agnipath-scheme-2026-complete-guide',title:'Agnipath Scheme 2026 Complete Guide',category:'Defence',date:'Jan 24, 2026'},
  {id:'17',slug:'document-verification-common-mistakes',title:'Document Verification Common Mistakes',category:'Career Guide',date:'Jan 23, 2026'}
];

// Read existing articles from gen_articles.cjs
let content = fs.readFileSync('gen_articles.cjs', 'utf8');

// Add simple content for remaining articles
simpleArticles.forEach(art => {
  content += `\n  {id:'${art.id}',slug:'${art.slug}',title:'${art.title}',category:'${art.category}',excerpt:'Complete guide.',date:'${art.date}',author:'Guriya Kumari',readTime:'10 min read',image:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=60&w=500',content:'<article class="dedicated-content"><p>Complete guide coming soon.</p></article>'},\n`;
});

// Close the array and add export
content += '];\n\nfs.writeFileSync("src/data/articles.js", "export const articles = " + JSON.stringify(articles, null, 2) + ";\\n");\nconsole.log("✅ Generated", articles.length, "articles");';

fs.writeFileSync('build_articles.cjs', content);
console.log('Build script created');
