(function(){
	const electron = require('electron');
	const path = require('path')

	const{app} = electron
	const{BrowserWindow} = electron

	const modalPath = path.join('file://', __dirname, '/app/index.html')

	let win

	app.on('ready' , () => {
		win = new BrowserWindow({
				width:300, 
				height:400, 
				titleBarstyle:'hidden',
				icon: path.join('file://',__dirname, '/icons/png/64x64.png')
			})
		win.webContents.loadURL(modalPath)

		win.on('closed' , () => {
			win = null;
		})
	})

	app.on('window-all-closed' , () => {
		// if(process.platform != 'darwin') {
			app.quit();
		// }
	})
})()
