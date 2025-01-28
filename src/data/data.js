import { Repository } from "@/data/repository";
export const attackersData = {
    items: Repository.getAttackers(),
    filterOptions: {
        features: [
            { value: 'Frag', label: 'Frag' },
            { value: 'Claymore', label: 'Claymore' },
            { value: 'Stun', label: 'Stun' },
            { value: 'Soft', label: 'Soft' },
            { value: 'Hard', label: 'Hard' },
            { value: 'EMP', label: 'EMP' },
            { value: 'Smoke', label: 'Smoke' },
        ],
        speed: [
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
        ],
    },
};
export const defendersData = {
    items: Repository.getDefenders(),
    filterOptions: {
        features: [
            { value: 'C4', label: 'C4' },
            { value: 'Cam', label: 'Cam' },
            { value: 'ObsBlock', label: 'Obs Block' },
            { value: 'BarbWire', label: 'Barb Wire' },
            { value: 'Impact', label: 'Impact' },
            { value: 'Shield', label: 'Shield' },
            { value: 'ProxAlarm', label: 'Prox Alarm' },
        ],
        speed: [
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
        ],
    },
};
//# sourceMappingURL=data.js.map