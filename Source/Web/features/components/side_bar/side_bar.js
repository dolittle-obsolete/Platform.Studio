import { customElement, containerless, observable } from 'aurelia-framework';

@customElement('side-bar')
@containerless()
export class side_bar {
    @observable side_bar_expanded = false;
    constructor() {}

    toggle_side_bar() {
        this.side_bar_expanded = !this.side_bar_expanded;
    }
}
