# Redocly landing page gallery

Welcome to Redocly's Landing Page Gallery!
In addition to Markdown pages, the following Redocly products allow you to build custom pages with React: [Realm](https://redocly.com/realm), [Revel](https://redocly.com/revel), and [Reef](https://redocly.com/reef).

This repository contains a collection of example landing pages built using React and related tooling.
The examples are designed to help you learn how to create custom React pages in your documentation.

## Example pages

The gallery has the following example pages available:

<div style="display: flex; align-items: start; margin-bottom: 10px;">
  <img 
    src="images/d.png"
    alt="Mock SaaS landing page thumbnail"
    style="max-width: 360px; margin-right: 20px;"
  />
  <div>
    <h4>Mock SaaS landing page</h4>
    <p>
      A sleek, modern landing page for a SaaS product. Features a full-width hero with CTA, highlighted features, full-width quote, pricing plans, and email subscription.
    </p>
    <p>
      <b>Tools:</b> React, styled-components
    </p>
    <p>
      <a href="mock-saas/index.page.tsx">View source code</a>
    </p>
  </div>
</div>

<div style="display: flex; align-items: start; margin-bottom: 10px;">
  <img 
    src="src/pages/product-overview/thumbnail.png"
    alt="Training portal landing page thumbnail"
    style="max-width: 400px; margin-right: 20px;"
  />
    <div>
    <h4>Redocly training portal landing page</h4>
    <p>
      An example landing page built for training and onboarding. Features hero with gradient background and responsive content cards with icons.
    </p>
    <p>
      <b>Tools:</b> React, styled-components
    </p>
    <p>
      <a href="legacy-portal/training.page.tsx">View source code</a>
    </p>
  </div>
</div>

## Table of contents

- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Requests](#requests)

## Usage

Follow these steps to run the development server and preview the landing pages:

1. Clone the repo:

    ```bash
    git clone https://github.com/Redocly/landing-page-gallery.git
    ```

1. Navigate to the project folder.

1. Install project dependencies: `npm install`.

1. Start the development server: `npm run start` (or `npx @redocly/cli@latest preview`)

1. Click the **Preview URL** in the console to open project in browser.

## Project structure

Each landing page is self-contained in it's own folder, including any components or resources needed for that page.

Dependencies are managed from the central `package.json` file.

## Contributing

Contributions to the Landing page gallery are quite welcome.
Follow these steps if you'd like to add a new example or improve an existing one:

1. Fork the repo

1. Create new branch for your changes

1. Make your changes and follow the project structure

1. Submit a pull request with description of your changes or additions

1. If adding a new page, add thumbnail and description to `README.md`

## Requests

We'd like to expand the gallery with new and useful examples.
If there's a specific page or React-based tool you'd like an example of, please open an issue using our issue template.

We'll review issues and consider adding them in the future.
