import CreateFaithPointImageService from '@modules/faithPoint/image/service/CreateFaithPointImageService';
import DeleteFaithPointImageService from '@modules/faithPoint/image/service/DeleteFaithPointImageService';
import FindFaitPointImageService from '@modules/faithPoint/image/service/FindFaithPointImageService';
import UpdateFaithPointImageService from '@modules/faithPoint/image/service/UpdateFaithPointImageService';
import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class FaithPointImageController {
    public async create(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(CreateFaithPointImageService);

        const faithPointImage = await service.create(request.body);

        const output = await ApiResponse.execute('FaithPointImage created successfully', faithPointImage);

        return response.json(output);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(UpdateFaithPointImageService);

        const faithPointImage = await service.update(request.params.id, request.body);

        const output = await ApiResponse.execute('FaithPointImage updated. ', faithPointImage);

        return response.json(output);
    }
    public async delete(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(DeleteFaithPointImageService);

        const faithPointImage = await service.delete(request.params.id);

        const output = await ApiResponse.execute('FaithPointImage deleted. ', faithPointImage);

        return response.json(output);
    }
    public async findAll(_request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaitPointImageService);

        const faithPointImage = await service.findAll();

        const output = await ApiResponse.execute('All faithPointImage returned', faithPointImage);

        return response.json(output);
    }
    public async findById(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaitPointImageService);

        const faithPointImage = await service.findById(request.params.id);

        const output = await ApiResponse.execute('FaithPointImage returned by id', faithPointImage);

        return response.json(output);
    }

    public async findByFaithPointId(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaitPointImageService);

        const faithPointImage = await service.findByFaithPointId(request.body);

        const output = await ApiResponse.execute('FaithPointImage returned by faithPointId', faithPointImage);

        return response.json(output);
    }
}

export default FaithPointImageController;
