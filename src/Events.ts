import { Events as SharedEvents } from "@cfx/shared";
import { Event as SharedEvent } from "@cfx/shared";
import { listenerType } from "@cfx/shared";
import { Citizen } from "@cfx/shared";
import cfx from "@cfx/shared";

export class Events extends SharedEvents {
	public static onServer(eventName: string, listener: listenerType, once = false): SharedEvent {
		const handler = (...args: any[]) => {
			listener(...SharedEvent.getClassFromArguments(...args));
		};
		return new SharedEvent(eventName, handler, true, once);
	}

	public static onceServer(eventName: string, listener: listenerType): SharedEvent {
		return Events.onServer(eventName, listener, true);
	}

	public static emitServer = Citizen.triggerServerEvent;
	public static emitServerLatent = Citizen.triggerLatentServerEvent;
}
