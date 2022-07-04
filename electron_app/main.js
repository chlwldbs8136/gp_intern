const {app, BrowserWindow} = require('electron')
const jarPath = app.getAppPath() + 'C:\Users\woojaewon\Desktop\jiyoon\electron_app\geoplan.jar';
const execute = require('child_process').spawn('java', ['-jar', jarPath, '']);
// const notifier = require('node-notifier')

function createWindow () {
  const win = new BrowserWindow()

  win.loadFile('index.html')

}

app.whenReady().then(() => {
  //초기화 한 후에만 activate 이벤트 listen
  createWindow()

  //macOS에서 다른 윈도우가 열려있지 않다면 앱에서 새로운 창을 다시 연다.
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  //사용자가 macOS에 있지 않은 경우 quit 
  //=> macOS에서는 사용자가 명확하게 Cmd + Q를 누르기 전까지 활성화된다.
  if (process.platform !== 'darwin') app.quit()
})
