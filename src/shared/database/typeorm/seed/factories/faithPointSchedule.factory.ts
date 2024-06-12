import { define } from "typeorm-seeding";
import { v4 as uuidv4 } from "uuid";
import { Faker } from "@faker-js/faker";
import FaithPoint from "@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint";
import FaithPointSchedule from "@modules/faithPoint/schedule/infra/typeorm/entities/FaithPointSchedule";

define(
  FaithPointSchedule,
  (
    _fakes: typeof Faker,
    context?: { faithPoint: FaithPoint }
  ) => {
    if (!context || !context.faithPoint) {
      throw new Error(
        "FaithPointSchedule factory needs a faithPoint to be created"
      );
    }

    const faithPointSchedule = new FaithPointSchedule();
    faithPointSchedule.id = uuidv4();
    faithPointSchedule.faith_point = context.faithPoint;
    faithPointSchedule.date = new Date();
    faithPointSchedule.start_time = new Date();
    faithPointSchedule.end_time = new Date();

    return faithPointSchedule;
  }
);
