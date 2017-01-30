class GuessingGame {
    constructor() {
        this.lowerBorder = 0;
        this.upperBorder = 0;
    }

    setRange(min, max) {
        this.lowerBorder = min;
        this.upperBorder = max;
    }

    guess() {
        return Math.ceil((this.lowerBorder+this.upperBorder)/2);
    }

    lower() {
        this.upperBorder = this.guess();
    }

    greater() {
        this.lowerBorder = this.guess();
    }
}

module.exports = GuessingGame;
