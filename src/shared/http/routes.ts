import { Router } from 'express';
import ApiResponse from '@shared/http/response/ApiResponse';
import cors from 'cors';
import options from '@config/cors';
import route from './importRoutes';

const router = Router();
router.use(cors(options.cors));

router.get('/', (_request, response) => {
	const output = ApiResponse.execute('back on');
	return response.json(output);
});
router.use('/country', route.countryRouter);
router.use('/state', route.stateRouter);
router.use('/city', route.cityRouter);
router.use('/address', route.addressRouter);
router.use('/role', route.roleRouter);
router.use('/user', route.userRouter);
router.use('/auth', route.authRouter);
router.use('/faithPoint', route.faithPoint);
router.use('/faithPointImage', route.faithPointImage);
router.use('/faithPointRating', route.faithPointRating);
router.use('/faithPointReligions', route.faithPointReligions);
router.use('/faithPointSchedule', route.faithPointSchedule);
router.use('/faithPointService', route.faithPointService);
router.use('/faithPointSubscription', route.faithPointSubscription);
router.use('/contact', route.contactRouter);
router.use('/socialMedia', route.socialMediaRouter);

export default router;