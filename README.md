# SvelteKit SCSS

A minimal sample project that uses the basic configuration to use SCSS and load SCSS variables into Svelte template components like:

```html
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style lang="scss">

    @import "../scss/variables";

    h1 {
        color: $color-1;
    }
</style>
```