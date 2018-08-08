import { PLATFORM } from 'aurelia-pal';
import style from '../styles/style.scss';

export class app {
    constructor() {}

    configureRouter(config, router) {
        config.options.pushState = true;
        config.map([
            { route: ['', 'home'], name: 'index', moduleId: PLATFORM.moduleName('home/index'), layoutView: PLATFORM.moduleName('layout_landing.html') },
            { route: 'applications', name: 'applications', moduleId: PLATFORM.moduleName('applications/index') }
        ]);

        this.router = router;
    }
}
