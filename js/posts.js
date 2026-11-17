/**
 * ==========================================================================
 * SOPHIA KARP BLOG POST DATA
 * Simply add or edit blog entries in this array!
 * ==========================================================================
 */

const BLOG_POSTS = [
    /*{
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
    }*/
    {
        id: 1,
        slug: "welcome",
        title: "Welcome to my website!",
        date: "2026-11-17",
        tags: [],
        content: `
            <p>Hello and welcome to my new website! I finally got around to putting a new face on the things I've had around for a while. I think I last updated 
            my website in 2019, so this is long overdue. 
            I'm also hoping this is a kick in my butt to start putting new things out there. Despite what my "Art & Music& section says, I *have* made things since 
            2022, I've just been very bad at putting them online. I endeavor to do better :prayer-hands:</p><br>
            <p>I also want to try keeping up with writing posts on this blog. I don't think I've had a blog since AP English Lit my senior year of high school.
            I'm hoping to not recreate that experience 1:1, but if I end up reviewing The Road again you can't blame me, it's just muscle memory.</p>
            <p> TEST </p>
        `
    }
];

if (typeof module !== "undefined") {
    module.exports = BLOG_POSTS;
}