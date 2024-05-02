import CreateCountryService from '@modules/shared/country/services/CreateCountryService';
import DeleteCountryService from '@modules/shared/country/services/DeleteCountryService';
import FindCountryService from '@modules/shared/country/services/FindCountryService';
import UpdateCountryService from '@modules/shared/country/services/UpdateCountryService';
import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CountryController {
    public async create(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(CreateCountryService);

		const country = await service.create(request.body);

		const output = await ApiResponse.execute('Country criada com sucesso!.', country);

		return response.json(output);
	}

    public async update(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(UpdateCountryService);

		const country = await service.update(request.params.id, request.body);

		const output = await ApiResponse.execute('Country Updated. ', country);

		return response.json(output);
	}
    public async delete(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(DeleteCountryService);

		const country = await service.delete(request.body);

		const output = await ApiResponse.execute('Country Deleted. ', country);

		return response.json(output);
	}
    public async findAll(_request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCountryService);

		const country = await service.findAll();

		const output = await ApiResponse.execute('Find All returned', country);

		return response.json(output);
	}
    public async findById(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCountryService);

		const country = await service.findById(request.params.id);

		const output = await ApiResponse.execute('findById returned', country);

		return response.json(output);
	}
    public async findByShortName(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCountryService);

		const country = await service.findByShortName(request.body);

		const output = await ApiResponse.execute('findByShortName returned', country);

		return response.json(output);
	}
    public async findByLongName(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCountryService);

		const country = await service.findByLongName(request.body);

		const output = await ApiResponse.execute('findByLongName returned', country);

		return response.json(output);
	}
}

export default CountryController;