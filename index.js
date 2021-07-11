'use strict'

const { app, BrowserWindow } = require('electron');

app.on('before-quit', () => { // Evento antes de salir
 console.log('Entrando');
});

app.on('ready', () => { // Evento cuando la app este lista
    let win = new BrowserWindow();

    win.on('closed', () => { // Evento al cerrar la ventana
        win = null;
        app.quit();
    });
});