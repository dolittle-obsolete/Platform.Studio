import { PLATFORM } from 'aurelia-pal';

export class app {
    constructor() {
    }

    configureRouter(config, router) {
        config.options.pushState = true;
        config.map([
            { route: ['', 'index'], name: 'index', moduleId: PLATFORM.moduleName('index'), layoutView: PLATFORM.moduleName('layout_landing.html') },
        ]);

        this.router = router;
    }
}
