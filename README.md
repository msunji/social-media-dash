# Frontend Mentor: Social Media Dashboard (with theme switcher)

[View the Challenge](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H/) | [View the Solution](https://fe-mentor-social-media-dash.vercel.app/)

## Overview

For this challenge, user's need to be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

Here's how the project looks like on desktop:

![Desktop Preview](https://github.com/msunji/social-media-dash/blob/main/public/img/desktop-preview-updated.png)

<!-- And mobile:

![Desktop Preview](https://github.com/msunji/social-media-dash/blob/main/public/img/mobile-preview.png) -->

I thought this would be a good opportunity for me to get more familiar with styled-components and theming. I learned a bit more about using the `ThemeProvider` wrapper component.

I added a tiny bit more to this project's dark mode toggle function by making the choice of theme persist in localstorage. That way, it doesn't always revert back to the default theme (which is light mode in this case).

One issue that gave me a bit of grief was the fact that the layout was shifting on load. I eventually realised that a transition on the `body` element was the cause of much of my frustration.

## Built with

- React (Bootstrapped with CRA)
- styled-components
- styled-reset (CSS reset)
- Flexbox
- CSS Grid
- Hosted with Vercel

## Credits

I used patterns from [lstore.graphics](https://lstore.graphics/) to zhuzh up the screenshots you see above.
