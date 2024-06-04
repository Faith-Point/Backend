import { Factory, Seeder } from 'typeorm-seeding';
import ormConfigImport from '@shared/database/typeorm/ormConfigImport';

export default class Seeds implements Seeder {
  public async run(factory: Factory): Promise<void> {
    // Ordenar as entidades para evitar problemas de chave estrangeira
    ormConfigImport.entities.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    
    for (const entity of ormConfigImport.entities) {
      await factory(entity)();
    }
  }
}
