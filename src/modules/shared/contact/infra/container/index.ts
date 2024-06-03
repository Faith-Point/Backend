import { container } from 'tsyringe';
import IContactRepository from '@modules/shared/contact/domain/repositories/IContactRepository';
import ContactRepository from '@modules/shared/contact/infra/typeorm/repositories/ContactRepository';

container.registerSingleton<IContactRepository>('ContactRepository', ContactRepository);