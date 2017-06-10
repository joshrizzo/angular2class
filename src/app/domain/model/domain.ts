export class User {
    id: number;
    name: string;
    email: string;
    phones: Phone[];
    department?: string;
    isEmployee?: boolean;
}

export class Phone {
    number: string;
    type: string;
}
