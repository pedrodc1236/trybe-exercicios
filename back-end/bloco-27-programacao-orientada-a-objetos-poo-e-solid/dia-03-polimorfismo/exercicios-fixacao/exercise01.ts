// // Para fixar 01

// abstract class Character {
//    abstract talk(): void;
//    abstract specialMove(): void;
// }

// class MeleeCharacter extends Character {
//   constructor(private _name: string, private _specialMoveName: string) { 
//     super();
//   }
//   talk(): void {
//     console.log(`Eu sou o ${this._name}, e ataco de perto !`)
//   }

//   specialMove(): void {
//     console.log(`${this._name} está usando seu movimento especial ${this._specialMoveName}!`)
//   }
// }

// class LongRangeCharacter extends Character {
//   constructor(private _name: string, private _specialMoveName: string) {
//     super();
//   }
//   talk(): void {
//     console.log(`Eu sou o ${this._name} e ataco de longe!`)
//   }

//   specialMove(): void {
//     console.log(`${this._name} está usando seu movimento especial ${this._specialMoveName}!`)
//   }
// }

// const funcCharacter = (character: Character) => {
//   character.talk();
//   character.specialMove();
// }

// const meleeCharacter = new MeleeCharacter('Pedro', 'Gomu gomu no Pistol');
// const longRangeCharacter = new LongRangeCharacter('Lipe', 'Room');

// funcCharacter(meleeCharacter);
// funcCharacter(longRangeCharacter);

