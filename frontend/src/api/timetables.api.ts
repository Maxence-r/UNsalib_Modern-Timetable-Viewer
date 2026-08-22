import { api } from "./axios";
import type { ApiDataTimetable } from "../utils/types/api.type";

async function getRoomTimetable(
    roomId: string,
    weekNumber: number,
): Promise<ApiDataTimetable> {
    const res = await api.get(
        `/rooms/timetable?roomId=${roomId}&weekNumber=${weekNumber}`,
    );
    return res.data as ApiDataTimetable;
}

export { getRoomTimetable };
