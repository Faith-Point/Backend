import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateReligionService from '@modules/faithPoint/religions/service/CreateReligionService';
import DeleteReligionService from '@modules/faithPoint/religions/service/DeleteReligionService';
import FindReligionService from '@modules/faithPoint/religions/service/FindReligionService';
import UpdateReligionService from '@modules/faithPoint/religions/service/UpdateReligionService';

class ReligionController {
    public async create(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(CreateReligionService);

    const religion = await service.create(request.body);

    const output = await ApiResponse.execute('Religion created successfully', religion);

    return response.json(output);
  }

    public async update(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(UpdateReligionService);

    const religion = await service.update(request.params.id, request.body);

    const output = await ApiResponse.execute('Religion updated. ', religion);

    return response.json(output);
  }
    public async delete(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(DeleteReligionService);

    const religion = await service.delete(request.params.id);

    const output = await ApiResponse.execute('Religion deleted. ', religion);

    return response.json(output);
  }
    public async findAll(_request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindReligionService);

    const religion = await service.findAll();

    const output = await ApiResponse.execute('All religion returned', religion);

    return response.json(output);
  }
    public async findById(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindReligionService);

    const religion = await service.findById(request.params.id);

    const output = await ApiResponse.execute('Religion returned by id', religion);

    return response.json(output);
  }

  public async findByName(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindReligionService);

    const religion = await service.findByName(request.body);

    const output = await ApiResponse.execute('Religion returned by name', religion);

    return response.json(output);
  }
}

export default ReligionController;