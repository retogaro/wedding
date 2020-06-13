import Route from "@ember/routing/route";

// CSS, HTML: kebab-case
// JS: camelCase
// Ruby: snake_case

export default class IndexRoute extends Route {
  beforeModel() {
    console.log("redirected to English");
    this.transitionTo("en");
  }
  model() {
    console.log("hello");
  }
  afterModel() {
    console.log("goodbye");
  }
}
