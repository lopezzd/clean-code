// Dependecy Inversion Principle (DIP) - Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

interface Database {
  save(data: string): void;
}

class MySQLDatabase implements Database {
  save(data: string) {
    console.log(`Salvando "${data}" no MySQL`);
  }
}

class MongoDatabase implements Database {
  save(data: string) {
    console.log(`Salvando "${data}" no MongoDB`);
  }
}

class UserService {
  constructor(private db: Database) {}

  saveUser(name: string) {
    this.db.save(name);
  }
}

const db = new MongoDatabase(); 
const service = new UserService(db);

service.saveUser("João");
