import ShortState from '@shared/util/ShortState';

export function convertToShortState(shortName: string): ShortState | undefined {
    if (Object.values(ShortState).includes(shortName as ShortState)) {
        return shortName as ShortState;
    }
    return undefined;
}

export default convertToShortState;