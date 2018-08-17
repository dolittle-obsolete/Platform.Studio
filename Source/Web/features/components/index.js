import { PLATFORM } from 'aurelia-pal';

export function configure(config) {
  config.globalResources(PLATFORM.moduleName('./application_menu/application_menu'));
  config.globalResources(PLATFORM.moduleName('./app_header/app_header'));
  config.globalResources(PLATFORM.moduleName('./menu_item/menu_item'));
  config.globalResources(PLATFORM.moduleName('./side_bar/side_bar'));
}
