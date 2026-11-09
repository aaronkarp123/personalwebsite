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
                            <img src="images/readwrite0.jpg" alt="">
                        </div>
                        <div class="gallery-item">
                            <img src="images/readwrite2.jpg" alt="">
                        </div>
                        <div class="gallery-item">
                            <img src="images/readwrite1.jpg" alt="">
                        </div>
                        <div class="gallery-item">
                            <img src="images/readwrite3.jpg" alt="">
                        </div>
                        <div class="gallery-item">
                            <img src="images/readwrite4.jpg" alt="">
                        </div>
                        <div class="gallery-item">
                            <img src="images/readwrite5.jpg" alt="">
                        </div>
                    </div>
                `
            }
        ]
    },
    {
        id: "kaze",
        tag: "Sound Art Installation",
        title: '風は渡る 「the wind crosses」',
        subtitle: "This work creates a sonic equivalent to the visual experience of standing on the bridge nestled between the Western and Japanese homes. There are seven wind chimes in two different styles, which were derived from the architectural foci of the separate buildings, using stained glass and shouji respectively. While the visual field consists of a clear separation between Japan and the West, the sounds of the two different styles of wind chimes mix to create a palette that is neither clearly Japanese nor Western, but occupies a space in between. --- この作品は、西洋と日本の家をつなぐ橋に設置しており、その二つの建物が関係するサウンドスケープを作り出したものである。ステンドグラスと、障子戸を、別々の建物素材のモチーフとし、2つの異なるスタイルの7つの風鈴を用いている。それらは日本と西洋の明確な分離で構成されているが、2つの異なるスタイルの風鈴の音が混ざり合うことで、日本でも西洋でもないパレットの音色が生まれる。",
        sections: [
            {
                title: "Video Player",
                icon: "fa-video",
                openByDefault: true,
                content: `
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/vq9py99fM30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                        <p>Completed: 2019</p>
                        <p>Materials: Stained Glass, Bells, Wood, Shouji -- ステンドグラス、風鈴、障子紙、サイズ可変</p>
                        <p>Components: Glass Chimes x 3, Bell Chimes x 4</p>
                    </div>
                `
            },
            {
                title: "Installed",
                icon: "fa-paint-roller",
                openByDefault: false,
                content: `
                <div class="doc-text">
                    <p>Date: November, 2019
                    <p>Location: 和中湾 (Wachu-an), Kyoto, Japan</p>
                </div>
                `
            },
            {
                title: "Documentation",
                icon: "fa-book-open-reader",
                openByDefault: false,
                content: `
                    <div class="score-preview-box">
                        <div class="score-info">
                            <strong>Exhibition Program (PDF)</strong>
                        </div>
                        <a href="files/kazeprogram.pdf" target="_blank" class="badge-btn"><i class="fa-solid fa-file-pdf"></i> View / Download Program (PDF)</a>
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
                            <img src="images/kaze0.jpg?auto=format&fit=crop&w=400&q=80" alt="">
                        </div>
                        <div class="gallery-item">
                            <img src="images/kaze1.jpg?auto=format&fit=crop&w=400&q=80" alt="">
                        </div>
                        <div class="gallery-item">
                            <img src="images/kaze2.jpg?auto=format&fit=crop&w=400&q=80" alt="">
                        </div>
                        <div class="gallery-item">
                            <img src="images/kaze3.jpg?auto=format&fit=crop&w=400&q=80" alt="">
                        </div>
                        <div class="gallery-item">
                            <img src="images/kaze4.jpg?auto=format&fit=crop&w=400&q=80" alt="">
                        </div>
                        <div class="gallery-item">
                            <img src="images/kaze5.jpg?auto=format&fit=crop&w=400&q=80" alt="">
                        </div>
                        <div class="gallery-item">
                            <img src="images/kaze6.jpg?auto=format&fit=crop&w=400&q=80" alt="">
                        </div>
                        <div class="gallery-item">
                            <img src="images/kaze7.jpg?auto=format&fit=crop&w=400&q=80" alt="">
                        </div>
                        
                    </div>
                `
            }
        ]
    },
    {
        id: "give-space",
        tag: "Music",
        title: 'Give Space [I]',
        subtitle: "A semi-structured improvisational piece. Always leave room for growth.",
        sections: [
            {
                title: "Audio Player",
                icon: "fa-circle-play",
                openByDefault: true,
                content: `
                    <div class="soundcloud-container">
                        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A728131531&color=%23dcccd4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/aaronkarp" title="Sophia Karp" target="_blank" style="color: #cccccc; text-decoration: none;">Sophia Karp</a> · <a href="https://soundcloud.com/aaronkarp/give-space-i" title="Give Space [I]" target="_blank" style="color: #cccccc; text-decoration: none;">Give Space [I]</a></div>
                    </div>
                `
            },
            {
                title: "Technical Details",
                icon: "fa-book-bookmark",
                openByDefault: false,
                content: `
                    <div class="doc-text">
                        <p>Form: Live Performance</p>
                        <p>Completed: 2019</p>
                        <p>Instrumentation: Cello, Electronics</p>
                        <p>Sample Recording: Viola</p>
                        <p>Performer: Sophia Karp</p>
                    </div>
                `
            },
            {
                title: "Score",
                icon: "fa-book-open-reader",
                openByDefault: false,
                content: `
                    <div class="score-preview-box">
                        <div class="score-info">
                            <strong>Musical Score (PDF)</strong>
                        </div>
                        <a href="files/GiveSpace1.pdf" target="_blank" class="badge-btn"><i class="fa-solid fa-file-pdf"></i> View / Download Score (PDF)</a>
                    </div>
                `
            },
        ]
    },
    {
        id: "with-in",
        tag: "Sound Art Installation",
        title: 'with in',
        subtitle: "An exploration of sociality through sound, sight, and time. Based on an algorithm that describes bird flocking patterns, this work bends the forces dictating behavior to continuously create new modes of interaction. Each time \'with in\' is run it develops in a unique way, such that each execution is different. This creation, sometimes sudden and other times gradual, is reflected in the modulation of a representative soundscape. The audience is both observer and disruptor as they exist inside of a generative process of building and breaking social connections. The work started every night at sundown and continued until sunrise, at which time the screen would be replaced with a countdown clock for the following sunset.'",
        sections: [
            {
                title: "Video Player",
                icon: "fa-video",
                openByDefault: true,
                content: `
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/iBB1GTTgMxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                `
            },
            {
                title: "Technical Details",
                icon: "fa-book-bookmark",
                openByDefault: false,
                content: `
                    <div class="doc-text">
                        <p>Form: Multimedia Installation</p>
                        <p>Completed: 2018</p>
                        <p>Hardware: Projector, Microphone, Computer, 3.1 Speaker System</p>
                        <p>Software: Max MSP, Processing (<a href="https://github.com/aaronkarp123/within" target="_blank">code base</a>)</p>
                    </div>
                `
            },
            {
                title: "Installed",
                icon: "fa-paint-roller",
                openByDefault: false,
                content: `
                <div class="doc-text">
                    <p>Date: November, 2018
                    <p>Location: Black Family Visual Arts Center, Hanover, NH</p>
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
                            <img src="images/within0.jpg?auto=format&fit=crop&w=400&q=80" alt="">
                        </div>
                        <div class="gallery-item">
                            <img src="images/within1.jpg?auto=format&fit=crop&w=400&q=80" alt="">
                        </div>
                        <div class="gallery-item">
                            <img src="images/within2.jpg?auto=format&fit=crop&w=400&q=80" alt="">
                        </div>
                        <div class="gallery-item">
                            <img src="images/within3.jpg?auto=format&fit=crop&w=400&q=80" alt="">
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
