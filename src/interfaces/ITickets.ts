export interface PropsTicketsInterface {
    slice(arg0: number, arg1: number): unknown[] | undefined;
    id: string;
    number: number;
    agent: string | null;
    desktop: string | null;
}