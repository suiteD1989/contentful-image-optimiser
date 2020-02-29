/**
 * Check current browser to see if it is compatable
 */
const _checkBrowser = () => {
    if (process.browser || typeof window !== 'undefined') {
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
    if (process.browser || typeof window !== 'undefined') {
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
    if (process.browser || typeof window !== 'undefined') {
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
/**
 * 
 * @param {*} url 
 * @param {*} height 
 * Sets image to a fixed height. Function recieves url and height as params
 */
const setFixedHeight = (url, height) => {
    if (_checkBrowser()) {
        return url + '?h=' + height
    } else {
        return url + '?h=' + height + '&fm=webp'
    }
}
/**
 * 
 * @param {*} url 
 * @param {*} height 
 * @param {*} width 
 * Sets image to a fixed height & width. Function recieves url, height & height as params
 */
const setHeightWidth = (url, height, width) => {
    if (height && width) {
        if (_checkBrowser()) {
            return url + '?h=' + height + '?w=' + width
        } else {
            return url + '?h=' + height + '?w=' + width + '&fm=webp'
        }
    } else {
        return url
    }
}
module.exports = {
    _checkBrowser,
    CheckMobile,
    setAutoWidth,
    setFixedWidth,
    setFixedHeight,
    setHeightWidth
}
  