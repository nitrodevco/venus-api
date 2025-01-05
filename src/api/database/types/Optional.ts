export declare type Optional<T> = {
    [P in keyof T]?: T[P];
};

export declare type DeepOptional<T> = {
    [P in keyof T]?: (T[P] extends (infer U)[] ? Optional<U>[] : T[P] extends readonly (infer U)[] ? readonly Optional<U>[] : Optional<T[P]>);
};
