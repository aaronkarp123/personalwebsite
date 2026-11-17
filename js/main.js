/**
 * ==========================================================================
 * SOPHIA KARP MAIN APP CONTROLLER
 * Handles random sky load, tab navigation, dynamic portfolio rendering,
 * and dynamic blog search filtering.
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    initRandomSkyBackground();
    renderPortfolioProjects();
    renderBlogPosts();
    initNavigation();
});

/**
 * Safely update the URL hash on both http(s):// and local file:// previews
 */
function updateUrlHash(hash) {
    if (window.location.hash === `#${hash}`) return;
    try {
        history.pushState(null, "", `#${hash}`);
    } catch (err) {
        window.location.hash = hash;
    }
}

/**
 * Randomly chooses on page load whether background is a sunrise or sunset
 */
function initRandomSkyBackground() {
    const isSunrise = Math.random() < 0.5;
    const randomProf = Math.random();
    const body = document.body;

    if (isSunrise) {
        body.classList.add("sky-sunrise");
        body.classList.remove("sky-sunset");
    } else {
        body.classList.add("sky-sunset");
        body.classList.remove("sky-sunrise");
    }

    if (randomProf < 0.333333) {
        document.getElementById("sophiakprofile").src = "images/Crop1.jpg";
    } else if (randomProf < 0.6666666) {
        document.getElementById("sophiakprofile").src = "images/Crop2.jpg";
    } else {
        document.getElementById("sophiakprofile").src = "images/Crop3.jpg";
    }
}

/**
 * Tab & Deep-Link Navigation Handler
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

    const handleRoute = () => {
        const hash = window.location.hash.replace("#", "");
        if (!hash) {
            switchTab("about", false);
        } else if (hash.startsWith("post-")) {
            openBlogPost(hash, null, false);
        } else if (hash.startsWith("project-")) {
            openPortfolioProject(hash, null, false);
        } else if (document.getElementById(hash)) {
            switchTab(hash, false);
        }
    };

    window.addEventListener("popstate", handleRoute);
    window.addEventListener("hashchange", handleRoute);

    // Check URL hash on initial page load
    if (window.location.hash) {
        handleRoute();
    }
}

/**
 * Switch Active Tab
 */
function switchTab(tabId, updateHistory = true, scrollTop = true) {
    const navButtons = document.querySelectorAll(".nav-btn");
    const sections = document.querySelectorAll(".tab-section");

    navButtons.forEach(btn => btn.classList.remove("active"));
    sections.forEach(sec => sec.classList.remove("active"));

    const targetSection = document.getElementById(tabId);
    const targetBtn = document.querySelector(`.nav-btn[href="#${tabId}"]`);

    if (targetSection) targetSection.classList.add("active");
    if (targetBtn) targetBtn.classList.add("active");

    if (updateHistory) {
        updateUrlHash(tabId);
    }

    if (scrollTop) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

/**
 * Smoothly scroll to an element and flash a highlight border
 */
function highlightAndScrollTo(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.remove("post-highlight");
    void el.offsetWidth; // Force reflow so repeat clicks replay the animation
    el.classList.add("post-highlight");
}

/**
 * Open the Art & Music tab and jump to a specific portfolio project
 */
function openPortfolioProject(projectAnchor, event = null, updateHistory = true) {
    if (event) event.preventDefault();

    switchTab("art-music", false, false);

    if (updateHistory) {
        updateUrlHash(projectAnchor);
    }

    highlightAndScrollTo(projectAnchor);
}

/**
 * Open the Blog tab, clear active search filters, and jump to a specific post
 */
function openBlogPost(postAnchor, event = null, updateHistory = true) {
    if (event) event.preventDefault();

    switchTab("blog", false, false);

    const searchInput = document.getElementById("blog-search");
    if (searchInput && searchInput.value.trim() !== "") {
        searchInput.value = "";
        renderBlogPosts(BLOG_POSTS);
    }

    if (updateHistory) {
        updateUrlHash(postAnchor);
    }

    highlightAndScrollTo(postAnchor);
}

/**
 * Navigate to the item, update the URL, and copy the shareable link
 */
function copyShareLink(anchorId, btnElement) {
    if (anchorId.startsWith("project-")) {
        openPortfolioProject(anchorId);
    } else if (anchorId.startsWith("post-")) {
        openBlogPost(anchorId);
    }

    const shareUrl = `${window.location.href.split("#")[0]}#${anchorId}`;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
            const originalHtml = btnElement.innerHTML;
            btnElement.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
            setTimeout(() => {
                btnElement.innerHTML = originalHtml;
            }, 2000);
        });
    }
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
        const cleanId = String(project.id).replace(/[^a-zA-Z0-9-_]/g, "");
        const projectAnchor = `project-${cleanId}`;

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
            <div id="${projectAnchor}" class="project-card">
                <div class="project-header">
                    <div class="project-top-row">
                        <span class="project-tag">${escapeHtml(project.tag)}</span>
                        <button type="button" class="link-btn copy-link-btn" onclick="copyShareLink('${projectAnchor}', this)">
                            <i class="fa-solid fa-link"></i> Direct Link
                        </button>
                    </div>
                    <h3 class="project-title">
                        <a href="#${projectAnchor}" class="post-permalink" onclick="openPortfolioProject('${projectAnchor}', event)">
                            ${escapeHtml(project.title)}
                        </a>
                    </h3>
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
 * Render Blog Posts (with search filter and individual permalinks)
 */
function renderBlogPosts(filteredPosts = null) {
    const container = document.getElementById("blog-posts-container");
    if (!container) return;

    const postsToRender = filteredPosts || BLOG_POSTS;

    if (!postsToRender || postsToRender.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding: 20px;'>No matching blog posts found!</p>";
        return;
    }

    container.innerHTML = postsToRender.map(post => {
        const cleanId = String(post.slug || post.id).replace(/[^a-zA-Z0-9-_]/g, "");
        const postAnchor = `post-${cleanId}`;

        return `
            <article id="${postAnchor}" class="blog-post">
                <div class="blog-post-header">
                    <h3 class="blog-title">
                        <a href="#${postAnchor}" class="post-permalink" onclick="openBlogPost('${postAnchor}', event)">
                            💖 ${escapeHtml(post.title)}
                        </a>
                    </h3>
                    <div class="blog-meta">
                        <span class="blog-date"><i class="fa-regular fa-calendar"></i> ${post.date}</span>
                        &nbsp;&nbsp;&nbsp;<button type="button" class="link-btn copy-link-btn" onclick="copyShareLink('${postAnchor}', this)">
                            <i class="fa-solid fa-link"></i> Direct Link
                        </button>
                    </div>
                </div>
                <div class="blog-body">
                    ${post.content}
                    <div class="blog-tags">
                        ${post.tags.map(tag => `<span class="tag">#${escapeHtml(tag)}</span>`).join("")}
                    </div>
                </div>
            </article>
        `;
    }).join("");
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


if (typeof module !== "undefined") {
    module.exports = BLOG_POSTS;
}