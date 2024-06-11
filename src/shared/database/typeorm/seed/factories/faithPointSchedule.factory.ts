import { define } from "typeorm-seeding";
import { v4 as uuidv4 } from "uuid";
import { Faker, faker } from "@faker-js/faker";
import FaithPoint from "@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint";
import FaithPointSchedule from "@modules/faithPoint/schedule/infra/typeorm/entities/FaithPointSchedule";

define(
  FaithPointSchedule,
  (_fakes: typeof Faker, context?: { faithPoint: FaithPoint }) => {
    if (!context || !context.faithPoint) {
      throw new Error(
        "FaithPointSchedule factory needs a faithPoint to be created"
      );
    }

    const faithPointSchedule = new FaithPointSchedule();
    faithPointSchedule.id = uuidv4();
    const date = faker.date.recent();
    faithPointSchedule.date = date;
    const startTime = new Date(date);
    startTime.setHours(faker.number.int({ min: 0, max: 23 }));
    startTime.setMinutes(faker.number.int({ min: 0, max: 59 }));
    startTime.setSeconds(faker.number.int({ min: 0, max: 59 }));
    const endTime = new Date(startTime);
    endTime.setHours(
      startTime.getHours() + faker.number.int({ min: 1, max: 2 })
    );
    faithPointSchedule.start_time = startTime;
    faithPointSchedule.end_time = endTime;
    faithPointSchedule.faith_point = context.faithPoint;
    return faithPointSchedule;
  }
);
