export interface ISocialMedia {
    id: string;
    name: string;
    description?: string;
    link?: string;
    icon?: string;
    created_at: Date;
    updated_at?: Date;
    deleted_at?: Date;
}