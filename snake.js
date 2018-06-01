class Snake {
    constructor(startLength, size) {
        this.startLength = startLength;
        this.size = size;

        this.clear();
    }

    draw() {
        for(let part of this.parts) {
            ellipseMode(CORNER);
            fill(0, 255, 0);
            ellipse(part.x * this.size, part.y * this.size, this.size, this.size);
        }
    }

    update() {
        let pop = this.parts.pop();

        switch(this.direction) {
            case 'N':
                pop.x = this.parts[0].x;
                pop.y = this.parts[0].y - 1;
                break;
            case 'S':
                pop.x = this.parts[0].x;
                pop.y = this.parts[0].y + 1;
                break;
            case 'E':
                pop.x = this.parts[0].x + 1;
                pop.y = this.parts[0].y;
                break;
            case 'W':
                pop.x = this.parts[0].x - 1;
                pop.y = this.parts[0].y;
                break;
        }

        this.parts.unshift(pop);
    }

    collision() {

    }

    clear() {
        this.parts = [];
        this.points = 0;
        this.direction = 'E';

        for(let i = this.startLength - 1; i >= 0; i--) {
            this.parts.push({ x: i, y: 0 });
        }
    }
}
