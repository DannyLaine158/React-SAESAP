export const BASE_PATH = import.meta.env.BASE_URL || '/';

export const ROUTES = {
    LOGIN: `${BASE_PATH}`,
    REGISTER: `${BASE_PATH}register`,
    APP: `${BASE_PATH}app`,
    HOME: `${BASE_PATH}app/home`,
    SEARCH: `${BASE_PATH}app/search`,
    PROFILE: `${BASE_PATH}app/profile`
};