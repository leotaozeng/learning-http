# Reading from a TCP connection
## Networking Layers
```
| OSI Model             | TCP/IP Model            | Protocol |
|-----------------------|-------------------------|----------|
| 7. Application Layer  |                         | HTTP,FTP |
| 6. Presentation Layer | 5. Application Layer    |          |
| 5. Session Layer      |    (应用层)              |          |
|-----------------------|-------------------------|----------|
| 4. Transport Layer    | 4. Transport Layer      | TCP,UDP  |         
|    (传输层)            |    (传输层)              |          | 
|-----------------------|-------------------------|----------|
| 3. Network Layer      | 3. Internet Layer       |          |
|-----------------------|-------------------------|----------|
| 2. Data Link Layer    | 2. Data Link Layer      |          |
| 1. Physical Layer     | 1. Physical Layer       |          |
|-----------------------|-------------------------|----------|
```

## What is TCP
* Stands for Transmission Control Protocol