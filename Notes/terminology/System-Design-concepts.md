# System Design Concepts Overview

## 1. Client-Server Architecture
- **Client**: Web browser, mobile app, or frontend application.
- **Server**: Machine that processes requests and sends responses.
- **Communication**: Client sends request → Server processes → Returns response.

## 2. IP Addresses and Domain Names
- **IP Address**: Unique identifier for servers (like a phone number).
- **Domain Name**: Human-friendly name (e.g., `algo-masteraster.io`).
- **DNS (Domain Name System)**: Maps domain names to IP addresses.

## 3. Proxies and Reverse Proxies
- **Proxy Server**: Acts as a middleman; hides client IP.
- **Reverse Proxy**: Intercepts client requests and forwards them to backend servers.

## 4. Latency
- **Definition**: Delay in data transmission due to physical distance.
- **Solution**: Deploy services across multiple data centers globally.

## 5. HTTP/HTTPS
- **HTTP**: Protocol for transferring data; sends data in plain text.
- **HTTPS**: Secure version using SSL/TLS encryption.

## 6. APIs (Application Programming Interfaces)
- **Purpose**: Enables communication between clients and servers.
- **Common Types**:
  - **REST**: Uses standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`).
    - Stateless: Each request is independent.
  - **GraphQL**: Allows clients to request only the data they need.
    - Pros: Efficient data retrieval.
    - Cons: Higher server processing, harder to cache.

## 7. Databases
- **Purpose**: Store, retrieve, and manage data efficiently.
- **Types**:
  - **SQL Databases**:
    - Structured data with predefined schema.
    - Follows ACID properties.
    - Ideal for applications requiring strong consistency (e.g., banking).
  - **NoSQL Databases**:
    - Flexible schema.
    - Optimized for scalability and performance.
    - Types: Key-value, document, graph, wide-column stores.

## 8. Scaling Techniques
- **Vertical Scaling (Scaling Up)**:
  - Upgrade existing server (more CPU, RAM, storage).
  - Limitations: Expensive, finite capacity, single point of failure.
- **Horizontal Scaling (Scaling Out)**:
  - Add more servers to distribute load.
  - Improves reliability and scalability.

## 9. Load Balancer
- **Function**: Distributes incoming requests across multiple servers.
- **Algorithms**:
  - Round Robin
  - Least Connections
  - IP Hashing

## 10. Database Scaling Techniques
- **Indexing**:
  - Speeds up read queries.
  - Created on frequently queried columns.
  - Slows down write operations.
- **Replication**:
  - Primary database handles writes.
  - Read replicas handle read queries.
  - Improves read performance and availability.
- **Sharding**:
  - Splits database into smaller parts (shards) based on a shard key (e.g., user ID).
  - Reduces load and improves performance.
- **Vertical Partitioning**:
  - Splits tables by columns (e.g., separate user profile, login history, billing).
  - Improves query performance.

## 11. Caching
- **Purpose**: Store frequently accessed data in memory.
- **Cache Aside Pattern**:
  - Check cache first.
  - If not found, fetch from database, store in cache, and return.
- **TTL (Time to Live)**: Prevents serving outdated data.

## 12. Normalization vs Denormalization
- **Normalization**:
  - Reduces redundancy by splitting data into multiple tables.
  - Can lead to slow queries due to joins.
- **Denormalization**:
  - Combines related data into a single table.
  - Improves read performance but increases storage and complexity.

## 13. CAP Theorem
- **Three Properties**:
  - Consistency: All nodes see the same data.
  - Availability: Every request receives a response.
  - Partition Tolerance: System continues despite network failures.
- **Trade-off**: Can achieve only two of the three simultaneously.

## 14. Blob Storage
- **Purpose**: Store large unstructured files (images, videos, PDFs).
- **Example**: Amazon S3.
- **Features**:
  - Scalable
  - Pay-as-you-go
  - Automatic replication
  - Easy access via unique URLs.

## 15. Content Delivery Network (CDN)
- **Purpose**: Deliver content faster based on user location.
- **How it works**: Serves content from the nearest CDN server.
- **Benefits**: Faster load times, reduced buffering.

## 16. WebSockets
- **Purpose**: Enable real-time, two-way communication.
- **Advantages**:
  - Persistent connection.
  - Server can push updates to clients.
  - Eliminates polling.
- **Use Cases**: Live chat, stock dashboards, multiplayer games.

## 17. Webhooks
- **Purpose**: Notify a server when an event occurs.
- **How it works**:
  - Receiver registers a webhook URL.
  - Provider sends HTTP POST request to the URL when the event occurs.
- **Benefits**: Reduces server load and unnecessary API calls.

## 18. Microservices Architecture
- **Definition**: Breaks application into smaller, independent services.
- **Benefits**:
  - Independent scaling and deployment.
  - Each service has its own database and logic.
- **Communication**: APIs or message queues.

## 19. Message Queues
- **Purpose**: Enable asynchronous communication between services.
- **Components**:
  - Producer: Sends messages.
  - Queue: Temporarily stores messages.
  - Consumer: Retrieves and processes messages.
- **Benefits**: Decouples services, prevents overload, improves scalability.

## 20. Rate Limiting
- **Purpose**: Restrict the number of requests a client can send.
- **Algorithms**:
  - Fixed Window
  - Sliding Window
  - Token Bucket
- **Tools**: API Gateway.

## 21. API Gateway
- **Purpose**: Centralized entry point for client requests.
- **Functions**:
  - Authentication
  - Rate limiting
  - Logging
  - Monitoring
  - Request routing
- **Benefits**: Simplifies API management, improves security and scalability.

## 22. Idempotency
- **Purpose**: Ensure repeated requests produce the same result.
- **Implementation**:
  - Assign unique ID to each request.
  - Check if request has already been processed.
  - Ignore duplicates.

