
import { Vector3 } from "cfx-shared";
//@ts-ignore
const Citizen = global.Citizen;
//@ts-ignore
const msgpack_pack = global.msgpack_pack;
const _i = Citizen.pointerValueInt();
const _f = Citizen.pointerValueFloat();
const _v = Citizen.pointerValueVector();
const _r = Citizen.returnResultAnyway();
const _ri = Citizen.resultAsInteger();
const _rf = Citizen.resultAsFloat();
const _rl = Citizen.resultAsLong();
const _s = Citizen.resultAsString();
const _rv = Citizen.resultAsVector();
const _ro = Citizen.resultAsObject2();
const _in = Citizen.invokeNativeByHash;
const _ii = Citizen.pointerValueIntInitialized;
const _fi = Citizen.pointerValueFloatInitialized;

function joaat(s: string) {
	const k = s.toLowerCase();
	let h, i;

	for (h = i = 0; i < k.length; i++) {
		h += k.charCodeAt(i);
		h += h << 10;
		h ^= h >>> 6;
	}

	h += h << 3;
	h ^= h >>> 11;
	h += h << 15;

	return h >>> 0;
}

function _ch(hash: any) {
	if (typeof hash === "string") {
		return joaat(hash);
	}

	return hash;
}

function _obj(obj: any) {
	const s = msgpack_pack(obj);
	return [s, s.length];
}

function _ts(num: any) {
	if (num === 0 || num === null || num === undefined || num === false) {
		// workaround for users calling string parameters with '0', also nil being translated
		return null;
	}
	if (ArrayBuffer.isView(num) || num instanceof ArrayBuffer) {
		// these are handled as strings internally
		return num;
	}
	return num.toString();
}

function _fv(flt: number) {
	return flt === 0.0 ? flt : flt + 0.0000001;
}

function _mfr(fn: any) {
	return Citizen.makeRefFunction(fn);
}

function _mv(vector: any): Vector3 {
	return Vector3.fromArray(vector);
}

/**
 * Adds an output for the specified audio submix.
 * @param submixId
 * @param outputSubmixId
 */
export function addAudioSubmixOutput(submixId: number, outputSubmixId: number): void { 
	return _in(0x00000000, 0xac6e290d, submixId, outputSubmixId); 
}

/**
 * Loads a minimap overlay from a GFx file in the current resource.
 * @param name
 */
export function addMinimapOverlay(name: string): number { 
	return _in(0x00000000, 0x4afd2499, _ts(name), _r, _ri); 
}

/**
 * Experimental natives, please do not use in a live environment.
 * @param origTxd
 * @param origTxn
 * @param newTxd
 * @param newTxn
 */
export function addReplaceTexture(origTxd: string, origTxn: string, newTxd: string, newTxn: string): void { 
	return _in(0x00000000, 0xa66f8f75, _ts(origTxd), _ts(origTxn), _ts(newTxd), _ts(newTxn)); 
}

export function addTextEntry(entryKey: string, entryText: string): void { 
	return _in(0x00000000, 0x32ca01c3, _ts(entryKey), _ts(entryText)); 
}

export function addTextEntryByHash(entryKey: number, entryText: string): void { 
	return _in(0x00000000, 0x289da860, entryKey, _ts(entryText)); 
}

/**
 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 * @param miniMap
 * @param fnName
 */
export function callMinimapScaleformFunction(miniMap: number, fnName: string): boolean { 
	return _in(0x00000000, 0x4c89c0ed, miniMap, _ts(fnName), _r); 
}

/**
 * Removes vehicle xenon lights custom RGB color.
 * @param vehicle
 */
export function clearVehicleXenonLightsCustomColor(vehicle: number): void { 
	return _in(0x00000000, 0x2867ed8c, vehicle); 
}

/**
 * Commits the backing pixels to the specified runtime texture.
 * @param tex
 */
export function commitRuntimeTexture(tex: any): void { 
	return _in(0x00000000, 0x19d81f4e, tex); 
}

/**
 * Creates an audio submix with the specified name, or gets the existing audio submix by that name.
 * @param name
 */
export function createAudioSubmix(name: string): number { 
	return _in(0x00000000, 0x658d2bc8, _ts(name), _r, _ri); 
}

/**
 * Creates a volume where water effects do not apply.
 * Useful for preventing water collisions from flooding areas underneath them.
 * This has no effect on waterquads, only water created from drawables and collisions.
 * Don't create volumes when your local ped is swimming (e.g. use IS_PED_SWIMMING in your scripts before you call this)
 * @param xMin
 * @param yMin
 * @param zMin
 * @param xMax
 * @param yMax
 * @param zMax
 */
export function createDryVolume(xMin: number, yMin: number, zMin: number, xMax: number, yMax: number, zMax: number): number { 
	return _in(0x00000000, 0x0eb1c6dd, _fv(xMin), _fv(yMin), _fv(zMin), _fv(xMax), _fv(yMax), _fv(zMax), _r, _ri); 
}

/**
 * Creates a DUI browser. This can be used to draw on a runtime texture using CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.
 * @param url
 * @param width
 * @param height
 */
export function createDui(url: string, width: number, height: number): any { 
	return _in(0x00000000, 0x23eaf899, _ts(url), width, height, _r, _rl); 
}

/**
 * Creates a blank runtime texture.
 * @param txd
 * @param txn
 * @param width
 * @param height
 */
export function createRuntimeTexture(txd: any, txn: string, width: number, height: number): any { 
	return _in(0x00000000, 0xfec3766d, txd, _ts(txn), width, height, _r, _rl); 
}

/**
 * Creates a runtime texture from a DUI handle.
 * @param txd
 * @param txn
 * @param duiHandle
 */
export function createRuntimeTextureFromDuiHandle(txd: any, txn: string, duiHandle: string): any { 
	return _in(0x00000000, 0xb135472b, txd, _ts(txn), _ts(duiHandle), _r, _rl); 
}

/**
 * Creates a runtime texture from the specified file in the current resource or a base64 data URL.
 * @param txd
 * @param txn
 * @param fileName
 */
export function createRuntimeTextureFromImage(txd: any, txn: string, fileName: string): any { 
	return _in(0x00000000, 0x786d8bc3, txd, _ts(txn), _ts(fileName), _r, _rl); 
}

/**
 * Creates a runtime texture dictionary with the specified name.
 * Example:
 * 
 * ```lua
 * local txd = CreateRuntimeTxd('meow')
 * ```
 * @param name
 */
export function createRuntimeTxd(name: string): any { 
	return _in(0x00000000, 0x1f3ac778, _ts(name), _r, _rl); 
}

/**
 * Destroys a DUI browser.
 * @param duiObject
 */
export function destroyDui(duiObject: any): void { 
	return _in(0x00000000, 0xa085cb10, duiObject); 
}

/**
 * Disables the editor runtime mode, changing game behavior to not track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 */
export function disableEditorRuntime(): void { 
	return _in(0x00000000, 0xb1622b17); 
}

/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity.
 * @param state
 */
export function disableIdleCamera(state: boolean): void { 
	return _in(0x00000000, 0x3d5ab7f0, state); 
}

/**
 * Disables the game's world horizon lods rendering (see `farlods.#dd`).
 * Using the island hopper natives might also affect this state.
 * @param state
 */
export function disableWorldhorizonRendering(state: boolean): void { 
	return _in(0x00000000, 0xa9c92cdc, state); 
}

/**
 * Returns a list of door system entries: a door system hash (see [ADD_DOOR_TO_SYSTEM](#\_0x6F8838D03D1DC226)) and its object handle.
 * 
 * The data returned adheres to the following layout:
 * 
 * ```
 * [{doorHash1, doorHandle1}, ..., {doorHashN, doorHandleN}]
 * ```
 */
export function doorSystemGetActive(): any { 
	return _in(0x00000000, 0xf65bba4b, _r, _ro); 
}

export function doorSystemGetSize(): number { 
	return _in(0x00000000, 0x237613b3, _r, _ri); 
}

/**
 * Draws a gizmo. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * This should be used from JavaScript or another language supporting mutable buffers like ArrayBuffer.
 * 
 * Matrix layout is as follows:
 * 
 * *   Element \[0], \[1] and \[2] should represent the right vector.
 * *   Element \[4], \[5] and \[6] should represent the forward vector.
 * *   Element \[8], \[9] and \[10] should represent the up vector.
 * *   Element \[12], \[13] and \[14] should represent X, Y and Z translation coordinates.
 * *   All other elements should be \[0, 0, 0, 1].
 * @param matrixPtr
 * @param id
 */
export function drawGizmo(matrixPtr: any, id: string): boolean { 
	return _in(0x00000000, 0xeb2edca2, matrixPtr, _ts(id), _r); 
}

/**
 * Like DRAW_RECT, but it's a line.
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @param width
 * @param r
 * @param g
 * @param b
 * @param a
 */
export function drawLine2d(x1: number, y1: number, x2: number, y2: number, width: number, r: number, g: number, b: number, a: number): void { 
	return _in(0x00000000, 0x0b856a90, _fv(x1), _fv(y1), _fv(x2), _fv(y2), _fv(width), r, g, b, a); 
}

/**
 * DRAW_RECT, but with a rotation. Seems to be broken.
 * @param x
 * @param y
 * @param width
 * @param height
 * @param rotation
 * @param r
 * @param g
 * @param b
 * @param a
 */
export function drawRectRotated(x: number, y: number, width: number, height: number, rotation: number, r: number, g: number, b: number, a: number): void { 
	return _in(0x00000000, 0xec37c168, _fv(x), _fv(y), _fv(width), _fv(height), _fv(rotation), r, g, b, a); 
}

/**
 * Enables the editor runtime mode, changing game behavior to track entity metadata.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 */
export function enableEditorRuntime(): void { 
	return _in(0x00000000, 0xc383871d); 
}

export function endFindObject(findHandle: number): void { 
	return _in(0x00000000, 0xdeda4e50, findHandle); 
}

export function endFindPed(findHandle: number): void { 
	return _in(0x00000000, 0x9615c2ad, findHandle); 
}

export function endFindPickup(findHandle: number): void { 
	return _in(0x00000000, 0x3c407d53, findHandle); 
}

export function endFindVehicle(findHandle: number): void { 
	return _in(0x00000000, 0x9227415a, findHandle); 
}

/**
 * Enters cursor mode, suppressing mouse movement to the game and displaying a mouse cursor instead. This function supports
 * SDK infrastructure and is not intended to be used directly from your code.
 */
export function enterCursorMode(): void { 
	return _in(0x00000000, 0x0780da86); 
}

/**
 * This native is not implemented.
 * @param data
 * @param objectId
 * @param tree
 */
export function experimentalLoadCloneCreate(data: string, objectId: number, tree: string): number { 
	return _in(0x00000000, 0xd2cb95a3, _ts(data), objectId, _ts(tree), _r, _ri); 
}

/**
 * This native is not implemented.
 * @param entity
 * @param data
 */
export function experimentalLoadCloneSync(entity: number, data: string): void { 
	return _in(0x00000000, 0x6bc189ac, entity, _ts(data)); 
}

/**
 * This native is not implemented.
 * @param entity
 */
export function experimentalSaveCloneCreate(entity: number): string { 
	return _in(0x00000000, 0x9d65cad2, entity, _r, _s); 
}

/**
 * This native is not implemented.
 * @param entity
 */
export function experimentalSaveCloneSync(entity: number): string { 
	return _in(0x00000000, 0x38d19210, entity, _r, _s); 
}

export function findFirstObject(outEntity: number): [number, number] { 
	const [retval, outEntity_out] = _in(0x00000000, 0xfaa6cb5d, _ii(outEntity), _r, _ri);
	return [retval as number, outEntity_out as number]; 
}

export function findFirstPed(outEntity: number): [number, number] { 
	const [retval, outEntity_out] = _in(0x00000000, 0xfb012961, _ii(outEntity), _r, _ri);
	return [retval as number, outEntity_out as number]; 
}

export function findFirstPickup(outEntity: number): [number, number] { 
	const [retval, outEntity_out] = _in(0x00000000, 0x3ff9d340, _ii(outEntity), _r, _ri);
	return [retval as number, outEntity_out as number]; 
}

export function findFirstVehicle(outEntity: number): [number, number] { 
	const [retval, outEntity_out] = _in(0x00000000, 0x15e55694, _ii(outEntity), _r, _ri);
	return [retval as number, outEntity_out as number]; 
}

export function findNextObject(findHandle: number, outEntity: number): [boolean, number] { 
	const [retval, outEntity_out] = _in(0x00000000, 0x4e129dbf, findHandle, _ii(outEntity), _r);
	return [retval as boolean, outEntity_out as number]; 
}

export function findNextPed(findHandle: number, outEntity: number): [boolean, number] { 
	const [retval, outEntity_out] = _in(0x00000000, 0xab09b548, findHandle, _ii(outEntity), _r);
	return [retval as boolean, outEntity_out as number]; 
}

export function findNextPickup(findHandle: number, outEntity: number): [boolean, number] { 
	const [retval, outEntity_out] = _in(0x00000000, 0x4107ef0f, findHandle, _ii(outEntity), _r);
	return [retval as boolean, outEntity_out as number]; 
}

export function findNextVehicle(findHandle: number, outEntity: number): [boolean, number] { 
	const [retval, outEntity_out] = _in(0x00000000, 0x8839120d, findHandle, _ii(outEntity), _r);
	return [retval as boolean, outEntity_out as number]; 
}

/**
 * Forces the game snow pass to render.
 * @param enabled
 */
export function forceSnowPass(enabled: boolean): void { 
	return _in(0x00000000, 0xe6e16170, enabled); 
}

/**
 * Returns all player indices for 'active' physical players known to the client.
 * The data returned adheres to the following layout:
 * 
 * ```
 * [127, 42, 13, 37]
 * ```
 */
export function getActivePlayers(): any { 
	return _in(0x00000000, 0xcf143fb9, _r, _ro); 
}

/**
 * Returns all rope handles. The data returned adheres to the following layout:
 * 
 * ```
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 */
export function getAllRopes(): any { 
	return _in(0x00000000, 0x760a2d67, _r, _ro); 
}

/**
 * Returns all registered vehicle model names, including non-dlc vehicles and custom vehicles in no particular order.
 * 
 * **Example output**
 * 
 * ```
 * ["dubsta", "dubsta2", "dubsta3", "myverycoolcar", "sultan", "sultanrs", ...]
 * ```
 * 
 * This native will not return vehicles that are unregistered (i.e from a resource being stopped) during runtime.
 */
export function getAllVehicleModels(): any { 
	return _in(0x00000000, 0xd7531645, _r, _ro); 
}

/**
 * A getter for [SET_AMBIENT_PED_RANGE_MULTIPLIER_THIS_FRAME](#\_0x0B919E1FB47CC4E0).
 */
export function getAmbientPedRangeMultiplier(): number { 
	return _in(0x00000000, 0xb550232d, _r, _rf); 
}

/**
 * A getter for [SET_AMBIENT_VEHICLE_RANGE_MULTIPLIER_THIS_FRAME](#\_0x90B6DA738A9A25DA).
 */
export function getAmbientVehicleRangeMultiplier(): number { 
	return _in(0x00000000, 0x667ec929, _r, _rf); 
}

/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 * @param camera
 * @param rightVector
 * @param forwardVector
 * @param upVector
 * @param position
 */
export function getCamMatrix(camera: number): [Vector3, Vector3, Vector3, Vector3] { 
	const [rightVector_out, forwardVector_out, upVector_out, position_out] = _in(0x00000000, 0x8f57a89d, camera, _v, _v, _v, _v);
	return [_mv(rightVector_out), _mv(forwardVector_out), _mv(upVector_out), _mv(position_out)]; 
}

/**
 * This native returns the currently used game's name.
 */
export function getCurrentGameName(): string { 
	return _in(0x00000000, 0xaca18ecd, _r, _s); 
}

/**
 * Returns the peer address of the remote game server that the user is currently connected to.
 */
export function getCurrentServerEndpoint(): string { 
	return _in(0x00000000, 0xea11bfba, _r, _s); 
}

/**
 * Returns the NUI window handle for a specified DUI browser object.
 * @param duiObject
 */
export function getDuiHandle(duiObject: any): string { 
	return _in(0x00000000, 0x1655d41d, duiObject, _r, _s); 
}

/**
 * Returns entity's archetype name, if available.
 * @param entity
 */
export function getEntityArchetypeName(entity: number): string { 
	return _in(0x00000000, 0x47b870f5, entity, _r, _s); 
}

/**
 * Returns the transient entity index for a specified mapdata/entity pair.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * @param mapdata
 * @param entity
 */
export function getEntityIndexFromMapdata(mapdata: number, entity: number): number { 
	return _in(0x00000000, 0xee43540d, mapdata, entity, _r, _ri); 
}

/**
 * Retrieves the map data and entity handles from a specific entity.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * @param entity
 * @param mapdataHandle
 * @param entityHandle
 */
export function getEntityMapdataOwner(entity: number): [boolean, number, number] { 
	const [retval, mapdataHandle_out, entityHandle_out] = _in(0x00000000, 0xf6b815c5, entity, _i, _i, _r);
	return [retval as boolean, mapdataHandle_out as number, entityHandle_out as number]; 
}

/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938), but for a specified resource.
 * @param resource
 * @param key
 */
export function getExternalKvpFloat(resource: string, key: string): number { 
	return _in(0x00000000, 0x3cc98b25, _ts(resource), _ts(key), _r, _rf); 
}

/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8), but for a specified resource.
 * @param resource
 * @param key
 */
export function getExternalKvpInt(resource: string, key: string): number { 
	return _in(0x00000000, 0x12b8d689, _ts(resource), _ts(key), _r, _ri); 
}

/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B), but for a specified resource.
 * @param resource
 * @param key
 */
export function getExternalKvpString(resource: string, key: string): string { 
	return _in(0x00000000, 0x9080363a, _ts(resource), _ts(key), _r, _s); 
}

/**
 * Returns a list of entity handles (script GUID) for all entities in the specified pool - the data returned is an array as
 * follows:
 * 
 * ```json
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 * 
 * ### Supported pools
 * 
 * *   `CPed`: Peds (including animals) and players.
 * *   `CObject`: Objects (props), doors, and projectiles.
 * *   `CVehicle`: Vehicles.
 * *   `CPickup`: Pickups.
 * @param poolName
 */
export function getGamePool(poolName: string): any { 
	return _in(0x00000000, 0x2b9d4f50, _ts(poolName), _r, _ro); 
}

export function getInteriorEntitiesExtents(interiorId: number): [number, number, number, number, number, number] { 
	const [bbMinX_out, bbMinY_out, bbMinZ_out, bbMaxX_out, bbMaxY_out, bbMaxZ_out] = _in(0x00000000, 0x322b1192, interiorId, _f, _f, _f, _f, _f, _f);
	return [bbMinX_out as number, bbMinY_out as number, bbMinZ_out as number, bbMaxX_out as number, bbMaxY_out as number, bbMaxZ_out as number]; 
}

export function getInteriorPortalCornerPosition(interiorId: number, portalIndex: number, cornerIndex: number): [number, number, number] { 
	const [posX_out, posY_out, posZ_out] = _in(0x00000000, 0xf772bb2c, interiorId, portalIndex, cornerIndex, _f, _f, _f);
	return [posX_out as number, posY_out as number, posZ_out as number]; 
}

export function getInteriorPortalCount(interiorId: number): number { 
	return _in(0x00000000, 0xd05bb8b1, interiorId, _r, _ri); 
}

export function getInteriorPortalEntityArchetype(interiorId: number, portalIndex: number, entityIndex: number): number { 
	return _in(0x00000000, 0x9a0e1700, interiorId, portalIndex, entityIndex, _r, _ri); 
}

export function getInteriorPortalEntityCount(interiorId: number, portalIndex: number): number { 
	return _in(0x00000000, 0x0c68021b, interiorId, portalIndex, _r, _ri); 
}

export function getInteriorPortalEntityFlag(interiorId: number, portalIndex: number, entityIndex: number): number { 
	return _in(0x00000000, 0x9da2e811, interiorId, portalIndex, entityIndex, _r, _ri); 
}

export function getInteriorPortalEntityPosition(interiorId: number, portalIndex: number, entityIndex: number): [number, number, number] { 
	const [posX_out, posY_out, posZ_out] = _in(0x00000000, 0x9b7ab83c, interiorId, portalIndex, entityIndex, _f, _f, _f);
	return [posX_out as number, posY_out as number, posZ_out as number]; 
}

export function getInteriorPortalEntityRotation(interiorId: number, portalIndex: number, entityIndex: number): [number, number, number, number] { 
	const [rotX_out, rotY_out, rotZ_out, rotW_out] = _in(0x00000000, 0x9f9ceb63, interiorId, portalIndex, entityIndex, _f, _f, _f, _f);
	return [rotX_out as number, rotY_out as number, rotZ_out as number, rotW_out as number]; 
}

export function getInteriorPortalFlag(interiorId: number, portalIndex: number): number { 
	return _in(0x00000000, 0xc74da47c, interiorId, portalIndex, _r, _ri); 
}

export function getInteriorPortalRoomFrom(interiorId: number, portalIndex: number): number { 
	return _in(0x00000000, 0xaa9c141d, interiorId, portalIndex, _r, _ri); 
}

export function getInteriorPortalRoomTo(interiorId: number, portalIndex: number): number { 
	return _in(0x00000000, 0x3f47f0e8, interiorId, portalIndex, _r, _ri); 
}

export function getInteriorPosition(interiorId: number): [number, number, number] { 
	const [posX_out, posY_out, posZ_out] = _in(0x00000000, 0x77a435b0, interiorId, _f, _f, _f);
	return [posX_out as number, posY_out as number, posZ_out as number]; 
}

export function getInteriorRoomCount(interiorId: number): number { 
	return _in(0x00000000, 0xa2737c2c, interiorId, _r, _ri); 
}

export function getInteriorRoomExtents(interiorId: number, roomIndex: number): [number, number, number, number, number, number] { 
	const [bbMinX_out, bbMinY_out, bbMinZ_out, bbMaxX_out, bbMaxY_out, bbMaxZ_out] = _in(0x00000000, 0xf9e795dd, interiorId, roomIndex, _f, _f, _f, _f, _f, _f);
	return [bbMinX_out as number, bbMinY_out as number, bbMinZ_out as number, bbMaxX_out as number, bbMaxY_out as number, bbMaxZ_out as number]; 
}

export function getInteriorRoomFlag(interiorId: number, roomIndex: number): number { 
	return _in(0x00000000, 0x6b7af743, interiorId, roomIndex, _r, _ri); 
}

export function getInteriorRoomIndexByHash(interiorId: number, roomHash: number): number { 
	return _in(0x00000000, 0xe0ee05f8, interiorId, roomHash, _r, _ri); 
}

export function getInteriorRoomName(interiorId: number, roomIndex: number): string { 
	return _in(0x00000000, 0x11755df2, interiorId, roomIndex, _r, _s); 
}

export function getInteriorRoomTimecycle(interiorId: number, roomIndex: number): number { 
	return _in(0x00000000, 0x82ba3f88, interiorId, roomIndex, _r, _ri); 
}

export function getInteriorRotation(interiorId: number): [number, number, number, number] { 
	const [rotx_out, rotY_out, rotZ_out, rotW_out] = _in(0x00000000, 0x5a039998, interiorId, _f, _f, _f, _f);
	return [rotx_out as number, rotY_out as number, rotZ_out as number, rotW_out as number]; 
}

/**
 * Returns the zoom level data by index from mapzoomdata.meta file.
 * @param index
 * @param zoomScale
 * @param zoomSpeed
 * @param scrollSpeed
 * @param tilesX
 * @param tilesY
 */
export function getMapZoomDataLevel(index: number): [boolean, number, number, number, number, number] { 
	const [retval, zoomScale_out, zoomSpeed_out, scrollSpeed_out, tilesX_out, tilesY_out] = _in(0x00000000, 0x1363a998, index, _f, _f, _f, _f, _f, _r);
	return [retval as boolean, zoomScale_out as number, zoomSpeed_out as number, scrollSpeed_out as number, tilesX_out as number, tilesY_out as number]; 
}

/**
 * Retrieves the map data entity handle.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * @param mapDataHash
 * @param entityInternalIdx
 * @param entityHandle
 */
export function getMapdataEntityHandle(mapDataHash: number, entityInternalIdx: number, entityHandle: number): [boolean, number] { 
	const [retval, entityHandle_out] = _in(0x00000000, 0x30aa6911, mapDataHash, entityInternalIdx, _ii(entityHandle), _r);
	return [retval as boolean, entityHandle_out as number]; 
}

/**
 * Returns mapdata's entity matrix. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * This should be used from JavaScript or another language supporting mutable buffers like ArrayBuffer.
 * 
 * Matrix layout is as follows:
 * 
 * *   Element \[0], \[1] and \[2] should represent the right vector.
 * *   Element \[4], \[5] and \[6] should represent the forward vector.
 * *   Element \[8], \[9] and \[10] should represent the up vector.
 * *   Element \[12], \[13] and \[14] should represent X, Y and Z translation coordinates.
 * *   All other elements should be \[0, 0, 0, 1].
 * @param mapDataHash
 * @param entityInternalIdx
 * @param matrixPtr
 */
export function getMapdataEntityMatrix(mapDataHash: number, entityInternalIdx: number, matrixPtr: any): boolean { 
	return _in(0x00000000, 0x2c3cda93, mapDataHash, entityInternalIdx, matrixPtr, _r); 
}

/**
 * Returns the transient map data index for a specified hash.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * @param mapdataHandle
 */
export function getMapdataFromHashKey(mapdataHandle: number): number { 
	return _in(0x00000000, 0xd29d8edd, mapdataHandle, _r, _ri); 
}

export function getNetworkWalkMode(): boolean { 
	return _in(0x00000000, 0x2cafd5e9, _r); 
}

export function getNuiCursorPosition(): [number, number] { 
	const [x_out, y_out] = _in(0x00000000, 0xbdba226f, _i, _i);
	return [x_out as number, y_out as number]; 
}

/**
 * A getter for [SET_PARKED_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xEAE6DCC7EEE3DB1D).
 */
export function getParkedVehicleDensityMultiplier(): number { 
	return _in(0x00000000, 0xff72df84, _r, _rf); 
}

/**
 * Returns a list of decorations applied to a ped.
 * 
 * The data returned adheres to the following layout:
 * 
 * ```
 * [ [ collectionHash1, overlayHash1 ], ..., [c ollectionHashN, overlayHashN ] ]
 * ```
 * 
 * This command will return undefined data if invoked on a remote player ped.
 * @param ped
 */
export function getPedDecorations(ped: number): any { 
	return _in(0x00000000, 0x7cce1163, ped, _r, _ro); 
}

/**
 * A getter for [SET_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x95E3D6257B166CF2).
 */
export function getPedDensityMultiplier(): number { 
	return _in(0x00000000, 0xf5a904f9, _r, _rf); 
}

/**
 * A getter for [\_SET_PED_EYE_COLOR](#\_0x50B56988B170AFDF). Returns -1 if fails to get.
 * @param ped
 */
export function getPedEyeColor(ped: number): number { 
	return _in(0x00000000, 0xa47b860f, ped, _r, _ri); 
}

/**
 * A getter for [\_SET_PED_FACE_FEATURE](#\_0x71A5C1DBA060049E). Returns 0.0 if fails to get.
 * @param ped
 * @param index
 */
export function getPedFaceFeature(ped: number, index: number): number { 
	return _in(0x00000000, 0xba352add, ped, index, _r, _rf); 
}

/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 * @param ped
 */
export function getPedHairColor(ped: number): number { 
	return _in(0x00000000, 0xa3ea2893, ped, _r, _ri); 
}

/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 * @param ped
 */
export function getPedHairHighlightColor(ped: number): number { 
	return _in(0x00000000, 0x4b087305, ped, _r, _ri); 
}

/**
 * A getter for [SET_PED_HEAD_OVERLAY](#\_0x48F44967FA05CC1E) and [\_SET_PED_HEAD_OVERLAY_COLOR](#\_0x497BF74A7B9CB952) natives.
 * @param ped
 * @param index
 * @param overlayValue
 * @param colourType
 * @param firstColour
 * @param secondColour
 * @param overlayOpacity
 */
export function getPedHeadOverlayData(ped: number, index: number): [boolean, number, number, number, number, number] { 
	const [retval, overlayValue_out, colourType_out, firstColour_out, secondColour_out, overlayOpacity_out] = _in(0x00000000, 0xc46ee605, ped, index, _i, _i, _i, _i, _f, _r);
	return [retval as boolean, overlayValue_out as number, colourType_out as number, firstColour_out as number, secondColour_out as number, overlayOpacity_out as number]; 
}

/**
 * Gets a ped model's personality type.
 * @param modelHash
 */
export function getPedModelPersonality(modelHash: number): number { 
	return _in(0x00000000, 0xfe08cad6, modelHash, _r, _ri); 
}

export function getPedMovementClipset(ped: number): number { 
	return _in(0x00000000, 0x69e81e3d, ped, _r, _ri); 
}

export function getPlayerFromServerId(serverId: number): number { 
	return _in(0x00000000, 0x344ea166, serverId, _r, _ri); 
}

/**
 * Unlike [GET_PLAYER_INVINCIBLE](#\_0xB721981B2B939E07) this native gets both [SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED](#\_0x6BC97F4F4BB3C04B) and [SET_PLAYER_INVINCIBLE](#\_0x239528EACDC3E7DE) invincibility state.
 * @param player
 */
export function getPlayerInvincible2(player: number): boolean { 
	return _in(0x00000000, 0xf2e3912b, player, _r); 
}

export function getPlayerMaxStamina(playerId: number): number { 
	return _in(0x00000000, 0xd014ab79, playerId, _r, _rf); 
}

/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER](#\_0xAE540335B4ABC4E2).
 * @param playerId
 */
export function getPlayerMeleeWeaponDefenseModifier(playerId: number): number { 
	return _in(0x00000000, 0x27e94ef8, playerId, _r, _rf); 
}

export function getPlayerServerId(player: number): number { 
	return _in(0x00000000, 0x4d97bcc7, player, _r, _ri); 
}

export function getPlayerStamina(playerId: number): number { 
	return _in(0x00000000, 0xe415ec5c, playerId, _r, _rf); 
}

/**
 * A getter for [SET_PLAYER_VEHICLE_DAMAGE_MODIFIER](#\_0xA50E117CDDF82F0C).
 * @param playerId
 */
export function getPlayerVehicleDamageModifier(playerId: number): number { 
	return _in(0x00000000, 0x78f27b1f, playerId, _r, _rf); 
}

/**
 * A getter for [SET_PLAYER_VEHICLE_DEFENSE_MODIFIER](#\_0x4C60E6EFDAFF2462).
 * @param playerId
 */
export function getPlayerVehicleDefenseModifier(playerId: number): number { 
	return _in(0x00000000, 0x8326e7cd, playerId, _r, _rf); 
}

/**
 * A getter for [SET_RANDOM_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0xB3B3359379FE77D3).
 * Same as vehicle density multiplier.
 */
export function getRandomVehicleDensityMultiplier(): number { 
	return _in(0x00000000, 0x7b0d00c5, _r, _rf); 
}

/**
 * ```cpp
 * enum eRopeFlags
 * {
 * DrawShadowEnabled = 2,
 * Breakable = 4,
 * RopeUnwindingFront = 8,
 * RopeWinding = 32
 * }
 * ```
 * @param rope
 */
export function getRopeFlags(rope: number): number { 
	return _in(0x00000000, 0xa80ffe99, rope, _r, _ri); 
}

export function getRopeLengthChangeRate(rope: number): number { 
	return _in(0x00000000, 0x66d70ea3, rope, _r, _rf); 
}

export function getRopeTimeMultiplier(rope: number): number { 
	return _in(0x00000000, 0xf341e6ca, rope, _r, _rf); 
}

export function getRopeUpdateOrder(rope: number): number { 
	return _in(0x00000000, 0x2ab2e0f6, rope, _r, _ri); 
}

/**
 * Gets the height of the specified runtime texture.
 * @param tex
 */
export function getRuntimeTextureHeight(tex: any): number { 
	return _in(0x00000000, 0x3574aace, tex, _r, _ri); 
}

/**
 * Gets the row pitch of the specified runtime texture, for use when creating data for `SET_RUNTIME_TEXTURE_ARGB_DATA`.
 * @param tex
 */
export function getRuntimeTexturePitch(tex: any): number { 
	return _in(0x00000000, 0xca0a085f, tex, _r, _ri); 
}

/**
 * Gets the width of the specified runtime texture.
 * @param tex
 */
export function getRuntimeTextureWidth(tex: any): number { 
	return _in(0x00000000, 0xc9f55558, tex, _r, _ri); 
}

/**
 * A getter for [SET_SCENARIO_PED_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x7A556143A1C03898).
 */
export function getScenarioPedDensityMultiplier(): number { 
	return _in(0x00000000, 0x77c598b2, _r, _rf); 
}

export function getTrainCurrentTrackNode(train: number): number { 
	return _in(0x00000000, 0xe015e854, train, _r, _ri); 
}

/**
 * Gets the door count for the specified train.
 * @param train
 */
export function getTrainDoorCount(train: number): number { 
	return _in(0x00000000, 0x99974721, train, _r, _ri); 
}

/**
 * Gets the ratio that a door is open for on a train.
 * @param train
 * @param doorIndex
 */
export function getTrainDoorOpenRatio(train: number, doorIndex: number): number { 
	return _in(0x00000000, 0x40b16551, train, doorIndex, _r, _rf); 
}

export function getVehicleAlarmTimeLeft(vehicle: number): number { 
	return _in(0x00000000, 0xc62aac98, vehicle, _r, _ri); 
}

/**
 * A getter for [SET_VEHICLE_CHEAT_POWER_INCREASE](#\_0xB59E4BD37AE292DB).
 * @param vehicle
 */
export function getVehicleCheatPowerIncrease(vehicle: number): number { 
	return _in(0x00000000, 0xc3c93f28, vehicle, _r, _rf); 
}

export function getVehicleClutch(vehicle: number): number { 
	return _in(0x00000000, 0x1dad4583, vehicle, _r, _rf); 
}

export function getVehicleCurrentGear(vehicle: number): number { 
	return _in(0x00000000, 0xb4f4e566, vehicle, _r, _ri); 
}

export function getVehicleCurrentRpm(vehicle: number): number { 
	return _in(0x00000000, 0xe7b12b54, vehicle, _r, _rf); 
}

export function getVehicleDashboardBoost(): number { 
	return _in(0x00000000, 0xdffaba2a, _r, _rf); 
}

export function getVehicleDashboardFuel(): number { 
	return _in(0x00000000, 0x19b0b2ce, _r, _rf); 
}

/**
 * Gets the state of the player vehicle's dashboard lights as a bit set
 * indicator_left = 1
 * indicator_right = 2
 * handbrakeLight = 4
 * engineLight = 8
 * ABSLight = 16
 * gasLight = 32
 * oilLight = 64
 * headlights = 128
 * highBeam = 256
 * batteryLight = 512
 */
export function getVehicleDashboardLights(): number { 
	return _in(0x00000000, 0x500ffe9d, _r, _ri); 
}

export function getVehicleDashboardOilPressure(): number { 
	return _in(0x00000000, 0x3856d767, _r, _rf); 
}

export function getVehicleDashboardOilTemp(): number { 
	return _in(0x00000000, 0x1f5996aa, _r, _rf); 
}

export function getVehicleDashboardRpm(): number { 
	return _in(0x00000000, 0xf9716a11, _r, _rf); 
}

export function getVehicleDashboardSpeed(vehicle: number): number { 
	return _in(0x00000000, 0x9aad420e, vehicle, _r, _rf); 
}

export function getVehicleDashboardTemp(): number { 
	return _in(0x00000000, 0x6b6adafa, _r, _rf); 
}

export function getVehicleDashboardVacuum(): number { 
	return _in(0x00000000, 0xfabe67a9, _r, _rf); 
}

export function getVehicleDashboardWaterTemp(): number { 
	return _in(0x00000000, 0x8e3b3e42, _r, _rf); 
}

/**
 * A getter for [SET_VEHICLE_DENSITY_MULTIPLIER_THIS_FRAME](#\_0x245A6883D966D537).
 */
export function getVehicleDensityMultiplier(): number { 
	return _in(0x00000000, 0xef7c6538, _r, _rf); 
}

/**
 * Gets a vehicle's multiplier used with a wheel's GET_VEHICLE_WHEEL_STEERING_ANGLE to determine the angle the wheel is rendered.
 * @param vehicle
 */
export function getVehicleDrawnWheelAngleMult(vehicle: number): number { 
	return _in(0x00000000, 0x21c1da8e, vehicle, _r, _rf); 
}

export function getVehicleEngineTemperature(vehicle: number): number { 
	return _in(0x00000000, 0xf4f495cb, vehicle, _r, _rf); 
}

export function getVehicleFuelLevel(vehicle: number): number { 
	return _in(0x00000000, 0x5f739bb8, vehicle, _r, _rf); 
}

export function getVehicleGravityAmount(vehicle: number): number { 
	return _in(0x00000000, 0xb48a1292, vehicle, _r, _rf); 
}

/**
 * Returns the effective handling data of a vehicle as a floating-point value.
 * Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
 * @param vehicle
 * @param class_
 * @param fieldName
 */
export function getVehicleHandlingFloat(vehicle: number, class_: string, fieldName: string): number { 
	return _in(0x00000000, 0x642fc12f, vehicle, _ts(class_), _ts(fieldName), _r, _rf); 
}

/**
 * Returns the effective handling data of a vehicle as an integer value.
 * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
 * @param vehicle
 * @param class_
 * @param fieldName
 */
export function getVehicleHandlingInt(vehicle: number, class_: string, fieldName: string): number { 
	return _in(0x00000000, 0x27396c75, vehicle, _ts(class_), _ts(fieldName), _r, _ri); 
}

/**
 * Returns the effective handling data of a vehicle as a vector value.
 * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
 * @param vehicle
 * @param class_
 * @param fieldName
 */
export function getVehicleHandlingVector(vehicle: number, class_: string, fieldName: string): Vector3 { 
	return _mv(_in(0x00000000, 0xfb341304, vehicle, _ts(class_), _ts(fieldName), _r, _rv)); 
}

export function getVehicleHighGear(vehicle: number): number { 
	return _in(0x00000000, 0xf1d1d689, vehicle, _r, _ri); 
}

/**
 * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
 * @param vehicle
 */
export function getVehicleIndicatorLights(vehicle: number): number { 
	return _in(0x00000000, 0x83070354, vehicle, _r, _ri); 
}

export function getVehicleLightMultiplier(vehicle: number): number { 
	return _in(0x00000000, 0x7e6e219c, vehicle, _r, _rf); 
}

export function getVehicleNextGear(vehicle: number): number { 
	return _in(0x00000000, 0xddb298ae, vehicle, _r, _ri); 
}

export function getVehicleNumberOfWheels(vehicle: number): number { 
	return _in(0x00000000, 0xedf4b0fc, vehicle, _r, _ri); 
}

export function getVehicleOilLevel(vehicle: number): number { 
	return _in(0x00000000, 0xfc7f8ef4, vehicle, _r, _rf); 
}

export function getVehicleSteeringScale(vehicle: number): number { 
	return _in(0x00000000, 0x954465de, vehicle, _r, _rf); 
}

export function getVehicleThrottleOffset(vehicle: number): number { 
	return _in(0x00000000, 0xd1d07351, vehicle, _r, _rf); 
}

/**
 * A getter for [MODIFY_VEHICLE_TOP_SPEED](#\_0x93A3996368C94158). Returns -1.0 if a modifier is not set.
 * @param vehicle
 */
export function getVehicleTopSpeedModifier(vehicle: number): number { 
	return _in(0x00000000, 0x998b7fee, vehicle, _r, _rf); 
}

export function getVehicleTurboPressure(vehicle: number): number { 
	return _in(0x00000000, 0xe02b51d7, vehicle, _r, _rf); 
}

/**
 * Gets brake pressure of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * Normal values around 1.0f when braking.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelBrakePressure(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0x70fe2eff, vehicle, wheelIndex, _r, _rf); 
}

/**
 * Gets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelFlags(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0xc70fa0c7, vehicle, wheelIndex, _r, _ri); 
}

export function getVehicleWheelHealth(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0x54a677f5, vehicle, wheelIndex, _r, _rf); 
}

/**
 * Gets whether the wheel is powered.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * This is a shortcut to a flag in GET_VEHICLE_WHEEL_FLAGS.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelIsPowered(vehicle: number, wheelIndex: number): boolean { 
	return _in(0x00000000, 0x3ccf1b49, vehicle, wheelIndex, _r); 
}

/**
 * Gets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelPower(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0x0d203287, vehicle, wheelIndex, _r, _rf); 
}

export function getVehicleWheelRimColliderSize(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0xcee21ab2, vehicle, wheelIndex, _r, _rf); 
}

/**
 * Gets the rotation speed of a wheel.
 * This is used internally to calcuate GET_VEHICLE_WHEEL_SPEED.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelRotationSpeed(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0xea1859e5, vehicle, wheelIndex, _r, _rf); 
}

/**
 * Returns vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 * @param vehicle
 */
export function getVehicleWheelSize(vehicle: number): number { 
	return _in(0x00000000, 0x04046b66, vehicle, _r, _rf); 
}

/**
 * Gets speed of a wheel at the tyre.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelSpeed(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0x149c9da0, vehicle, wheelIndex, _r, _rf); 
}

/**
 * Gets steering angle of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelSteeringAngle(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0xa0867448, vehicle, wheelIndex, _r, _rf); 
}

export function getVehicleWheelSurfaceMaterial(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0xa7f04022, vehicle, wheelIndex, _r, _ri); 
}

/**
 * Gets the current suspension compression of a wheel.
 * Returns a positive value. 0 means the suspension is fully extended, the wheel is off the ground.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelSuspensionCompression(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0x2b48175b, vehicle, wheelIndex, _r, _rf); 
}

export function getVehicleWheelTireColliderSize(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0xe0ba9fe6, vehicle, wheelIndex, _r, _rf); 
}

export function getVehicleWheelTireColliderWidth(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0xef65929c, vehicle, wheelIndex, _r, _rf); 
}

/**
 * Gets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelTractionVectorLength(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0x3bcfee14, vehicle, wheelIndex, _r, _rf); 
}

/**
 * Returns vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 * @param vehicle
 */
export function getVehicleWheelWidth(vehicle: number): number { 
	return _in(0x00000000, 0x9c7b59f9, vehicle, _r, _rf); 
}

/**
 * Returns the offset of the specified wheel relative to the wheel's axle center.
 * @param vehicle
 * @param wheelIndex
 */
export function getVehicleWheelXOffset(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0xcc90cbca, vehicle, wheelIndex, _r, _rf); 
}

export function getVehicleWheelYRotation(vehicle: number, wheelIndex: number): number { 
	return _in(0x00000000, 0x2ea4affe, vehicle, wheelIndex, _r, _rf); 
}

/**
 * List of known states:
 * 
 * ```
 * 1: Not wheeling.
 * 65: Vehicle is ready to do wheelie (burnouting).
 * 129: Vehicle is doing wheelie.
 * ```
 * @param vehicle
 */
export function getVehicleWheelieState(vehicle: number): number { 
	return _in(0x00000000, 0x137260d1, vehicle, _r, _ri); 
}

/**
 * Returns vehicle xenon lights custom RGB color values. Do note this native doesn't return non-RGB colors that was set with [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07).
 * @param vehicle
 * @param red
 * @param green
 * @param blue
 */
export function getVehicleXenonLightsCustomColor(vehicle: number): [boolean, number, number, number] { 
	const [retval, red_out, green_out, blue_out] = _in(0x00000000, 0xc715f730, vehicle, _i, _i, _i, _r);
	return [retval as boolean, red_out as number, green_out as number, blue_out as number]; 
}

/**
 * A getter for [SET_WEAPON_ANIMATION_OVERRIDE](\_0x1055AC3A667F09D9).
 * @param ped
 */
export function getWeaponAnimationOverride(ped: number): number { 
	return _in(0x00000000, 0x063ed2e7, ped, _r, _ri); 
}

/**
 * A getter for `CWeaponAccuracyModifier` in a weapon component.
 * @param componentHash
 */
export function getWeaponComponentAccuracyModifier(componentHash: number): number { 
	return _in(0x00000000, 0xc693e278, componentHash, _r, _rf); 
}

/**
 * A getter for `CameraHash` in a weapon scope component.
 * @param componentHash
 */
export function getWeaponComponentCameraHash(componentHash: number): number { 
	return _in(0x00000000, 0xacb7e68f, componentHash, _r, _ri); 
}

/**
 * A getter for `ClipSize` in a weapon component.
 * @param componentHash
 */
export function getWeaponComponentClipSize(componentHash: number): number { 
	return _in(0x00000000, 0xe14cf665, componentHash, _r, _ri); 
}

/**
 * A getter for `CWeaponDamageModifier` in a weapon component.
 * @param componentHash
 */
export function getWeaponComponentDamageModifier(componentHash: number): number { 
	return _in(0x00000000, 0x4a0e3855, componentHash, _r, _rf); 
}

/**
 * A getter for `CWeaponFallOffModifier` damage modifier value in a weapon component.
 * @param componentHash
 */
export function getWeaponComponentRangeDamageModifier(componentHash: number): number { 
	return _in(0x00000000, 0xe134fb8d, componentHash, _r, _rf); 
}

/**
 * A getter for `CWeaponFallOffModifier` range modifier value in a weapon component.
 * @param componentHash
 */
export function getWeaponComponentRangeModifier(componentHash: number): number { 
	return _in(0x00000000, 0x2fd0bc1b, componentHash, _r, _rf); 
}

/**
 * A getter for `ReticuleHash` in a weapon scope component.
 * @param componentHash
 */
export function getWeaponComponentReticuleHash(componentHash: number): number { 
	return _in(0x00000000, 0xf9ab9297, componentHash, _r, _ri); 
}

/**
 * A getter for [\_SET_WEAPON_DAMAGE_MODIFIER](#\_0x4757F00BC6323CFE).
 * @param weaponHash
 */
export function getWeaponDamageModifier(weaponHash: number): number { 
	return _in(0x00000000, 0x0d979143, weaponHash, _r, _rf); 
}

/**
 * A getter for the recoil shake amplitude of a weapon.
 * @param weaponHash
 */
export function getWeaponRecoilShakeAmplitude(weaponHash: number): number { 
	return _in(0x00000000, 0x05e1af5f, weaponHash, _r, _rf); 
}

/**
 * Converts a screen coordinate into its relative world coordinate.
 * @param screenX
 * @param screenY
 * @param worldVector
 * @param normalVector
 */
export function getWorldCoordFromScreenCoord(screenX: number, screenY: number): [Vector3, Vector3] { 
	const [worldVector_out, normalVector_out] = _in(0x00000000, 0xc81d0659, _fv(screenX), _fv(screenY), _v, _v);
	return [_mv(worldVector_out), _mv(normalVector_out)]; 
}

/**
 * Returns whether or not the specific minimap overlay has loaded.
 * @param id
 */
export function hasMinimapOverlayLoaded(id: number): boolean { 
	return _in(0x00000000, 0xf7535f32, id, _r); 
}

/**
 * <!-- Native implemented by Disquse. 0xFFF65C63 -->
 * 
 * Returns true if the minimap is currently expanded. False if it's the normal minimap state.
 * Use [`IsBigmapFull`](#\_0x66EE14B2) to check if the full map is currently revealed on the minimap.
 */
export function isBigmapActive(): boolean { 
	return _in(0x00000000, 0xfff65c63, _r); 
}

/**
 * <!-- Native implemented by Disquse. 0x66EE14B2 -->
 */
export function isBigmapFull(): boolean { 
	return _in(0x00000000, 0x66ee14b2, _r); 
}

/**
 * Returns whether or not a browser is created for a specified DUI browser object.
 * @param duiObject
 */
export function isDuiAvailable(duiObject: any): boolean { 
	return _in(0x00000000, 0x7aac3b4c, duiObject, _r); 
}

/**
 * A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).
 * @param entity
 */
export function isEntityPositionFrozen(entity: number): boolean { 
	return _in(0x00000000, 0xedbe6add, entity, _r); 
}

/**
 * Checks if keyboard input is enabled during NUI focus using `SET_NUI_FOCUS_KEEP_INPUT`.
 */
export function isNuiFocusKeepingInput(): boolean { 
	return _in(0x00000000, 0x39c9dc92, _r); 
}

/**
 * Returns the current NUI focus state previously set with `SET_NUI_FOCUS`.
 */
export function isNuiFocused(): boolean { 
	return _in(0x00000000, 0x98545e6d, _r); 
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Returns whether an asynchronous streaming file registration completed.
 * @param registerAs
 */
export function isStreamingFileReady(registerAs: string): boolean { 
	return _in(0x00000000, 0xa194934d, _ts(registerAs), _r); 
}

export function isVehicleAlarmSet(vehicle: number): boolean { 
	return _in(0x00000000, 0xdc921211, vehicle, _r); 
}

export function isVehicleInteriorLightOn(vehicle: number): boolean { 
	return _in(0x00000000, 0xa411f72c, vehicle, _r); 
}

export function isVehicleNeedsToBeHotwired(vehicle: number): boolean { 
	return _in(0x00000000, 0xf9933bf4, vehicle, _r); 
}

export function isVehiclePreviouslyOwnedByPlayer(vehicle: number): boolean { 
	return _in(0x00000000, 0xf849ed67, vehicle, _r); 
}

export function isVehicleWanted(vehicle: number): boolean { 
	return _in(0x00000000, 0x0a7daf7c, vehicle, _r); 
}

/**
 * Leaves cursor mode. This function supports SDK infrastructure and is not intended to be used directly from your code.
 */
export function leaveCursorMode(): void { 
	return _in(0x00000000, 0xadecf19e); 
}

/**
 * Starts listening to the specified channel, when available.
 * @param channel
 */
export function mumbleAddVoiceChannelListen(channel: number): void { 
	return _in(0x00000000, 0xc79f44bf, channel); 
}

/**
 * Adds the specified channel to the target list for the specified Mumble voice target ID.
 * @param targetId
 * @param channel
 */
export function mumbleAddVoiceTargetChannel(targetId: number, channel: number): void { 
	return _in(0x00000000, 0x4d386c9e, targetId, channel); 
}

/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 * @param targetId
 * @param player
 */
export function mumbleAddVoiceTargetPlayer(targetId: number, player: number): void { 
	return _in(0x00000000, 0x32c5355a, targetId, player); 
}

/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 * @param targetId
 * @param serverId
 */
export function mumbleAddVoiceTargetPlayerByServerId(targetId: number, serverId: number): void { 
	return _in(0x00000000, 0x25f2b65f, targetId, serverId); 
}

export function mumbleClearVoiceChannel(): void { 
	return _in(0x00000000, 0xbf847807); 
}

/**
 * Clears the target list for the specified Mumble voice target ID.
 * @param targetId
 */
export function mumbleClearVoiceTarget(targetId: number): void { 
	return _in(0x00000000, 0x8555dcba, targetId); 
}

/**
 * Clears channels from the target list for the specified Mumble voice target ID.
 * @param targetId
 */
export function mumbleClearVoiceTargetChannels(targetId: number): void { 
	return _in(0x00000000, 0x5ea72e76, targetId); 
}

/**
 * Clears players from the target list for the specified Mumble voice target ID.
 * @param targetId
 */
export function mumbleClearVoiceTargetPlayers(targetId: number): void { 
	return _in(0x00000000, 0x912e21da, targetId); 
}

export function mumbleGetTalkerProximity(): number { 
	return _in(0x00000000, 0x84e02a32, _r, _rf); 
}

/**
 * Returns the mumble voice channel from a player's server id.
 * @param serverId
 */
export function mumbleGetVoiceChannelFromServerId(serverId: number): number { 
	return _in(0x00000000, 0x221c09f1, serverId, _r, _ri); 
}

export function mumbleIsActive(): boolean { 
	return _in(0x00000000, 0xe820bc10, _r); 
}

/**
 * This native will return true if the user succesfully connected to the voice server.
 * If the user disabled the voice-chat setting it will return false.
 */
export function mumbleIsConnected(): boolean { 
	return _in(0x00000000, 0xb816370a, _r); 
}

export function mumbleIsPlayerTalking(player: number): boolean { 
	return _in(0x00000000, 0x33eef97f, player, _r); 
}

/**
 * Stops listening to the specified channel.
 * @param channel
 */
export function mumbleRemoveVoiceChannelListen(channel: number): void { 
	return _in(0x00000000, 0x231523b7, channel); 
}

/**
 * Removes the specified voice channel from the user's voice targets.
 * 
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_CHANNEL](#\_0x4D386C9E)
 * @param targetId
 * @param channel
 */
export function mumbleRemoveVoiceTargetChannel(targetId: number, channel: number): void { 
	return _in(0x00000000, 0x268db867, targetId, channel); 
}

/**
 * Removes the specified player from the user's voice targets.
 * 
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER](#\_0x32C5355A)
 * @param targetId
 * @param player
 */
export function mumbleRemoveVoiceTargetPlayer(targetId: number, player: number): void { 
	return _in(0x00000000, 0x88cd646f, targetId, player); 
}

/**
 * Removes the specified player from the user's voice targets.
 * 
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER_BY_SERVER_ID](#\_0x25F2B65F)
 * @param targetId
 * @param serverId
 */
export function mumbleRemoveVoiceTargetPlayerByServerId(targetId: number, serverId: number): void { 
	return _in(0x00000000, 0x930bd34b, targetId, serverId); 
}

export function mumbleSetActive(state: boolean): void { 
	return _in(0x00000000, 0xd932a3f3, state); 
}

/**
 * Sets the current input distance. The player will be able to talk to other players within this distance.
 * @param distance
 */
export function mumbleSetAudioInputDistance(distance: number): void { 
	return _in(0x00000000, 0x1b1052e2, _fv(distance)); 
}

/**
 * Use this native to disable noise suppression and high pass filters.
 * 
 * The possible intents for this are as follows (backticks are used to represent hashes):
 * 
 * | Index | Description |
 * |-|-|
 * | \`speech\` | Default intent |
 * | \`music\` | Disable noise suppression and high pass filter |
 * @param intentHash
 */
export function mumbleSetAudioInputIntent(intentHash: number): void { 
	return _in(0x00000000, 0x6383526b, intentHash); 
}

/**
 * Sets the current output distance. The player will be able to hear other players talking within this distance.
 * @param distance
 */
export function mumbleSetAudioOutputDistance(distance: number): void { 
	return _in(0x00000000, 0x74c597d9, _fv(distance)); 
}

/**
 * Changes the Mumble server address to connect to, and reconnects to the new address.
 * @param address
 * @param port
 */
export function mumbleSetServerAddress(address: string, port: number): void { 
	return _in(0x00000000, 0xe6eb2cd8, _ts(address), port); 
}

/**
 * Sets the audio submix ID for a specified player using Mumble 'Native Audio' functionality.
 * @param serverId
 * @param submixId
 */
export function mumbleSetSubmixForServerId(serverId: number, submixId: number): void { 
	return _in(0x00000000, 0xfe3a3054, serverId, submixId); 
}

export function mumbleSetTalkerProximity(value: number): void { 
	return _in(0x00000000, 0x74e927b0, _fv(value)); 
}

export function mumbleSetVoiceChannel(channel: number): void { 
	return _in(0x00000000, 0x8737eee8, channel); 
}

/**
 * Sets the current Mumble voice target ID to broadcast voice to.
 * @param targetId
 */
export function mumbleSetVoiceTarget(targetId: number): void { 
	return _in(0x00000000, 0x960a4a95, targetId); 
}

/**
 * Overrides the output volume for a particular player on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 * 
 * Set to -1.0 to reset the Volume override.
 * @param player
 * @param volume
 */
export function mumbleSetVolumeOverride(player: number, volume: number): void { 
	return _in(0x00000000, 0x61c309e3, player, _fv(volume)); 
}

/**
 * Overrides the output volume for a particular player with the specified server id and player name on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 * @param serverId
 * @param volume
 */
export function mumbleSetVolumeOverrideByServerId(serverId: number, volume: number): void { 
	return _in(0x00000000, 0xce8e25b4, serverId, _fv(volume)); 
}

/**
 * Sets whether peds can stand on top of *all* vehicles without falling off.
 * 
 * Note this flag is not replicated automatically, you will have to manually do so.
 * @param flag
 */
export function overridePedsCanStandOnTopFlag(flag: boolean): void { 
	return _in(0x00000000, 0x90a9e0b2, flag); 
}

/**
 * Replaces the `popgroups` (CPopGroupList) meta file with the file in the specified path.
 * @param path
 */
export function overridePopGroups(path: string): void { 
	return _in(0x00000000, 0xd3bc438f, _ts(path)); 
}

/**
 * Overrides whether or not peds can stand on top of the specified vehicle.
 * 
 * Note this flag is not replicated automatically, you will have to manually do so.
 * @param vehicle
 * @param can
 */
export function overrideVehiclePedsCanStandOnTopFlag(vehicle: number, can: boolean): void { 
	return _in(0x00000000, 0x7fa03e76, vehicle, can); 
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a set of archetypes with the game engine. These should match `CBaseArchetypeDef` class information from the game.
 * @param factory
 */
export function registerArchetypes(factory: any): void { 
	return _in(0x00000000, 0x3c2f9037, _mfr(factory)); 
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a set of entities with the game engine. These should match `CEntityDef` class information from the game.
 * At this time, this function **should not be used in a live environment**.
 * @param factory
 */
export function registerEntities(factory: any): void { 
	return _in(0x00000000, 0x410da7d3, _mfr(factory)); 
}

/**
 * Registers a specified .gfx file as GFx font library.
 * The .gfx file has to be registered with the streamer already.
 * @param fileName
 */
export function registerFontFile(fileName: string): void { 
	return _in(0x00000000, 0x01b3a363, _ts(fileName)); 
}

/**
 * Registers a specified font name for use with text draw commands.
 * @param fontName
 */
export function registerFontId(fontName: string): number { 
	return _in(0x00000000, 0xacf6d8ee, _ts(fontName), _r, _ri); 
}

/**
 * Registers a key mapping for the current resource.
 * 
 * See the related [cookbook post](https://cookbook.fivem.net/2020/01/06/using-the-new-console-key-bindings/) for more information.
 * @param commandString
 * @param description
 * @param defaultMapper
 * @param defaultParameter
 */
export function registerKeyMapping(commandString: string, description: string, defaultMapper: string, defaultParameter: string): void { 
	return _in(0x00000000, 0xd7664fd1, _ts(commandString), _ts(description), _ts(defaultMapper), _ts(defaultParameter)); 
}

export function registerNuiCallback(callbackType: string, callback: any): void { 
	return _in(0x00000000, 0xc59b980c, _ts(callbackType), _mfr(callback)); 
}

export function registerNuiCallbackType(callbackType: string): void { 
	return _in(0x00000000, 0xcd03cda9, _ts(callbackType)); 
}

export function registerRawNuiCallback(callbackType: string, callback: any): void { 
	return _in(0x00000000, 0xa8ae9c2f, _ts(callbackType), _mfr(callback)); 
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a dynamic streaming asset from the server with the GTA streaming module system.
 * @param resourceName
 * @param fileName
 * @param cacheString
 */
export function registerStreamingFileFromCache(resourceName: string, fileName: string, cacheString: string): void { 
	return _in(0x00000000, 0xcead2d4b, _ts(resourceName), _ts(fileName), _ts(cacheString)); 
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a KVP value as an asset with the GTA streaming module system. This function currently won't work.
 * @param kvsKey
 */
export function registerStreamingFileFromKvs(kvsKey: string): void { 
	return _in(0x00000000, 0x1493dcc1, _ts(kvsKey)); 
}

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * 
 * Registers a file from an URL as a streaming asset in the GTA streaming subsystem. This will asynchronously register the asset, and caching is done based on the URL itself - cache headers are ignored.
 * 
 * Use `IS_STREAMING_FILE_READY` to check if the asset has been registered successfully.
 * @param registerAs
 * @param url
 */
export function registerStreamingFileFromUrl(registerAs: string, url: string): void { 
	return _in(0x00000000, 0xf44bfb95, _ts(registerAs), _ts(url)); 
}

/**
 * Removes a dry volume from the game session.
 * See CREATE_DRY_VOLUME for more info
 * @param handle
 */
export function removeDryVolume(handle: number): void { 
	return _in(0x00000000, 0x7bcaa6e7, handle); 
}

/**
 * Experimental natives, please do not use in a live environment.
 * @param origTxd
 * @param origTxn
 */
export function removeReplaceTexture(origTxd: string, origTxn: string): void { 
	return _in(0x00000000, 0xa896b20a, _ts(origTxd), _ts(origTxn)); 
}

/**
 * Requests a resource file set with the specified name to be downloaded and mounted on top of the current resource.
 * 
 * Resource file sets are specified in `fxmanifest.lua` with the following syntax:
 * 
 * ```lua
 * file_set 'addon_ui' {
 * 'ui/addon/index.html',
 * 'ui/addon -- [[*.js',
 * }
 * ```
 * 
 * This command will trigger a script error if the request failed.
 * @param setName
 */
export function requestResourceFileSet(setName: string): boolean { 
	return _in(0x00000000, 0xe7490533, _ts(setName), _r); 
}

/**
 * Resets parameters which is used by the game for checking is ped needs to fly through windscreen after a crash to default values.
 */
export function resetFlyThroughWindscreenParams(): void { 
	return _in(0x00000000, 0x6d712937); 
}

/**
 * Resets values from the zoom level data by index to defaults from mapzoomdata.meta.
 * @param index
 */
export function resetMapZoomDataLevel(index: number): void { 
	return _in(0x00000000, 0x11a5b7ed, index); 
}

/**
 * Resets mapdata entity transform matrix to its original state.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * @param mapDataHash
 * @param entityInternalIdx
 */
export function resetMapdataEntityMatrix(mapDataHash: number, entityInternalIdx: number): boolean { 
	return _in(0x00000000, 0x8143fa4f, mapDataHash, entityInternalIdx, _r); 
}

/**
 * Restores an overridden ped model personality type to the default value.
 * @param modelHash
 */
export function resetPedModelPersonality(modelHash: number): void { 
	return _in(0x00000000, 0x79a12861, modelHash); 
}

/**
 * Resets whether or not peds can stand on top of the specified vehicle.
 * 
 * Note this flag is not replicated automatically, you will have to manually do so.
 * @param vehicle
 */
export function resetVehiclePedsCanStandOnTopFlag(vehicle: number): void { 
	return _in(0x00000000, 0xdf62cfe2, vehicle); 
}

/**
 * Gets the selected entity at the current mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * @param hitFlags
 * @param precise
 */
export function selectEntityAtCursor(hitFlags: number, precise: boolean): number { 
	return _in(0x00000000, 0x3dd8130f, hitFlags, precise, _r, _ri); 
}

/**
 * Gets the selected entity at the specified mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * @param fracX
 * @param fracY
 * @param hitFlags
 * @param precise
 */
export function selectEntityAtPos(fracX: number, fracY: number, hitFlags: number, precise: boolean): number { 
	return _in(0x00000000, 0xafe8d405, _fv(fracX), _fv(fracY), hitFlags, precise, _r, _ri); 
}

/**
 * Sends a message to the specific DUI root page. This is similar to SEND_NUI_MESSAGE.
 * @param duiObject
 * @param jsonString
 */
export function sendDuiMessage(duiObject: any, jsonString: string): void { 
	return _in(0x00000000, 0xcd380da9, duiObject, _ts(jsonString)); 
}

/**
 * Injects a 'mouse down' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 * @param duiObject
 * @param button
 */
export function sendDuiMouseDown(duiObject: any, button: string): void { 
	return _in(0x00000000, 0x5d01f191, duiObject, _ts(button)); 
}

/**
 * Injects a 'mouse move' event for a DUI object. Coordinates are in browser space.
 * @param duiObject
 * @param x
 * @param y
 */
export function sendDuiMouseMove(duiObject: any, x: number, y: number): void { 
	return _in(0x00000000, 0xd9d7a0aa, duiObject, x, y); 
}

/**
 * Injects a 'mouse up' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 * @param duiObject
 * @param button
 */
export function sendDuiMouseUp(duiObject: any, button: string): void { 
	return _in(0x00000000, 0x1d735b93, duiObject, _ts(button)); 
}

/**
 * Injects a 'mouse wheel' event for a DUI object.
 * @param duiObject
 * @param deltaY
 * @param deltaX
 */
export function sendDuiMouseWheel(duiObject: any, deltaY: number, deltaX: number): void { 
	return _in(0x00000000, 0x2d62133a, duiObject, deltaY, deltaX); 
}

/**
 * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
 * @param jsonString
 */
export function sendLoadingScreenMessage(jsonString: string): boolean { 
	return _in(0x00000000, 0x8bbe6cc0, _ts(jsonString), _r); 
}

export function sendNuiMessage(jsonString: string): boolean { 
	return _in(0x00000000, 0x78608acb, _ts(jsonString), _r); 
}

/**
 * Adds a cooldown between instances of moving and then aiming.
 * Can be optionally used to hinder 'speedboosting'
 * To turn off, set value to 0
 * @param value
 */
export function setAimCooldown(value: number): void { 
	return _in(0x00000000, 0xa42a3dbf, value); 
}

/**
 * Sets a floating-point parameter for a submix effect.
 * @param submixId
 * @param effectSlot
 * @param paramIndex
 * @param paramValue
 */
export function setAudioSubmixEffectParamFloat(submixId: number, effectSlot: number, paramIndex: number, paramValue: number): void { 
	return _in(0x00000000, 0x9a209b3c, submixId, effectSlot, paramIndex, _fv(paramValue)); 
}

/**
 * Sets an integer parameter for a submix effect.
 * @param submixId
 * @param effectSlot
 * @param paramIndex
 * @param paramValue
 */
export function setAudioSubmixEffectParamInt(submixId: number, effectSlot: number, paramIndex: number, paramValue: number): void { 
	return _in(0x00000000, 0x77fae2b8, submixId, effectSlot, paramIndex, paramValue); 
}

/**
 * Assigns a RadioFX effect to a submix effect slot.
 * 
 * The parameter values for this effect are as follows (backticks are used to represent hashes):
 * 
 * | Index | Type | Description |
 * |-|-|-|
 * | \`enabled\` | int | Enables or disables RadioFX on this DSP. |
 * | \`default\` | int | Sets default parameters for the RadioFX DSP and enables it. |
 * | \`freq_low\` | float |  |
 * | \`freq_hi\` | float |  |
 * | \`fudge\` | float |  |
 * | \`rm_mod_freq\` | float |  |
 * | \`rm_mix\` | float |  |
 * | \`o_freq_lo\` | float |  |
 * | \`o_freq_hi\` | float |  |
 * @param submixId
 * @param effectSlot
 */
export function setAudioSubmixEffectRadioFx(submixId: number, effectSlot: number): void { 
	return _in(0x00000000, 0xaaa94d53, submixId, effectSlot); 
}

/**
 * Sets the volumes for the sound channels in a submix effect.
 * Values can be between 0.0 and 1.0.
 * Channel 5 and channel 6 are not used in voice chat but are believed to be center and LFE channels.
 * Output slot starts at 0 for the first ADD_AUDIO_SUBMIX_OUTPUT call then incremented by 1 on each subsequent call.
 * @param submixId
 * @param outputSlot
 * @param frontLeftVolume
 * @param frontRightVolume
 * @param rearLeftVolume
 * @param rearRightVolume
 * @param channel5Volume
 * @param channel6Volume
 */
export function setAudioSubmixOutputVolumes(submixId: number, outputSlot: number, frontLeftVolume: number, frontRightVolume: number, rearLeftVolume: number, rearRightVolume: number, channel5Volume: number, channel6Volume: number): void { 
	return _in(0x00000000, 0x825dc0d1, submixId, outputSlot, _fv(frontLeftVolume), _fv(frontRightVolume), _fv(rearLeftVolume), _fv(rearRightVolume), _fv(channel5Volume), _fv(channel6Volume)); 
}

export function setCursorLocation(x: number, y: number): boolean { 
	return _in(0x00000000, 0x8a7a8dac, _fv(x), _fv(y), _r); 
}

/**
 * Sets the default number plate text pattern for vehicles seen on the local client with the specified plate index as their *default* index (`plateProbabilities` from carvariations).
 * 
 * For consistency, this should be used with the same value on all clients, since vehicles *without* custom text will use a seeded random number generator with this pattern to determine the default plate text.
 * 
 * The default value is `11AAA111`, and using this or a NULL string will revert to the default game RNG.
 * 
 * ### Pattern string format
 * 
 * *   `1` will lead to a random number from 0-9.
 * *   `A` will lead to a random letter from A-Z.
 * *   `.` will lead to a random letter *or* number, with 50% probability of being either.
 * *   `^1` will lead to a literal `1` being emitted.
 * *   `^A` will lead to a literal `A` being emitted.
 * *   Any other character will lead to said character being emitted.
 * *   A string shorter than 8 characters will be padded on the right.
 * @param plateIndex
 * @param pattern
 */
export function setDefaultVehicleNumberPlateTextPattern(plateIndex: number, pattern: string): void { 
	return _in(0x00000000, 0x79780fd2, plateIndex, _ts(pattern)); 
}

/**
 * This native sets the app id for the discord rich presence implementation.
 * @param appId
 */
export function setDiscordAppId(appId: string): void { 
	return _in(0x00000000, 0x6a02254d, _ts(appId)); 
}

/**
 * Sets a clickable button to be displayed in a player's Discord rich presence.
 * @param index
 * @param label
 * @param url
 */
export function setDiscordRichPresenceAction(index: number, label: string, url: string): void { 
	return _in(0x00000000, 0xcbbc3fac, index, _ts(label), _ts(url)); 
}

/**
 * This native sets the image asset for the discord rich presence implementation.
 * @param assetName
 */
export function setDiscordRichPresenceAsset(assetName: string): void { 
	return _in(0x00000000, 0x53dfd530, _ts(assetName)); 
}

/**
 * This native sets the small image asset for the discord rich presence implementation.
 * @param assetName
 */
export function setDiscordRichPresenceAssetSmall(assetName: string): void { 
	return _in(0x00000000, 0xf61d04c4, _ts(assetName)); 
}

/**
 * This native sets the hover text of the small image asset for the discord rich presence implementation.
 * @param text
 */
export function setDiscordRichPresenceAssetSmallText(text: string): void { 
	return _in(0x00000000, 0x35e62b6a, _ts(text)); 
}

/**
 * This native sets the hover text of the image asset for the discord rich presence implementation.
 * @param text
 */
export function setDiscordRichPresenceAssetText(text: string): void { 
	return _in(0x00000000, 0xb029d2fa, _ts(text)); 
}

/**
 * Navigates the specified DUI browser to a different URL.
 * @param duiObject
 * @param url
 */
export function setDuiUrl(duiObject: any, url: string): void { 
	return _in(0x00000000, 0xf761d9f3, duiObject, _ts(url)); 
}

/**
 * Draws an outline around a given entity. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * @param entity
 * @param enabled
 */
export function setEntityDrawOutline(entity: number, enabled: boolean): void { 
	return _in(0x00000000, 0x76180407, entity, enabled); 
}

/**
 * Sets color for entity outline. `255, 0, 255, 255` by default.
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
export function setEntityDrawOutlineColor(red: number, green: number, blue: number, alpha: number): void { 
	return _in(0x00000000, 0xb41a56c2, red, green, blue, alpha); 
}

/**
 * Sets variant of shader that will be used to draw entity outline.
 * 
 * Variants are:
 * 
 * *   **0**: Default value, gauss shader.
 * *   **1**: 2px wide solid color outline.
 * *   **2**: Fullscreen solid color except for entity.
 * @param shader
 */
export function setEntityDrawOutlineShader(shader: number): void { 
	return _in(0x00000000, 0x5261a01a, shader); 
}

/**
 * Sets an entity's matrix. Arguments are in the same order as with GET_ENTITY_MATRIX.
 * @param entity
 * @param forwardX
 * @param forwardY
 * @param forwardZ
 * @param rightX
 * @param rightY
 * @param rightZ
 * @param upX
 * @param upY
 * @param upZ
 * @param atX
 * @param atY
 * @param atZ
 */
export function setEntityMatrix(entity: number, forwardX: number, forwardY: number, forwardZ: number, rightX: number, rightY: number, rightZ: number, upX: number, upY: number, upZ: number, atX: number, atY: number, atZ: number): void { 
	return _in(0x00000000, 0x0fb0639b, entity, _fv(forwardX), _fv(forwardY), _fv(forwardZ), _fv(rightX), _fv(rightY), _fv(rightZ), _fv(upX), _fv(upY), _fv(upZ), _fv(atX), _fv(atY), _fv(atZ)); 
}

/**
 * Allows Weapon-Flashlight beams to stay visible while moving. Normally it only stays on while aiming.
 * @param state
 */
export function setFlashLightKeepOnWhileMoving(state: boolean): void { 
	return _in(0x00000000, 0x7635b349, state); 
}

/**
 * Sets some in-game parameters which is used for checks is ped needs to fly through windscreen after a crash.
 * @param vehMinSpeed
 * @param unkMinSpeed
 * @param unkModifier
 * @param minDamage
 */
export function setFlyThroughWindscreenParams(vehMinSpeed: number, unkMinSpeed: number, unkModifier: number, minDamage: number): boolean { 
	return _in(0x00000000, 0x4d3118ed, _fv(vehMinSpeed), _fv(unkMinSpeed), _fv(unkModifier), _fv(minDamage), _r); 
}

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle
 * @param class_
 * @param fieldName
 * @param value
 */
export function setHandlingField(vehicle: string, class_: string, fieldName: string, value: number): void { 
	return _in(0x00000000, 0xfe8064e3, _ts(vehicle), _ts(class_), _ts(fieldName), value); 
}

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle
 * @param class_
 * @param fieldName
 * @param value
 */
export function setHandlingFloat(vehicle: string, class_: string, fieldName: string, value: number): void { 
	return _in(0x00000000, 0x090dd01c, _ts(vehicle), _ts(class_), _ts(fieldName), _fv(value)); 
}

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * @param vehicle
 * @param class_
 * @param fieldName
 * @param value
 */
export function setHandlingInt(vehicle: string, class_: string, fieldName: string, value: number): void { 
	return _in(0x00000000, 0x8ab3f46c, _ts(vehicle), _ts(class_), _ts(fieldName), value); 
}

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
 * @param vehicle
 * @param class_
 * @param fieldName
 * @param value
 */
export function setHandlingVector(vehicle: string, class_: string, fieldName: string, value: Vector3): void { 
	return _in(0x00000000, 0x07f9d543, _ts(vehicle), _ts(class_), _ts(fieldName), value); 
}

/**
 * Sets whether or not ownership checks should be performed while trying to stow a carriable on a hunting wagon.
 * @param ignore
 */
export function setIgnoreVehicleOwnershipForStowing(ignore: boolean): void { 
	return _in(0x00000000, 0x85a10ffd, ignore); 
}

export function setInteriorPortalCornerPosition(interiorId: number, portalIndex: number, cornerIndex: number, posX: number, posY: number, posZ: number): void { 
	return _in(0x00000000, 0x87f43553, interiorId, portalIndex, cornerIndex, _fv(posX), _fv(posY), _fv(posZ)); 
}

export function setInteriorPortalEntityFlag(interiorId: number, portalIndex: number, entityIndex: number, flag: number): void { 
	return _in(0x00000000, 0x8349cd76, interiorId, portalIndex, entityIndex, flag); 
}

export function setInteriorPortalFlag(interiorId: number, portalIndex: number, flag: number): void { 
	return _in(0x00000000, 0x88b2355e, interiorId, portalIndex, flag); 
}

export function setInteriorPortalRoomFrom(interiorId: number, portalIndex: number, roomFrom: number): void { 
	return _in(0x00000000, 0x298fc783, interiorId, portalIndex, roomFrom); 
}

export function setInteriorPortalRoomTo(interiorId: number, portalIndex: number, roomTo: number): void { 
	return _in(0x00000000, 0x58982680, interiorId, portalIndex, roomTo); 
}

export function setInteriorRoomExtents(interiorId: number, roomIndex: number, bbMinX: number, bbMinY: number, bbMinZ: number, bbMaxX: number, bbMaxY: number, bbMaxZ: number): void { 
	return _in(0x00000000, 0x4fdcf51e, interiorId, roomIndex, _fv(bbMinX), _fv(bbMinY), _fv(bbMinZ), _fv(bbMaxX), _fv(bbMaxY), _fv(bbMaxZ)); 
}

export function setInteriorRoomFlag(interiorId: number, roomIndex: number, flag: number): void { 
	return _in(0x00000000, 0x5518d60b, interiorId, roomIndex, flag); 
}

export function setInteriorRoomTimecycle(interiorId: number, roomIndex: number, timecycleHash: number): void { 
	return _in(0x00000000, 0x31c9a848, interiorId, roomIndex, timecycleHash); 
}

/**
 * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,
 * you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
 * @param manualShutdown
 */
export function setManualShutdownLoadingScreenNui(manualShutdown: boolean): void { 
	return _in(0x00000000, 0x1722c938, manualShutdown); 
}

/**
 * Sets values to the zoom level data by index.
 * @param index
 * @param zoomScale
 * @param zoomSpeed
 * @param scrollSpeed
 * @param tilesX
 * @param tilesY
 */
export function setMapZoomDataLevel(index: number, zoomScale: number, zoomSpeed: number, scrollSpeed: number, tilesX: number, tilesY: number): void { 
	return _in(0x00000000, 0x447c718e, index, _fv(zoomScale), _fv(zoomSpeed), _fv(scrollSpeed), _fv(tilesX), _fv(tilesY)); 
}

/**
 * Overrides how many real ms are equal to one game minute.
 * A setter for [`GetMillisecondsPerGameMinute`](#\_0x2F8B4D1C595B11DB).
 * @param value
 */
export function setMillisecondsPerGameMinute(value: number): void { 
	return _in(0x00000000, 0x36ca2554, value); 
}

/**
 * Sets the type for the minimap blip clipping object to be either rectangular or rounded.
 * @param type
 */
export function setMinimapClipType(type: number): void { 
	return _in(0x00000000, 0xb8b4490c, type); 
}

/**
 * Overrides the minimap component data (from `common:/data/ui/frontend.xml`) for a specified component.
 * @param name
 * @param alignX
 * @param alignY
 * @param posX
 * @param posY
 * @param sizeX
 * @param sizeY
 */
export function setMinimapComponentPosition(name: string, alignX: string, alignY: string, posX: number, posY: number, sizeX: number, sizeY: number): void { 
	return _in(0x00000000, 0x3e882b23, _ts(name), _ts(alignX), _ts(alignY), _fv(posX), _fv(posY), _fv(sizeX), _fv(sizeY)); 
}

/**
 * Sets the display info for a minimap overlay.
 * @param miniMap
 * @param x
 * @param y
 * @param xScale
 * @param yScale
 * @param alpha
 */
export function setMinimapOverlayDisplay(miniMap: number, x: number, y: number, xScale: number, yScale: number, alpha: number): void { 
	return _in(0x00000000, 0x6a48b3ca, miniMap, _fv(x), _fv(y), _fv(xScale), _fv(yScale), _fv(alpha)); 
}

/**
 * Possible Types:
 * 
 * ```
 * 0 = Off,
 * 1 = Regular,
 * 2 = Expanded,
 * 3 = Simple,
 * ```
 * @param type
 */
export function setMinimapType(type: number): void { 
	return _in(0x00000000, 0x5fb53015, type); 
}

export function setModelHeadlightConfiguration(modelHash: number, ratePerSecond: number, headlightRotation: number, invertRotation: boolean): void { 
	return _in(0x00000000, 0x7f6b8d75, modelHash, _fv(ratePerSecond), _fv(headlightRotation), invertRotation); 
}

/**
 * Sets whether all tags should group (normal game behavior) or should remain independent and above each ped's respective head when in a vehicle.
 * @param enabled
 */
export function setMpGamerTagsUseVehicleBehavior(enabled: boolean): void { 
	return _in(0x00000000, 0x7a27bc93, enabled); 
}

/**
 * Sets the maximum distance at which all tags will be visible and which beyond will not be displayed. Distance is measured from the camera position.
 * @param distance
 */
export function setMpGamerTagsVisibleDistance(distance: number): void { 
	return _in(0x00000000, 0xd61676b3, _fv(distance)); 
}

export function setNetworkWalkMode(enabled: boolean): void { 
	return _in(0x00000000, 0x55188d2d, enabled); 
}

export function setNuiFocus(hasFocus: boolean, hasCursor: boolean): void { 
	return _in(0x00000000, 0x5b98ae30, hasFocus, hasCursor); 
}

export function setNuiFocusKeepInput(keepInput: boolean): void { 
	return _in(0x00000000, 0x3ff5e5f8, keepInput); 
}

/**
 * Overrides a ped model personality type.
 * @param modelHash
 * @param personalityHash
 */
export function setPedModelPersonality(modelHash: number, personalityHash: number): void { 
	return _in(0x00000000, 0x46f6b38b, modelHash, personalityHash); 
}

export function setPlayerMaxStamina(playerId: number, maxStamina: number): boolean { 
	return _in(0x00000000, 0x35594f67, playerId, _fv(maxStamina), _r); 
}

export function setPlayerStamina(playerId: number, stamina: number): boolean { 
	return _in(0x00000000, 0xa9ec16c7, playerId, _fv(stamina), _r); 
}

/**
 * the status of default voip system. It affects on `NETWORK_IS_PLAYER_TALKING` and `mp_facial` animation.
 * This function doesn't need to be called every frame, it works like a switcher.
 * @param player
 * @param state
 */
export function setPlayerTalkingOverride(player: number, state: boolean): void { 
	return _in(0x00000000, 0xfc02caf6, player, state); 
}

/**
 * Sets the player's rich presence detail state for social platform providers to a specified string.
 * @param presenceState
 */
export function setRichPresence(presenceState: string): void { 
	return _in(0x00000000, 0x7bdcbd45, _ts(presenceState)); 
}

/**
 * Set's the ropes length change rate, which is the speed that rope should wind if started.
 * @param rope
 * @param lengthChangeRate
 */
export function setRopeLengthChangeRate(rope: number, lengthChangeRate: number): void { 
	return _in(0x00000000, 0x69b680a7, rope, _fv(lengthChangeRate)); 
}

/**
 * Toggles whether the usage of [ADD_ROPE](#\_0xE832D760399EB220) should create an underlying CNetworkRopeWorldStateData. By default this is set to false.
 * @param shouldCreate
 */
export function setRopesCreateNetworkWorldState(shouldCreate: boolean): void { 
	return _in(0x00000000, 0x0e62fc73, shouldCreate); 
}

export function setRuntimeTextureArgbData(tex: any, buffer: string, length: number): boolean { 
	return _in(0x00000000, 0x3963d527, tex, _ts(buffer), length, _r); 
}

/**
 * Replaces the pixel data in a runtime texture with the image data from a file in the current resource, or a data URL.
 * 
 * If the bitmap is a different size compared to the existing texture, it will be resampled.
 * 
 * This command may end up executed asynchronously, and only update the texture data at a later time.
 * @param tex
 * @param fileName
 */
export function setRuntimeTextureImage(tex: any, fileName: string): boolean { 
	return _in(0x00000000, 0x28fc4ecb, tex, _ts(fileName), _r); 
}

/**
 * Sets a pixel in the specified runtime texture. This will have to be committed using `COMMIT_RUNTIME_TEXTURE` to have any effect.
 * @param tex
 * @param x
 * @param y
 * @param r
 * @param g
 * @param b
 * @param a
 */
export function setRuntimeTexturePixel(tex: any, x: number, y: number, r: number, g: number, b: number, a: number): void { 
	return _in(0x00000000, 0xab65acee, tex, x, y, r, g, b, a); 
}

export function setSnakeoilForEntry(name: string, path: string, data: string): void { 
	return _in(0x00000000, 0xa7dd3209, _ts(name), _ts(path), _ts(data)); 
}

export function setTextChatEnabled(enabled: boolean): boolean { 
	return _in(0x00000000, 0x97b2f9f8, enabled, _r); 
}

/**
 * Sets the ratio that a door is open for on a train.
 * @param train
 * @param doorIndex
 * @param ratio
 */
export function setTrainDoorOpenRatio(train: number, doorIndex: number, ratio: number): void { 
	return _in(0x00000000, 0x2468dbe8, train, doorIndex, _fv(ratio)); 
}

/**
 * Enables or disables whether train doors should be forced open whilst a player is inside the train. This is enabled by default in multiplayer.
 * @param forceOpen
 */
export function setTrainsForceDoorsOpen(forceOpen: boolean): void { 
	return _in(0x00000000, 0xd4d1ba63, forceOpen); 
}

export function setVehicleAlarmTimeLeft(vehicle: number, time: number): void { 
	return _in(0x00000000, 0xc108ee6f, vehicle, time); 
}

/**
 * Disables the vehicle from being repaired when a vehicle extra is enabled.
 * @param vehicle
 * @param value
 */
export function setVehicleAutoRepairDisabled(vehicle: number, value: boolean): void { 
	return _in(0x00000000, 0x5f3a3574, vehicle, value); 
}

export function setVehicleClutch(vehicle: number, clutch: number): void { 
	return _in(0x00000000, 0x2f70aced, vehicle, _fv(clutch)); 
}

export function setVehicleCurrentRpm(vehicle: number, rpm: number): void { 
	return _in(0x00000000, 0x2a01a8fc, vehicle, _fv(rpm)); 
}

export function setVehicleEngineTemperature(vehicle: number, temperature: number): void { 
	return _in(0x00000000, 0x6c93c4a9, vehicle, _fv(temperature)); 
}

export function setVehicleFuelLevel(vehicle: number, level: number): void { 
	return _in(0x00000000, 0xba970511, vehicle, _fv(level)); 
}

export function setVehicleGravityAmount(vehicle: number, gravity: number): void { 
	return _in(0x00000000, 0x1a963e58, vehicle, _fv(gravity)); 
}

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
 * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle
 * @param class_
 * @param fieldName
 * @param value
 */
export function setVehicleHandlingField(vehicle: number, class_: string, fieldName: string, value: number): void { 
	return _in(0x00000000, 0x2ba40795, vehicle, _ts(class_), _ts(fieldName), value); 
}

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
 * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle
 * @param class_
 * @param fieldName
 * @param value
 */
export function setVehicleHandlingFloat(vehicle: number, class_: string, fieldName: string, value: number): void { 
	return _in(0x00000000, 0x488c86d2, vehicle, _ts(class_), _ts(fieldName), _fv(value)); 
}

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
 * @param vehicle
 * @param class_
 * @param fieldName
 * @param value
 */
export function setVehicleHandlingInt(vehicle: number, class_: string, fieldName: string, value: number): void { 
	return _in(0x00000000, 0xc37f4cf9, vehicle, _ts(class_), _ts(fieldName), value); 
}

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
 * @param vehicle
 * @param class_
 * @param fieldName
 * @param value
 */
export function setVehicleHandlingVector(vehicle: number, class_: string, fieldName: string, value: Vector3): void { 
	return _in(0x00000000, 0x12497890, vehicle, _ts(class_), _ts(fieldName), value); 
}

export function setVehicleHighGear(vehicle: number, gear: number): void { 
	return _in(0x00000000, 0x20b1b3e6, vehicle, gear); 
}

export function setVehicleOilLevel(vehicle: number, level: number): void { 
	return _in(0x00000000, 0x90d1cad1, vehicle, _fv(level)); 
}

export function setVehicleSteeringAngle(vehicle: number, angle: number): void { 
	return _in(0x00000000, 0xffccc2ea, vehicle, _fv(angle)); 
}

export function setVehicleSteeringScale(vehicle: number, scale: number): void { 
	return _in(0x00000000, 0xeb46596f, vehicle, _fv(scale)); 
}

/**
 * Sets the height of the vehicle's suspension.
 * This changes the same value set by Suspension in the mod shop.
 * Negatives values raise the car. Positive values lower the car.
 * 
 * This is change is visual only. The collision of the vehicle will not move.
 * @param vehicle
 * @param newHeight
 */
export function setVehicleSuspensionHeight(vehicle: number, newHeight: number): void { 
	return _in(0x00000000, 0xb3439a01, vehicle, _fv(newHeight)); 
}

export function setVehicleTurboPressure(vehicle: number, pressure: number): void { 
	return _in(0x00000000, 0x6485615e, vehicle, _fv(pressure)); 
}

/**
 * Sets brake pressure of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * Normal values around 1.0f
 * @param vehicle
 * @param wheelIndex
 * @param pressure
 */
export function setVehicleWheelBrakePressure(vehicle: number, wheelIndex: number, pressure: number): void { 
	return _in(0x00000000, 0xe80f4e31, vehicle, wheelIndex, _fv(pressure)); 
}

/**
 * Sets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 * @param flags
 */
export function setVehicleWheelFlags(vehicle: number, wheelIndex: number, flags: number): void { 
	return _in(0x00000000, 0xd2b9e90d, vehicle, wheelIndex, flags); 
}

export function setVehicleWheelHealth(vehicle: number, wheelIndex: number, health: number): void { 
	return _in(0x00000000, 0xb22ecefd, vehicle, wheelIndex, _fv(health)); 
}

/**
 * Sets whether the wheel is powered.
 * On all wheel drive cars this works to change which wheels receive power, but if a car's fDriveBiasFront doesn't send power to that wheel, it won't get power anyway. This can be fixed by changing the fDriveBiasFront with SET_VEHICLE_HANDLING_FLOAT.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * This is a shortcut to a flag in SET_VEHICLE_WHEEL_FLAGS.
 * @param vehicle
 * @param wheelIndex
 * @param powered
 */
export function setVehicleWheelIsPowered(vehicle: number, wheelIndex: number, powered: boolean): void { 
	return _in(0x00000000, 0xbd5291a0, vehicle, wheelIndex, powered); 
}

/**
 * Sets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 * @param power
 */
export function setVehicleWheelPower(vehicle: number, wheelIndex: number, power: number): void { 
	return _in(0x00000000, 0xc6146043, vehicle, wheelIndex, _fv(power)); 
}

/**
 * Not sure what this changes, probably determines physical rim size in case the tire is blown.
 * @param vehicle
 * @param wheelIndex
 * @param value
 */
export function setVehicleWheelRimColliderSize(vehicle: number, wheelIndex: number, value: number): void { 
	return _in(0x00000000, 0xf380e184, vehicle, wheelIndex, _fv(value)); 
}

/**
 * Sets the rotation speed of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 * @param speed
 */
export function setVehicleWheelRotationSpeed(vehicle: number, wheelIndex: number, speed: number): void { 
	return _in(0x00000000, 0x35ed100d, vehicle, wheelIndex, _fv(speed)); 
}

/**
 * Sets vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels.
 * Returns whether change was successful (can be false if trying to set size for non-default wheels).
 * @param vehicle
 * @param size
 */
export function setVehicleWheelSize(vehicle: number, size: number): boolean { 
	return _in(0x00000000, 0x53ab5c35, vehicle, _fv(size), _r); 
}

/**
 * Use along with SetVehicleWheelSize to resize the wheels (this native sets the collider size affecting physics while SetVehicleWheelSize will change visual size).
 * @param vehicle
 * @param wheelIndex
 * @param value
 */
export function setVehicleWheelTireColliderSize(vehicle: number, wheelIndex: number, value: number): void { 
	return _in(0x00000000, 0xb962d05c, vehicle, wheelIndex, _fv(value)); 
}

/**
 * Use along with SetVehicleWheelWidth to resize the wheels (this native sets the collider width affecting physics while SetVehicleWheelWidth will change visual width).
 * @param vehicle
 * @param wheelIndex
 * @param value
 */
export function setVehicleWheelTireColliderWidth(vehicle: number, wheelIndex: number, value: number): void { 
	return _in(0x00000000, 0x47bd0270, vehicle, wheelIndex, _fv(value)); 
}

/**
 * Sets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 * @param length
 */
export function setVehicleWheelTractionVectorLength(vehicle: number, wheelIndex: number, length: number): void { 
	return _in(0x00000000, 0x85c85a3a, vehicle, wheelIndex, _fv(length)); 
}

/**
 * Sets vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels.
 * Returns whether change was successful (can be false if trying to set width for non-default wheels).
 * @param vehicle
 * @param width
 */
export function setVehicleWheelWidth(vehicle: number, width: number): boolean { 
	return _in(0x00000000, 0x64c3f1c0, vehicle, _fv(width), _r); 
}

/**
 * Adjusts the offset of the specified wheel relative to the wheel's axle center.
 * Needs to be called every frame in order to function properly, as GTA will reset the offset otherwise.
 * This function can be especially useful to set the track width of a vehicle, for example:
 * 
 * ```
 * function SetVehicleFrontTrackWidth(vehicle, width)
 * SetVehicleWheelXOffset(vehicle, 0, -width/2)
 * SetVehicleWheelXOffset(vehicle, 1, width/2)
 * end
 * ```
 * @param vehicle
 * @param wheelIndex
 * @param offset
 */
export function setVehicleWheelXOffset(vehicle: number, wheelIndex: number, offset: number): void { 
	return _in(0x00000000, 0x0bd6357d, vehicle, wheelIndex, _fv(offset)); 
}

export function setVehicleWheelYRotation(vehicle: number, wheelIndex: number, value: number): void { 
	return _in(0x00000000, 0xc6c2171f, vehicle, wheelIndex, _fv(value)); 
}

/**
 * Example script: https://pastebin.com/J6XGbkCW
 * 
 * List of known states:
 * 
 * ```
 * 1: Not wheeling.
 * 65: Vehicle is ready to do wheelie (burnouting).
 * 129: Vehicle is doing wheelie.
 * ```
 * @param vehicle
 * @param state
 */
export function setVehicleWheelieState(vehicle: number, state: number): void { 
	return _in(0x00000000, 0xeab8db65, vehicle, state); 
}

/**
 * Sets custom vehicle xenon lights color, allowing to use RGB palette. The game will ignore lights color set by [\_SET_VEHICLE_XENON_LIGHTS_COLOR](#\_0xE41033B25D003A07) when custom color is active. This native is not synced between players. Requires xenon lights mod to be set on vehicle.
 * @param vehicle
 * @param red
 * @param green
 * @param blue
 */
export function setVehicleXenonLightsCustomColor(vehicle: number, red: number, green: number, blue: number): void { 
	return _in(0x00000000, 0x1683e7f0, vehicle, red, green, blue); 
}

/**
 * Overrides a floating point value from `visualsettings.dat` temporarily.
 * @param name
 * @param value
 */
export function setVisualSettingFloat(name: string, value: number): void { 
	return _in(0x00000000, 0xd1d31681, _ts(name), _fv(value)); 
}

/**
 * A setter for the recoil shake amplitude of a weapon.
 * @param weaponHash
 * @param amplitude
 */
export function setWeaponRecoilShakeAmplitude(weaponHash: number, amplitude: number): void { 
	return _in(0x00000000, 0x9864312f, weaponHash, _fv(amplitude)); 
}

/**
 * Disables the game's built-in auto-reloading.
 * @param state
 */
export function setWeaponsNoAutoreload(state: boolean): void { 
	return _in(0x00000000, 0x311150e5, state); 
}

/**
 * Disables autoswapping to another weapon when the current weapon runs out of ammo.
 * @param state
 */
export function setWeaponsNoAutoswap(state: boolean): void { 
	return _in(0x00000000, 0x02a7b50e, state); 
}

/**
 * Sets whether or not the weather should be owned by the network subsystem.
 * 
 * To be able to use [\_SET_WEATHER_TYPE_TRANSITION](#\_0x578C752848ECFA0C), this has to be set to false.
 * @param network
 */
export function setWeatherOwnedByNetwork(network: boolean): void { 
	return _in(0x00000000, 0x2703d582, network); 
}

/**
 * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
 */
export function shutdownLoadingScreenNui(): void { 
	return _in(0x00000000, 0xb9234afb); 
}

/**
 * Equivalent of [START_FIND_KVP](#\_0xDD379006), but for another resource than the current one.
 * @param resourceName
 * @param prefix
 */
export function startFindExternalKvp(resourceName: string, prefix: string): number { 
	return _in(0x00000000, 0x8f2eecc3, _ts(resourceName), _ts(prefix), _r, _ri); 
}

/**
 * The backing function for TriggerLatentServerEvent.
 * @param eventName
 * @param eventPayload
 * @param payloadLength
 * @param bps
 */
export function triggerLatentServerEventInternal(eventName: string, eventPayload: string, payloadLength: number, bps: number): void { 
	return _in(0x00000000, 0x128737ea, _ts(eventName), _ts(eventPayload), payloadLength, bps); 
}

/**
 * The backing function for TriggerServerEvent.
 * @param eventName
 * @param eventPayload
 * @param payloadLength
 */
export function triggerServerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void { 
	return _in(0x00000000, 0x7fdd1128, _ts(eventName), _ts(eventPayload), payloadLength); 
}

/**
 * Will unregister and cleanup a registered NUI callback handler.
 * 
 * Use along side the REGISTER_RAW_NUI_CALLBACK native.
 * @param callbackType
 */
export function unregisterRawNuiCallback(callbackType: string): void { 
	return _in(0x00000000, 0x7fb46432, _ts(callbackType)); 
}

/**
 * Transiently updates the entity with the specified mapdata index and entity index.
 * This function supports SDK infrastructure and is not intended to be used directly from your code.
 * @param mapdata
 * @param entity
 * @param entityDef
 */
export function updateMapdataEntity(mapdata: number, entity: number, entityDef: any): void { 
	return _in(0x00000000, 0xfc52cb91, mapdata, entity, ...(_obj(entityDef))); 
}
