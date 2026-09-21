import "./styles.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="site-shell">
    <header class="nav">
      <a class="brand" href="#top" aria-label="Rob Reider Political Voiceover home">
        <span class="brand-mark">RR</span>
        <span class="brand-name">ROB REIDER</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="#demo">Demo</a>
        <a href="#voice">The Voice</a>
        <a href="#applications">Applications</a><a href="#studio">Studio</a>
        <a href="#contact">Contact</a>
      </nav>

      <a class="nav-cta" href="#contact">Request a Quote <span>↗</span></a>
    </header>

    <main id="top">
      <section class="hero section">
        <div class="hero-copy">
          <p class="eyebrow"><span></span> POLITICAL VOICEOVER</p>
          <h1>A voice of<br /><em>experience.</em></h1>
          <p class="hero-sub">
            Mature. Lived-in. Wise. Authoritative.<br />
            A professional voice for conservative political media.
          </p>

          <div class="hero-actions">
            <a class="button button-dark" href="#demo">Listen to the Demo <span>▶</span></a>
            <a class="text-link" href="#contact">Request a quote <span>→</span></a>
          </div>

          <div class="hero-tags" aria-label="Voice qualities">
            <span>MATURE</span>
            <span>LIVED-IN</span>
            <span>AUTHORITATIVE</span>
            <span>STORYTELLER</span>
          </div>
        </div>

        <div class="hero-portrait">
          <div class="portrait-frame">
            <img src="/images/rob-reider-headshot.jpg" alt="Rob Reider" />
            <div class="portrait-caption">
              <span>ROB REIDER</span>
              <span>VOICE ACTOR</span>
            </div>
          </div>
          <div class="portrait-accent" aria-hidden="true"></div>
        </div>
      </section>

      <section class="demo-band" id="demo">
        <div class="section demo-section">
          <div class="section-kicker">
            <span>01</span>
            <span>POLITICAL DEMO</span>
          </div>

          <div class="demo-layout">
            <div>
              <h2>Hear the voice<br /><em>behind the message.</em></h2>
              <p>
                Broadcast-ready political voiceover for campaign advertising,
                advocacy, fundraising, radio, television, CTV and digital media.
              </p>
            </div>

            <div class="audio-card">
              <div class="audio-topline">
                <div>
                  <span class="audio-label">POLITICAL VOICEOVER DEMO</span>
                  <strong>Rob Reider</strong>
                </div>
                <span class="duration" id="duration">02:04</span>
              </div>

              <audio id="demoAudio" preload="metadata">
                <source src="/audio/rob-reider-political-demo.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>

              <div class="wave" id="wave" aria-hidden="true">
                ${Array.from({ length: 52 }, (_, i) => `<i style="--h:${18 + ((i * 17) % 58)}%"></i>`).join("")}
              </div>

              <div class="player-controls">
                <button class="play-button" id="playButton" aria-label="Play political demo">
                  <span id="playIcon">▶</span>
                </button>
                <div class="progress-wrap">
                  <input id="progress" type="range" min="0" max="100" value="0" aria-label="Demo progress" />
                  <div class="time-row">
                    <span id="currentTime">00:00</span>
                    <span id="totalTime">02:04</span>
                  </div>
                </div>
                <button class="volume-button" id="muteButton" aria-label="Mute demo">VOL</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section voice-section" id="voice">
        <div class="section-kicker">
          <span>02</span>
          <span>THE VOICE</span>
        </div>

        <div class="voice-intro">
          <h2>A voice that<br /><em>gets heard.</em></h2>
          <p>
            Some messages need more than volume. They need credibility,
            restraint and the sense that the person speaking has lived a little.
            Rob brings that quality naturally to political and long-form
            storytelling.
          </p>
        </div>

        <div class="qualities">
          <article>
            <span class="quality-number">01</span>
            <h3>Mature</h3>
            <p>A seasoned voice with natural authority and credibility.</p>
          </article>
          <article>
            <span class="quality-number">02</span>
            <h3>Lived-In</h3>
            <p>Authentic, grounded and human — never overly performed.</p>
          </article>
          <article>
            <span class="quality-number">03</span>
            <h3>Wise</h3>
            <p>Thoughtful and measured, with the presence of experience.</p>
          </article>
          <article>
            <span class="quality-number">04</span>
            <h3>Authoritative</h3>
            <p>Confident and commanding when the message demands it.</p>
          </article>
          <article>
            <span class="quality-number">05</span>
            <h3>Storyteller</h3>
            <p>Natural pacing that makes words feel personal and meaningful.</p>
          </article>
        </div>
      </section>

      <section class="applications section" id="applications">
        <div class="section-kicker light">
          <span>03</span>
          <span>POLITICAL MEDIA</span>
        </div>

        <div class="applications-heading">
          <h2>Built for the<br /><em>production room.</em></h2>
          <p>
            A professional voice that can move comfortably from a direct
            campaign spot to long-form narration — with the polish producers
            expect.
          </p>
        </div>

        <div class="application-grid">
          <article><span>01</span><h3>Campaign Advertising</h3><p>Candidate spots, campaign messaging and political advertising.</p></article>
          <article><span>02</span><h3>Issue Advocacy</h3><p>Clear, compelling narration for organizations communicating important issues.</p></article>
          <article><span>03</span><h3>PAC & Political Media</h3><p>Voiceover for television, radio, CTV, digital and social campaigns.</p></article>
          <article><span>04</span><h3>Fundraising</h3><p>Direct, personal and engaging donor communications.</p></article>
          <article><span>05</span><h3>Documentary & Narration</h3><p>Long-form political, historical and cultural storytelling.</p></article>
          <article><span>06</span><h3>Rapid Response</h3><p>Professional voiceover when political messaging needs to move quickly.</p></article>
        </div>
      </section>

      <section class="studio section">
        <div class="section-kicker">
          <span>04</span>
          <span>PROFESSIONAL STUDIO</span>
        </div>

        <div class="studio-grid">
          <div>
            <h2>Broadcast-ready.<br /><em>Professionally recorded.</em></h2>
          </div>
          <div class="studio-copy">
            <p>
              Professional voiceover recorded from a purpose-built studio,
              delivering clean, polished audio for broadcast and digital
              production.
            </p>
            <div class="specs">
              <div><strong>STUDIO</strong><span>Professional broadcast-quality recording</span></div>
              <div><strong>DELIVERY</strong><span>WAV / MP3 and production-ready formats</span></div>
              <div><strong>REMOTE</strong><span>Available for directed sessions and remote production</span></div>
            </div>
          </div>
        </div>
      </section>

      <section class="contact section" id="contact">
        <div class="contact-inner">
          <p class="eyebrow"><span></span> HAVE A SCRIPT?</p>
          <h2>Let's get your<br /><em>message heard.</em></h2>
          <p class="contact-copy">
            Send the script, project details and deadline. Rob will respond
            with availability and a quote.
          </p>

          <div class="contact-actions">
            <a class="button button-light" href="mailto:rob@robreidervoice.com?subject=Political%20Voiceover%20Inquiry">
              Request a Quote <span>↗</span>
            </a>
            <a class="contact-email" href="mailto:rob@robreidervoice.com">
              rob@robreidervoice.com
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <span>© ${new Date().getFullYear()} ROB REIDER</span>
      <span>POLITICAL VOICEOVER</span>
    </footer>
  </div>
`;

const audio = document.querySelector("#demoAudio");
const playButton = document.querySelector("#playButton");
const playIcon = document.querySelector("#playIcon");
const progress = document.querySelector("#progress");
const currentTime = document.querySelector("#currentTime");
const totalTime = document.querySelector("#totalTime");
const duration = document.querySelector("#duration");
const muteButton = document.querySelector("#muteButton");

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins.toString().padStart(2, "0")}:${secs}`;
};

audio.addEventListener("loadedmetadata", () => {
  totalTime.textContent = formatTime(audio.duration);
  duration.textContent = formatTime(audio.duration);
});

playButton.addEventListener("click", async () => {
  if (audio.paused) {
    await audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener("play", () => {
  playIcon.textContent = "Ⅱ";
  playButton.setAttribute("aria-label", "Pause political demo");
});

audio.addEventListener("pause", () => {
  playIcon.textContent = "▶";
  playButton.setAttribute("aria-label", "Play political demo");
});

audio.addEventListener("timeupdate", () => {
  const percent = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  progress.value = percent;
  currentTime.textContent = formatTime(audio.currentTime);
  document.querySelectorAll("#wave i").forEach((bar, index) => {
    bar.classList.toggle("played", index / 52 * 100 < percent);
  });
});

progress.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (Number(progress.value) / 100) * audio.duration;
  }
});

muteButton.addEventListener("click", () => {
  audio.muted = !audio.muted;
  muteButton.textContent = audio.muted ? "MUTE" : "VOL";
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
