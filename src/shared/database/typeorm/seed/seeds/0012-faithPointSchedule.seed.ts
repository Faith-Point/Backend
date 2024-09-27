import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import FaithPoint from '@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint';
import FaithPointSchedule from '@modules/faithPoint/schedule/infra/typeorm/entities/FaithPointSchedule';
import log from '@shared/logger';
import { v4 as uuidv4 } from 'uuid';

export default class CreateFaithPointSchedules implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const faithPointRepository = dataSource.getRepository(FaithPoint);
    const faithPoints = await faithPointRepository.find();

    if (faithPoints.length === 0) {
      log.warn('No FaithPoints found. Please seed FaithPoints first.');
      return;
    }

    const faithPointScheduleRepository = dataSource.getRepository(FaithPointSchedule);
    const faithPointSchedules = await faithPointScheduleRepository.find();

    if (faithPointSchedules.length > 0) {
      log.warn('FaithPointSchedules already seeded.');
    } else {
      const faithPointScheduleEntities = faithPoints.map(faithPoint => {
        const schedule = new FaithPointSchedule();
        schedule.id = uuidv4();
        schedule.faith_point = faithPoint;
        schedule.date = new Date();
        schedule.start_time = new Date();
        schedule.end_time = new Date();
        return schedule;
      });
      await faithPointScheduleRepository.save(faithPointScheduleEntities);
      log.info('FaithPointSchedules seeded.');
    }
  }
}
