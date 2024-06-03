import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateContactService from '@modules/shared/contact/service/CreateContactService';
import DeleteContactService from '@modules/shared/contact/service/DeleteContactService';
import FindContactService from '@modules/shared/contact/service/FindContactService';
import UpdateContactService from '@modules/shared/contact/service/UpdateContactService';

class ContactController {
    public async create(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(CreateContactService);

    const contact = await service.create(request.body);

    const output = await ApiResponse.execute('Contact created successfully', contact);

    return response.json(output);
  }

    public async update(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(UpdateContactService);

    const contact = await service.update(request.params.id, request.body);

    const output = await ApiResponse.execute('Contact updated. ', contact);

    return response.json(output);
  }
    public async delete(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(DeleteContactService);

    const contact = await service.delete(request.params.id);

    const output = await ApiResponse.execute('Contact deleted. ', contact);

    return response.json(output);
  }
    public async findAll(_request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindContactService);

    const contact = await service.findAll();

    const output = await ApiResponse.execute('All contact returned', contact);

    return response.json(output);
  }
    public async findById(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindContactService);

    const contact = await service.findById(request.params.id);

    const output = await ApiResponse.execute('Contact returned by id', contact);

    return response.json(output);
  }
  public async findByName(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindContactService);

    const contact = await service.findByName(request.body);

    const output = await ApiResponse.execute('Contact returned by name', contact);

    return response.json(output);
  }
  public async findByPhone(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindContactService);

    const contact = await service.findByPhone(request.body);

    const output = await ApiResponse.execute('Contact returned by phone', contact);

    return response.json(output);
  }
  public async findByEmail(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindContactService);

    const contact = await service.findByEmail(request.body);

    const output = await ApiResponse.execute('Contact returned by email', contact);

    return response.json(output);
  }
}

export default ContactController;