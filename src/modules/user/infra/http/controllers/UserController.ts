import CreateUserService from '@modules/user/services/CreateUserService';
import DeleteUserService from '@modules/user/services/DeleteUserService';
import FindUserService from '@modules/user/services/FindUserService';
import UpdateUserService from '@modules/user/services/UpdateUserService';
import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class UserController {
    public async create(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(CreateUserService);

    const user = await service.create(request.body);

    const output = await ApiResponse.execute('User created successfully', user);

    return response.json(output);
  }

    public async update(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(UpdateUserService);

    const user = await service.update(request.params.id, request.body);

    const output = await ApiResponse.execute('User updated. ', user);

    return response.json(output);
  }
    public async delete(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(DeleteUserService);

    const user = await service.delete(request.params.id);

    const output = await ApiResponse.execute('User deleted. ', user);

    return response.json(output);
  }
    public async findAll(_request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindUserService);

    const user = await service.findAll();

    const output = await ApiResponse.execute('All users returned', user);

    return response.json(output);
  }
    public async findById(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindUserService);

    const user = await service.findById(request.params.id);

    const output = await ApiResponse.execute('User returned by id', user);

    return response.json(output);
  }
  public async findByEmail(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindUserService);

    const user = await service.findByEmail(request.body);

    const output = await ApiResponse.execute('User returned by email', user);

    return response.json(output);
  }

  public async findByName(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindUserService);

    const user = await service.findByName(request.body);

    const output = await ApiResponse.execute('User returned by name', user);

    return response.json(output);
  }

  public async findByRole(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(FindUserService);

    const user = await service.findByRole(request.body);

    const output = await ApiResponse.execute('User returned by role', user);

    return response.json(output);
  }
}

export default UserController;