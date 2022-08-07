interface Character {
  name: string;
  atkSpecialMove: string;
}

interface DbCharacter extends Character {
 id: number; 
}

const db: DbCharacter[] = [];

// Crie uma interface chamada IModel que defina as operações básicas de um CRUD para a entidade Character.
interface IModel {
  create: (character: Character) => Promise<DbCharacter>;
  update: (id: number, character: Character) => Promise<DbCharacter>;
  delete: (id: number) => Promise<boolean>;
  getAll: () => Promise<DbCharacter[]>;
  getById: (id: number) => Promise<DbCharacter>;
}

// Crie uma classe LocalDbModel que implemente a interface IModel.
class LocalDbModel implements IModel {
  create = async (character: Character) => {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
  };

  findIndexById = (id: number) => {
    const index = db.findIndex((character) => character.id === id);
    if (index < 0) throw new Error('Character not found');
    return index;
  };

  update = async (id: number, character: Character) => {
    const indexToUpdate = this.findIndexById(id);
    db[indexToUpdate] = { ...db[indexToUpdate], ...character };
    return db[indexToUpdate];
  }

  delete = async (id: number) => {
    const indexToDelete = this.findIndexById(id);
    const deletedItem = db.splice(indexToDelete, 1);
    if (deletedItem.length > 0) return true;
    return false;
  }

  getAll = async () => db;

  getById = async (id: number) => {
    const indexToGet = this.findIndexById(id);
    return db[indexToGet];
  };
}

class CharacterService {
  constructor(readonly model: IModel) { }

  create = async (character: Character) => {
    const newCharacter = await this.model.create(character);
    return({ status: 201, data: newCharacter });
  }

  getAll= async () => {
    const allCharacter = await this.model.getAll();
    return ({ status: 200, data: allCharacter });
  }
}

class MockDbModel implements IModel {
  create = async (character: Character) => {
    console.log('character created');
    return { id: 1, name: 'Peach', specialMove: 'Toad' };
  }

  update = async (id: number, character: Character) => {
    console.log('character updated');
    return { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' }
  }

  delete = async (id:number) => {
    console.log('character deleted');
    return true;
  }

  getAll = async  () => {
    return [
      { id: 1, name: 'Samus', specialMove: 'Charge Short' },
      { id: 2, name: 'Kirby', specialMove: 'Inhale' },
    ];
  }

  getById = async () => {
    return { id: 1, name: 'Mario', specialMove: 'Fireball' }
  }
}

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService(new MockDbModel());
B.getAll().then(console.log);