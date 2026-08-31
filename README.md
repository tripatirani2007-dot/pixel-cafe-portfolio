# Tripti's Pixel Cafe

## Lovable Prompt

Create a polished, interactive personal portfolio website for **Tripti Rani**, based on the attached CV and mood board. The visual direction should combine a warm café-inspired palette, pixel-art creativity, and a clean modern developer portfolio layout.

### Design direction

Use the mood board’s warm, muted color palette:

- **Bistre:** `#462506` — primary dark background and headings.
- **Golden brown:** `#9F6920` — buttons, active states, and accents.
- **Rob Roy:** `#DAA755` — highlights, borders, and interactive elements.
- **Marzipan:** `#E9C579` — soft cards and secondary surfaces.  above pdf and docx file are my certification proof
- **Buttermilk:** `#F1DEAF` — main background and light text areas.

Maintain strong accessibility and contrast:

- Use bistre or a very dark brown for primary text on light backgrounds.
- Use buttermilk or warm white text on dark brown backgrounds.
- Avoid using golden brown for small body text on light backgrounds.
- Add visible hover, focus, and active states to every interactive element.
- Keep the design elegant rather than overly decorative.

Use a refined combination of:

- Clean serif typography for the name and major headings.
- A modern sans-serif font for navigation, body text, buttons, and metadata.
- Subtle pixel-art details inspired by the mood board: a coffee cup, books, glasses, chocolate, speech bubble, or small pixel decorations.
- Rounded cards, soft shadows, thin brown borders, and gentle transitions.
- Do not allow decorative graphics to reduce readability or distract from the content.

### Layout and golden-ratio composition

Build the page using a golden-ratio-inspired layout:

- Use an approximately **62/38 split** for the hero section.
- Place the introduction and name in the larger visual area.
- Place a pixel-art illustration or interactive profile panel in the smaller area.
- Use spacing based on a consistent scale such as `8px, 13px, 21px, 34px, 55px`.
- Make the name the strongest visual element on the page.
- Use a clear hierarchy: name → introduction → call to action → supporting details.
- Keep the main content container centered with generous whitespace.
- Ensure the layout remains balanced on desktop, tablet, and mobile screens.

### Navigation

Create a sticky responsive navbar with the following sections:

- Introduction
- Skills
- Projects
- Education
- Contact

Requirements:

- Highlight the active section while scrolling.
- Use smooth scrolling when a navbar item is clicked.
- Add a mobile hamburger menu with an animated open/close state.
- Keep the navbar compact and readable.
- Include a small coffee-inspired or pixel-art logo mark next to “Tripti Rani”.
- Add a theme toggle only if it remains consistent with the warm palette; the alternate theme should use deep bistre, coffee brown, and muted cream rather than bright colors.

### Hero section

Create an inviting introduction section with:

**Tripti Rani**

Subtitle:

> Computer Science and Engineering Student | Developer | Problem Solver

Add a concise introduction:

> I’m Tripti Rani, a Computer Science and Engineering student passionate about programming, IoT, problem-solving, and building practical technology projects. I enjoy learning through hands-on development, coding practice, hackathons, and creative experimentation.

Include two prominent buttons:

- **View Projects** — scrolls to the projects section.
- **Contact Me** — scrolls to the contact section.

Add a compact information panel containing:

- Lovely Professional University, Punjab, India.
- B.Tech in Computer Science and Engineering.
- CGPA: 7.46.
- Currently studying since August 2025.

Use an elegant pixel-art illustration on the right side, inspired by the attached mood board. The illustration may include a steaming coffee cup, books, glasses, or a small creative workspace.

### Skills section

Create an interactive skills section with categorized cards or filterable tabs.

Categories:

- Languages
- Frameworks
- Tools and Platforms
- Soft Skills

Display the following information:

**Languages**

- C++
- JavaScript
- C
- Python

**Frameworks and web technologies**

- HTML
- CSS
- Node.js

**Tools and platforms**

- MySQL
- MongoDB
- Arduino IDE
- MQTT
- Wi-Fi
- Supabase
- Lovable

**Soft skills**

- Problem-solving
- Teamwork
- Project management
- Adaptability

Interaction requirements:

- Add hover animations to skill cards.
- Show a subtle progress or proficiency indicator only if it does not imply unsupported exact skill levels.
- Use icons sparingly and consistently.
- Allow the user to filter skills by category.
- Include keyboard-accessible tabs or filter buttons.

### Projects section

Create a visually engaging project card for:

**IoT-Based Water Monitoring System**

Date: December 2025

Description:

> Developed a real-time IoT-based water monitoring system using ESP32 and multiple sensors.

Key features:

- Monitored TDS, pH, turbidity, temperature, water flow, and tank level.
- Used Wi-Fi and MQTT for real-time cloud data transmission.
- Built a monitoring dashboard using Lovable and Supabase.
- Added anomaly alerts for unusual readings.

Technology tags:

- ESP32
- Arduino IDE
- MQTT
- Wi-Fi
- Supabase
- Lovable

Make the project card interactive:

- Add an expandable details view.
- Add a “View Details” button.
- Include animated technology tags.
- Add a placeholder area for a project screenshot or dashboard preview.
- If no project URL is available, do not invent one. Use a disabled “Live Demo” button or omit it.
- Add a future-ready GitHub button that can be enabled once a repository link is provided.

Use the golden-ratio layout within the project card: approximately 62% for the project visual and 38% for the project information.

### Certificates and achievements

Add a compact timeline or card section containing:

**Certificates**

- Python Programming — Infosys, September 2025.
- Time Management — Infosys, December 2025.
- C Programming — Neo Colab, May 2025.
- Community Development Program — Government School, June 2026.

**Achievements**

- Actively participated in coding practice and problem-solving using C++ and Data Structures & Algorithms.
- Developed an IoT-Based Water Monitoring System as an academic project.
- Participated in technical and coding events and hackathon activities.
- Continuously improved programming skills through competitive programming and hands-on projects.
- Secured second position in a district-level drawing competition during Class 10.

Use small pixel-art icons or badges, but keep the section professional and easy to scan.

### Education section

Create a clean vertical timeline with:

**Lovely Professional University**

- Bachelor of Technology — Computer Science and Engineering.
- CGPA: 7.46.
- Punjab, India.
- Since August 2025.

**Upgraded +2 High School, Indira Nagar, Lucknow**

- Intermediate.
- Percentage: 81.4%.
- April 2023 – March 2025.

**Upgraded +2 High School, Bhitariya, Barabanki**

- Matriculation.
- Percentage: 91.6%.
- April 2022 – March 2023.

Add subtle timeline animations when the section enters the viewport.

### Contact section

Create a warm, welcoming contact area with:

- Email: `tripitarani2007@gmail.com`
- Mobile: `+91-9905906913`
- LinkedIn: `https://www.linkedin.com/in/tripti722/`
- GitHub: `https://github.com/tripitarani2007-dot`

Requirements:

- Make email, phone, LinkedIn, and GitHub clickable.
- Add a contact form with fields for name, email, and message.
- Validate required fields and email format.
- Show a clear success or error message.
- Do not claim that a message was sent unless the form is connected to a working backend.
- If no backend is available, display a polished “Form preview only” state or configure it for a service only after credentials are supplied.
- Add copy-to-clipboard buttons for email and phone number.
- Include social icons with accessible labels.

### Interaction and animation

Use subtle, purposeful interactions:

- Smooth section scrolling.
- Scroll-spy navigation.
- Fade-up animations as sections enter the viewport.
- Gentle hover elevation for cards.
- Pixel-art elements that slightly move or shimmer on hover.
- Animated underline for active navigation items.
- Expand/collapse project details.
- Filterable skill categories.
- Toast notifications for copy actions.
- Respect `prefers-reduced-motion` and disable nonessential animation when enabled.
- Ensure all interactions work with keyboard navigation.

### Technical requirements

Build the website as a responsive single-page portfolio application.

Use:

- React.
- TypeScript.
- Tailwind CSS.
- A clean component-based architecture.
- Lucide icons or another consistent icon library.
- CSS variables for the color palette.
- Semantic HTML.
- Accessible labels, focus states, and keyboard navigation.
- Responsive breakpoints for mobile, tablet, and desktop.
- Optimized image loading.
- No unnecessary gradients, neon colors, excessive glassmorphism, or generic template styling.

Define the design tokens approximately as:

```css
:root {
  --bistre: #462506;
  --golden-brown: #9f6920;
  --rob-roy: #daa755;
  --marzipan: #e9c579;
  --buttermilk: #f1deaf;
  --warm-white: #fffaf0;
}
```

### Content and accuracy rules

Use only the information supplied in the CV. Do not invent:

- Work experience.
- Job titles.
- Project links.
- Employer names.
- Skill proficiency percentages.
- Awards beyond those listed.
- Additional contact details.

Where information is unavailable, use a clear placeholder or omit the element.

### Final quality checklist

Before finishing:

- Verify that the name “Tripti Rani” is prominent in the hero section.
- Verify that all navbar links work.
- Verify that the active section updates while scrolling.
- Verify responsive behavior on small screens.
- Check text contrast against every background.
- Make the contact details clickable.
- Make the project card interactive.
- Ensure the layout follows the approximate 62/38 golden-ratio composition.
- Ensure the visual language matches the café, chocolate, cream, pixel-art mood board.
- Keep the result polished, personal, modern, and suitable for a student developer portfolio.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/dd822823-1273-4d10-b1af-ee42a8b756bc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
