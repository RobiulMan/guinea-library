import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
         
    <img src="https://i.ibb.co/rshckyB/car-key.png" alt="car-key">
    <p>Save User data and show on realtime</p>
        <p>User Name: <strong>${this.model.get("name")}</strong></p>
        <p>User Age:<strong> ${this.model.get("age")}</strong></p>
        
       `;
  }
}
