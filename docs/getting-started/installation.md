# Installation

### Prerequisites

Before installing Faith Point, please make sure you have the following software installed:

* [Docker](https://www.docker.com/get-started)
* [Docker Compose](https://docs.docker.com/compose/install/)
* [Node.js](https://nodejs.org/en/download/)

### Installation

1.  Clone the repository to your local machine:

    ```bash
    bashCopy codegit clone https://github.com/lucasfaria/Faith Point.git
    ```
2.  Navigate to the project directory:

    ```bash
    bashCopy codecd Faith Point
    ```
3.  Copy the sample environment file and edit it to add your own configuration:

    ```bash
    bashCopy codecp .env.example .env
    nano .env
    ```
4.  Build and start the containers:

    ```bash
    bashCopy codedocker-compose up -d --build
    ```
5.  Install the dependencies:

    ```bash
    bashCopy codecd backend && npm install
    cd ../frontend && npm install
    ```
6.  Start the backend server:

    ```bash
    bashCopy codecd ../backend && npm run start
    ```
7.  Start the frontend development server:

    ```bash
    bashCopy codecd ../frontend && npm run start
    ```
8. Open your browser and navigate to `http://localhost:3000` to see the Faith Point application in action!

### Troubleshooting

If you encounter any issues during the installation process, please refer to the project's issue tracker or contact us at `lucas.faria1@gmail.com` for support.