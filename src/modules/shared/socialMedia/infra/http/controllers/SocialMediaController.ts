import CreateSocialMediaService from '@modules/shared/socialMedia/service/CreateSocialMediaService';
import DeleteSocialMediaService from '@modules/shared/socialMedia/service/DeleteSocialMediaService';
import FindSocialMediaService from '@modules/shared/socialMedia/service/FindSocialMediaService';
import UpdateSocialMediaService from '@modules/shared/socialMedia/service/UpdateSocialMediaService';
import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class SocialMediaController {
  public async create(request: Request, response: Response): Promise<Response> 
  {
    const service = container.resolve(CreateSocialMediaService);

    const socialMedia = await service.create(request.body);

    const output = await ApiResponse.execute('Social Media created successfully', socialMedia);

    return response.json(output);
  }

  public async update(request: Request, response: Response): Promise<Response> 
  {
    const service = container.resolve(UpdateSocialMediaService);

    const socialMedia = await service.update(request.params.id, request.body);

    const output = await ApiResponse.execute('Social Media updated. ', socialMedia);

    return response.json(output);
  }
  public async delete(request: Request, response: Response): Promise<Response> 
  {
    const service = container.resolve(DeleteSocialMediaService);

    const socialMedia = await service.delete(request.params.id);

    const output = await ApiResponse.execute('Social Media deleted. ', socialMedia);

    return response.json(output);
  }
  public async findAll(_request: Request, response: Response): Promise<Response> 
  {
    const service = container.resolve(FindSocialMediaService);

    const socialMedia = await service.findAll();

    const output = await ApiResponse.execute('All social media returned', socialMedia);

    return response.json(output);
  }
  public async findById(request: Request, response: Response): Promise<Response> 
  {
    const service = container.resolve(FindSocialMediaService);

    const socialMedia = await service.findById(request.params.id);

    const output = await ApiResponse.execute('Social Media returned by id', socialMedia);

    return response.json(output);
  }
  public async findByName(request: Request, response: Response): Promise<Response> 
  {
    const service = container.resolve(FindSocialMediaService);

    const socialMedia = await service.findByName(request.body);

    const output = await ApiResponse.execute('Social Media returned by name', socialMedia);

    return response.json(output);
  }
}

export default SocialMediaController;