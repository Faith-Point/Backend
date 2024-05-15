import CreateRoleService from '@modules/role/services/CreateRoleService';
import DeleteRoleService from '@modules/role/services/DeleteRoleService';
import FindRoleService from '@modules/role/services/FindRoleService';
import UpdateRoleService from '@modules/role/services/UpdateRoleService';
import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class RoleController {
    public async create(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(CreateRoleService);

    const role = await service.create(request.body);

    const output = await ApiResponse.execute('Role created successfully', role);

    return response.json(output);
  }

    public async update(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(UpdateRoleService);

    const role = await service.update(request.params.id, request.body);

    const output = await ApiResponse.execute('Role updated. ', role);

    return response.json(output);
  }
    public async delete(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(DeleteRoleService);

    const role = await service.delete(request.params.id);

    const output = await ApiResponse.execute('Role deleted. ', role);

    return response.json(output);
  }
    public async findAll(_request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindRoleService);

    const role = await service.findAll();

    const output = await ApiResponse.execute('All role returned', role);

    return response.json(output);
  }
    public async findById(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindRoleService);

    const role = await service.findById(request.params.id);

    const output = await ApiResponse.execute('Role returned by id', role);

    return response.json(output);
  }

  public async findByRole(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindRoleService);

    const role = await service.findByRole(request.body);

    const output = await ApiResponse.execute('Role returned by role', role);

    return response.json(output);
  }
}

export default RoleController;