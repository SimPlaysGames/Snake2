class Snake {
    constructor(startLength, size) {
        this.startLength = startLength;
        this.size = size;

        this.clear();
    }

    draw() {
        this.collision();

        for(let part of this.parts) {
            ellipseMode(CORNER);
            fill(0, 255, 0);
            ellipse(part.x * this.size, part.y * this.size, this.size, this.size);
        }
    }

    update() {
        let pop = this.wait ? { x: 0, y: 0} : this.parts.pop();

        if(this.wait) {
            this.wait = false;
        }

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
        for(let i = 0; i < this.parts.length; i++) {
            if(this.parts[i].x == apple.x && this.parts[i].y == apple.y) {
                this.points++;
                this.wait = true;

                apple = {
                    x: Math.floor(Math.random() * (width / 25)),
                    y: Math.floor(Math.random() * (height / 25))
                };
            }

            for(let i2 = 0; i2 < this.parts.length; i2++) {
                if(this.parts[i] == this.parts[i2]) {
                    continue;
                }

                if(this.parts[i].x == this.parts[i2].x && this.parts[i].y == this.parts[i2].y) {
                    this.dead = true;
                }
            }
        }
    }

    clear() {
        this.parts = [];
        this.points = 0;
        this.direction = 'E';
        this.dead = false;

        for(let i = this.startLength - 1; i >= 0; i--) {
            this.parts.push({ x: i, y: 0 });
        }
    }
}
