
export interface Shape {
    area: number;
    enclosure: ShapeEnclosure;
}

export class ShapeEnclosure {
    constructor (public length, public breadth) {};
}

export enum ShapeType {
    Circle, 
    Triangle
}