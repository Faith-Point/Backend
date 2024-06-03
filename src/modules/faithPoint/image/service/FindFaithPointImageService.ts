import { inject, injectable } from 'tsyringe';
import IFaithPointImageRepository from '@modules/faithPoint/image/domain/repositories/IFaithPointImageRepository';
import IFindFaithPointImage from '@modules/faithPoint/image/domain/interfaces/IFindFaithPointImage';

@injectable()
class FindFaithPointImageService {
    constructor(
        @inject('FaithPointImageRepository')
        private faithPointImageRepository: IFaithPointImageRepository,
    ){}

    public async findById(id: string): Promise<IFindFaithPointImage> {
        const faithPointImage = await this.faithPointImageRepository.findById(id);
        return faithPointImage;
    }

    public async findAll(): Promise<IFindFaithPointImage[]> {
        const faithPointImages = await this.faithPointImageRepository.findAll();
        return faithPointImages;
    }

    public async findByFaithPointId(faithPointId: string): Promise<IFindFaithPointImage[]> {
        const faithPointImages = await this.faithPointImageRepository.findByFaithPointId(faithPointId);
        return faithPointImages;
    }
}

export default FindFaithPointImageService;