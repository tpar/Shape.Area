import { ShapeEnclosure } from './shape';


export class InequalBoundaryException extends Error {
    constructor(private enclosure?: ShapeEnclosure) {
        super(`Error in creating shape, as length is not equal to breadth for the enclosure`);
        if (enclosure) {
            this.message = this.message + ` length=${this.enclosure.length} breadth=${this.enclosure.breadth}`;
        }
    }
}