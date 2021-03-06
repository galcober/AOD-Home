"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Dataset_1 = require("../../../../../models/Dataset");
var dataset_service_1 = require("../../../../../services/dataset/dataset.service");
var Publicador_1 = require("../../../../../models/Publicador");
var Topic_1 = require("../../../../../models/Topic");
var ListDatasetComponent = (function () {
    function ListDatasetComponent(datasetService) {
        this.datasetService = datasetService;
        this.datasets = [];
    }
    ListDatasetComponent.prototype.ngOnInit = function () {
        this.datasets = this.datasetService.getDatasets();
    };
    ListDatasetComponent.prototype.showDataset = function (dataset) {
        this.datasetService.setDataset(dataset);
    };
    ListDatasetComponent.prototype.addDataset = function () {
        this.dataset = new Dataset_1.Dataset('', '', '', new Topic_1.Topic(23, ''), new Date, new Publicador_1.Publicador(''));
        this.datasetService.setDataset(this.dataset);
    };
    return ListDatasetComponent;
}());
ListDatasetComponent = __decorate([
    core_1.Component({
        selector: 'app-list-dataset',
        templateUrl: './list-dataset.component.html',
        styleUrls: ['./list-dataset.component.css']
    }),
    __metadata("design:paramtypes", [dataset_service_1.DatasetService])
], ListDatasetComponent);
exports.ListDatasetComponent = ListDatasetComponent;
//# sourceMappingURL=list-dataset.component.js.map