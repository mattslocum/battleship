import {Component, OnInit, Input, ElementRef, Renderer} from '@angular/core';
import {Ship} from "../objects/Ship";
import {element} from "protractor";
import {ICord} from "../objects/interfaces";
import {ActivatedRoute, UrlSegment} from "@angular/router";
import {ROUTE_PART_SETUP} from "../objects/consts";

const BOX_SIZE : number = 40;
// TODO: get this from somewhere else
const GRID_SIZE : number = 12;

@Component({
    selector: 'grid-ship',
    templateUrl: './grid-ship.component.html',
    styleUrls: ['./grid-ship.component.css']
})
export class GridShipComponent implements OnInit {

    @Input() public ship : Ship;
    public isSelected : boolean = false;
    public shipClasses : {} = {};
    private listeners : Function[] = [];
    private isDragging : boolean = false;
    private mouseDownEvent : MouseEvent;
    private startDragPos : ICord;
    public doingSetup : boolean = false;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer,
        private route : ActivatedRoute
    ) { }

    ngOnInit() {
        this.initRouteCheck();
        this.setShipClasses();
    }

    // Future: maybe make the ship send an event that it changed.
    ngDoCheck() {
        if (this.doingSetup && this.ship.hasNewRotation) {
            this.fixPosition();
            this.setShipClasses();
            this.ship.hasNewRotation = false;
        }
    }

    private initRouteCheck() {
        this.route.url
            .subscribe((parts : UrlSegment[]) => {
                this.doingSetup = parts[parts.length - 1].path == ROUTE_PART_SETUP;

                if (this.doingSetup) {
                    this.setEventBindings();
                } else {
                    this.removeEventBindings();
                }
            });
    }

    private setShipClasses() {
        this.shipClasses = {};
        this.shipClasses[this.ship.type] = true;
        this.shipClasses[`x-${this.ship.position.x}`] = true;
        this.shipClasses[`y-${this.ship.position.y}`] = true;
        this.shipClasses[`dir-${this.ship.angle}`] = true;
        this.shipClasses['selected'] = this.isSelected;
    }

    private setEventBindings() {
        this.listeners.push(this.renderer.listenGlobal('document', 'mousedown', this.mouseDownHandler.bind(this)));
        this.listeners.push(this.renderer.listenGlobal('body', 'mousemove', this.mouseMoveHandler.bind(this)));
        this.listeners.push(this.renderer.listenGlobal('document', 'mouseup', this.mouseUpHandler.bind(this)));
        this.listeners.push(this.renderer.listenGlobal('document', 'touchstart', this.mouseDownHandler.bind(this)));
        this.listeners.push(this.renderer.listenGlobal('body', 'touchmove', this.mouseMoveHandler.bind(this)));
        this.listeners.push(this.renderer.listenGlobal('document', 'touchend', this.mouseUpHandler.bind(this)));
    }

    private removeEventBindings() {
        this.listeners.forEach((listener) => listener());
        this.listeners = [];
    }

    private mouseDownHandler(event : MouseEvent) {
        this.isSelected = this.elementRef.nativeElement == (<Node>event.target).parentNode;
        this.shipClasses['selected'] = this.isSelected;

        if (this.isSelected) {
            this.isDragging = true;
            this.mouseDownEvent = event;
            this.startDragPos = {
                x: this.ship.position.x,
                y: this.ship.position.y
            };
        }
    }

    private mouseMoveHandler(event : MouseEvent) {
        if (this.isDragging) {
            let y : number = Math.round((event.pageY - this.mouseDownEvent.pageY) / BOX_SIZE),
                x : number = Math.round((event.pageX - this.mouseDownEvent.pageX) / BOX_SIZE);

            if (x != this.ship.position.x || y != this.ship.position.y) {
                this.ship.position.y = this.startDragPos.y + y;
                this.ship.position.x = this.startDragPos.x + x;
                this.fixPosition();

                this.setShipClasses();
            }
        }
    }

    private mouseUpHandler(event : MouseEvent) {
        this.isDragging = false;
    }

    public ngOnDestroy() {
        this.removeEventBindings();
    }

    private fixPosition() {
        let xOffset : number = this.ship.angle  == 135 ?
            this.ship.shipWidth - 1 :
            0;
        this.ship.position.y = Math.max(0, Math.min(GRID_SIZE - this.ship.shipHeight, this.ship.position.y));
        this.ship.position.x = Math.max(xOffset, Math.min(GRID_SIZE - this.ship.shipWidth + xOffset, this.ship.position.x));
    }
}
