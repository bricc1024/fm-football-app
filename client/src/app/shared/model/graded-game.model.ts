import { GradedPlay } from "./graded-play.model";

export interface GradedGame {
	gameId: string;
	opponent: string;
	date: string; // ISO date string (e.g., "2025-09-01")
	location?: string; // H/A/N
	seasonYear: number;

	plays: GradedPlay[];
	createdAt?: string;
	notes?: string;
}
