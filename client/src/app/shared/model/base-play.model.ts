import { BasePlayAssignment } from "./base-play-assignment.model";
export interface BasePlay {
	// Universal attributes
	playId: string;
	playName: string;
	formation: string;
	personnel: string;
	side: "offense" | "defense" | "specialTeams";
	tags: string[];
	assignments: BasePlayAssignment[];

	// Offensive attributes
	playType: "run" | "pass" | "rpo";
	runScheme?: string;
	passConcept?: string;
	motionType?: string;
	isPlayAction?: boolean;
	receiverAlignment?: string;

	// Defensive attributes
	coverageShell?: string;
	blitzType?: string;
}
