/**
 * ==========================================================================
 * SOPHIA KARP MAIN APP CONTROLLER
 * Handles random sky load, tab navigation, dynamic portfolio rendering,
 * and dynamic blog search filtering.
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    initRandomSkyBackground();
    initNavigation();
    renderPortfolioProjects();
    renderBlogPosts();
});

/**
 * Randomly chooses on page load whether background is a sunrise or sunset
 */
function initRandomSkyBackground() {
    const isSunrise = Math.random() < 0.5;
    const body = document.body;

    if (isSunrise) {
        body.classList.add("sky-sunrise");
        body.classList.remove("sky-sunset");
    } else {
        body.classList.add("sky-sunset");
        body.classList.remove("sky-sunrise");
    }
}

/**
 * Tab Navigation Handler
 */
function initNavigation() {
    const navButtons = document.querySelectorAll(".nav-btn");

    navButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = button.getAttribute("href").replace("#", "");
            switchTab(targetId);
        });
    });

    // Check hash URL on initial load (e.g., website.com/#blog)
    const currentHash = window.location.hash.replace("#", "");
    if (currentHash && document.getElementById(currentHash)) {
        switchTab(currentHash);
    }
}

/**
 * Switch Active Tab
 * @param {string} tabId 
 */
function switchTab(tabId) {
    const navButtons = document.querySelectorAll(".nav-btn");
    const sections = document.querySelectorAll(".tab-section");

    // Remove active class from all buttons and sections
    navButtons.forEach(btn => btn.classList.remove("active"));
    sections.forEach(sec => sec.classList.remove("active"));

    // Find and activate target section
    const targetSection = document.getElementById(tabId);
    const targetBtn = document.querySelector(`.nav-btn[href="#${tabId}"]`);

    if (targetSection) {
        targetSection.classList.add("active");
    }
    if (targetBtn) {
        targetBtn.classList.add("active");
    }

    // Scroll smoothly to top of content
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Render Art & Music Portfolio Projects dynamically from portfolio.js
 */
function renderPortfolioProjects() {
    const container = document.getElementById("portfolio-projects-container");
    if (!container) return;

    if (typeof PORTFOLIO_PROJECTS === "undefined" || PORTFOLIO_PROJECTS.length === 0) {
        container.innerHTML = "<p class='text-center'>No portfolio projects found!</p>";
        return;
    }

    container.innerHTML = PORTFOLIO_PROJECTS.map(project => {
        const sectionsHtml = project.sections.map(sec => {
            const openAttr = sec.openByDefault ? "open" : "";
            return `
                <details class="y2k-details" ${openAttr}>
                    <summary class="y2k-summary"><i class="fa-solid ${sec.icon}"></i> ${escapeHtml(sec.title)}</summary>
                    <div class="details-content">
                        ${sec.content}
                    </div>
                </details>
            `;
        }).join("");

        return `
            <div class="project-card">
                <div class="project-header">
                    <span class="project-tag">${escapeHtml(project.tag)}</span>
                    <h3 class="project-title">${escapeHtml(project.title)}</h3>
                    <p class="project-subtitle">${escapeHtml(project.subtitle)}</p>
                </div>
                <div class="expandable-group">
                    ${sectionsHtml}
                </div>
            </div>
        `;
    }).join("");
}

/**
 * Render Blog Posts (with search filter support)
 * @param {Array} filteredPosts 
 */
function renderBlogPosts(filteredPosts = null) {
    const container = document.getElementById("blog-posts-container");
    if (!container) return;

    const postsToRender = filteredPosts || BLOG_POSTS;

    if (!postsToRender || postsToRender.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding: 20px;'>No matching blog posts found!</p>";
        return;
    }

    container.innerHTML = postsToRender.map(post => `
        <article class="blog-post">
            <div class="blog-post-header">
                <h3 class="blog-title">💖 ${escapeHtml(post.title)}</h3>
                <span class="blog-date"><i class="fa-regular fa-calendar"></i> ${post.date}</span>
            </div>
            <div class="blog-body">
                ${post.content}
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="tag">#${escapeHtml(tag)}</span>`).join("")}
                </div>
            </div>
        </article>
    `).join("");
}

/**
 * Filter Blog Posts based on search bar input
 */
function filterBlogPosts() {
    const searchInput = document.getElementById("blog-search");
    if (!searchInput) return;

    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
        renderBlogPosts(BLOG_POSTS);
        return;
    }

    const filtered = BLOG_POSTS.filter(post => {
        const titleMatch = post.title.toLowerCase().includes(query);
        const contentMatch = post.content.toLowerCase().includes(query);
        const tagMatch = post.tags.some(tag => tag.toLowerCase().includes(query));
        return titleMatch || contentMatch || tagMatch;
    });

    renderBlogPosts(filtered);
}

/**
 * Helper to escape HTML to prevent XSS
 */
function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
