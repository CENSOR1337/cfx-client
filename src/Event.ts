import { Event as SharedEvent } from "cfx-shared";
import { listenerType } from "cfx-shared";
import { Citizen } from "cfx-shared";

export class Event extends SharedEvent {
	public static onServer(eventName: string, listener: listenerType, once = false): SharedEvent {
		const handler = (...args: any[]) => {
			listener(...this.getClassFromArguments(...args));
		};
        return new this(eventName, handler, true, once);
	}

	public static onceServer(eventName: string, listener: listenerType): SharedEvent {
		return Event.onServer(eventName, listener, true);
	}

	public static emitServer = Citizen.triggerServerEvent;
	public static emitServerLatent = Citizen.triggerLatentServerEvent;
}
