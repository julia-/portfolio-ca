# Portfolio

Demonstrate to prospective employers and other developers my coding experience and to showcase my projects.

## Design & Planning

My goal was to design and build a portfolio that was striking and memorable but still simple and minimal in design so it wouldn't distract from the purpose of the portfolio

I wanted to produce a design that showed my love for music and architecture through the use of typography and colour.

Before defining a concept, I explored portfolios from developers, designers and creative agencies to help decide which direction I wanted to take with the design. I also created a [mood board](http://pin.it/rm5GGe5) in Pinterest to collect illustrations, designs, colour swatches, and typography examples to gain inspiration.

I was then able to start developing potential designs using mainly black/white as typography was going to be the hero of the design.

![Concept v1](/dest/assets/img/design-mockup-01.png?raw=true "Concept v1")![Concept v2](/dest/assets/img/design-mockup-02.png?raw=true "Concept v2")

![Concept v3](/dest/assets/img/design-mockup-03.png?raw=true "Concept v3")![Concept v4](/dest/assets/img/design-mockup-04.png?raw=true "Concept v4")

![Concept v5](/dest/assets/img/design-mockup-05.png?raw=true "Concept v5")![Concept v6](/dest/assets/img/design-mockup-06.png?raw=true "Concept v6")

## Final design
My chosen design was heavily inspired by minimalism and punk/new wave-influenced graphic design that used a two to three colours and thick black lines. I was aiming to capture a sense of clarity and contrast, as well as bold, clean lines and I believe I achieved this through my font selection - the main font ([Big John](https://www.behance.net/gallery/19484739/big-john-slim-joe-free-font/)) is bold, geometric with sharp angles.

My colour palette consists of French Lilac and Mine shaft. In choosing these colours, I was looking for either bright, neon colours or more muted, pastel colours to offset the starkness of the dark grey. I feel that the choice of French Lilac gives enough brightness and contrast, while also providing a dramatic effect.

### Logo
[Figma | Logo and Favicon](https://www.figma.com/file/5NCkU4WZgAZ4x7Jls6j6bv/Portfolio-Logo)
### High-fidelity wireframes
[Figma | Mobile](https://www.figma.com/file/Zt6Qkb4ANk2yjBCJP06Dy55g/Portfolio-Mobile)

[Figma | Tablet](https://www.figma.com/file/ahDJmWRv9QYOvMB5OQeS1G/Portfolio-Tablet)

[Figma | Desktop](https://www.figma.com/file/98uqAHDzHpsptFj6fotAG2/Portfolio-Desktop)

### Style guide
[Style Guide](https://juliaryan.io/assets/doc/portfolio-styleguide.pdf)
## Usability
I opted to using an hamburger style icon for the navigation menu but included the word 'menu' next to it for users to easily identify what the icon means. I plan to look at other possibly ways to not have the navigation hidden especially on mobile view.

I need to make changes to the form so when a user clicks a field the lable/placeholder is moved up just above the input field.

## Development

I used [Pug](https://pugjs.org) and [Stylus](http://stylus-lang.com/) and used [Grunt](https://gruntjs.com/) to compile the Pug and Stylus files and to perform other tasks including generating responsive images.
### Tasks
- [x] `git init`
- [x] Create repo on GitHub
- [x] Set up folder and file structure
- [x] Grunt - configure tasks
- [x] Extra small view (mobile)
- [ ] Small view (mobile)
- [x] Medium view (tablet)
- [x] Large view (laptop)
- [ ] Extra large view (desktop)
- [x] Responsive images
- [ ] Accessibility
- [x] Navigation
- [x] Contact form in Netlify
- [x] Add AJAX to form
- [x] Gallery
- [x] Add hover effect to images
- [ ] Gallery fullscreen overlay
- [ ] Single page app (react)
- [x] Publish portfolio
- [x] Add custom domain
- [x] Set up SSL/HTTP2

![Colour contrast - French Lilac text](/dest/assets/img/colour-contrast-purple.png?raw=true "Concept v5")![Colour contrast - Mine shaft text](/dest/assets/img/colour-contrast-grey.png?raw=true "Concept v6")
## Challenges and final thoughts
### Images
- Displaying project images without taking away from design
- Project layout
- Display content about each project

This was one of the sore points with my design. The project screenshots included colours that clashed with the design. To overcome this, I removed the colour from the screenshots and applied a transparent layer using French Lilac from my colour scheme.

I would like to look at other possibilities for displaying the images as I feel the images are somewhat washed out which takes away from the impact from the project.

### Colour scheme
#### Restrictive colour scheme

By using a two colour scheeme it has increased the difficulty adding other elements to the website such as notifications for successfully submitting the form.
### Navigation
#### Single page app

The fullscreen overlay for the navigation menu has issues with scrolling after selecting certain menu options. I plan to change my site to a single page app or revisit navigation completly.

Ideally I would like to avoid using a hamburger type of symbol for the menu. I have added the word 'menu' next to the symbol but would prefer to find a way to not hide navigation while retaining the integrity of the design.
### Compatibility and display
#### Breakpoints

Due to implementation of design, I have found it challenging to ensure portfolio displays as wanted on different viewports. This is something that I will need to revisit when I continue to improve my portfolio.

#### Testing

I have been unable to test my portfolio on non-iOS devices.

### jQuery and not JavaScript
I would have prefered to have used JavaScript over jQuery but due time constraints I went with jQuery.
