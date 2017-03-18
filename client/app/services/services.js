import angular from 'angular';
import agentsService from './agents.service';

let serviceModule = angular.module('app.services',[])
  .service({
    agentsService
  }).name;

export default serviceModule;
