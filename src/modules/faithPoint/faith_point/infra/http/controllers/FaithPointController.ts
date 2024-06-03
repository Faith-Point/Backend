import CreateFaithPointService from '@modules/faithPoint/faith_point/service/CreateFaithPointService';
import FindFaithPointService from '@modules/faithPoint/faith_point/service/FindFaithPointService';
import UpdateFaithPointService from '@modules/faithPoint/faith_point/service/UpdateFaithPointService';
import DeleteFaithPointService from '@modules/faithPoint/faith_point/service/DeleteFaithPointService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ApiResponse from '@shared/http/response/ApiResponse';

class FaithPointController {
    public async create(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(CreateFaithPointService);

    const faithPoint = await service.create(request.body);

    const output = await ApiResponse.execute('Faith point created successfully', faithPoint);

    return response.json(output);
  }

    public async update(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(UpdateFaithPointService);

    const faithPoint = await service.update(request.params.id, request.body);

    const output = await ApiResponse.execute('Faith point updated. ', faithPoint);

    return response.json(output);
  }
    public async delete(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(DeleteFaithPointService);

    const faithPoint = await service.delete(request.params.id);

    const output = await ApiResponse.execute('Faith point deleted. ', faithPoint);

    return response.json(output);
  }
    public async findAll(_request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindFaithPointService);

    const faithPoint = await service.findAll();

    const output = await ApiResponse.execute('All faith points returned', faithPoint);

    return response.json(output);
  }
    public async findById(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindFaithPointService);

    const faithPoint = await service.findById(request.params.id);

    const output = await ApiResponse.execute('Faith point returned by id', faithPoint);

    return response.json(output);
  }
  public async findByReligion(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindFaithPointService);

    const faithPoint = await service.findByReligion(request.body);

    const output = await ApiResponse.execute('Faith point returned by religion', faithPoint);

    return response.json(output);
  }

  public async findByName(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindFaithPointService);

    const faithPoint = await service.findByName(request.body);

    const output = await ApiResponse.execute('Faith point returned by name', faithPoint);

    return response.json(output);
  }
}

export default FaithPointController;