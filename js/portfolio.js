/**
 * ==========================================================================
 * SOPHIA KARP ART & MUSIC PORTFOLIO DATA FILE
 * To add, remove, or edit portfolio items or expandable sections,
 * edit the objects in this array!
 * ==========================================================================
 */

const PORTFOLIO_PROJECTS = [
    {
        id: "the-flock",
        tag: "Sound Art Installation",
        title: 'The Flock Takes Shelter in the Storm',
        subtitle: "A soundscape collage, using recordings from hikes in Western Massachusetts and Rhode Island, and excerpts of a piece for solo cello performed by Benjamin Karp.",
        sections: [
            {
                title: "Video Player",
                icon: "fa-video",
                openByDefault: true,
                content: `
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/arOtxkbTRgg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                `
            },
            {
                title: "Technical Details",
                icon: "fa-book-bookmark",
                openByDefault: false,
                content: `
                    <div class="doc-text">
                        <p>Form: Installation</p>
                        <p>Completed: 2022</p>
                        <p>Materials: Glass, Transducers</p>
                        <p>Components: Raspberry Pi, Amplifier, Transducers x 2</p>
                    </div>
                `
            },
            {
                title: "Installed",
                icon: "fa-paint-roller",
                openByDefault: false,
                content: `
                <div class="doc-text">
                    <p>Date: January, 2022
                    <p>Location: Granoff Center for the Creative Arts, Providence, RI</p>
                </div>
                `
            }
        ]
    },
    {
        id: "four-ways",
        tag: "Music",
        title: 'Four Ways to Get Home',
        subtitle: "An exploratory transit EP",
        sections: [
            {
                title: "Bandcamp Link",
                icon: "fa-circle-play",
                openByDefault: true,
                content: `
                    <div class="bandcamp-container">
                        <a href="https://oddegg.bandcamp.com/album/4-ways-to-get-home" target="_blank" >
                            <img src="https://f4.bcbits.com/img/a2603072358_10.jpg?auto=format" alt="Score Notation Artwork">
                        </a>
                    </div>
                `
            }
        ]
    },
    {
        id: "read-write",
        tag: "Sound Art Installation",
        title: 'Read / Write',
        subtitle: "What begins as a blank slate is transformed over the course of days and weeks as the paint brush slowly cuts down into the vinyl. The record turns from smooth static to rhythmic loops of noise that will continue to develop indefinitely as the micro movements of the bristles shift.",
        sections: [
            {
                title: "Video Player",
                icon: "fa-video",
                openByDefault: true,
                content: `
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/iNLZMcmS4eI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                `
            },
            {
                title: "Technical Details",
                icon: "fa-book-bookmark",
                openByDefault: false,
                content: `
                    <div class="doc-text">
                        <p>Form: Installation</p>
                        <p>Completed: 2020</p>
                        <p>Materials: Record Player, Uncut Vinyl, Brush, String</p>
                    </div>
                `
            },
            {
                title: "Installed",
                icon: "fa-paint-roller",
                openByDefault: false,
                content: `
                <div class="doc-text">
                    <p>Date: January, 2020
                    <p>Kyoto University of Art and Design, Kyoto, Japan</p>
                </div>
                `
            },
            {
                title: "Images",
                icon: "fa-image",
                openByDefault: false,
                content: `
                    <div class="art-gallery">
                        <div class="gallery-item">
                            <img src="images/readwrite0?auto=format&fit=crop&w=400&q=80" alt="Score Notation Artwork">
                        </div>
                        <div class="gallery-item">
                            <img src="images/readwrite1?auto=format&fit=crop&w=400&q=80" alt="Score Notation Artwork">
                        </div>
                        <div class="gallery-item">
                            <img src="images/readwrite2?auto=format&fit=crop&w=400&q=80" alt="Score Notation Artwork">
                        </div>
                        <div class="gallery-item">
                            <img src="images/readwrite3?auto=format&fit=crop&w=400&q=80" alt="Score Notation Artwork">
                        </div>
                        <div class="gallery-item">
                            <img src="images/readwrite4?auto=format&fit=crop&w=400&q=80" alt="Score Notation Artwork">
                        </div>
                        <div class="gallery-item">
                            <img src="images/readwrite5?auto=format&fit=crop&w=400&q=80" alt="Score Notation Artwork">
                        </div>
                    </div>
                `
            }
        ]
    },
    {
        id: "sample-1",
        tag: "EXAMPLE ONE",
        title: 'The Flock Takes Shelter in the Storm',
        subtitle: "A soundscape collage, using recordings from hikes in Western Massachusetts and Rhode Island, and excerpts of a piece for solo cello performed by Benjamin Karp.",
        sections: [
            {
                title: "Video Player",
                icon: "fa-video",
                openByDefault: true,
                content: `
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/arOtxkbTRgg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                `
            },
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
                title: "Technical Details",
                icon: "fa-book-bookmark",
                openByDefault: false,
                content: `
                    <div class="doc-text">
                        <p>Form: Installation</p>
                        <p>Completed: 2022</p>
                        <p>Materials: Glass, Transducers</p>
                        <p>Components: Raspberry Pi, Amplifier, Transducers x 2</p>
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
        title: '🎨 "EXAMPLE 2',
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
