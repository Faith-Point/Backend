import AppDataSource from '@config/data-source';
import log from '@shared/logger';

export async function initializeDataSource() {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
        log.info('DataSource initialized.');
    } else {
        log.info('DataSource already initialized.');
    }
}

export async function destroyDataSource() {
    if (AppDataSource.isInitialized) {
        await AppDataSource.destroy();
        log.info('DataSource destroyed.');
    }
}
