import Country from '@modules/shared/country/infra/typeorm/entities/Country';
import State from '@modules/shared/state/infra/typeorm/entities/State';
import City from '@modules/shared/city/infra/typeorm/entities/City';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';
import Contact from '@modules/shared/contact/infra/typeorm/entities/Contact';
import SocialMedia from '@modules/shared/socialMedia/infra/typeorm/entities/SocialMedia';
import Role from '@modules/role/infra/typeorm/entities/Role';
import User from '@modules/user/infra/typeorm/entities/User';
import FaithPoint from '@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint';
import FaithPointImage from '@modules/faithPoint/image/infra/typeorm/entities/FaithPointImage';
import FaithPointRating from '@modules/faithPoint/rating/infra/typeorm/entities/FaithPointRating';
import FaithPointReligions from '@modules/faithPoint/religions/infra/typeorm/entities/Religion';
import FaithPointSchedule from '@modules/faithPoint/schedule/infra/typeorm/entities/FaithPointSchedule';
import FaithPointService from '@modules/faithPoint/service/infra/typeorm/entities/FaithPointService';
import FaithPointSubscription from '@modules/faithPoint/subscription/infra/typeorm/entities/FaithPointSubscription';


const ormConfigImports = {
    entities: [
        Country,
        State,
        City,
        Address,
        Contact,
        SocialMedia,
        Role,
        User,
        FaithPoint,
        FaithPointImage,
        FaithPointRating,
        FaithPointReligions,
        FaithPointSchedule,
        FaithPointService,
        FaithPointSubscription
    ]
};

export default ormConfigImports;