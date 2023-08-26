export type FieldType = {
    prefix?: string;
    firstname?: string;
    lastname?: string;
    birthdate?: string;
    nationality?: string;
    idenno?: string[];
    tel?: {
        prefix?: string;
        number?: string;
    };
    sex?: string;
    passport?: string;
    salary?: number;
};

export type DataType = {
    key: React.Key
    name?: string;
    birthdate?: string;
    nationality?: string;
    idenno?: string;
    tel?: string;
    sex?: string;
    passport?: string;
    salary?: number;
};