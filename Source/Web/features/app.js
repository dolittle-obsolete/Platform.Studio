import { PLATFORM } from 'aurelia-pal';

export class app {
    constructor() {}

    configureRouter(config, router) {
        config.options.pushState = true;
        config.map([
            { route: ['', 'home'], name: 'index', moduleId: PLATFORM.moduleName('home/index'), layoutView: PLATFORM.moduleName('layout_landing.html') },
            { route: 'applications', name: 'applications', moduleId: PLATFORM.moduleName('applications/index'), layoutView: PLATFORM.moduleName('layout_landing.html') },
            { route: 'build', name: 'build', moduleId: PLATFORM.moduleName('build/index') },
            { route: 'monitor', name: 'monitor', moduleId: PLATFORM.moduleName('monitor/index') },
            { route: 'continuousimprovement', name: 'continuousimprovement', moduleId: PLATFORM.moduleName('continuousimprovement/index') }
        ]);

        this.router = router;
    }
}
