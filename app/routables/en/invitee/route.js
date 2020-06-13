import Route from "@ember/routing/route";

export default class EnInviteeRoute extends Route {
  model(params) {
    console.log(params);
    console.log(params.uuid);
    // debugger;
  }
}
