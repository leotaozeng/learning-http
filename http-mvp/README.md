# Minimal HTTP Server
## What is a protocol?
* A protocol in IT jargon refers to a set of rules that are agreed upon between two or parties for communication

## What is a web server?
* Technically, a web server is any computer that has a running daemon (service) accepting HTTP requests on some port (by default, 80) and replying with HTTP responses. This is typically HTML content.

## What is a security policy?
* An origin is made up of the following three parts: the protocol, host, and port number.

<img src="../img/same-origin.svg" />

## What is CORS(Cross Origin Resource Sharing)?
* A request for a resource (like an image or a font) outside of the origin is known as a cross-origin request. CORS (cross-origin resource sharing) manages cross-origin requests.

## HTTP Protocol
* It's the backbone of the Internet
* Is a request-response protocol
* By default, the HTTP protocol is served on port 80 of the web server

### Versions

## HTTP Messages
* HTTP messages are how data is exchanged between a server and a client

### Request Structure
| Line            | Example                       | Format                       |
|-----------------|-------------------------------|---------------------------------------|
| Start line      | `GET / HTTP/1.1`              | `<method> <request target> <version>` |
| Headers         | `Host: www.baidu.com`         | `<key>: <value>`                      | 
| Body (Optional) | `Hello from client!`          | N/A                                   |

### Response Structure
| Line            | Example                       | Format                       |
|-----------------|-------------------------------|------------------------------|
| Status line     | `HTTP/1.1 200 OK`             | `<method> <path> <protocol>` |
| Headers         | `Host: www.example.com`       | `<key>: <value>`             |
| Empty Line      |  ``                           | N/A                          |
| Body (Optional) | `Hello from client!`          | N/A                          |

## Documentations
<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages">HTTP Messages</a>

<a href="https://www.codecademy.com/articles/what-is-cors">What is CORS?</a>

<a href="https://jakearchibald.com/2016/caching-best-practices/?utm_campaign=chrome_series_catchingbestpractices_072717&utm_source=chromedev&utm_medium=yt-desc">Caching best practices & max-age gotchas</a>