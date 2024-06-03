import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateFaithPointScheduleService from '@modules/faithPoint/schedule/service/CreateFaithPointScheduleService';
import DeleteFaithPointScheduleService from '@modules/faithPoint/schedule/service/DeleteFaithPointScheduleService';
import FindFaithPointScheduleService from '@modules/faithPoint/schedule/service/FindFaithPointScheduleService';
import UpdateFaithPointScheduleService from '@modules/faithPoint/schedule/service/UpdateFaithPointScheduleService';


class FaithPointScheduleController {
    public async create(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(CreateFaithPointScheduleService);

        const faithPointSchedule = await service.create(request.body);

        const output = await ApiResponse.execute('Faith Point Schedule created successfully', faithPointSchedule);

        return response.json(output);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(UpdateFaithPointScheduleService);

        const faithPointSchedule = await service.update(request.params.id, request.body);

        const output = await ApiResponse.execute('Faith Point Schedule updated. ', faithPointSchedule);

        return response.json(output);
    }
    public async delete(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(DeleteFaithPointScheduleService);

        const faithPointSchedule = await service.delete(request.params.id);

        const output = await ApiResponse.execute('Faith Point Schedule deleted. ', faithPointSchedule);

        return response.json(output);
    }
    public async findAll(_request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointScheduleService);

        const faithPointSchedule = await service.findAll();

        const output = await ApiResponse.execute('All faith point schedule returned', faithPointSchedule);

        return response.json(output);
    }
    public async findById(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointScheduleService);

        const faithPointSchedule = await service.findById(request.params.id);

        const output = await ApiResponse.execute('Faith Point Schedule returned by id', faithPointSchedule);

        return response.json(output);
    }
    public async findByDate(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointScheduleService);

        const faithPointSchedule = await service.findByDate(request.body);

        const output = await ApiResponse.execute('Faith Point Schedule returned by date', faithPointSchedule);

        return response.json(output);
    }
    public async findByFaithPointId(request: Request, response: Response): Promise<Response> {
        const service = container.resolve(FindFaithPointScheduleService);

        const faithPointSchedule = await service.findByFaithPointId(request.body);

        const output = await ApiResponse.execute('Faith Point Schedule returned by faith point id', faithPointSchedule);

        return response.json(output);
    }
}

export default FaithPointScheduleController;