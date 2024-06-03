import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateFaithPointSubscriptionService from '@modules/faithPoint/subscription/service/CreateFaithPointSubscriptionService';
import DeleteFaithPointSubscriptionService from '@modules/faithPoint/subscription/service/DeleteFaithPointSubscriptionService';
import FindFaithPointSubscriptionService from '@modules/faithPoint/subscription/service/FindFaithPointSubscriptionService';
import UpdateFaithPointSubscriptionService from '@modules/faithPoint/subscription/service/UpdateFaithPointSubscriptionService';

class FaithPointSubscriptionController {
    public async create(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(CreateFaithPointSubscriptionService);

        const faithPointSubscription = await service.create(request.body);

        const output = await ApiResponse.execute('Faith Point Subscription created successfully', faithPointSubscription);

        return response.json(output);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(UpdateFaithPointSubscriptionService);

        const faithPointSubscription = await service.update(request.params.id, request.body);

        const output = await ApiResponse.execute('Faith Point Subscription updated. ', faithPointSubscription);

        return response.json(output);
    }
    public async delete(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(DeleteFaithPointSubscriptionService);

        const faithPointSubscription = await service.delete(request.params.id);

        const output = await ApiResponse.execute('Faith Point Subscription deleted. ', faithPointSubscription);

        return response.json(output);
    }
    public async findAll(_request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointSubscriptionService);

        const faithPointSubscription = await service.findAll();

        const output = await ApiResponse.execute('All faith point subscription returned', faithPointSubscription);

        return response.json(output);
    }
    public async findById(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointSubscriptionService);

        const faithPointSubscription = await service.findById(request.params.id);

        const output = await ApiResponse.execute('Faith Point Subscription returned by id', faithPointSubscription);

        return response.json(output);
    }
    public async findByFaithPointId(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointSubscriptionService);

        const faithPointSubscription = await service.findByFaithPointId(request.body);

        const output = await ApiResponse.execute('Faith Point Subscription returned by faith point id', faithPointSubscription);

        return response.json(output);
    }
}

export default FaithPointSubscriptionController;