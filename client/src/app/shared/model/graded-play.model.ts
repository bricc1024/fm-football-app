import { BasePlay } from "./base-play.model";
import { OpponentPlay } from "./opponent-play.model";
import { GradedPlayer } from "./graded-player.model";

export interface GradedPlay {
	playId: string;
	hudlSnapNumber: number;
	play: BasePlay;
	players: GradedPlayer[];

	opponent?: OpponentPlay;
	result?: string;
	notes?: string;
}
