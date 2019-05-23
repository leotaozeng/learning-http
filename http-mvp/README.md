# Minimal HTTP Server
## What is a protocol?
* A protocol in IT jargon refers to a set of rules that are agreed upon between two or parties for communication

## HTTP Protocol
* Is a request-response protocol
* By default, the HTTP protocol is served on port 80 of the web server

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

## CORS

## Documentations
<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages">HTTP Messages</a>