webpackJsonp([1,4],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ROUTE_PART_SETUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ROUTE_PART_PLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MAX_PLAYERS; });
var ROUTE_PART_SETUP = "setup";
var ROUTE_PART_PLAY = "play";
var MAX_PLAYERS = 6;
//# sourceMappingURL=consts.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridCellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var colors = [
    'blue',
    'orange',
    'red',
    'green',
    'purple',
    'darkblue'
];
var GridCellComponent = (function () {
    function GridCellComponent(route) {
        this.route = route;
        this.isSelected = false;
        this.hits = [];
        this.shotPending = false;
        this.miss = false;
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* EventEmitter */]();
    }
    GridCellComponent.prototype.ngOnInit = function () {
    };
    GridCellComponent.prototype.select = function () {
        // TODO: 3 isn't a good way to check for playing
        if (this.route.snapshot.url.length != 3) {
            this.isSelected = true;
            this.selected.emit(this);
        }
    };
    GridCellComponent.prototype.setSelection = function (event) {
        if (event != this) {
            this.isSelected = false;
        }
    };
    GridCellComponent.prototype.hitCell = function (ships) {
        this.shotPending = false;
        this.miss = !ships.length;
        this.hits = ships.map(function (ship) {
            return colors[ship['playerIndex']];
        });
    };
    GridCellComponent.prototype.shoot = function () {
        this.shotPending = true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', Number)
    ], GridCellComponent.prototype, "x", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', Number)
    ], GridCellComponent.prototype, "y", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* EventEmitter */]) === 'function' && _a) || Object)
    ], GridCellComponent.prototype, "selected", void 0);
    GridCellComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'grid-cell',
            template: __webpack_require__(604),
            styles: [__webpack_require__(591)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], GridCellComponent);
    return GridCellComponent;
    var _a, _b;
}());
//# sourceMappingURL=grid-cell.component.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Player__ = __webpack_require__(350);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GameStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });

var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["SETUP"] = 0] = "SETUP";
    GameStatus[GameStatus["PLAYING"] = 1] = "PLAYING";
})(GameStatus || (GameStatus = {}));
var Game = (function () {
    function Game(gameID, ownerID) {
        this.gameID = gameID;
        this.ownerID = ownerID;
        this.players = [];
        this.status = GameStatus.SETUP;
    }
    Game.prototype.initFromData = function (data) {
        this.status = data.status;
        this.players = data.players.map(this.makePlayerFromData);
    };
    Game.prototype.createPlayer = function (player) {
        this.players.push(new __WEBPACK_IMPORTED_MODULE_0__Player__["a" /* Player */](player.getId(), player.getName()));
    };
    Game.prototype.addPlayerFromData = function (playerData) {
        this.players.push(this.makePlayerFromData(playerData));
    };
    Game.prototype.makePlayerFromData = function (playerData) {
        return new __WEBPACK_IMPORTED_MODULE_0__Player__["a" /* Player */](playerData.id, playerData.name, playerData.ships, playerData.locked);
    };
    Game.prototype.getPlayer = function (id) {
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            if (player.id == id) {
                return player;
            }
        }
    };
    return Game;
}());
//# sourceMappingURL=Game.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShipTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ship; });
var ShipTypes = {
    Carrier: "Carrier",
    Battleship: "Battleship",
    Cruiser: "Cruiser",
    Destroyer: "Destroyer",
    Submarine: "Submarine",
};
// type ShipType = "Carrier" | "Battleship" | "Cruiser" | "Destroyer" | "Submarine";
var Ship = (function () {
    function Ship(playerId, type) {
        this.playerId = playerId;
        this.type = type;
        this.angle = 0;
        this.hasNewRotation = false;
        this.status = "";
        this.initShip();
    }
    Ship.prototype.initShip = function () {
        switch (this.type) {
            case ShipTypes.Carrier:
                this.size = 5;
                this.position = {
                    x: 0,
                    y: 0
                };
                break;
            case ShipTypes.Battleship:
                this.size = 4;
                this.position = {
                    x: 0,
                    y: 1
                };
                break;
            case ShipTypes.Cruiser:
                this.size = 3;
                this.position = {
                    x: 0,
                    y: 2
                };
                break;
            case ShipTypes.Destroyer:
                this.size = 3;
                this.position = {
                    x: 0,
                    y: 3
                };
                break;
            case ShipTypes.Submarine:
                this.size = 2;
                this.position = {
                    x: 0,
                    y: 4
                };
                break;
        }
        this.hits = new Array(this.size);
    };
    Object.defineProperty(Ship.prototype, "shipHeight", {
        get: function () {
            return this.angle == 0 ? 1 : this.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ship.prototype, "shipWidth", {
        get: function () {
            return this.angle == 90 ? 1 : this.size;
        },
        enumerable: true,
        configurable: true
    });
    Ship.prototype.rotate = function () {
        this.angle = (this.angle + 45) % 180;
        this.hasNewRotation = true;
    };
    Ship.prototype.getCells = function () {
        var cords = [];
        var xOffset = 0, yOffset = 0;
        switch (this.angle) {
            case 0:
                xOffset = 1;
                break;
            case 45:
                xOffset = 1;
                yOffset = 1;
                break;
            case 90:
                yOffset = 1;
                break;
            case 135:
                yOffset = 1;
                xOffset = -1;
        }
        for (var i = 0; i < this.size; i++) {
            cords.push({
                x: this.position.x + xOffset * i,
                y: this.position.y + yOffset * i
            });
        }
        return cords;
    };
    Ship.prototype.hitShip = function (hitCord) {
        var _this = this;
        return this.getCells().some(function (cord, index) {
            if (cord.x == hitCord.x && cord.y == hitCord.y) {
                _this.hits[index] = true;
                return true;
            }
        });
    };
    Ship.prototype.isActive = function () {
        var hits = 0;
        this.hits.forEach(function (hit) {
            hits += +hit;
        });
        return hits < this.size;
    };
    return Ship;
}());
//# sourceMappingURL=Ship.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShotService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SHOT_ENDPOINT = 'shot';
var ShotService = (function () {
    function ShotService(firebase, playerService, gameService) {
        this.firebase = firebase;
        this.playerService = playerService;
        this.gameService = gameService;
        this.previousShots = {};
    }
    ShotService.prototype.getShots = function (gameID) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (observer) {
            _this.initShots(gameID);
            _this.fbShots.subscribe(function (shotData) {
                observer.next(shotData);
                // observer.next(shotData.filter((shot) => {
                //     let newShot : boolean = !this.previousShots[shot['$key']];
                //     this.previousShots[shot['$key']] = true;
                //     return newShot;
                // }));
            });
        });
    };
    ShotService.prototype.initShots = function (gameID) {
        if (!this.fbShots) {
            this.fbShots = this.firebase.database.list(SHOT_ENDPOINT + "/" + gameID);
        }
    };
    // TODO: Do we always have a fbShots list by now?
    ShotService.prototype.fire = function (shots) {
        var _this = this;
        shots.forEach(function (shot) { return _this.fbShots.push(shot); });
    };
    ShotService.prototype.playerTurn = function (gameID) {
        this.initShots(gameID);
        return this.fbShots
            .delay(10)
            .map(function (shot) {
            return shot.length == 0 ? "" : shot[shot.length - 1].playerID;
        });
    };
    ShotService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__player_service__["a" /* PlayerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__player_service__["a" /* PlayerService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__game_service__["a" /* GameService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__game_service__["a" /* GameService */]) === 'function' && _c) || Object])
    ], ShotService);
    return ShotService;
    var _a, _b, _c;
}());
//# sourceMappingURL=shot.service.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Game__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_game_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_consts__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameComponent = (function () {
    function GameComponent(route, router, gameService) {
        this.route = route;
        this.router = router;
        this.gameService = gameService;
        this.positioning = true;
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TODO: Figure out how to get observable off of route data
        this.gameService.getGameObservable().subscribe(this.handleGame.bind(this));
        this.route.data
            .subscribe(function (_a) {
            var profile = _a.profile, game = _a.game;
            _this.player = game.getPlayer(profile.getId());
            // this.game = game;
            // this.positioning = game.status == GameStatus.SETUP;
        });
        // validate URL
        this.route.url
            .subscribe(function (parts) {
            if (_this.game) {
                _this.validateRoute();
            }
        });
    };
    GameComponent.prototype.validateRoute = function () {
        var parts = this.route.snapshot.url;
        if (parts[parts.length - 1].path == __WEBPACK_IMPORTED_MODULE_4__objects_consts__["b" /* ROUTE_PART_SETUP */] && this.game.status != __WEBPACK_IMPORTED_MODULE_1__objects_Game__["b" /* GameStatus */].SETUP) {
            this.router.navigate(['../'], { relativeTo: this.route });
        }
        else if (parts[parts.length - 1].path != __WEBPACK_IMPORTED_MODULE_4__objects_consts__["b" /* ROUTE_PART_SETUP */] && this.game.status == __WEBPACK_IMPORTED_MODULE_1__objects_Game__["b" /* GameStatus */].SETUP) {
            this.router.navigate(['./setup'], { relativeTo: this.route });
        }
    };
    GameComponent.prototype.handleGame = function (game) {
        var _this = this;
        this.gameService.getGameObservable().subscribe(function (game) {
            _this.game = game;
            _this.positioning = game.status == __WEBPACK_IMPORTED_MODULE_1__objects_Game__["b" /* GameStatus */].SETUP;
            _this.validateRoute();
        });
    };
    GameComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__(603),
            styles: [__webpack_require__(590)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_game_service__["a" /* GameService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_game_service__["a" /* GameService */]) === 'function' && _c) || Object])
    ], GameComponent);
    return GameComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=game.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Ship__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_consts__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridShipComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BOX_SIZE = 40;
// TODO: get this from somewhere else
var GRID_SIZE = 12;
var GridShipComponent = (function () {
    function GridShipComponent(elementRef, renderer, route) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.route = route;
        this.isSelected = false;
        this.shipClasses = {};
        this.listeners = [];
        this.isDragging = false;
        this.doingSetup = false;
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* EventEmitter */]();
    }
    GridShipComponent.prototype.ngOnInit = function () {
        this.initRouteCheck();
        this.setShipClasses();
    };
    // Future: maybe make the ship send an event that it changed.
    GridShipComponent.prototype.ngDoCheck = function () {
        if (this.doingSetup && this.ship.hasNewRotation) {
            this.fixPosition();
            this.setShipClasses();
            this.ship.hasNewRotation = false;
        }
    };
    GridShipComponent.prototype.initRouteCheck = function () {
        var _this = this;
        this.route.url
            .subscribe(function (parts) {
            _this.doingSetup = parts[parts.length - 1].path == __WEBPACK_IMPORTED_MODULE_3__objects_consts__["b" /* ROUTE_PART_SETUP */];
            if (_this.doingSetup) {
                _this.setEventBindings();
            }
            else {
                _this.removeEventBindings();
            }
        });
    };
    GridShipComponent.prototype.setShipClasses = function () {
        this.shipClasses = {};
        this.shipClasses[this.ship.type] = true;
        this.shipClasses[("x-" + this.ship.position.x)] = true;
        this.shipClasses[("y-" + this.ship.position.y)] = true;
        this.shipClasses[("dir-" + this.ship.angle)] = true;
        this.shipClasses['selected'] = this.isSelected;
    };
    GridShipComponent.prototype.setEventBindings = function () {
        if (/Mobile/.test(navigator.userAgent)) {
            this.listeners.push(this.renderer.listenGlobal('document', 'touchstart', this.mouseDownHandler.bind(this)));
            this.listeners.push(this.renderer.listenGlobal('body', 'touchmove', this.mouseMoveHandler.bind(this)));
            this.listeners.push(this.renderer.listenGlobal('document', 'touchend', this.mouseUpHandler.bind(this)));
        }
        else {
            this.listeners.push(this.renderer.listenGlobal('document', 'mousedown', this.mouseDownHandler.bind(this)));
            this.listeners.push(this.renderer.listenGlobal('body', 'mousemove', this.mouseMoveHandler.bind(this)));
            this.listeners.push(this.renderer.listenGlobal('document', 'mouseup', this.mouseUpHandler.bind(this)));
        }
    };
    GridShipComponent.prototype.removeEventBindings = function () {
        this.listeners.forEach(function (listener) { return listener(); });
        this.listeners = [];
    };
    GridShipComponent.prototype.mouseDownHandler = function (event) {
        this.isSelected = this.elementRef.nativeElement == event.target.parentNode;
        this.shipClasses['selected'] = this.isSelected;
        if (this.isSelected) {
            this.isDragging = true;
            this.mouseDownEvent = event;
            this.startDragPos = {
                x: this.ship.position.x,
                y: this.ship.position.y
            };
        }
    };
    GridShipComponent.prototype.mouseMoveHandler = function (event) {
        if (this.isDragging) {
            var y = Math.round((event.pageY - this.mouseDownEvent.pageY) / BOX_SIZE), x = Math.round((event.pageX - this.mouseDownEvent.pageX) / BOX_SIZE);
            if (x != this.ship.position.x || y != this.ship.position.y) {
                this.ship.position.y = this.startDragPos.y + y;
                this.ship.position.x = this.startDragPos.x + x;
                this.fixPosition();
                this.setShipClasses();
            }
            event.preventDefault();
        }
    };
    GridShipComponent.prototype.mouseUpHandler = function (event) {
        this.isDragging = false;
    };
    GridShipComponent.prototype.ngOnDestroy = function () {
        this.removeEventBindings();
    };
    GridShipComponent.prototype.fixPosition = function () {
        var xOffset = this.ship.angle == 135 ?
            this.ship.shipWidth - 1 :
            0;
        this.ship.position.y = Math.max(0, Math.min(GRID_SIZE - this.ship.shipHeight, this.ship.position.y));
        this.ship.position.x = Math.max(xOffset, Math.min(GRID_SIZE - this.ship.shipWidth + xOffset, this.ship.position.x));
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__objects_Ship__["a" /* Ship */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__objects_Ship__["a" /* Ship */]) === 'function' && _a) || Object)
    ], GridShipComponent.prototype, "ship", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* EventEmitter */]) === 'function' && _b) || Object)
    ], GridShipComponent.prototype, "selected", void 0);
    GridShipComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'grid-ship',
            template: __webpack_require__(605),
            styles: [__webpack_require__(592)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _e) || Object])
    ], GridShipComponent);
    return GridShipComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=grid-ship.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Ship__ = __webpack_require__(232);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });

var Player = (function () {
    function Player(id, name, ships, locked) {
        this.id = id;
        this.name = name;
        this.ships = [];
        this.locked = false;
        this.initShips(ships);
        this.locked = this.locked || !!locked;
    }
    Player.prototype.initShips = function (ships) {
        var _this = this;
        if (ships) {
            this.ships = ships;
            this.ships.forEach(function (shipData, pos) {
                _this.ships[pos] = Object.assign(new __WEBPACK_IMPORTED_MODULE_0__Ship__["a" /* Ship */](_this.id, shipData.type), shipData);
            });
        }
        else {
            this.ships.push(new __WEBPACK_IMPORTED_MODULE_0__Ship__["a" /* Ship */](this.id, __WEBPACK_IMPORTED_MODULE_0__Ship__["b" /* ShipTypes */].Carrier));
            this.ships.push(new __WEBPACK_IMPORTED_MODULE_0__Ship__["a" /* Ship */](this.id, __WEBPACK_IMPORTED_MODULE_0__Ship__["b" /* ShipTypes */].Battleship));
            this.ships.push(new __WEBPACK_IMPORTED_MODULE_0__Ship__["a" /* Ship */](this.id, __WEBPACK_IMPORTED_MODULE_0__Ship__["b" /* ShipTypes */].Cruiser));
            this.ships.push(new __WEBPACK_IMPORTED_MODULE_0__Ship__["a" /* Ship */](this.id, __WEBPACK_IMPORTED_MODULE_0__Ship__["b" /* ShipTypes */].Destroyer));
            this.ships.push(new __WEBPACK_IMPORTED_MODULE_0__Ship__["a" /* Ship */](this.id, __WEBPACK_IMPORTED_MODULE_0__Ship__["b" /* ShipTypes */].Submarine));
        }
    };
    Player.prototype.validShipPositions = function () {
        var validPos = true, positions = {};
        this.ships.some(function (ship) {
            if (!validPos) {
                return true;
            }
            ship.getCells().forEach(function (pos) {
                if (typeof positions[pos.y] == "undefined") {
                    positions[pos.y] = {};
                }
                if (positions[pos.y][pos.x]) {
                    validPos = false;
                }
                else {
                    positions[pos.y][pos.x] = true;
                }
            });
        });
        return validPos;
    };
    Player.prototype.lockShips = function () {
        this.locked = true;
    };
    Player.prototype.hitShips = function (cord) {
        var hits = [];
        this.ships.some(function (ship) {
            if (ship.hitShip(cord)) {
                hits.push(ship);
                return true;
            }
        });
        return hits;
    };
    Player.prototype.shipsRemaining = function () {
        var sum = 0;
        this.ships.forEach(function (ship) {
            sum += +ship.isActive();
        });
        return sum;
    };
    return Player;
}());
//# sourceMappingURL=Player.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameResover; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameResover = (function () {
    function GameResover(router, gameService) {
        this.router = router;
        this.gameService = gameService;
    }
    GameResover.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.params['id'];
        return this.gameService.fetchGame(id)
            .then(function (Game) {
            if (Game) {
                return Game;
            }
            else {
                _this.router.navigate(['/start']);
                return null;
            }
        });
    };
    GameResover = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__game_service__["a" /* GameService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__game_service__["a" /* GameService */]) === 'function' && _b) || Object])
    ], GameResover);
    return GameResover;
    var _a, _b;
}());
//# sourceMappingURL=game.resolver.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerResover; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerResover = (function () {
    function PlayerResover(router, playerService) {
        this.router = router;
        this.playerService = playerService;
    }
    PlayerResover.prototype.resolve = function (route, state) {
        var _this = this;
        return this.playerService.getUserProfile()
            .then(function (BasicProfile) {
            if (BasicProfile) {
                return BasicProfile;
            }
            else {
                _this.router.navigate(['/start']);
                return null;
            }
        });
    };
    PlayerResover = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__player_service__["a" /* PlayerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__player_service__["a" /* PlayerService */]) === 'function' && _b) || Object])
    ], PlayerResover);
    return PlayerResover;
    var _a, _b;
}());
//# sourceMappingURL=player.resolver.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_player_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_game_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StartComponent = (function () {
    function StartComponent(router, zone, playerService, gameService) {
        this.router = router;
        this.zone = zone;
        this.playerService = playerService;
        this.gameService = gameService;
        this.gameID = "";
        this.gameType = "singleGrid";
    }
    StartComponent.prototype.ngOnInit = function () {
        this.getUser();
        // gapi.load('auth2', () => {
        //     (<any>gapi.auth2.init({
        //         client_id: '244043521193-0eqj994haunsb1a056fkna5ajce9juh1.apps.googleusercontent.com'
        //     })).then((GoogleAuth) => {
        //         this.zone.run(() => {
        //             $this.playerProfile = GoogleAuth.currentUser.get().getBasicProfile().getName();
        //         });
        //     }, () => {});
        // });
        // setTimeout(() => {
        //     // this.playerProfile = name;
        // }, 2000);
        // });
    };
    StartComponent.prototype.getUser = function () {
        var _this = this;
        this.isSignedIn = false;
        this.checkingLogin = true;
        // TODO: convert to observable
        this.playerService.isSignedIn().then(function (isLoggedIn) {
            _this.isSignedIn = isLoggedIn;
            _this.checkingLogin = false;
            if (isLoggedIn) {
                _this.playerService.getUserProfile().then(function (playerProfile) {
                    _this.zone.run(function () {
                        _this.playerProfile = playerProfile;
                    });
                });
            }
        });
    };
    StartComponent.prototype.createGame = function () {
        var _this = this;
        this.gameService.createGame(this.playerProfile).then(function (gameID) {
            _this.router.navigate(['/play', gameID, 'setup']);
        });
    };
    StartComponent.prototype.signIn = function () {
        var _this = this;
        this.playerService.signIn().then(function (success) {
            if (success) {
                _this.getUser();
            }
        });
    };
    StartComponent.prototype.joinGame = function () {
        var _this = this;
        this.gameService.joinGame(this.gameID, this.playerProfile).then(function (game) {
            _this.router.navigate(['/play', _this.gameID]);
        }).catch(function () {
            alert("error getting game " + _this.gameID);
        });
    };
    StartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-start',
            template: __webpack_require__(606),
            styles: [__webpack_require__(593)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_player_service__["a" /* PlayerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_player_service__["a" /* PlayerService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_game_service__["a" /* GameService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_game_service__["a" /* GameService */]) === 'function' && _d) || Object])
    ], StartComponent);
    return StartComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=start.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 398;


/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(523);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_start_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_game_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_player_resolver__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_game_resolver__ = __webpack_require__(351);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    {
        path: 'play/:id/setup',
        component: __WEBPACK_IMPORTED_MODULE_3__game_game_component__["a" /* GameComponent */],
        resolve: {
            profile: __WEBPACK_IMPORTED_MODULE_4__service_player_resolver__["a" /* PlayerResover */],
            game: __WEBPACK_IMPORTED_MODULE_5__service_game_resolver__["a" /* GameResover */]
        }
    },
    {
        path: 'play/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__game_game_component__["a" /* GameComponent */],
        resolve: {
            profile: __WEBPACK_IMPORTED_MODULE_4__service_player_resolver__["a" /* PlayerResover */],
            game: __WEBPACK_IMPORTED_MODULE_5__service_game_resolver__["a" /* GameResover */]
        }
    },
    {
        path: 'start',
        component: __WEBPACK_IMPORTED_MODULE_2__start_start_component__["a" /* StartComponent */]
    },
    {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_player_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(playerService) {
        this.playerService = playerService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSignedIn = false;
        this.checkingLogin = true;
        this.playerService.isSignedIn().then(function (isSignedIn) {
            _this.isSignedIn = isSignedIn;
            _this.checkingLogin = false;
        });
    };
    AppComponent.prototype.signOut = function () {
        this.playerService.signOut();
    };
    AppComponent.prototype.signIn = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(600),
            styles: [__webpack_require__(587)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_player_service__["a" /* PlayerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_player_service__["a" /* PlayerService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__start_start_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__game_game_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__game_grid_game_grid_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__game_controls_game_controls_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grid_ship_grid_ship_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_game_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_player_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_player_resolver__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_game_resolver__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__grid_cell_grid_cell_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_shot_service__ = __webpack_require__(233);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var firebaseConfig = {
    apiKey: "AIzaSyBPz8WD91uJ5IX_qQdKASFQdaA2iuonzHo",
    authDomain: "battleship-161001.firebaseapp.com",
    databaseURL: "https://battleship-161001.firebaseio.com",
    storageBucket: "battleship-161001.appspot.com",
    messagingSenderId: "244043521193"
};
var myFirebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AuthProviders */].Google,
    method: __WEBPACK_IMPORTED_MODULE_14_angularfire2__["b" /* AuthMethods */].Redirect
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__start_start_component__["a" /* StartComponent */],
                __WEBPACK_IMPORTED_MODULE_7__game_game_component__["a" /* GameComponent */],
                __WEBPACK_IMPORTED_MODULE_8__game_grid_game_grid_component__["a" /* GameGridComponent */],
                __WEBPACK_IMPORTED_MODULE_9__game_controls_game_controls_component__["a" /* GameControlsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__grid_ship_grid_ship_component__["a" /* GridShipComponent */],
                __WEBPACK_IMPORTED_MODULE_16__grid_cell_grid_cell_component__["a" /* GridCellComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["c" /* AngularFireModule */].initializeApp(firebaseConfig, myFirebaseAuthConfig, "battleship")
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__service_game_service__["a" /* GameService */],
                __WEBPACK_IMPORTED_MODULE_15__service_game_resolver__["a" /* GameResover */],
                __WEBPACK_IMPORTED_MODULE_12__service_player_service__["a" /* PlayerService */],
                __WEBPACK_IMPORTED_MODULE_13__service_player_resolver__["a" /* PlayerResover */],
                __WEBPACK_IMPORTED_MODULE_17__service_shot_service__["a" /* ShotService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Ship__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_game_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_Game__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objects_consts__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_player_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__grid_cell_grid_cell_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_shot_service__ = __webpack_require__(233);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameControlsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GameControlsComponent = (function () {
    function GameControlsComponent(route, router, playerService, gameService, shotService) {
        this.route = route;
        this.router = router;
        this.playerService = playerService;
        this.gameService = gameService;
        this.shotService = shotService;
        this.waiting = false;
        this.validPositions = true;
        this.shotsRemaining = 0;
        this.listeningForShots = false;
        this.shots = [];
    }
    GameControlsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.game = this.gameService.getGame();
        this.gameService.getGameObservable().subscribe(this.handleGameUpdate.bind(this));
        this.route.data
            .subscribe(function (_a) {
            var profile = _a.profile;
            _this.playerId = profile.getId();
            _this.player = _this.game.getPlayer(_this.playerId);
            _this.handleGameUpdate(_this.game);
        });
        this.route.url
            .subscribe(function (parts) {
            _this.doingSetup = parts[parts.length - 1].path == __WEBPACK_IMPORTED_MODULE_5__objects_consts__["b" /* ROUTE_PART_SETUP */];
            _this.playing = !_this.doingSetup && parts[0].path == __WEBPACK_IMPORTED_MODULE_5__objects_consts__["c" /* ROUTE_PART_PLAY */];
        });
    };
    GameControlsComponent.prototype.ngDoCheck = function () {
        if (this.doingSetup) {
            this.validPositions = this.game.getPlayer(this.playerId).validShipPositions();
        }
    };
    GameControlsComponent.prototype.rotateShip = function () {
        this.selectedShip.rotate();
    };
    GameControlsComponent.prototype.startGame = function () {
        this.gameService.startGame();
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    GameControlsComponent.prototype.lockShips = function () {
        this.player.lockShips();
        this.gameService.savePlayersGame(this.playerId);
    };
    GameControlsComponent.prototype.handleGameUpdate = function (game) {
        if (!game) {
            return;
        }
        this.game = game;
        if (!this.player) {
            return;
        }
        if (game.status == __WEBPACK_IMPORTED_MODULE_3__objects_Game__["b" /* GameStatus */].SETUP && this.player.locked) {
            this.waiting = game.players.some(function (player) {
                return !player.locked;
            });
        }
        else if (game.status == __WEBPACK_IMPORTED_MODULE_3__objects_Game__["b" /* GameStatus */].PLAYING) {
            if (!this.listeningForShots) {
                this.shotService.playerTurn(this.game.gameID).subscribe(this.handlePlayerUpdate.bind(this));
                this.listeningForShots = true;
            }
        }
    };
    GameControlsComponent.prototype.handlePlayerUpdate = function (playerID) {
        if (!playerID) {
            // game is starting. Player 1 goes first.
            playerID = this.game.players[0].id;
        }
        var playerIndex;
        this.game.players.some(function (player, index) {
            if (player.id == playerID) {
                playerIndex = index;
                return true;
            }
        });
        this.waitingPlayer = undefined;
        for (var i = 1; i < this.game.players.length; i++) {
            var newPlayerIndex = (i + playerIndex) % this.game.players.length;
            if (this.game.players[newPlayerIndex].shipsRemaining() > 0) {
                if (this.game.players[newPlayerIndex] == this.player) {
                    this.shotsRemaining = this.player.shipsRemaining();
                }
                else {
                    this.waitingPlayer = this.game.players[newPlayerIndex];
                }
                break;
            }
        }
        if (!this.waitingPlayer && !this.shotsRemaining) {
            // then last player to shoot wins
            this.playerWinner = this.game.players[playerIndex].name;
            this.playing = false;
        }
    };
    GameControlsComponent.prototype.fire = function () {
        this.shots.push({
            x: this.selectedCell.x,
            y: this.selectedCell.y,
            playerID: this.playerId
        });
        this.shotsRemaining--;
        this.selectedCell.shoot();
        if (this.shotsRemaining == 0) {
            this.shotService.fire(this.shots);
            this.shots = [];
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__objects_Ship__["a" /* Ship */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__objects_Ship__["a" /* Ship */]) === 'function' && _a) || Object)
    ], GameControlsComponent.prototype, "selectedShip", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__grid_cell_grid_cell_component__["a" /* GridCellComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__grid_cell_grid_cell_component__["a" /* GridCellComponent */]) === 'function' && _b) || Object)
    ], GameControlsComponent.prototype, "selectedCell", void 0);
    GameControlsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-game-controls',
            template: __webpack_require__(601),
            styles: [__webpack_require__(588)],
            host: {
                // Doing this because during setup the ships setup events that we need to prevent triggering
                "(mousedown)": "$event.stopPropagation()",
                "(touchstart)": "$event.stopPropagation()",
                "(touchmove)": "$event.stopPropagation()"
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__service_player_service__["a" /* PlayerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__service_player_service__["a" /* PlayerService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__service_game_service__["a" /* GameService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_game_service__["a" /* GameService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__service_shot_service__["a" /* ShotService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__service_shot_service__["a" /* ShotService */]) === 'function' && _g) || Object])
    ], GameControlsComponent);
    return GameControlsComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=game-controls.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Player__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_ship_grid_ship_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_cell_grid_cell_component__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_game_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_shot_service__ = __webpack_require__(233);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameGridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GameGridComponent = (function () {
    function GameGridComponent(gameService, shotService) {
        this.gameService = gameService;
        this.shotService = shotService;
        this.gridSize = 12;
    }
    GameGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getGameObservable().subscribe(function (game) {
            if (!_this.game) {
                _this.shotService.getShots(game.gameID).subscribe(_this.handleShotUpdate.bind(_this));
            }
            _this.game = game;
        });
        // this.route.data
        //     .subscribe(({ profile, game } : { profile : BasicProfile, game : Game }) => {
        //         this.player = game.getPlayer(profile.getId());
        //         this.game = game;
        //     });
    };
    GameGridComponent.prototype.gridArray = function () {
        return new Array(this.gridSize);
    };
    GameGridComponent.prototype.cellSelected = function (selected) {
        this.selectedCell = selected;
        this.cells.forEach(function (cell) { return cell.setSelection(selected); });
    };
    GameGridComponent.prototype.handleShotUpdate = function (shots) {
        var _this = this;
        shots.forEach(function (shot) {
            _this.getCell(shot).hitCell(_this.gameService.hitShips(shot));
        });
    };
    GameGridComponent.prototype.getCell = function (cord) {
        return this.cells.toArray()[cord.y * this.gridSize + cord.x];
    };
    Object.defineProperty(GameGridComponent.prototype, "selectedShip", {
        get: function () {
            if (!this.ships) {
                return;
            }
            return (this.ships.find(function (shipComponent) {
                return shipComponent.isSelected;
            }) || {})['ship'];
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__objects_Player__["a" /* Player */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__objects_Player__["a" /* Player */]) === 'function' && _a) || Object)
    ], GameGridComponent.prototype, "player", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_2__grid_ship_grid_ship_component__["a" /* GridShipComponent */]), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* QueryList */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* QueryList */]) === 'function' && _b) || Object)
    ], GameGridComponent.prototype, "ships", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3__grid_cell_grid_cell_component__["a" /* GridCellComponent */]), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* QueryList */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* QueryList */]) === 'function' && _c) || Object)
    ], GameGridComponent.prototype, "cells", void 0);
    GameGridComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-game-grid',
            template: __webpack_require__(602),
            styles: [__webpack_require__(589)]
        }), 
        __metadata('design:paramtypes', [(typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_game_service__["a" /* GameService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_game_service__["a" /* GameService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__service_shot_service__["a" /* ShotService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__service_shot_service__["a" /* ShotService */]) === 'function' && _e) || Object])
    ], GameGridComponent);
    return GameGridComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=game-grid.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, ".panel.player:nth-child(6n+1) {\n    border-color: #428BCA;\n}\n.panel.player:nth-child(6n+1) > .panel-heading {\n    color: white;\n    background-color: #428BCA;\n    border-color: #428BCA;\n}\n.panel.player:nth-child(6n+2) {\n    border-color: #EB9800;\n}\n.panel.player:nth-child(6n+2) > .panel-heading {\n    color: white;\n    background-color: #EB9800;\n    border-color: #EB9800;\n}\n.panel.player:nth-child(6n+3) {\n    border-color: #bd051a;\n}\n.panel.player:nth-child(6n+3) > .panel-heading {\n    color: white;\n    background-color: #bd051a;\n    border-color: #bd051a;\n}\n.panel.player:nth-child(6n+4) {\n    border-color: #5cb85c;\n}\n.panel.player:nth-child(6n+4) > .panel-heading {\n    color: white;\n    background-color: #5cb85c;\n    border-color: #5cb85c;\n}\n.panel.player:nth-child(6n+5) {\n    border-color: #8A00B8;\n}\n.panel.player:nth-child(6n+5) > .panel-heading {\n    color: white;\n    background-color: #8A00B8;\n    border-color: #8A00B8;\n}\n.panel.player:nth-child(6n+6) {\n    border-color: #000099;\n}\n.panel.player:nth-child(6n+6) > .panel-heading {\n    color: white;\n    background-color: #000099;\n    border-color: #000099;\n}\n.panel-heading {\n    font-weight: bold;\n    letter-spacing: 1px;\n    padding: 6px 15px;\n}\n\n.list-group-item {\n    padding: 3px 15px;\n}\n.player .circle {\n    border: 1px solid #AAA;\n    border-radius: 6px;\n    float: right;\n    height: 12px;\n    margin: 5px 1px 0;\n    overflow: hidden;\n    width: 12px;\n}\n.player .circle .hit {\n    background-color: #555;\n    display: block;\n    height: 100%;\n    width: 100%;\n}\n\n.top-info {\n    padding-top: 7px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, "/* TODO: Use better CSS */\n:host {\n    border: 1px solid #ccc;\n    margin-bottom: 40px;\n    position: relative;\n    display: inline-block;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.cell_row {\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, ".cell {\n    border: 1px solid rgba(190,190,190,0.5);\n    display: inline-block;\n    float: left;\n    height: 40px;\n    position: relative;\n    width: 40px;\n    z-index: 20;\n}\n\n.cell:hover {\n    border-color: #999;\n}\n.cell.target {\n    border: 5px solid #d2322d;\n}\n\n.hit-ship {\n    background-color: #999;\n    border-radius: 6px;\n    display: block;\n    float: left;\n    height: 10px;\n    margin: 2px 1px;\n    width: 10px;\n}\n.hit-ship.blue {\n    background-color: #428BCA;\n}\n.hit-ship.orange {\n    background-color: #EB9800;\n}\n.hit-ship.red {\n    background-color: #bd051a;\n}\n.hit-ship.green {\n    background-color: #5cb85c;\n}\n.hit-ship.purple {\n    background-color: #8A00B8;\n}\n.hit-ship.darkblue {\n    background-color: #000099;\n}\n\n.miss, .shot {\n    background-color: #999;\n    border-radius: 6px;\n    left: 50%;\n    height: 12px;\n    margin: -6px 0 0 -6px;\n    position: absolute;\n    top: 50%;\n    width: 12px;\n}\n.shot {\n    background-color: #000;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, ".ship {\n    background-color: #008000;\n    border: 1px solid #444;\n    border-radius: 20px;\n    left: 0px;\n    height: 40px;\n    position: absolute;\n    top: 0px;\n    -webkit-transform-origin: 21px 21px;\n    transform-origin: 21px 21px;\n}\n.ship:after {\n    display: table;\n    content: \" \";\n}\n:host-context(.position) .ship.selected {\n    border-width: 3px;\n    z-index: 31;\n}\n:host-context(.position) .ship {\n    z-index: 30;\n    cursor: move;\n}\n\n.Carrier {\n    width: calc(5 * 40px);\n}\n.Battleship {\n    width: calc(4 * 40px);\n}\n.Cruiser {\n    width: calc(3 * 40px);\n}\n.Destroyer {\n    width: calc(3 * 40px);\n}\n.Submarine {\n    width: calc(2 * 40px);\n}\n\n.hit-loc {\n    display: inline-block;\n    height: 40px;\n    width: 41px;\n}\n.hit {\n    background-color: #444;\n    border-radius: 20px;\n}\n.setup .hit-loc {\n    display: none;\n}\n\n\n\n.x-0  { left: 0 }\n.x-1  { left: calc(1 * 40px) }\n.x-2  { left: calc(2 * 40px) }\n.x-3  { left: calc(3 * 40px) }\n.x-4  { left: calc(4 * 40px) }\n.x-5  { left: calc(5 * 40px) }\n.x-6  { left: calc(6 * 40px) }\n.x-7  { left: calc(7 * 40px) }\n.x-8  { left: calc(8 * 40px) }\n.x-9  { left: calc(9 * 40px) }\n.x-10 { left: calc(10 * 40px) }\n.x-11 { left: calc(11 * 40px) }\n\n.y-0  { top: 0 }\n.y-1  { top: calc(1 * 40px) }\n.y-2  { top: calc(2 * 40px) }\n.y-3  { top: calc(3 * 40px) }\n.y-4  { top: calc(4 * 40px) }\n.y-5  { top: calc(5 * 40px) }\n.y-6  { top: calc(6 * 40px) }\n.y-7  { top: calc(7 * 40px) }\n.y-8  { top: calc(8 * 40px) }\n.y-9  { top: calc(9 * 40px) }\n.y-10 { top: calc(10 * 40px) }\n.y-11 { top: calc(11 * 40px) }\n\n.dir-45 {\n    -webkit-transform:  translate(4px, 5px) rotate(45deg) scale(1.33,1);\n    transform:          translate(4px, 5px) rotate(45deg) scale(1.33,1);\n}\n.dir-90 {\n    -webkit-transform:  translate(-2px, 0px) rotate(90deg);\n    transform:          translate(-2px, 0px) rotate(90deg);\n}\n.dir-135 {\n    -webkit-transform:  translate(-7px, 4px) rotate(135deg) scale(1.33,1);\n    transform:          translate(-7px, 4px) rotate(135deg) scale(1.33,1);\n}\n.Battleship.dir-45, .Battleship.dir-135 {\n    width: calc(4 * 40px - 1px);\n}\n.Cruiser.dir-45, .Cruiser.dir-135 {\n    width: calc(3 * 40px - 4px);\n}\n.Destroyer.dir-45, .Destroyer.dir-135 {\n    width: calc(3 * 40px - 4px);\n}\n.Submarine.dir-45, .Submarine.dir-135 {\n    width: calc(2 * 40px - 6px);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 600:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-fixed-top navbar-inverse\" role=\"navigation\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"#\">Battleship</a>\n        </div>\n        <div class=\"navbar-collapse collapse\" aria-expanded=\"false\">\n            <div class=\"navbar-form navbar-right\">\n                <button class=\"btn btn-default btn-sm\" *ngIf=\"!isSignedIn\" (click)=\"signIn()\">Sign In</button>\n                <button class=\"btn btn-default btn-sm\" *ngIf=\"isSignedIn\" (click)=\"signOut()\">Sign Out</button>\n            </div>\n        </div>\n    </div><!-- /.container -->\n</div><!-- /.navbar -->\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 601:
/***/ (function(module, exports) {

module.exports = "<div class=\"well sidebar-nav\">\n    <button class=\"btn btn-primary\" [disabled]=\"!selectedShip\" *ngIf=\"doingSetup\" (click)=\"rotateShip()\">\n        <span class=\"glyphicon glyphicon-repeat\"></span>\n    </button>\n    <button class=\"btn btn-success pull-right\"\n            *ngIf=\"doingSetup && !player.locked\"\n            [disabled]=\"!validPositions\"\n            (click)=\"lockShips()\">Lock Ships</button>\n\n    <button class=\"btn btn-success pull-right\"\n            *ngIf=\"doingSetup && player.locked && !waiting\"\n            [disabled]=\"!validPositions\"\n            (click)=\"startGame()\">Start Game</button>\n\n    <button class=\"btn btn-default pull-right\"\n            *ngIf=\"waiting\"\n            disabled=\"disabled\">Waiting for other players</button>\n\n    <button class=\"btn btn-danger\"\n            [disabled]=\"!selectedCell || !shotsRemaining\"\n            *ngIf=\"playing\"\n            (click)=\"fire()\">Fire</button>\n\n    <span class=\"pull-right top-info\" *ngIf=\"playerWinner\">{{playerWinner}} WINS!!!</span>\n    <span class=\"pull-right top-info\" *ngIf=\"playing && waitingPlayer\">Waiting for {{waitingPlayer.name}}</span>\n    <span class=\"pull-right top-info\" *ngIf=\"playing && !waitingPlayer\">Shots Remaining: {{shotsRemaining}}</span>\n\n    <hr/>\n    <div>\n        <div class=\"panel player\" *ngFor=\"let player of game.players\">\n            <div class=\"panel-heading\">\n                {{ player.name }}\n            </div>\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\" *ngFor=\"let ship of player.ships\">{{ ship.type }}\n<!--                    <span class=\"circle\"-->\n<!--                          ng-repeat=\"hit in ship.getHits(aShots).sort().reverse() track by $index\">-->\n                    <span class=\"circle\"\n                          *ngFor=\"let hit of ship.hits.slice(0).sort()\">\n                        <span class=\"hit\" *ngIf=\"hit\"></span>\n                    </span>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n    <div *ngIf=\"doingSetup\">\n        <hr/>\n        <h4>Invite more players using game ID: <strong>{{game.gameID}}</strong></h4>\n    </div>\n</div>\n"

/***/ }),

/***/ 602:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let ship of player.ships\">\n    <grid-ship [ship]=\"ship\"></grid-ship>\n</div>\n\n<div *ngFor=\"let yPos of gridArray(); let y = index;\" class=\"cell_row\">\n    <grid-cell *ngFor=\"let xPos of gridArray(); let x = index;\" (selected)=\"cellSelected($event)\" [x]=\"x\" [y]=\"y\"></grid-cell>\n</div>\n"

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" [class.position]=\"positioning && !player.locked\">\n    <div class=\"col-md-8\">\n        <div style=\"font-size:0;\">\n            <app-game-grid #grid [player]=\"player\"></app-game-grid>\n        </div>\n        <ul>\n            <li>You can shoot yourself, so shoot carefully.</li>\n            <li>You get 1 shot per alive ship.</li>\n        </ul>\n    </div>\n    <div class=\"col-md-4 sidebar-offcanvas\">\n        <app-game-controls [selectedShip]=\"grid.selectedShip\" [selectedCell]=\"grid.selectedCell\"></app-game-controls>\n    </div>\n</div>\n"

/***/ }),

/***/ 604:
/***/ (function(module, exports) {

module.exports = "<div class=\"cell\" [class.target]=\"isSelected\" (click)=\"select()\">\n    <span class=\"hit-ship\" *ngFor=\"let color of hits\" [ngClass]=\"color\"></span>\n    <span class=\"shot\" *ngIf=\"shotPending\"></span>\n    <span class=\"miss\" *ngIf=\"miss\"></span>\n</div>\n"

/***/ }),

/***/ 605:
/***/ (function(module, exports) {

module.exports = "<div class=\"ship\" [ngClass]=\"shipClasses\" [class.setup]=\"doingSetup\">\n    <div class=\"hit-loc\" *ngFor=\"let hit of ship.hits\" [class.hit]=\"hit\"></div>\n</div>\n"

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <form class=\"form-horizontal\" role=\"form\">\n        <div class=\"col-md-6\">\n            <div class=\"panel panel-success\">\n            <div class=\"panel-heading\">\n                <h4>Create New Game</h4>\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">Player: </label>\n                    <div class=\"col-lg-9\">\n                        <div *ngIf=\"isSignedIn\" style=\"padding-top:7px;\">{{ playerProfile.getName() }}</div>\n                        <button class=\"btn btn-default\" *ngIf=\"!isSignedIn\" (click)=\"signIn()\">Sign In</button>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"col-lg-3 control-label\"><strong>Game Type</strong></div>\n                    <div class=\"col-lg-9\">\n                        <div class=\"radio\">\n                            <label>\n                                <input type=\"radio\" name=\"gameType\" [(ngModel)]=\"gameType\" value=\"singleGrid\" />\n                                All players play on the same grid.\n                            </label>\n                        </div>\n                        <div class=\"radio\">\n                            <label>\n                                <input type=\"radio\" disabled name=\"gameType\" [(ngModel)]=\"gameType\" value=\"multiGrid\" />\n                                Every player gets their own grid. (coming soon)\n                            </label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"col-lg-offset-3 col-lg-9\">\n                        <button class=\"btn btn-success\" (click)=\"createGame()\" [disabled]=\"!isSignedIn\">Create Game</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"panel panel-info\">\n            <div class=\"panel-heading\">\n                <h4>Join Existing Game</h4>\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">Player: </label>\n                    <div class=\"col-lg-9\">\n                        <div *ngIf=\"isSignedIn\" style=\"padding-top:7px;\">{{ playerProfile.getName() }}</div>\n                        <button class=\"btn btn-default\" *ngIf=\"!isSignedIn\" (click)=\"signIn()\">Sign In</button>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-lg-3 control-label\">Game ID: </label>\n                    <div class=\"col-lg-9\">\n                        <input type=\"text\" [(ngModel)]=\"gameID\" name=\"gameID\"/>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"col-lg-offset-3 col-lg-9\">\n                        <button class=\"btn btn-info\" (click)=\"joinGame()\" [disabled]=\"!gameID || !isSignedIn\">Join Game</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_Game__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objects_consts__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// <script src="https://www.gstatic.com/firebasejs/3.7.1/firebase.js"></script>
//     <script>
// // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyBPz8WD91uJ5IX_qQdKASFQdaA2iuonzHo",
//     authDomain: "battleship-161001.firebaseapp.com",
//     databaseURL: "https://battleship-161001.firebaseio.com",
//     storageBucket: "battleship-161001.appspot.com",
//     messagingSenderId: "244043521193"
// };
// firebase.initializeApp(config);
// </script>
var GameService = (function () {
    function GameService(firebase, playerService) {
        this.firebase = firebase;
        this.playerService = playerService;
    }
    GameService.prototype.createGame = function (player) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // using 4 digits so we don't have huge URLs
            // 36^4 == 1,679,616, so that is a lot of games, not that we want to get even close to
            // that or finding unique ID might get really expensive
            _this.getUniqueID(4).then(function (gameID) {
                _this.game = new __WEBPACK_IMPORTED_MODULE_1__objects_Game__["a" /* Game */](gameID, player.getId());
                _this.game.createPlayer(player);
                _this.firebase.database.object("games/" + gameID).set(_this.game);
                // TODO: after firebase success
                resolve(gameID);
            });
        });
    };
    GameService.prototype.getGame = function () {
        return this.game;
    };
    GameService.prototype.getGameObservable = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"](function (observer) {
            _this.firebase.database.object("games/" + _this.game.gameID).subscribe(function (data) {
                // TODO: merge with fetchGame so we don't have to worry about a race condition.
                setTimeout(function () {
                    observer.next(_this.game);
                }, 10);
            });
            // const mapObserver = {
            //     next: (x) => observer.next(project(x)),
            //     error: (err) => observer.error(err),
            //     complete: () => observer.complete()
            // };
            // return this.subscribe(mapObserver);
        });
    };
    GameService.prototype.fetchGame = function (gameID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.playerService.getUserProfile().then(function (playerProfile) {
                _this.profile = playerProfile;
                if (_this.game) {
                    resolve(_this.game);
                }
                else {
                    _this.firebase.database.object("games/" + gameID).subscribe(function (data) {
                        if (data.$exists()) {
                            if (_this.game && _this.game.gameID == data.gameID) {
                                // updated game
                                _this.game.status = data.status;
                                data.players.forEach(function (playerData) {
                                    var playerObj = _this.game.getPlayer(playerData.id);
                                    if (!playerObj) {
                                        _this.game.addPlayerFromData(playerData);
                                    }
                                    else if (playerProfile.getId() != playerData.id) {
                                        Object.assign(playerObj, _this.game.makePlayerFromData(playerData));
                                    }
                                });
                                if (_this.game.players.length != data.players.length) {
                                }
                            }
                            else {
                                // new game
                                _this.game = new __WEBPACK_IMPORTED_MODULE_1__objects_Game__["a" /* Game */](gameID, data.ownerID);
                                _this.game.initFromData(data);
                            }
                            resolve(_this.game);
                        }
                        else {
                            reject();
                        }
                    });
                }
            });
        });
    };
    GameService.prototype.getUniqueID = function (size) {
        var _this = this;
        // TODO: implement a way to lock so 2 simultaneous games can't start at the same time
        return new Promise(function (resolve, reject) {
            // better answers: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            var id = Math.random().toString(36).substring(2, size + 2);
            _this.firebase.database.object("games/" + id).take(1).subscribe(function (data) {
                if (data.$exists()) {
                    // oops. Lets try again.
                    // TODO: implement max-retries
                    resolve(_this.getUniqueID(size));
                }
                else {
                    // yay. found one
                    resolve(id);
                }
            });
        });
    };
    GameService.prototype.savePlayersGame = function (playerId) {
        var player = this.game.getPlayer(playerId);
        var playerIndex = this.game.players.indexOf(player);
        this.firebase.database.object("games/" + this.game.gameID + "/players/" + playerIndex).update(player);
    };
    GameService.prototype.startGame = function () {
        this.game.status = __WEBPACK_IMPORTED_MODULE_1__objects_Game__["b" /* GameStatus */].PLAYING;
        this.firebase.database.object("games/" + this.game.gameID).update({
            status: this.game.status
        });
    };
    GameService.prototype.joinGame = function (gameID, profile) {
        var _this = this;
        return this.fetchGame(gameID).then(function (game) {
            if (!game.getPlayer(profile.getId()) && game.status == __WEBPACK_IMPORTED_MODULE_1__objects_Game__["b" /* GameStatus */].SETUP && game.players.length < __WEBPACK_IMPORTED_MODULE_5__objects_consts__["a" /* MAX_PLAYERS */]) {
                game.createPlayer(profile);
                _this.firebase.database.object("games/" + _this.game.gameID + "/players/" + (game.players.length - 1)).set(game.getPlayer(profile.getId()));
            }
            return game;
        });
    };
    GameService.prototype.hitShips = function (cord) {
        var _this = this;
        var hits = [];
        this.game.players.forEach(function (player, playerIndex) {
            hits = hits.concat(player.hitShips(cord)
                .filter(function (ship) {
                return ship.playerId != _this.profile.getId();
            })
                .map(function (ship) {
                // just so we know which color to mark the hit
                ship.playerIndex = playerIndex;
                return ship;
            }));
        });
        return hits;
    };
    GameService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__player_service__["a" /* PlayerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__player_service__["a" /* PlayerService */]) === 'function' && _b) || Object])
    ], GameService);
    return GameService;
    var _a, _b;
}());
//# sourceMappingURL=game.service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayerService = (function () {
    function PlayerService() {
        this.loadedPromise = new Promise(function (resolve, reject) {
            gapi.load('auth2', function () {
                gapi.auth2.init({
                    client_id: '244043521193-0eqj994haunsb1a056fkna5ajce9juh1.apps.googleusercontent.com'
                }).then(function () { return resolve(true); }, function () { return reject("gapi.auth2.init error"); });
            });
        });
        // this.loadedPromise.then((GoogleAuth) => {
        //     GoogleAuth.isSignedIn.get();
        // });
        this.loadedPromise.catch(function (error) {
            console.error(error);
        });
    }
    PlayerService.prototype.isSignedIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadedPromise.then(function () {
                resolve(gapi.auth2.getAuthInstance().isSignedIn.get());
            });
        });
    };
    // TODO: make this observable
    PlayerService.prototype.signIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadedPromise.then(function () {
                gapi.auth2.getAuthInstance().signIn().then(function () {
                    resolve(true);
                }, function () {
                    resolve(false);
                });
            });
        });
    };
    PlayerService.prototype.signOut = function () {
        this.loadedPromise.then(function () {
            gapi.auth2.getAuthInstance().signOut();
        });
    };
    PlayerService.prototype.getUserProfile = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadedPromise.then(function () {
                // this.playerProfile = GoogleAuth.currentUser.get().getBasicProfile();
                resolve(gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile());
            }).catch(reject);
        });
    };
    PlayerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], PlayerService);
    return PlayerService;
}());
//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(399);


/***/ })

},[874]);
//# sourceMappingURL=main.bundle.js.map