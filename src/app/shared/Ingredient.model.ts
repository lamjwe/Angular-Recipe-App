export class Ingredient {
    // public name: string;
    // public amount: number;

    // constructor(name: string, amount: number) {
    //     this.name = name;
    //     this.amount = amount;
    // }

    // shortcut. Automatically give the properties with the names that are specify here as argument names
    constructor(public name: string, public amount: number) {}
}