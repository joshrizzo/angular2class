import { Phone } from './phone';

export class User {
    id: number;
    name: string;
    email: string;
    phones: Phone[];
    department: string;
    isEmployee: boolean;

    constructor() {
        this.phones = [];
    }
}
