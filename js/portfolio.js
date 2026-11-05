/**
 * ==========================================================================
 * SOPHIA KARP ART & MUSIC PORTFOLIO DATA FILE
 * To add, remove, or edit portfolio items or expandable sections,
 * edit the objects in this array!
 * ==========================================================================
 */

const PORTFOLIO_PROJECTS = [
    {
        id: "aqua-dreamscape",
        tag: "MUSIC & SCORE",
        title: '🎵 "Aqua Dreamscape" (Composition & Visual Suite)',
        subtitle: "An ambient synth composition paired with interactive visual projections.",
        sections: [
            {
                title: "Audio & Video Player",
                icon: "fa-circle-play",
                openByDefault: true,
                content: `
                    <div class="embed-wrapper">
                        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&color=%23ff6699&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                    </div>
                    <p class="media-caption">Full stereo stream. Produced with vintage analog synthesizer modules.</p>
                `
            },
            {
                title: "Scores & Sheet Music",
                icon: "fa-music",
                openByDefault: false,
                content: `
                    <div class="score-preview-box">
                        <div class="score-info">
                            <strong>🎼 Full Orchestral & Synth Score (PDF)</strong>
                            <p>Includes complete graphic notation, synth patch cues, and performance instructions.</p>
                        </div>
                        <a href="sample.pdf" target="_blank" class="badge-btn"><i class="fa-solid fa-file-pdf"></i> View / Download Score (PDF)</a>
                    </div>
                `
            },
            {
                title: "Technical Documentation & Process Notes",
                icon: "fa-book-bookmark",
                openByDefault: false,
                content: `
                    <div class="doc-text">
                        <p><strong>Instrumentation:</strong> Sequential Prophet-6, Moog Sub 37, Granular Reverb, Chamber Strings.</p>
                        <p><strong>Composition Technique:</strong> Built around microtonal harmonic cycles and generative LFO modulation. Tuning calibrated to A4 = 432Hz.</p>
                        <p><strong>Performance Requirements:</strong> 4-channel surround playback or stereo PA with subwoofer.</p>
                    </div>
                `
            },
            {
                title: "Project Images & Visual Stills",
                icon: "fa-image",
                openByDefault: false,
                content: `
                    <div class="art-gallery">
                        <div class="gallery-item">
                            <img src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80" alt="Score Notation Artwork">
                            <span class="caption">Visual Patch Diagram</span>
                        </div>
                        <div class="gallery-item">
                            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80" alt="Projection Still">
                            <span class="caption">Live Projection Still</span>
                        </div>
                    </div>
                `
            }
        ]
    },
    {
        id: "cyber-ocean-grid",
        tag: "VISUAL & MEDIA",
        title: '🎨 "Cybernetic Ocean Grid" (3D Animation)',
        subtitle: "A digital art installation exploring 2000s cyber aesthetics and procedural geometry.",
        sections: [
            {
                title: "Video Preview",
                icon: "fa-video",
                openByDefault: true,
                content: `
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/jfKfPfyJRdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                `
            },
            {
                title: "Project Documentation",
                icon: "fa-file-lines",
                openByDefault: false,
                content: `
                    <div class="doc-text">
                        <p><strong>Software Used:</strong> Blender 4.2, After Effects, TouchDesigner.</p>
                        <p><strong>Concept:</strong> An exploration of early CGI web surfaces rendering fluid wave dynamics in 8-bit pink palettes.</p>
                        <p><strong>Exhibited at:</strong> Digital Art Showcase 2025.</p>
                    </div>
                `
            },
            {
                title: "High-Res Render Gallery",
                icon: "fa-images",
                openByDefault: false,
                content: `
                    <div class="art-gallery">
                        <div class="gallery-item">
                            <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=400&q=80" alt="Grid Render 1">
                            <span class="caption">Render Frame 01</span>
                        </div>
                        <div class="gallery-item">
                            <img src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80" alt="Grid Render 2">
                            <span class="caption">Render Frame 02</span>
                        </div>
                    </div>
                `
            }
        ]
    }
];
