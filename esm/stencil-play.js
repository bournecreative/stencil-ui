import { p as promiseResolve, b as bootstrapLazy } from './index-584eff7c.js';
export { s as setNonce } from './index-584eff7c.js';

/*
 Stencil Client Patch Browser v4.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["accordion-component",[[1,"accordion-component",{"isAccordionOpen":[32]}]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});

//# sourceMappingURL=stencil-play.js.map