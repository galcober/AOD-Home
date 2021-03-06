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
var User_1 = require("../../../../models/User");
var Role_1 = require("../../../../models/Role");
var UsersComponent = (function () {
    function UsersComponent() {
        this.selectRoles = [];
        this.date = new Date;
        this.users = [
            new User_1.User("username01", "Administrador total", this.date, true),
            new User_1.User("username02", "Administrador de organizaciones", this.date, false),
            new User_1.User("username03", "Wacher", this.date, true)
        ];
        this.roles = [
            new Role_1.Role("Administrador total", "", null),
            new Role_1.Role("Administrador de organizaciones", "", null),
            new Role_1.Role("Watcher", "", null)
        ];
        this.selectRoles.push({ label: 'Selecciona un rol', value: null });
        for (var i = 0; i < this.roles.length; i++) {
            this.selectRoles.push({ label: this.roles[i].roleName, value: this.roles[i].roleName });
        }
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
        };
    };
    UsersComponent.prototype.showDialogToAdd = function () {
        this.user = new User_1.User("", "", null, false);
        this.displayDialogEdit = true;
    };
    UsersComponent.prototype.showDialog = function (user, edit) {
        if (edit) {
            this.user = this.cloneUser(user);
            this.displayDialogEdit = true;
        }
        else {
            this.user = this.cloneUser(user);
            this.displayDialog = true;
        }
    };
    UsersComponent.prototype.cloneUser = function (u) {
        var user = new User_1.User("", "", null, false);
        for (var prop in u) {
            user[prop] = u[prop];
        }
        return user;
    };
    UsersComponent.prototype.save = function () {
        var users = this.users.slice();
        users.push(this.user);
        this.users = users;
        this.user = null;
        this.displayDialogEdit = false;
    };
    UsersComponent.prototype.enableEdition = function () {
        this.displayDialogEdit = !this.displayDialogEdit;
        this.displayDialog = !this.displayDialog;
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'app-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.css']
    }),
    __metadata("design:paramtypes", [])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map