// noinspection JSUnusedGlobalSymbols

// There a bug with TDesign Vue Next when handling blur event.
// See: https://github.com/Tencent/tdesign-vue-next/issues/4472
// This middleware will be executed before navigating to a new route.
export default defineNuxtRouteMiddleware(() => {
  document.querySelectorAll("body textarea").forEach((textarea) => {
    textarea.remove();
  });
});
