# Installation

### Prerequisites

Before installing Faith Point, please make sure you have the following software installed:

* [Docker](https://www.docker.com/get-started)
* [Docker Compose](https://docs.docker.com/compose/install/)
* [Node.js](https://nodejs.org/en/download/)

### Installation

1.  Clone the repository to your local machine:
    
        ```bash
        git clone https://github.com/Faith-Point/Backend faith-point
        ```

2.  Navigate to the project directory:
    
        ```bash
        cd faith-point
        ```

3.  Copy the `.env.example` file to `.env`:
    
        ```bash
        cp .env.example .env
        ```

4.  Start the application using Docker Compose:
    
        ```bash
        docker-compose -f docker-compose.develop.yml up --build
        ```

5.  Access the application at `http://localhost:3308/swagger`.

6.  To stop the application, press `Ctrl+C` in the terminal where the application is running.

### Troubleshooting

If you encounter any issues during the installation process, please refer to the project's issue tracker or contact us at `lucas.faria1@gmail.com` for support.