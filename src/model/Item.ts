export type Item = {
    name: string;
    features: string[];
    speed: string;
    icon?: string | Error;
    filteredOut?: boolean;
};