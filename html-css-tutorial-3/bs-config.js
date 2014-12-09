
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    "files": [
      "**/*.html",
      "**/*.css"
    ],
    "server": true,
    "proxy": false,
    "port": 3000,
    "ghostMode": {
        "clicks": true,
        "scroll": true,
        "location": false,
        "forms": {
            "submit": true,
            "inputs": true,
            "toggles": true
        }
    },
    "logLevel": "info",
    "logPrefix": "BS",
    "logConnections": false,
    "logFileChanges": true,
    "logSnippet": true,
    "open": "remote",
    "browser": "default",
    "xip": true,
    "hostnameSuffix": false,
    "notify": false,
    "scrollProportionally": true,
    "scrollThrottle": 0,
    "reloadDelay": 0,
    "injectChanges": true,
    "startPath": "/example.html",
    "minify": true,
    "host": null,
    "codeSync": true,
    "timestamps": true,
    "socket": {
        "path": "/browser-sync/socket.io",
        "clientPath": "/browser-sync",
        "namespace": "/browser-sync"
    },
    "debugInfo": true
};