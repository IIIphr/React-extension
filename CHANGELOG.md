# Change Log

## [TODO]

- Multiple locale support (instead of only English and Persian).
- Adding examples for each guide.
- Adding options for context menu buttons (enabled, disabled)

## [Unreleased]

## [0.9.0]

- Added 5 APIs.

## [0.8.0]

- Added the ability to properly parse components and html tags. The parser should correctly recognize if it's a tag and return the opening tag for processing.
- Added 4 components.
- Added `JSX` higlighting to `prism`.

## [0.7.0]

Because of some problems with the icon (probably typos in file name), the version was jumped from [0.4.0] to [0.7.0].
- Changed the icon of the extension.
- Added proper changelog.

## [0.4.0] (and before)

I honestly didn't see the changelog before [0.4.0]. So it contains everything (although briefly) from the initial pre-release vresions.
- Added English guides for most of the hooks.
- Seperated English and Persian guide menus, and speretaed their context menu buttons.
- Now using Markdown files for guides (Using `markdown-it`).
- Added the ability to make texts Right-To-Left properly in panels (Using `container` plugin for `markdown-it` and `direction: rtl;`).
- Added code block highlighting (Using `container` plugin for `markdown-it` and `prism`).