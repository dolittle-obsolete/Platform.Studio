import { customElement, containerless, bindable } from 'aurelia-framework';

@customElement('side-bar')
@containerless()
export class side_bar {
    @bindable side_bar_expanded = false;
    @bindable hide_trigger;
    constructor() {
    }
    
    toggle_side_bar() {
        this.side_bar_expanded = !this.side_bar_expanded;
    }
}
