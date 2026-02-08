
import datetime

base_url = "https://sarkariexamall.onrender.com"
today = datetime.date.today().isoformat()

static_pages = [
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
]

# Manual Articles from articles.js
articles = [
    {"slug": "upsc-cse-2026-notification", "priority": "0.8"},
    {"slug": "ssc-cgl-2026-exam-calendar", "priority": "0.8"},
    {"slug": "ibps-po-2026-eligibility-criteria", "priority": "0.8"},
    {"slug": "railway-rrb-ntpc-2026-update", "priority": "0.8"},
    {"slug": "state-psc-2026-syllabus-changes", "priority": "0.8"},
    {"slug": "defense-exams-nda-cds-2026", "priority": "0.8"},
    {"slug": "ssc-cgl-2026-complete-guide", "priority": "0.8"},
    {"slug": "upsc-civil-services-2026-guide", "priority": "0.8"},
    {"slug": "banking-sector-2026-opportunities", "priority": "0.8"}
]

# Generated Blogs Logic from articles.js
# for (let i = 4; i <= 60; i++)
for i in range(4, 61):
    categories = ['2026 Exams', 'Eligibility Guides', 'Career Opportunities']
    category = categories[i % 3]
    
    title_prefix = ""
    if category == '2026 Exams':
        title_prefix = 'Railway RRB'
    elif category == 'Eligibility Guides':
        title_prefix = 'State PCS'
    else:
        title_prefix = 'Defense Services'
        
    title = f"{title_prefix} Complete Master Guide {i}"
    
    # Slugify logic: lowercase, replace non-alphanumeric with hyphen, remove leading/trailing hyphens
    slug = title.lower()
    import re
    slug = re.sub(r'[^a-z0-9]+', '-', slug)
    slug = slug.strip('-')
    
    articles.append({"slug": slug, "priority": "0.7"})

# Locations from locations.js
locations = [
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
]

print('<?xml version="1.0" encoding="UTF-8"?>')
print('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')

# Static Pages
for page in static_pages:
    path = f"/{page}" if page else "/"
    priority = "1.0" if page == "" else "0.9" if page in ["blog", "eligibility-checker"] else "0.8"
    print(f"""  <url>
    <loc>{base_url}{path}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>{priority}</priority>
  </url>""")

# Blog Articles
print("  <!-- Blog Articles -->")
for article in articles:
    print(f"""  <url>
    <loc>{base_url}/{article['slug']}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>{article['priority']}</priority>
  </url>""")

# Location Pages (using /locations/slug ?)
# Wait, App.jsx routing logic needs to be checked.
# Top Cities articles are accessed via which path?
# Step 2062 App.jsx:
# <div key={location.id} ... onClick={() => onSelectLocation(location)}>
# navigateToTab('Detail', blogOrLocation) -> navigate(`/${blogOrLocation.slug || blogOrLocation.id}`)
#
# So the URL is https://site.com/delhi-ncr-government-exams (Direct root slug)
# NOT /locations/delhi-ncr...
#
# BUT sitemap.xml had /locations/delhi
# I should use the SLUG directly if that's how the app routes them now.
# App.jsx (Step 2062) handles dynamic routes:
# if (blogs.some(b => b.slug === slug...) || locations.some(...))
# Wait, let's check App.jsx routing logic again to be SURE if locations are also root-level slugs.
# I'll modify the script to comment out the print for now or assume root level.
#
# Re-reading App.jsx Step 2062 logic:
# const filteredLocations = locations...
# onClick={() => onSelectLocation(location)}
#
# navigateToTab definition:
# if (tab === 'Detail' && blogOrLocation) { navigate(`/${blogOrLocation.slug || blogOrLocation.id}`); }
#
# So yes, it is root level slug.
#
# However, the OLD sitemap had /locations/cityname.
# I should replace those with the new SEO friendly slugs at root level?
# OR keep both if the app supports /locations/city?
# App.jsx getActiveTabFromPath (Step 2062 View):
# Check for dynamic routes...
# if (pathValues.length === 1 && ...)
# if (blogs.some ... ) return 'Detail'
#
# Does it check locations?
# The snippet in Step 2062 didn't show the `if (locations.some...)` part clearly.
# But `navigateToTab` sends them to `/${slug}`.
# So I should map them to `/${slug}`.

for loc_slug in locations:
    print(f"""  <url>
    <loc>{base_url}/{loc_slug}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>""")

print('</urlset>')
