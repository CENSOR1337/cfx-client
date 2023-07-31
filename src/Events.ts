import { Events as SharedEvents } from "@cfx/shared";
import { Event as SharedEvent } from "@cfx/shared";
import { listenerType } from "@cfx/shared";
import { Citizen } from "@cfx/shared";
import cfx from "@cfx/shared";

export class Events extends SharedEvents {
	public static onServer(eventName: string, handler: listenerType): SharedEvent {
		return new SharedEvent(eventName, handler, true, false);
	}

	public static onceServer(eventName: string, handler: listenerType): SharedEvent {
		return new SharedEvent(eventName, handler, true, true);
	}

	public static emitServer = Citizen.triggerServerEvent;
	public static emitServerLatent = Citizen.triggerLatentServerEvent;
}
