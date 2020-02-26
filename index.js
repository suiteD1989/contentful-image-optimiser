/**
 * Check current browser to see if it is compatable
 */
const _checkBrowser = () => {
    if (process.browser) {
        let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === '[object SafariRemoteNotification]'; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))
        let isInterEx = /*@cc_on!@*/false || !!document.documentMode
        let iPhoneiPad = window.navigator.userAgent.match(/iPad/i) || window.navigator.userAgent.match(/iPhone/i)
        if (isSafari) {
            return true
        } else if (iPhoneiPad) {
            return true
        } else if (isInterEx) {
            return true
        } else {
            return false
        }
    } else {
        return
    }
}
/**
 * Check if screen is less than 800px
 */
const CheckMobile = () => {
    if (process.browser) {
        if (window.innerWidth <= 800) {
            return true;
        } else {
            return false;
        }
    }
}
/**
 * 
 * @param {*} url 
 * sets the width of image to that of browser window
 */
const setAutoWidth = (url) => {
    if (process.browser) {
        if (_checkBrowser()) {
            return url + '?w=' + window.innerWidth
        } else {
            return url + '?w=' + window.innerWidth + '&fm=webp'
        }
    } else {
        return url
    }
}
/**
 * 
 * @param {*} url 
 * @param {*} width 
 * Sets image to a fixed width. Function recieves url and width as params
 */
const setFixedWidth = (url, width) => {
    if (_checkBrowser()) {
        return url + '?w=' + width
    } else {
        return url + '?w=' + width + '&fm=webp'
    }
}

module.exports = {
    _checkBrowser,
    CheckMobile,
    setAutoWidth,
    setFixedWidth
}
  