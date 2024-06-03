import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateFaithPointRatingService from '@modules/faithPoint/rating/service/CreateFaithPointRatingService';
import DeleteFaithPointRatingService from '@modules/faithPoint/rating/service/DeleteFaithPointRatingService';
import FindFaithPointRatingService from '@modules/faithPoint/rating/service/FindFaithPointRatingService';
import UpdateFaithPointRatingService from '@modules/faithPoint/rating/service/UpdateFaithPointRatingService';

class FaithPointRatingController {
    public async create(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(CreateFaithPointRatingService);
        
        const faithPointRating = await service.create(request.body);

        const output = await ApiResponse.execute('Faith Point Rating created successfully', faithPointRating);

        return response.json(output);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(UpdateFaithPointRatingService);

        const faithPointRating = await service.update(request.params.id, request.body);

        const output = await ApiResponse.execute('Faith Point Rating updated. ', faithPointRating);

        return response.json(output);
    }
    public async delete(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(DeleteFaithPointRatingService);

        const faithPointRating = await service.delete(request.params.id);

        const output = await ApiResponse.execute('Faith Point Rating deleted. ', faithPointRating);

        return response.json(output);
    }
    public async findAll(_request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointRatingService);

        const faithPointRating = await service.findAll();

        const output = await ApiResponse.execute('All faith point rating returned', faithPointRating);

        return response.json(output);
    }
    public async findById(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointRatingService);

        const faithPointRating = await service.findById(request.params.id);

        const output = await ApiResponse.execute('Faith Point Rating returned by id', faithPointRating);

        return response.json(output);
    }

    public async findByFaithPoint(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointRatingService);

        const faithPointRating = await service.findByFaithPoint(request.body);

        const output = await ApiResponse.execute('Faith Point Rating returned by faith point', faithPointRating);

        return response.json(output);
    }

    public async findByUser(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointRatingService);

        const faithPointRating = await service.findByUser(request.body);

        const output = await ApiResponse.execute('Faith Point Rating returned by user', faithPointRating);

        return response.json(output);
    }

    public async findByRating(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointRatingService);

        const faithPointRating = await service.findByRating(request.body);

        const output = await ApiResponse.execute('Faith Point Rating returned by rating', faithPointRating);

        return response.json(output);
    }
}

export default FaithPointRatingController;