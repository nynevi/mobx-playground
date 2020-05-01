import {observable, computed, action, toJS} from "mobx";

export default class Store {
  @observable user = null;

  @computed get isAuthenticated() {
    console.log("store isAuthenticated");
    return !!this.user;
  }

  @action logIn = () => {
    this.user = {
      name: "test"
    };
    console.log("store login", toJS(this.user));
  }

  @action reassign = () => {
    this.user = {
      name: "testreassign"
    };
    console.log("store reassign", toJSthis.user);
  }

  @action reassignSame = () => {
    this.user = { ...this.user };
    console.log("store reassign same", toJSthis.user);
  }

  @action changeName = () => {
    this.user.name = "namechange";
    console.log("name change", toJSthis.user);
  }

  @action logOut = () => {
    this.user = null;
    console.log("store logout", toJSthis.user);
  }
}
