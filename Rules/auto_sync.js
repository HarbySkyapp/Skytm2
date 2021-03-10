
var clientAPI;

/**
 * Describe this function...
 */
export default function auto_sync(clientAPI) {
	setInterval (function () {clientAPI.executeAction ('/SkyTM/Actions/autosyn.action');}, 15000)
}