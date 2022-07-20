'use strict'

import { app, protocol, BrowserWindow, ipcMain, Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'

let win: BrowserWindow | null
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
  //MenuBar 생성
  // const MenuBarTemplate: object[] = createMainMenu()
  // const mainMenu: Menu = Menu.buildFromTemplate(MenuBarTemplate)
  // Menu.setApplicationMenu(mainMenu)


  // ipcMain.on('changeRouteTo', (event: Event, path: string) => {
  //   win.webContents.send("changeRouteTo", path)
  // })
}

// const moveToDatabasePage = function() {
//   // alert('moveToDatabasePage');
//   let path = '/DB'

// }
// const moveToAdminServerPage = function() {
//   // alert('moveToAdminServerPage');
// }
// const moveToDistServerPage = function() {
//   // alert('moveToDistServerPage');
// }
// const moveToLocatorPage = function() {
//   // alert('moveToLocatorPage');
// }
// const moveToLicensePage = function() {
//   // alert('moveToLocatorPage');
// }

// function createMainMenu(this: any) {
//   let MenuBarTemplate: object[] = [
//     {
//       // label: this.$t('main.menubar.admin'),
//       label:'관리',
//       submenu:[
//         {
//           // label: this.i18n.$t('main.menubar.db'),
//           label:'데이터베이스',
//           click: function() {
//             moveToDatabasePage();
//           }
//         }, {
//           // label: this.i18n.$t('main.menubar.server'),
//           label:'서버',
//           click: function() {
//             moveToAdminServerPage();
//           }
//         }
//       ]
//     }, 
//     {
//       // label: this.i18n.$t('main.menubar.distribute'),
//       label:'배포',
//       submenu:[
//         {
//           // label: this.i18n.$t('main.menubar.server'),
//           label:'서버',
//           click: function() {
//             moveToDistServerPage();
//           }
//         }, {
//           // label: this.i18n.$t('main.menubar.locator'),
//           label:'로케이터',
//           click: function() {
//             moveToLocatorPage();
//           }
//         }
//       ]
//     },
//     {
//       // label: this.i18n.$t('main.menubar.license'),
//       label:'라이센스',
//       click: function() {
//         moveToLicensePage();
//           }
//     }
//   ];
//   return MenuBarTemplate
// }


// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e: any) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

