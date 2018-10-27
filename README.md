# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

When a user enters a web address like https://www.techtonicgroup.com/, his browser starts by checking the cache for a DSN record that could help it establish the corresponding IP address of the site he is trying to reach (Garsiel 62). In case the browser finds no record of the URL in the cache, the ISP’s DNS server will initiate a DSN query to establish the IP address of the server hosting the site the user wants to access (Comer 140). Once the browser establishes the correct IP address of the server hosting the site, it will build a connection with it using one of the various internet protocols of which the most common for HTPP requests is TCP (Comer 140). The establishment of the TCP connection occurs through the TCP/IP three-way handshake process (Garsiel 62).

## From start to finish how does that data reach you to be rendered in the browser?

The establishment of a TCP connection between the browser and the server hosting the site the user is trying to reach signals the start of data transfer. Through this connection, the browser sends a GET request to the server asking for the site. The server has various parts that perform different functions. Upon receiving the request, the web server passes it to the request handler which reads the request and generates a response (Wilson 6). The server will then send out an HTPP response. The browser will then display the HTML content to the user (Comer 140). The HTML content is displayed by the browser in phases. The browser first renders the bare bone HTML skeleton (Comer 143). It then reads the tags and then sends out GET requests for the appropriate additional elements as specified by the tags such as JavaScript files, images, and CSS stylesheets (Garsiel 62). The browser also caches these static files so that it does not have to fetch them again the next time the user is visiting the same page (Comer 143).   

## What code is rendered in the browser?

The HTML code is rendered in the browser. The code is rendered in tags which tell the browser how to format (CSS styles and JavaScript scripts) the content when displaying it. (Comer 143).

## What is the server-side code’s main function?

The main function of the server-side code is to process requested data and provides it to a user (Wilson 8).

## What is the client-side code’s main function?

The main function of the client-side code is to send requests to the server and retrieve information from it (Wilson 8).

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

The instances of the client-side assets vary depending on the browser type and user settings. Current web browsers have different ways for websites to store and retrieve data. For instance, users will have specific settings for some sites; for long-term storage, saved documents and websites for offline purpose.

## How many instances of the server-side code are available at any given time?

Depending on how the developer builds the server, at any given time, the server-side code instances are determined by the number of requests a user makes to the server. Sometimes servers are recreated to process a more significant number of requests and to better the data distribution.

## What is runtime?

Another term that appears commonly in discussions of how browsers work is the term runtime. The runtime usually refers to the period during which a computer program executes (Comer 148). In reference to browsers, it implies the time when the browser is executing.

## How many instances of the databases connected to the server application are created?

There is no limit to the number of database instances connected to the server application. The number will depend on the requests made by the user.   


                                Works Cited

Comer, Douglas E. The Internet book: everything you need to know about computer networking and how the Internet works. Chapman and Hall/CRC, 2018.

Garsiel, Tali. "How browsers work." Behind the scenes of modern web browsers 44 (2009).

Wilson, Tracy V. "How semantic web works." HowStuffWorks. com, available at: http://www.howstuffworks.com/semantic-web. htm (2013).
