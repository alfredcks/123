// ==UserScript==
// @name         cityline
// @version      試用(07AUG)
// @author       TechTickBot
// @namespace    https://t.me/techtickbot_channel
// @match        https://*.cityline.com/*
// @exclude      https://www.cityline.com/*/Login.html*
// @exclude      https://venue.cityline.com/utsvInternet/internet/shoppingBasket*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cityline.com
// @grant        none
// @run-at document-idle
// ==/UserScript==
(function () {
    // Define a function that creates a div element, sets its innerHTML to a message that includes the value of the expirationDate constant, and appends it to the body of the document
    function createDivElement() {
        // Create a div element
        const divElement = document.createElement('div')
        // Set the innerHTML of the div element to a message that includes the value of the expirationDate constant
        divElement.innerHTML =
            '~~見此句即' +
            name +
            '正常運作中 不用再問客服~~';

        // Set the style of the div element
        divElement.style.cssText =
            'position: fixed; top: 0; left: 0; width: 100%; background: black; color: white; padding: 0px; z-index: 9999; text-align: center;'
        divElement.style.top = '0'

        // Append the div element to the body of the document
        document.body.appendChild(divElement)

        // Set the paddingTop of the body of the document to '40px'
        document.body.style.paddingTop = '40px'
    }

    // Call the createDivElement function
    createDivElement()

    // Define a function that returns a Promise that resolves after a specified number of milliseconds
    function wait(milliseconds) {
        return new Promise((resolve) => {
            setTimeout(resolve, milliseconds)
        })
    }

    // Define an asynchronous function that performs various actions depending on the current URL of the page
    async function performActions() {
        // Check if the current URL of the page is 'https://shows.cityline.com/'
        if (window.location.href === 'https://shows.cityline.com/') {
            // Get the current hour and the first element with the class name 'btn_cta'
            let currentHour = new Date().getHours(),
                btnElement = document.getElementsByClassName('btn_cta')[0]
            console.log("click ths button")
            // Click the btnElement
            btnElement.click()

            // While the current hour is less than 10
            while (currentHour < 10) {
                // Wait for 200 milliseconds and then replace the location of the page with 'https://shows.cityline.com/'
                await wait(200)
                location.replace('https://shows.cityline.com/')
            }
        }
        // Get the element with the id 'busy_zone'
        var busyZoneElement = document.getElementById('busy_zone')

        // Check if busyZoneElement is not null
        if (busyZoneElement != null) {
            // Wait for 1500 milliseconds and then call the goEvent function of the window object
            await wait(1500)
            // window.goEvent()
        }

        // Log a message to the console
        console.log('logined')

        // Call a function that returns a Promise that resolves when an element matching a selector is found in the DOM
        waitForElement('.container').then((element) => {
            // someFunction()
        })

        // Check if the current URL of the page includes '/performance?'
        if (window.location.href.includes('/performance?')) {
            // Create a button element, set its innerHTML, className, and id, and append it to an element with the class name 'discount'
            let buttonElement = document.createElement('button')
            buttonElement.innerHTML = '自動揀位'
            buttonElement.className = 'btn btn-outline-primary'
            buttonElement.id = 'test'
            document.getElementsByClassName('discount')[0].append(buttonElement)

            // Define an asynchronous function that logs a message to the console and clicks an element with the class name 'purchase-btn' every 500 milliseconds
            async function autoSelect() {
                console.log('開始自動揀位')
                while (true) {
                    document.getElementsByClassName('purchase-btn')[0].click()
                    await wait(500)
                }
            }

            // Define a function that adds an event listener to an element with the id 'test' that calls the autoSelect function when clicked
            function addEventListenerToButton() {
                document.getElementById('test').addEventListener('click', function () {
                    autoSelect()
                })
            }

            // Call the addEventListenerToButton function
            addEventListenerToButton()
        }

        // Log a message to the console
        console.log('end')
    }

    // Define a function that returns a Promise that resolves when an element matching a selector is found in the DOM
    function waitForElement(selector) {
        return new Promise((resolve) => {
            // Check if an element matching the selector already exists in the DOM
            if (document.querySelector(selector)) {
                // Resolve the Promise with the element
                return resolve(document.querySelector(selector))
            }

            // Create a MutationObserver that observes changes to the DOM
            const observer = new MutationObserver((mutations) => {
                // Check if an element matching the selector exists in the DOM
                if (document.querySelector(selector)) {
                    // Resolve the Promise with the element and disconnect the observer
                    resolve(document.querySelector(selector))
                    observer.disconnect()
                }
            })

            // Start observing changes to the body of the document and its descendants
            observer.observe(document.body, {
                childList: true,
                subtree: true,
            })
        })
    }

    // Call the performActions function
    performActions()
})()
