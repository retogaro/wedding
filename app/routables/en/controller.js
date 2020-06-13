import Controller from "@ember/controller";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class EnController extends Controller {
  queryParams = ["modal"];

  @tracked modal = null;
  @tracked showModal = false;

  @action
  openModal() {
    console.log("openModal");
    this.showModal = true;
  }

  @action
  closeModal() {
    console.log("closeModal");
    this.showModal = false;
  }
}
