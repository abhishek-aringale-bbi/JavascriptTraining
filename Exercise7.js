let mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

let john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
john.calcBMI();
mark.calcBMI();
console.log(john.bmi);
console.log(mark.bmi);
console.log(john.bmi > mark.bmi ? `John Smith's BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})` :
    `Mark Miller's BMI (${mark.bmi})) is higher than John Smith's (${john.bmi})`);