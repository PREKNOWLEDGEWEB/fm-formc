module.exports.PORT = 5900;
module.exports.SHELL = "cmd.exe";
module.exports.KEY = "1234";
var isWin = process.platform === "win32";
if (isWin) {
	module.exports.SHELL = "powershell.exe";
}else{
	module.exports.SHELL = "/bin/zsh";
}