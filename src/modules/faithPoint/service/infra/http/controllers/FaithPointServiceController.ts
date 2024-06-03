import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateFaithPointServiceService from '@modules/faithPoint/service/service/CreateFaithPointServiceService';
import DeleteFaithPointServiceService from '@modules/faithPoint/service/service/DeleteFaithPointServiceService';
import FindFaithPointServiceService from '@modules/faithPoint/service/service/FindFaithPointServiceService';
import UpdateFaithPointServiceService from '@modules/faithPoint/service/service/UpdateFaithPointServiceService';

class FaithPointServiceController {
    public async create(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(CreateFaithPointServiceService);

        const faithPointService = await service.create(request.body);

        const output = await ApiResponse.execute('FaithPointService created successfully', faithPointService);

        return response.json(output);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(UpdateFaithPointServiceService);

        const faithPointService = await service.update(request.params.id, request.body);

        const output = await ApiResponse.execute('FaithPointService updated. ', faithPointService);

        return response.json(output);
    }
    public async delete(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(DeleteFaithPointServiceService);

        const faithPointService = await service.delete(request.params.id);

        const output = await ApiResponse.execute('FaithPointService deleted. ', faithPointService);

        return response.json(output);
    }
    public async findAll(_request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointServiceService);

        const faithPointService = await service.findAll();

        const output = await ApiResponse.execute('All faithPointService returned', faithPointService);

        return response.json(output);
    }
    public async findById(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointServiceService);

        const faithPointService = await service.findById(request.params.id);

        const output = await ApiResponse.execute('FaithPointService returned by id', faithPointService);

        return response.json(output);
    }
    public async findByFaithPoint(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointServiceService);

        const faithPointService = await service.findByFaithPoint(request.body);

        const output = await ApiResponse.execute('FaithPointService returned by faith_point', faithPointService);

        return response.json(output);
    }
    public async findByName(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointServiceService);

        const faithPointService = await service.findByName(request.body);

        const output = await ApiResponse.execute('FaithPointService returned by name', faithPointService);

        return response.json(output);
    }
}

export default FaithPointServiceController;

