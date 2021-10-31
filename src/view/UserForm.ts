import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventMap(): { [key: string]: () => void } {
    return {
      "click:#set-age": this.onSetAgeClick,
      "click:#set-name": this.onSetNameClick,
      "click:#save-model": this.onSaveModel
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    if (input && input.value !== "") {
      const name = input.value;
      this.model.set({ name });
    } else {
      alert("required");
    }
  };

  onSaveModel = (): void => {
    this.model.save();
  };

  template(): string {
    return `
    <div id="register-form" role="form" autocomplete="off" class="form" method="post" >
                               
    <div class="form-group">
        <div class="d-flex">
            
            <input id="forgetAnswer" name="forgetAnswer" placeholder="User Name"
                class="form-control" type="text" required>
                <button  class="btn btn-sm btn-primary btn-block btnForget"
            id="set-name">Change Name </button>
        </div>
    </div>
    <div class="form-group">
    <button  class="btn btn-sm btn-primary btn-block btnForget"
            id="set-age">Set Random Age</button>
        <button id="save-model" class="btn btn-lg btn-primary btn-block btnForget"
            >Save Data</button>
            
    </div>

</div>
        `;
  }
}

// <h2 class="text-center">User Name: ${this.model.get(
//     "name"
//   )}</h2>
//   <h2 class="text-center">User Age: ${this.model.get(
//     "age"
//   )}</h2>
