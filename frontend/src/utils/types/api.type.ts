interface Api {
    success: boolean;
}

interface ApiSuccess extends Api {
    data: unknown;
}

interface ApiError extends Api {
    message: string;
}

// Endpoint: /rooms

interface ApiDataRoom {
    id: string;
    name: string;
    buildingName: string;
    features: ("visio" | "badge" | "video" | "ilot")[];
}

// Endpoint: /rooms/timetable

interface ApiDataCourse {
    courseId: string;
    start: string;
    end: string;
    category: string;
    teachers: string[];
    modules: [];
    groups: string[];
    color: string;
    onColor: string;
    accessibleOnColor: string;
}

interface ApiDataTimetable {
    courses: ApiDataCourse[];
    weekInfos: {
        end: string;
        number: number;
        start: string;
    };
}

// Endpoint: /auth/login

interface ApiDataLogin {
    accessToken: string;
    account: { id: string; lastname: string; name: string; username: string };
}

// Endpoint: /auth/refresh-token

interface ApiDataRefreshToken {
    accessToken: string;
}

// Endpoint: /admin/stats/unique-visitors

export interface ApiUniqueVisitors {
    [key: string]: number;
}

// Endpoint: /admin/stats/unique-human-visitors

export interface ApiUniqueHumanVisitors {
    [key: string]: number;
}

// Endpoint: /admin/stats/views

export interface ApiViews {
    [key: string]: number;
}

// Endpoint: /admin/stats/platforms

export interface ApiPlatforms {
    [key: string]: {
        [key: string]: number;
    };
}

export type {
    Api,
    ApiDataRoom,
    ApiError,
    ApiSuccess,
    ApiDataTimetable,
    ApiDataCourse,
    ApiDataLogin,
    ApiDataRefreshToken,
};
