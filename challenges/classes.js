// 1. Copy and paste your prototype in here and refactor into class syntax.
/* ===== Prototype Practice ===== */


class CuboidMaker {
    constructor(length, width, height) {
        this.name = 'Cuboid';
        this.length = length;
        this.width = width;
        this.height = height;
    }

    get volume() {
        return this.length * this.width * this.height;
    }

    set volume(value) {
        this.volume = value;
    }
    get surfaceArea ( ) {
    	return 2*((this.length * this.width) + (this.length * this.height) + (this.width * this.height))
    }
    set surfaceArea (value) {
    	this.surfaceArea = value;
    }
    describeSelf() {
    	console.log(`${this.name} has a volume of ${this.volume} and a surface area of ${this.surfaceArea}`)
    }
}

const cuboid = new CuboidMaker(4, 5, 5)
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.name, cuboid.volume); // 100
// console.log(cuboid.name,cuboid.surfaceArea); // 130
cuboid.describeSelf();

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
	constructor(length) {
		super(length, length, length);
		this.name = 'Cube';
	}
	    describeSelf() {
    	console.log(`${this.name} has a volume of ${this.volume} and a surface area of ${this.surfaceArea}`)
    }
}

const cube = new CubeMaker(4);
console.log(cube);
cube.describeSelf();