<template>                        
<!-- Introduction of the main page start Edit by zwbai at20180310-->
<div id="introduction">
    <section class="hero is-medium intro">
    <div class="hero-body">
        <div class="container">
            <div class="columns">
                <div class="intro-column is-content">
                    <div class="intro-content">
                    <h1 class="title intro-title">
                    这里是一个开源的研究信息分享网站，主要基于
                    Python JS Prossessing等语言进行实现。相关代码都可以可以在我的Github上folk 
                    
                    </h1>
                    <div id="ghbtns" class="intro-ghbtns">
                    <iframe src="https://ghbtns.com/github-btn.html?user=zwbai&amp;repo=ITS-web&amp;type=star&amp;count=false&amp;size=large" frameborder="0" scrolling="0" width="80px" height="30px"></iframe>
                    <iframe src="https://ghbtns.com/github-btn.html?user=zwbai&amp;repo=ITS-web&amp;type=fork&amp;count=false&amp;size=large" frameborder="0" scrolling="0" width="80px" height="30px"></iframe>
                    </div>

                    <pre id="npm" class="intro-npm"><code>Flok my code on Github</code><code id="npmCopy" class="intro-npm-copy" data-clipboard-text="npm install bulma">copy</code></pre>

                    <nav class="intro-buttons">
                    <a class="button is-primary is-large" href="https://github.com/zwbai/ITS-web/archive/master.zip">
                        <span>
                        <strong>Download</strong>
                        <small>v1.0.1</small>
                        </span>
                    </a>
                    <a class="button is-light is-large" href="https://github.com/zwbai/ITS-web">
                        <span>
                        <span>View</span>
                        <strong>docs</strong>
                        </span>
                    </a>
                    </nav>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column is-video">
                    <div id="introVideo" class="intro-video">
                        <div class="intro-shadow" style="background-image">

                        </div>
                    </div>
                    <div>
                        <span>Video by <a href="http://www.vuemastery.com/" target="_blank">Vue Mastery</a></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    <section class="hero is-primary">
    <div class="hero-body">
        <div class="container">
        <nav class="columns">
            <a class="column has-text-centered" href="https://bulma.io/documentation/overview/responsiveness/">
            <span class="icon is-large" style="margin-right: -15px;">
                <svg class="svg-inline--fa fa-mobile-alt fa-w-10 fa-lg" aria-hidden="true" data-prefix="fas" data-icon="mobile-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg><!-- <i class="fas fa-lg fa-mobile-alt"></i> -->
            </span>
            <span class="icon is-large">
                <svg class="svg-inline--fa fa-tablet-alt fa-w-14 fa-2x" aria-hidden="true" data-prefix="fas" data-icon="tablet-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm176-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h328c6.6 0 12 5.4 12 12v312z"></path></svg><!-- <i class="fas fa-2x fa-tablet-alt"></i> -->
            </span>
            <span class="icon is-large" style="margin-right: 10px;">
                <svg class="svg-inline--fa fa-desktop fa-w-18 fa-3x" aria-hidden="true" data-prefix="fas" data-icon="desktop" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path></svg><!-- <i class="fas fa-3x fa-desktop"></i> -->
            </span>
            <p class="title is-4" style="margin-top: 0.5em;"><strong>100% Responsive</strong></p>
            <p class="subtitle">Designed for <strong>mobile</strong> first</p>
            </a>
            <a class="column has-text-centered" href="https://bulma.io/documentation/overview/modular/">
            <span class="icon is-large">
                <svg class="svg-inline--fa fa-cubes fa-w-16 fa-3x" aria-hidden="true" data-prefix="fas" data-icon="cubes" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"></path></svg><!-- <i class="fas fa-3x fa-cubes"></i> -->
            </span>
            <p class="title is-4" style="margin-top: 0.5em;"><strong>Modular</strong></p>
            <p class="subtitle">Just import what you <strong>need</strong></p>
            </a>
            <a class="column has-text-centered" href="https://bulma.io/documentation/columns/basics/">
            <span class="icon is-large">
                <svg class="svg-inline--fa fa-css3 fa-w-16 fa-3x" aria-hidden="true" data-prefix="fab" data-icon="css3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"></path></svg><!-- <i class="fab fa-3x fa-css3"></i> -->
            </span>
            <p class="title is-4" style="margin-top: 0.5em;"><strong>Modern</strong></p>
            <p class="subtitle">Built with <strong>Flexbox</strong></p>
            </a>
            <a class="column has-text-centered" href="https://github.com/jgthms/bulma">
            <span class="icon is-large">
                <svg class="svg-inline--fa fa-github fa-w-16 fa-3x" aria-hidden="true" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg><!-- <i class="fab fa-3x fa-github"></i> -->
            </span>
            <p class="title is-4" style="margin-top: 0.5em;"><strong>Free</strong></p>
            <p class="subtitle">Open source on <strong>GitHub</strong></p>
            </a>
        </nav>
        </div>
    </div>
    </section>
    
</div>
</template>
