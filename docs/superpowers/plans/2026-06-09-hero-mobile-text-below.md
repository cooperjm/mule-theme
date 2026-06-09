# Hero Mobile Text Below Option Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a layout option to the Full Width Hero section that allows merchants to drop the hero content (text and buttons) below the background image on mobile devices.

**Architecture:** Add a checkbox toggle `show_text_below_mobile` to the schema of `sections/coops-hero-image.liquid`. Conditionally apply the class `hero--text-below-mobile` to the main container. In the mobile viewport media query of `{%- style -%}`, layout the container as a vertical flex column when that class is active, positioning the image relative with its aspect ratio and placing the text below.

**Tech Stack:** Shopify Liquid, CSS, HTML

---

### Task 1: Add Toggle Setting to Schema

**Files:**
- Modify: `sections/coops-hero-image.liquid`

- [ ] **Step 1: Locate schema settings and insert the toggle**
  
  In the settings array, right after `overlay_opacity` (around line 252), insert:
  ```json
    {
      "type": "checkbox",
      "id": "show_text_below_mobile",
      "label": "Show text below image on mobile",
      "default": false
    },
  ```

- [ ] **Step 2: Verify JSON syntax**
  
  Ensure there are no trailing commas or invalid JSON formatting in the schema settings.

- [ ] **Step 3: Commit**
  ```bash
  git add sections/coops-hero-image.liquid
  git commit -m "feat: add show_text_below_mobile setting to hero section schema"
  ```

---

### Task 2: Add Conditional Class to HTML Markup

**Files:**
- Modify: `sections/coops-hero-image.liquid`

- [ ] **Step 1: Modify container HTML to append the class**
  
  Replace:
  ```liquid
  <div class="coops-hero-{{ section.id }} hero--{{ section.settings.section_height }}">
  ```
  with:
  ```liquid
  <div class="coops-hero-{{ section.id }} hero--{{ section.settings.section_height }}{% if section.settings.show_text_below_mobile %} hero--text-below-mobile{% endif %}">
  ```

- [ ] **Step 2: Commit**
  ```bash
  git add sections/coops-hero-image.liquid
  git commit -m "feat: add conditional hero--text-below-mobile class to markup"
  ```

---

### Task 3: Add CSS Layout Overrides for Mobile Viewport

**Files:**
- Modify: `sections/coops-hero-image.liquid`

- [ ] **Step 1: Add mobile layout styles in styling block**
  
  Find the existing `@media screen and (max-width: 768px)` media query in the `{%- style -%}` tag (around line 44) and append:
  ```css
    .coops-hero-{{ section.id }}.hero--text-below-mobile {
      flex-direction: column;
      align-items: stretch;
      min-height: auto !important;
    }
    .coops-hero-{{ section.id }}.hero--text-below-mobile .coops-hero__bg {
      position: relative;
      width: 100%;
      height: auto;
      aspect-ratio: {{ mobile_ratio }};
      min-height: auto;
    }
    .coops-hero-{{ section.id }}.hero--text-below-mobile .coops-hero__overlay {
      display: none;
    }
    .coops-hero-{{ section.id }}.hero--text-below-mobile .coops-hero__content {
      position: relative;
      padding: 30px 20px;
    }
  ```

- [ ] **Step 2: Commit**
  ```bash
  git add sections/coops-hero-image.liquid
  git commit -m "feat: implement CSS overrides for mobile text below layout"
  ```

---

### Task 4: Verification

- [ ] **Step 1: Inspect generated liquid/CSS**
  
  Review the edited code to ensure all syntax is valid and brackets match.
