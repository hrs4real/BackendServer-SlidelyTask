# BackendServer-SlidelyTask
This is a simple backend server application that uses Typescript, express, and node and has endpoints for submitting, reading, and fetching submissions. It uses a JSON file (db.json) to store submission data.
## How to Run the Server
### Prerequisites
1. Node.js and npm installed on your machine.
2. TypeScript installed globally (if not already installed):
```sh
npm install -g typescript`
```
### Steps
1. Clone the Repository (if you haven't already):
```sh
git clone <repository-url>
cd <repository-folder>
```
2. #### Install Dependencies:
```sh
npm install
```
3. #### Run the Server:
```sh
npm start
```
4. Server will run on: http://localhost:3000
## API Documentation
### Base URL
http://localhost:3000
### 1. Ping Endpoint
#### GET /ping
Description: A simple endpoint to check if the server is running.
```sh
curl http://localhost:3000/ping
```
### 2. Submit Endpoint
#### GET /submit
Description: Submits a new entry.
```sh
curl -X POST http://localhost:3000/submit -H "Content-Type: application/json" -d "{\"name\":\"John Doe\",\"email\":\"john.doe@example.com\",\"phone\":\"1234567890\",\"github_link\":\"https://github.com/johndoe\",\"stopwatch_time\":\"00:30:00\"}"
```
### 3. Ping Endpoint
#### GET /read
Description: Reads a submission by index.
```sh
curl http://localhost:3000/read?index=0

```
