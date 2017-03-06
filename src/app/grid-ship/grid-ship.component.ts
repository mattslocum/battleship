import {Component, OnInit, Input, ElementRef, Renderer} from '@angular/core';
import {Ship} from "../objects/Ship";
import {element} from "protractor";
import {ICord} from "../objects/interfaces";

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

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer
    ) { }

    ngOnInit() {
        this.setShipClasses();
        // TODO: only on positioning
        this.setEventBindings();
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
            // iMouseX = e.pageX;
            // iMouseY = e.pageY;
            // iStartX = scope.ship.position()[0].x;
            // iStartY = scope.ship.position()[0].y;

            // assignments need to go to the parent, but reads will bubble up
            // scope.$parent.elSelectedShip = element;
            // scope.$parent.oSelectedShip = scope.ship;
        }
    }

    private mouseMoveHandler(event : MouseEvent) {
        if (this.isDragging) {
            let y : number = Math.round((event.pageY - this.mouseDownEvent.pageY) / BOX_SIZE),
                x : number = Math.round((event.pageX - this.mouseDownEvent.pageX) / BOX_SIZE),
                xOffset : number = 0;

            if (x != this.ship.position.x || y != this.ship.position.y) {
                // element.removeClass('x-'+ scope.ship.position()[0].x);
                // element.removeClass('y-'+ scope.ship.position()[0].y);
                // if (scope.ship.angle()  == 135) {
                //     xOffset = scope.ship.size() - 1;
                // }
                this.ship.position.y = Math.max(0, Math.min(GRID_SIZE - this.ship.shipHeight, this.startDragPos.y + y));
                this.ship.position.x = Math.max(xOffset, Math.min(GRID_SIZE - this.ship.shipWidth + xOffset, this.startDragPos.x + x));

                this.setShipClasses();
                // element.addClass('x-'+ scope.ship.position()[0].x);
                // element.addClass('y-'+ scope.ship.position()[0].y);
            }
        }
    }

    private mouseUpHandler(event : MouseEvent) {
        this.isDragging = false;
        // if (bDragging) {
        //     scope.ship.updatePositions();
        //     scope.checkShipsPos();
        //     bDragging = false;
        //     element.removeClass('dragging');
        // }
    }

    public ngOnDestroy() {
        this.listeners.forEach((listener) => listener());
        this.listeners = [];
    }
}
