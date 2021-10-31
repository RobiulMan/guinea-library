import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserList } from "./view/UserList";

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on("change", () => {
  const root = document.querySelector("#root");
  if (root) {
    new UserList(root, users).render();
  }
});
users.fetch();
