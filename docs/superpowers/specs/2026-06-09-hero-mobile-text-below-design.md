# Spec: Hero Mobile Text Below Option

Add a layout option to the Full Width Hero section that allows merchants to drop the hero content (text and buttons) below the background image on mobile devices, ensuring high legibility for light/dark theme aesthetics.

## Proposed Design

### 1. Schema Settings
Add a checkbox toggle under `overlay_opacity` to control the behavior:
- **ID**: `show_text_below_mobile`
- **Type**: `checkbox`
- **Label**: `Show text below image on mobile`
- **Default**: `false`

### 2. Layout Class
Append `hero--text-below-mobile` conditionally:
```liquid
<div class="coops-hero-{{ section.id }} hero--{{ section.settings.section_height }}{% if section.settings.show_text_below_mobile %} hero--text-below-mobile{% endif %}">
```

### 3. CSS Overrides
Inside the section-specific `{%- style -%}` tag under the `@media screen and (max-width: 768px)` media query:
- Change the container layout to a flex column layout.
- Change `.coops-hero__bg` to `position: relative`, letting it occupy its natural height/aspect-ratio on mobile instead of filling absolute space.
- Disable the image overlay overlay.
- Adjust padding of `.coops-hero__content` and position it relatively below the image.
