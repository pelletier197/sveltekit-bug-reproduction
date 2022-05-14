This is a simple project used to report bug on svelte-kit. 

Issue is caused by `paths.base` property. When set, running `pnpm build` does not generate the `index.html`. However, when unset (comment the line), `index.html` is generated.

In my project, `index.html` redirects to a dynamic page, so the entirety of my website is simply not generated. 
