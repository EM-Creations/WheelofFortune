/**
 * Logger class
 * Author: Edward McKnight (EM-Creations.co.uk)
 */
function Logger (file, visible = true) {
	this.file = file;
	this.visible = visible;
}

Logger.prototype.log = function(severity, message) {
	if (this.visible) { // If the logging is visible
		let date = new Date();

		console.log("LOGGER - {" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " 
			+ date.getDate() + "/"+ (date.getMonth() + 1) + "/" + date.getFullYear() + "} (" + this.file + ") ["
			 + severity + "]: " + message);
	}
};

Logger.prototype.logError = function(message) {
	this.log("ERROR", message);
};

Logger.prototype.logWarn = function(message) {
	this.log("WARN", message);
};

Logger.prototype.logInfo = function(message) {
	this.log("INFO", message);
};