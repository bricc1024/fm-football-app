export interface OpponentPlay {
	// Universal attributes
	side: "offense" | "defense" | "specialTeams";
	formation?: string;
	personnel?: string;

	// Offensive attributes
	playType?: "run" | "pass" | "rpo";
	runScheme?: string;
	passConcept?: string;
	motionType?: string;
	isPlayAction?: boolean;
	receiverAlignment?: string;

	// Defensive attributes
	coverageShell?: string;
	blitzType?: string;
}
