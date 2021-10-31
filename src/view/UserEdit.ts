import { User, UserProps } from "../models/User";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";
import { View } from "./View";

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: "#user-show",
      userform: "#user-form"
    };
  }
  onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userform, this.model).render();
  }
  template(): string {
    return `
    <div id="user-show"></div>
    <div id="user-form"></div>
       `;
  }
}
