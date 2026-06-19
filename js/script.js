const roles = [
  "Software Developer",
  "Digital Marketer",
  "Creative Problem Solver",
  "MCA Graduate",
  "Tech + Marketing Mind"
];

let roleIndex = 0;
const roleText = document.getElementById("roleText");

setInterval(() => {
  roleText.style.opacity = "0";
  roleText.style.transform = "translateY(15px)";

  setTimeout(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleText.textContent = roles[roleIndex];

    roleText.style.opacity = "1";
    roleText.style.transform = "translateY(0)";
  }, 400);
}, 1800);

const voiceBtn = document.getElementById("playVoice");
const introAudio = document.getElementById("introAudio");
const voiceWave = document.querySelector(".voice-wave");

if (voiceBtn && introAudio && voiceWave) {
  voiceWave.classList.add("paused");

  voiceBtn.addEventListener("click", () => {
    if (introAudio.paused) {
      introAudio.play();
voiceWave.classList.remove("paused");
      voiceBtn.textContent = "🔊 Playing...";
    } else {
      introAudio.pause();
      voiceWave.classList.add("paused");
      voiceBtn.textContent = "▶ Hear My Story";
    }
  });

  introAudio.addEventListener("ended", () => {
    voiceWave.classList.add("paused");
    voiceBtn.textContent = "▶ Hear My Story";
  });
}

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const pageHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / pageHeight) * 100;

  document.querySelector(".scroll-progress").style.width = progress + "%";
});

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");

  if (loader) {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 1200);
  }
});
const themeToggle = document.getElementById("themeToggle");

if(themeToggle){
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    themeToggle.textContent =
      document.body.classList.contains("light-mode") ? "☀️" : "🌙";
  });
}
const projectData = {

  journeyjive: `
    

    <div class="project-banner">

  <img
    src="assets/images/j.png"
    alt="Journey Jive">

  <div class="banner-overlay">

  <h2>Journey Jive</h2>

    <p>Smart Carpooling Platform</p>

    <span class="project-badge">
      Academic Project
    </span>

  </div>

</div>
<div class="metrics-grid">

  <div class="metric-card">
    <h4>6+</h4>
    <p>Technologies</p>
  </div>

  <div class="metric-card">
    <h4>5+</h4>
    <p>Modules</p>
  </div>

  <div class="metric-card">
    <h4>4</h4>
    <p>User Roles</p>
  </div>

  <div class="metric-card">
    <h4>GPS</h4>
    <p>Tracking</p>
  </div>

</div>

<p>
Journey Jive is a smart carpooling platform developed to
connect students, women and working professionals
with safe and affordable transportation options.
</p>


    <h3>Technologies Used</h3>

    <div class="tech-stack">
  <span>ASP.NET</span>
  <span>C#</span>
  <span>SQL Server</span>
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</div>

<h3>Project Screenshots</h3>

<div class="project-gallery">

  <img class="gallery-img" src="assets/images/journey.png">

  <img class="gallery-img" src="assets/images/journeyh.png">

  <img class="gallery-img" src="assets/images/journey1.png">

  <img class="gallery-img" src="assets/images/journey2.png">

<img class="gallery-img" src="assets/images/journey4.png">

  <img class="gallery-img" src="assets/images/journey3.png">

</div>

    <h3>Key Features</h3>

    <ul>
      <li>Ride Matching</li>
      <li>GPS Tracking</li>
      <li>User Management</li>
      <li>Online Booking</li>
      <li>Safety Monitoring</li>
      <li>Emergency Support</li>
    </ul>

    <h3>My Role</h3>

    <p>
      Full Stack Developer responsible for
      database design, frontend development,
      backend logic and system architecture.
    </p>
  `,
 dhosting: `

<div class="project-banner">

  <img
    src="assets/images/de.png"
    alt="DHosting Banner">

  <div class="banner-overlay">

    <h2>DHosting</h2>

    <p>Domain Registration & Web Hosting Platform</p>

    <span class="project-badge">
      PHP Project
    </span>

  </div>

</div>

<div class="metrics-grid">

  <div class="metric-card">
    <h4>Domain</h4>
    <p>Registration</p>
  </div>

  <div class="metric-card">
    <h4>Hosting</h4>
    <p>Management</p>
  </div>

  <div class="metric-card">
    <h4>Admin</h4>
    <p>Module</p>
  </div>

  <div class="metric-card">
    <h4>User</h4>
    <p>Portal</p>
  </div>

</div>
<div class="project-preview">

  <img
    class="gallery-img"
    src="assets/images/d.png"
    alt="DHosting Preview">

  <p>
    System visualization representing the dashboard,
    modules and hosting workflow.
  </p>

</div>

<p>
A web-based platform developed for domain registration,
hosting management and customer account administration.
The platform supports role-based access for administrators,
staff members and users while maintaining centralized
data management through MySQL.
</p>

<h3>Technologies Used</h3>

<div class="tech-stack">
  <span>PHP</span>
  <span>MySQL</span>
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</div>

<h3>Key Features</h3>

<ul>
  <li>Domain Registration System</li>
  <li>Hosting Package Management</li>
  <li>User Authentication</li>
  <li>Admin Dashboard</li>
  <li>Staff Management Module</li>
  <li>Customer Account Portal</li>
</ul>

<h3>My Role</h3>

<p>
Designed and developed the database structure,
frontend interfaces and backend workflows while
implementing role-based access control and CRUD operations.
</p>

`,


police: `

<div class="project-banner">

  <img
    src="assets/images/p.png"
    alt="Police Information System Banner">

  <div class="banner-overlay">

    <h2> Police Information System</h2>

    <p>Digital Record Management Software</p>

    <span class="project-badge">
      Java Project
    </span>

  </div>

</div>

<div class="metrics-grid">

  <div class="metric-card">
    <h4>Records</h4>
    <p>Management</p>
  </div>

  <div class="metric-card">
    <h4>Complaint</h4>
    <p>Handling</p>
  </div>

  <div class="metric-card">
    <h4>Search</h4>
    <p>System</p>
  </div>

  <div class="metric-card">
    <h4>Database</h4>
    <p>Storage</p>
  </div>

</div>

<div class="project-preview">

  <img
    class="gallery-img"
    src="assets/images/pis.png"
    alt="Police Information System Preview">

  <p>
    Development workspace preview representing the Java-based
    Police Information System and digital record management workflow.
  </p>

</div>

<p>
A desktop-based software solution developed to digitize police
station operations by replacing manual paperwork with a centralized
record management system. The application improves data accessibility,
record maintenance and operational efficiency.
</p>

<h3>Technologies Used</h3>

<div class="tech-stack">
  <span>Java</span>
  <span>MySQL</span>
  <span>OOP</span>
  <span>GUI</span>
  <span>Database Management</span>
</div>

<h3>Key Features</h3>

<ul>
  <li>Police Record Management</li>
  <li>Complaint Registration</li>
  <li>Case Tracking System</li>
  <li>Search and Update Records</li>
  <li>Secure Data Storage</li>
  <li>User-Friendly Interface</li>
</ul>

<h3>My Role</h3>

<p>
Contributed to application design, database integration,
Java-based business logic development and interface implementation.
Focused on improving data organization and record retrieval efficiency.
</p>

`,

hotstar: `
<div class="project-banner">

  <img
    src="assets/images/ho.png"
    alt="Hotstar Clone">

  <div class="banner-overlay">

    <h2>Hotstar Clone</h2>

    <p>Responsive Streaming Platform UI</p>

    <span class="project-badge">
      Frontend Project
    </span>

  </div>

</div>

<div class="metrics-grid">

  <div class="metric-card">
    <h4>Responsive</h4>
    <p>Layout</p>
  </div>

  <div class="metric-card">
    <h4>Bootstrap</h4>
    <p>Framework</p>
  </div>

  <div class="metric-card">
    <h4>Modern</h4>
    <p>UI Design</p>
  </div>

  <div class="metric-card">
    <h4>Frontend</h4>
    <p>Development</p>
  </div>

</div>
<p>
Hotstar Clone is a responsive streaming platform interface
created to strengthen frontend development, Bootstrap layout,
UI structuring and responsive web design skills.
</p>

<h3>Project Screenshots</h3>

<div class="project-gallery">

  <img class="gallery-img" src="assets/images/h.png">

  <img class="gallery-img" src="assets/images/h1.png">

  <img class="gallery-img" src="assets/images/h2.png">

  </div>

<h3>Technologies Used</h3>
<div class="tech-stack">
  <span>HTML</span><span>CSS</span><span>Bootstrap</span><span>JavaScript</span>
</div>

<h3>Focus Areas</h3>
<ul>
  <li>Responsive layout</li>
  <li>Bootstrap components</li>
  <li>Banner and carousel sections</li>
  <li>Movie card design</li>
  <li>Modern UI structure</li>
</ul>

<h3>What I Learned</h3>
<p>Improved responsive design, layout structuring and frontend styling skills.</p>
`,

birthday: `
<div class="project-banner">

  <img
    src="assets/images/bday.png"
    alt="Custom Birthday Website">

  <div class="banner-overlay">

    <h2>Custom Birthday Website</h2>

    <p>Interactive Personalized Web Experience</p>

    <span class="project-badge">
      Private Creative Project
    </span>

  </div>

</div>

<div class="metrics-grid">

  <div class="metric-card">
    <h4>Interactive</h4>
    <p>Experience</p>
  </div>

  <div class="metric-card">
    <h4>Custom</h4>
    <p>Animations</p>
  </div>

  <div class="metric-card">
    <h4>Canvas</h4>
    <p>Effects</p>
  </div>

  <div class="metric-card">
    <h4>Story</h4>
    <p>Driven Design</p>
  </div>

</div>

<p>
A fully customized interactive birthday website built from
scratch using HTML, CSS and JavaScript. The project combines
storytelling, animations, music, transitions and personalized
interactions into a creative web experience.
</p>

<h3>Project Screenshots</h3>

<div class="project-gallery">

  <img class="gallery-img" src="assets/images/1.png">

  <img class="gallery-img" src="assets/images/2.png">

  <img class="gallery-img" src="assets/images/3.png">

  <img class="gallery-img" src="assets/images/4.png">

  <img class="gallery-img" src="assets/images/5.png">

  <img class="gallery-img" src="assets/images/6.png">

  <img class="gallery-img" src="assets/images/7.png">

  <img class="gallery-img" src="assets/images/8.png">

  <img class="gallery-img" src="assets/images/9.png">

  </div>


<h3>Technologies Used</h3>
<div class="tech-stack">
  <span>HTML</span><span>CSS</span><span>JavaScript</span><span>Canvas</span><span>Animations</span>
</div>

<h3>Features</h3>
<ul>
  <li>Cinematic page transitions</li>
  <li>Music integration</li>
  <li>Scratch card reveal</li>
  <li>Countdown timer</li>
  <li>Typewriter effect</li>
  <li>Interactive storytelling</li>
</ul>

<h3>Status</h3>
<p>This is a private project, so the source code and personal content are not publicly shared.</p>
`,

cybersecurity: `
<div class="project-banner">

  <img
    src="assets/images/cy.png"
    alt="Cybersecurity Projects">

  <div class="banner-overlay">

    <h2>Cybersecurity Projects</h2>

    <p>Network Security & Threat Detection</p>

    <span class="project-badge">
      Security Projects
    </span>

  </div>

</div>

<div class="metrics-grid">

  <div class="metric-card">
    <h4>Network</h4>
    <p>Sniffing</p>
  </div>

  <div class="metric-card">
    <h4>Threat</h4>
    <p>Detection</p>
  </div>

  <div class="metric-card">
    <h4>Python</h4>
    <p>Security Tools</p>
  </div>

  <div class="metric-card">
    <h4>IDS</h4>
    <p>Monitoring</p>
  </div>

</div>

<div class="project-preview">
  <img class="gallery-img" src="assets/images/c.png" alt="Cybersecurity project preview">
  <p>Security lab visualization representing network monitoring and intrusion detection tasks.</p>
</div>

<p>A collection of cybersecurity tasks completed during internship training.</p>

<h3>Technologies & Tools</h3>
<div class="tech-stack">
  <span>Python</span><span>Network Security</span><span>Snort</span><span>Suricata</span><span>Secure Coding</span>
</div>

<h3>Projects Covered</h3>
<ul>
  <li>Basic Network Sniffer</li>
  <li>Phishing Awareness Training</li>
  <li>Secure Coding Review</li>
  <li>Network Intrusion Detection System</li>
</ul>

<h3>Skills Demonstrated</h3>
<p>Network traffic analysis, cyber awareness, secure coding practices and threat detection concepts.</p>
`
,
dm: `
<div class="project-hero">
  <div>
    <h2>Digital Marketing Executive</h2>
    <p>1.5 Years UAE Experience</p>
  </div>
  <div class="project-status">Marketing Experience</div>
</div>

<p>Hands-on experience in digital marketing, student recruitment, campaign support and website management in Dubai.</p>

<div class="project-preview">
  <img class="gallery-img" src="assets/images/1c.png" alt="Cybersecurity project preview">
  <p>Marketing operations workspace visualization representing digital marketing management, student recruitment, lead handling, campaign coordination and performance tracking activities in a professional UAE business environment.</p>
</div>

<h3>Tools Used</h3>
<div class="tech-stack">
  <span>Meta Ads Manager</span><span>Canva</span><span>WordPress</span><span>Zoho CRM</span><span>Excel</span><span>Google Workspace</span>
</div>

<h3>Responsibilities</h3>
<ul>
  <li>Social media management</li>
  <li>Lead handling and follow-up</li>
  <li>Website updates</li>
  <li>Content creation</li>
  <li>Email marketing support</li>
  <li>Campaign performance tracking</li>
</ul>
`,

meta: `
<div class="project-hero">
  <div>
    <h2>Meta Ads Management</h2>
    <p>Campaign Strategy & Lead Generation</p>
  </div>
  <div class="project-status">Paid Ads</div>
</div>

<p>Worked with Facebook and Instagram campaigns to support brand visibility and lead generation.</p>
<div class="project-preview">
  <img class="gallery-img" src="assets/images/2c.png" alt="Cybersecurity project preview">
  <p>Advertising campaign dashboard visualization representing audience targeting, Meta Ads management, lead generation campaigns, budget optimization and performance monitoring activities.</p>
</div>

<h3>Tools Used</h3>
<div class="tech-stack">
  <span>Meta Ads Manager</span><span>Instagram</span><span>Facebook</span><span>Canva</span><span>Excel</span>
</div>

<h3>Responsibilities</h3>
<ul>
  <li>Audience targeting</li>
  <li>Campaign monitoring</li>
  <li>Creative coordination</li>
  <li>Lead generation support</li>
  <li>Performance tracking</li>
</ul>
`,

social: `
<div class="project-hero">
  <div>
    <h2>Social Media Management</h2>
    <p>Content Planning & Brand Visibility</p>
  </div>
  <div class="project-status">Organic Marketing</div>
</div>

<p>Managed social media activities to improve brand presence, engagement and communication.</p>
<div class="project-preview">
  <img class="gallery-img" src="assets/images/3c.png" alt="Cybersecurity project preview">
  <p>Social media management workspace visualization representing content planning, post scheduling, audience engagement, brand communication and social media growth activities.</p>
</div>

<h3>Tools Used</h3>
<div class="tech-stack">
  <span>Instagram</span><span>Facebook</span><span>Canva</span><span>Content Calendar</span>
</div>

<h3>Responsibilities</h3>
<ul>
  <li>Content planning</li>
  <li>Post scheduling</li>
  <li>Caption writing</li>
  <li>Audience engagement</li>
  <li>Brand storytelling</li>
</ul>
`,

website: `
<div class="project-hero">
  <div>
    <h2>Website Management</h2>
    <p>Content Updates & Digital Operations</p>
  </div>
  <div class="project-status">Web Management</div>
</div>

<p>Handled website updates and digital platform coordination as part of marketing and IT operations.</p>

<div class="project-preview">
  <img class="gallery-img" src="assets/images/4c.png" alt="Cybersecurity project preview">
  <p>Website administration and content management visualization representing website updates, landing page maintenance, content publishing, user experience improvements and digital operations management.</p>
</div>

<h3>Tools Used</h3>
<div class="tech-stack">
  <span>WordPress</span><span>HTML</span><span>CSS</span><span>Zoho Mail</span><span>Google Workspace</span>
</div>

<h3>Responsibilities</h3>
<ul>
  <li>Website content updates</li>
  <li>Landing page coordination</li>
  <li>Digital asset management</li>
  <li>Basic technical supervision</li>
  <li>Vendor coordination</li>
</ul>
`,
leadgen: `
<div class="project-hero">
  <div>
    <h2>Lead Generation</h2>
    <p>Student Recruitment & Enquiry Handling</p>
  </div>
  <div class="project-status">Marketing Operations</div>
</div>

<p>
Hands-on experience in handling student enquiries, follow-ups, lead nurturing and conversion-focused communication within an educational consultancy environment.
</p>
<div class="project-preview">
  <img class="gallery-img" src="assets/images/6c.png" alt="Cybersecurity project preview">
  <p>Lead generation and student recruitment dashboard visualization representing enquiry management, lead tracking, follow-up processes, CRM operations and conversion-focused communication workflows.</p>
</div>

<h3>Tools Used</h3>
<div class="tech-stack">
  <span>Zoho CRM</span>
  <span>WhatsApp Business</span>
  <span>Excel</span>
  <span>Email Marketing</span>
  <span>Google Workspace</span>
</div>

<h3>Responsibilities</h3>
<ul>
  <li>Lead handling and follow-up</li>
  <li>Student enquiry management</li>
  <li>WhatsApp and email communication</li>
  <li>Lead status tracking</li>
  <li>Campaign response coordination</li>
</ul>
`
};

const modal =
document.querySelector(".project-modal");

const modalBody =
document.getElementById("modalBody");

document.querySelectorAll(".view-project")
.forEach(button => {

  button.addEventListener("click", () => {

    const project =
    button.dataset.project;

    modalBody.innerHTML =
    projectData[project];

    modal.classList.add("active");
    document.body.classList.add("modal-open");

  });

});

document.querySelector(".close-modal")
.addEventListener("click", () => {

  modal.classList.remove("active");
  document.body.classList.remove("modal-open");

});

modal.addEventListener("click", e => {

  if(e.target === modal){

    modal.classList.remove("active");
    document.body.classList.remove("modal-open");

  }

});
const lightbox =
document.querySelector(".image-lightbox");

const lightboxImage =
document.getElementById("lightboxImage");

document.addEventListener("click", e => {

  if(e.target.classList.contains("gallery-img")){

    lightbox.classList.add("active");

    lightboxImage.src = e.target.src;

  }

});

document.querySelector(".close-lightbox")
.addEventListener("click", () => {

  lightbox.classList.remove("active");

});

lightbox.addEventListener("click", e => {

  if(e.target === lightbox){

    lightbox.classList.remove("active");

  }

});