/**
 * ==========================================================================
 * SOPHIA KARP BLOG POST DATA
 * Simply add or edit blog entries in this array!
 * ==========================================================================
 */

const BLOG_POSTS = [
    {
        id: 3,
        title: "✨ Welcome to Sophia Karp's Y2K Cyber Zone!",
        date: "2026-03-30",
        tags: ["site-update", "y2k", "sky", "portfolio"],
        content: `
            <p>Welcome to my updated space! The site now features a dynamic sky background that randomly picks a sunrise 🌅 or sunset 🌆 every time you load the page!</p>
            <p>Also, all my Art & Music portfolio projects are driven by a dynamic <code>js/portfolio.js</code> data file, complete with expandable Scores, Documentation, Images, and Audio/Video players!</p>
        `
    },
    {
        id: 2,
        title: "🎵 New Ocean Synth Track & Score PDF Released",
        date: "2026-02-14",
        tags: ["music", "soundcloud", "synth", "scores"],
        content: `
            <p>Just uploaded my new ambient synth track <em>"Aqua Dreamscape"</em> along with the full graphic score PDF! Stream it and view the score inside the <a href="#art-music" onclick="switchTab('art-music')">Art & Music section</a>.</p>
        `
    },
    {
        id: 1,
        title: "📄 Paper Accepted at Digital Culture Conference!",
        date: "2026-01-10",
        tags: ["publications", "research", "pdf"],
        content: `
            <p>Excited to share that my research paper on digital retro aesthetics has been officially published!</p>
            <p>You can read or download the PDF version over in the <a href="#publications" onclick="switchTab('publications')">Publications section</a>.</p>
        `
    }
];
