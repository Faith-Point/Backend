import { v4 as uuidv4 } from 'uuid';
import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import Religion from '@modules/faithPoint/religions/infra/typeorm/entities/Religion';

define(Religion, () => {
    const religion = new Religion();
    religion.id = uuidv4();
    religion.name = faker.lorem.word();
    religion.description = faker.lorem.sentence();
    return religion;
});
