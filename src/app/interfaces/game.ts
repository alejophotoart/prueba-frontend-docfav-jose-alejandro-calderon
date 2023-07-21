export interface Game {
    id: number;
    developer: string;
    freetogame_profile_url: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    release_date: string;
    short_description: string;
    thumbnail: string;
    title: string;
}

export interface GameInfo {
    description: string;
    developer: string;
    freetogame_profile_url: string;
    game_url: string;
    genre: string;
    id: number;
    minimum_system_requirements: SystemRequirements;
    platform: string;
    publisher: string;
    release_date: string;
    screenshots: ScreenShots[];
    short_description: string;
    status: string;
    thumbnail: string;
    title: string;
}

interface SystemRequirements {
    graphics: string;
    memory: string;
    os: string;
    processor: string;
    storage: string;
}

interface ScreenShots {
    id: number;
    image: string;
}