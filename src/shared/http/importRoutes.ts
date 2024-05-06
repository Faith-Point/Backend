import countryRouter from '@modules/shared/country/infra/http/routes/Country.routes';
import stateRouter from '@modules/shared/state/infra/http/routes/State.routes';
import cityRouter from '@modules/shared/city/infra/http/routes/City.routes';
import addressRouter from '@modules/shared/address/infra/http/routes/Address.routes';

const route = {
    countryRouter,
    stateRouter,
    cityRouter,
    addressRouter
};

export default route;