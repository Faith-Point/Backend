import countryRouter from '@modules/shared/country/infra/http/routes/Country.routes';
import stateRouter from '@modules/shared/state/infra/http/routes/State.routes';
import cityRouter from '@modules/shared/city/infra/http/routes/City.routes';
import addressRouter from '@modules/shared/address/infra/http/routes/Address.routes';
import roleRouter from '@modules/role/infra/http/routes/role.routes';
import userRouter from '@modules/user/infra/http/routes/user.routes';
import authRouter from '@modules/auth/infra/http/routes/auth.routes';

const route = {
    countryRouter,
    stateRouter,
    cityRouter,
    addressRouter,
    roleRouter,
    userRouter,
    authRouter
};

export default route;