'use strict'

const { app, BrowserWindow } = require('electron');

app.on('before-quit', () => { // Evento antes de salir
 console.log('Entrando');
});

app.on('ready', () => { // Evento cuando la app este lista
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Hola mundo',
        resizable: false,
        maximizable: false,
        center: true,
        show: false
    });

    win.once('ready-to-show', () => {
        win.show();
    })

    win.on('move', () => { // Evento que se activa por cada movimiento de la ventana
        const position = win.getPosition();
        console.log(position);
    });

    win.on('closed', () => { // Evento al cerrar la ventana
        win = null;
        app.quit();
    });

    win.loadURL('http://devdocs.io/')
});