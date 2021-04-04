define([
    "skylark-langx/langx",
    "./webgl",
    "./primitives/three"
], function(langx,webgl,threejs) {
    langx.mixin(webgl,threejs);

    return webgl;
});
