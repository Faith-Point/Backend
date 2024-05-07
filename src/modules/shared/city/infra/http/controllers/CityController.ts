
import CreateCityService from '@modules/shared/city/services/CreateCityService';
import DeleteCityService from '@modules/shared/city/services/DeleteCityService';
import FindCityService from '@modules/shared/city/services/FindCityService';
import UpdateCityService from '@modules/shared/city/services/UpdateCityService';
import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CityController {
    public async create(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(CreateCityService);

		const city = await service.create(request.body);

		const output = await ApiResponse.execute('City created successfully', city);

		return response.json(output);
	}

    public async update(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(UpdateCityService);

		const city = await service.update(request.params.id, request.body);

		const output = await ApiResponse.execute('City updated. ', city);

		return response.json(output);
	}
    public async delete(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(DeleteCityService);

		const city = await service.delete(request.params.id);

		const output = await ApiResponse.execute('City deleted. ', city);

		return response.json(output);
	}
    public async findAll(_request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCityService);

		const city = await service.findAll();

		const output = await ApiResponse.execute('All cities returned', city);

		return response.json(output);
	}
    public async findById(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCityService);

		const city = await service.findById(request.params.id);

		const output = await ApiResponse.execute('City returned by id', city);

		return response.json(output);
	}
	public async findByState(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCityService);

		const city = await service.findByState(request.body);

		const output = await ApiResponse.execute('City returned by state', city);

		return response.json(output);
	}
    public async findByShortName(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCityService);

		const city = await service.findByShortName(request.body);

		const output = await ApiResponse.execute('City returned by short name', city);

		return response.json(output);
	}
    public async findByLongName(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCityService);

		const city = await service.findByLongName(request.body);

		const output = await ApiResponse.execute('City returned by long name', city);

		return response.json(output);
	}

	public async findByCode(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCityService);

		const city = await service.findByCode(request.body);

		const output = await ApiResponse.execute('City returned by code', city);

		return response.json(output);
	}
}

export default CityController;