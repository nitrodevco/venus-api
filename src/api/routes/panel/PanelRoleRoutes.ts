export type IPanelRoleGetRequest = {};
export type IPanelRoleGetResponse = {
    id: number;
    name: string;
    order: number;
    color: string;
    permissions: { id: number; name: string }[];
    users: { userId: number, name: string }[];
}[];
