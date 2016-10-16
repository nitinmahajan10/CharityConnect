export class Entity {
    constructor() {
        this.id = 0;
    }

    id: number;
    clone(): this {
        let cloneObj = new (<any>this).constructor();
        for (var attribut in this) {
            if (typeof this[attribut] === "Entity") {
                cloneObj[attribut] = this[attribut].clone();
            } else {
                cloneObj[attribut] = this[attribut];
            }
        }
        return cloneObj;
    }
}