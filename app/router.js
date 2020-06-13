// index         https://miaandreto.wedding/
// zh            https://miaandreto.wedding/zh/
// en            https://miaandreto.wedding/en/
// en.invitee    https://miaandreto.wedding/en/42de87d5
// en.invitee    https://miaandreto.wedding/en/40f2l4f3
// en.invitee    https://miaandreto.wedding/en/abcdeef6
//
//
//
// https://miaandreto.wedding/en/40f2l4f3/rsvp/guest/1
// https://miaandreto.wedding/en/40f2l4f3/rsvp/guest/2
// https://miaandreto.wedding/en/40f2l4f3/rsvp/guest/3
// https://miaandreto.wedding/en/40f2l4f3/rsvp/guest/4
// https://miaandreto.wedding/en/40f2l4f3/rsvp/diet
// https://miaandreto.wedding/en/40f2l4f3/rsvp/thanks
//
// https://miaandreto.wedding/en/40f2l4f3/rsvp/are-you-invited
// https://miaandreto.wedding/en/40f2l4f3/rsvp/request-invitation
// https://miaandreto.wedding/en/40f2l4f3/rsvp/check-email
// https://miaandreto.wedding/en/40f2l4f3/rsvp/be-in-touch
//
// person.firstName            string
// person.lastName             string
// person.email                string
// person.confirmed            boolean
// person.dietaryRequirement   string
//
// person.relations
//
// partner
// kid1
// kid2
// +1

import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route("en", function() {
    this.route("invitee", { path: "/:uuid" });
  });
  this.route("zh");
});
