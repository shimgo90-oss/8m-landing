// Root path (/) renders the main landing.
// The old "Design Sandbox" modal demo that lived here was a preview-deploy test
// and has been removed. The full landing lives in ./landing/page.tsx and is
// re-exported so both "/" and "/landing" serve the same experience.
export { default } from "./landing/page";
