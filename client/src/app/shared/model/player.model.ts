export interface Player {
	playerId: string;
	name: string;
	jerseyNumber: number;
	positions: string[];
	side: "offense" | "defense" | "specialTeams";
	seasons: number[];
	isActive: boolean;
}
