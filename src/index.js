import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {footer} from './app/footer';
import {tabla} from './app/tabla';
import {musica} from './app/musica';
import {artistDetail} from './app/artist';

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .service('MusicaService', musica)
  .component('app', main)
  .component('appHeader', header)
  .component('tabla', tabla)
  .component('appFooter', footer)
  .component('artistDetail', artistDetail);
