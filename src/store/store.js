import { observable } from "mobx";
import { RouterStore } from "@ibm/mobx-react-router";

class AppStore {
	@observable title = "ReactJS Tasks";
}

export const appStore = new AppStore();
export const routerStore = new RouterStore();
