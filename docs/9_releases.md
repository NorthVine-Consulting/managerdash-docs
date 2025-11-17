---
sidebar_position: 8
title: Release Notes
---

## 🚦 ManagerDash v1.5.0 — The “Wait, This Feels Nicer” Release

17 November 2025

Lots of tiny tweaks, big reduction in “why is this weird?” moments.

🌱 Goals Behave Themselves
	•	Older goals without a type now gracefully fall back to “Development”, instead of getting confused and breaking your flow.
	•	Net effect: fewer surprises, no mystery states, and your existing data keeps working.

💬 Feedback & Dashboard, De-Cluttered
	•	The “Edit” option only shows up when feedback is actually editable, so you’re not clicking into dead ends.
	•	“Mark as delivered” now lives inside the action menu, right where you’d expect it.
	•	The Recent Feedback section on the dashboard is simplified, making it easier to scan and act instead of hunting for the right button.
	•	Icons are cleaned up and unified, so type indicators and feedback visuals feel coherent instead of “whatever we had lying around.”

🧼 Tiny UI Polish, Noticeable Calm
	•	Headings and sections (like Recent) get a bit more breathing room, making the layout feel less cramped.
	•	Small spacing and clarity tweaks across the dashboard make it easier to read at a glance between meetings.

## Version 1.4.0 — The “Wow, That’s a Lot of Icons” Release

16 November 2025

This release is basically a glow-up for your entire workflow. ManagerDash went to the spa, got a new wardrobe, and came back with opinions. Here’s what you’ll notice:

🌱 Goals Get Serious (But Still Friendly)
	•	Career goals are officially first-class citizens. You can now create, track, and report on them separately from development goals—because becoming a Principal Engineer is not a two-week sprint.
	•	Milestones look sharper and behave better when dragged, sorted, or stared at in frustration.
	•	Cleaner UI cues: target dates automatically hide for career goals, action buttons only show where they make sense, and the empty states finally look like they were designed on purpose.

🧠 Feedback, but Make It Delightful
	•	New and more consistent feedback statuses, types, and tag styles that help you quickly see what’s what.
	•	PR Review Panel now has the option to provide feedback, and remembers your context, so you don’t lose your place mid-thought.
	•	Notes get real behavior instead of floating around like confused post-its.
	•	Saved Reviews button hides itself when there’s… nothing saved.

👥 Teams & Contributors (Now With More Personality)
	•	Contributors everywhere (formerly “aliases”—we’ve grown).
	•	Random colors when adding people, for just the right sprinkle of chaos.
	•	Custom empty states for teams and dashboards, now with expressive icons that you can ejoy while you solve the problem of being understaffed.

🖼 Icons. All. The. Icons.

The SVG rebellion is complete.
Everywhere you looked before (goals, feedback, reports, dashboards, modals) -- boom, icons now.
Your retinas will thank you.

📊 Reports Actually Tell You Stuff Now
	•	Career vs. development goals are cleanly separated.
	•	Visual hierarchy is improved so you can skim like a boss.
	•	PR titles show correctly. (We know. It was time.)

🧪 Misc. Goodies
	•	Tooltips that actually behave inside their bounding boxes instead of running off screen like toddlers in a grocery store.

🔑 Licensing & Support
	•	Better version checking.
	•	More helpful activation experiences.

⸻

If you feel like everything suddenly looks cleaner, flows better, and gently nudges you toward being a more organized manager—you’re not imagining it. That’s v1.4.0 at work.

## Version 1.3.0 🔐

**Enhanced License Management**

We're excited to announce version 1.3.0, focusing on a more robust and user-friendly licensing system that streamlines both production and development workflows.

### Key Features

- **🔒 Enhanced License Security**: Strengthened license verification with product-specific validation, ensuring your license is tied directly to ManagerDash
- **⚡ Smart Activation Modal**: Redesigned activation experience with intelligent behavior that guides you through the licensing process seamlessly
- **⚙️ Unified Configuration**: License activation management is now integrated directly into the Configuration Modal for easy access and updates
- **🛠️ Developer-Friendly**: License checks are now intelligently bypassed in development mode, making local development faster and friction-free

This release builds on our solid foundation with focused improvements to licensing infrastructure, ensuring a smooth experience whether you're activating for the first time or managing your existing license.

---

## Version 1.0.0 🎉

**The Foundation of Modern Team Management**

Version 1.0.0 marks the official launch of ManagerDash, bringing together a comprehensive suite of tools designed to empower engineering managers with visibility, insights, and actionable data.

### Headline Features

#### 📊 **Multi-Dimensional Team Visibility**
- **Team Dashboard**: Get a bird's-eye view of your entire organization with customizable team layouts
- **Contributor Dashboard**: Manage team member profiles with color-coded tags, initials, and drag-and-drop team assignment
- **Individual Reports**: Generate detailed individual performance reports combining skills, goals, and contributions

#### 🎯 **Goals & Milestones**
- Create, track, and archive goals with full milestone support
- Collapsible goal trees for focused planning
- Goal reordering and reorganization to match shifting priorities
- Archive/unarchive capabilities to maintain historical context

#### 💪 **Skills Assessment & Radar Charts**
- Visual skills assessment with interactive radar charts
- Seniority level management with configurable weights
- Team-wide skills aggregation showing collective competencies
- Custom skill categories and CRUD operations
- Responsive assessment tracking that adapts to team changes

#### 🔍 **PR Review Dashboard**
- Automated GitHub PR fetching with intelligent caching
- Traffic light rating system for quick PR evaluation
- PRs grouped by repository for easy navigation
- Time-range filtering to focus on relevant periods
- Direct links to open PRs in browser

#### 💬 **Feedback Management**
- Structured feedback collection
- Clean, focused interface for writing and reviewing feedback
- Navigation and layout optimized for feedback workflows

#### 🎨 **Polish**
- **Dark Mode**: Full dark mode support throughout the application
- **Native Experience**: Custom app icons and signed DMG for macOS
- **Device-Bound Licensing**: Secure, device-specific license activation system
- **Persistent Storage**: Robust data persistence with schema validation

#### 📈 **Team Reports**
- Comprehensive team reports surfacing collective goals and skills
- Individual and team-level insights in one place
- Export capabilities for sharing with stakeholders

Version 1.0.0 represents months of development focused on creating an intuitive, powerful tool that engineering managers actually want to use. From the first sketch to this release, every feature has been designed with real management workflows in mind.

---

*Ready to transform how you manage your engineering team? Download ManagerDash today!*
