export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    isLoggedIn: boolean;
    favs: number[];
}