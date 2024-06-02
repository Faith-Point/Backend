import countryRouter from '@modules/shared/country/infra/http/routes/Country.routes';
import stateRouter from '@modules/shared/state/infra/http/routes/State.routes';
import cityRouter from '@modules/shared/city/infra/http/routes/City.routes';
import addressRouter from '@modules/shared/address/infra/http/routes/Address.routes';
import roleRouter from '@modules/role/infra/http/routes/role.routes';
import userRouter from '@modules/user/infra/http/routes/user.routes';
import authRouter from '@modules/auth/infra/http/routes/auth.routes';
import faithPoint from '@modules/faithPoint/faith_point/infra/http/routes/FaithPoint.routes';
import faithPointImage from '@modules/faithPoint/image/infra/http/routes/FaithPointImage.routes';
// import faithPointRating from '@modules/faithPoint/rating/infra/http/routes/faithPointRating.routes';
import faithPointReligions from '@modules/faithPoint/religions/infra/http/routes/Religion.routes';
import faithPointSchedule from '@modules/faithPoint/schedule/infra/http/routes/FaithPointSchedule.routes';
// import faithPointService from '@modules/faithPoint/service/infra/http/routes/faithPointService.routes';
// import faithPointSubscription from '@modules/faithPoint/subscription/infra/http/routes/faithPointSubscription.routes';
import contactRouter from '@modules/shared/contact/infra/http/routes/Contact.routes';
import socialMediaRouter from '@modules/shared/socialMedia/infra/http/routes/SocialMedia.routes';

const route = {
    countryRouter,
    stateRouter,
    cityRouter,
    addressRouter,
    roleRouter,
    userRouter,
    authRouter,
    faithPoint,
    faithPointImage,
    // faithPointRating,
    faithPointReligions,
    faithPointSchedule,
    // faithPointService,
    // faithPointSubscription,
    contactRouter,
    socialMediaRouter    
};

export default route;