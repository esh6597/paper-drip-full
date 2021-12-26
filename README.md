# Thanks for checking out Paper Drip!

Paper Drip aims to be an educational website about origami, with the ability
for users to learn from tutorials, buy diagrams and post in forums to discuss
this art form.

The code also functions as a template/encyclopedia to the various features I've implemented. I tried to avoid pasting code from other projects by parsing lines with added comments so other users know exactly what's happening. Config files have comments in them as well for people who are used to using express-generator or create-react-app.

This web app is a passion project about origami to help me better cement my
understanding of MERN stack, Sass and more. This repository includes both
client and API packages, but both are licensed identically below.

Currently a work in progress; please check back soon! If you have any questions
or comments (even scathing criticism), feel free to contact me via Github!

### Currently working on:

Client: SASS styling and reorganization/redesign of theme
API: updating routes to match front end

Currently rehauling the old db.json file to match with Mongoose Schema for
easier database building later on as well as easier testing for client code.

# About

This isn't a newfangled library or anything like that; Paper Drip is just a 
React SPA that includes a store, blog, user accounts, forums and more.

Nonetheless, see documentation for some extra scripts I've included.

### Current Features

These are features that were already in the original website or were recently
added:

- Mongoose Schemas and validation
- User account tiers (Standard, Moderator, Author, Admin)
- Manual scaffolding; with extensive comments explaining what normally auto-generated files do for reference
- Package.json scripts (use Yarn!) detailing dependencies
- SASS files and style variables for easier style editing

### Features in Development:

These are features that will be added over the course of the next few weeks:

- User login, 3rd party login, user settings
- Visually functional shop and database (no ecommerce support yet)
- About page with ability to contact the site owner
- Blog page that allows approved authors to post to

### Planned Features:

These are features that I intend on adding over the next few months, though
they are all tentative and subject to change.

- Functional shop: eCommerce support
- Forums that make use of the Moderator account tier
- Non-endless pages: overflow pages are hidden or navigable via extra pages
- Newsletter features
- Page search feature via tags and keywords
- Testing harness

Suggestions extremely welcomed.

# Usage/Documentation

### Package Scripts

When running CLIENT-SIDE code, feel free to use the yarn/npm about command
to find out more about the dependencies. You can chain :suffixes for more
information, ex: yarn about:help at /client in bash will display a list of suffixes to use.

Currently supported suffixes:
- :help
- :info
- :start
- :build
- :babel
- :webpack
- :yarn
- :react
- :sass

This app has no testing capability yet. This is a planned feature for future
maintainability in case anyone else wants to take over/explore.

# Licenses

All of the code in this project is available under the MIT license:

### MIT License

Copyright (c) 2021 Erin Shuang Han

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Find out more at https://opensource.org/licenses/MIT

### Creative Commons License

This work is licensed under a Creative Commons 
Attribution-NonCommercial-ShareAlike 4.0 International License. This license
applies to, but is not limited to:

- The website design
- All visual media except logos
- Blog posts and shop descriptions

As long as you give appropriate credit, use the same license, and include
a description of what changes were made, you are free to copy, change or
redistribute this material in any format for non-commercial purposes.

Find out more at https://creativecommons.org/licenses/by-nc-sa/4.0/