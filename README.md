# Talker Manager

## Description

Talker Manager is a web application that allows users to manage and organize talk proposals for events, conferences, and meetups. This project was developed as part of the curriculum for the "Project Talker Manager" challenge of the Trybe's Software Development Course.

The application enables users to perform various tasks related to talk proposals, including submitting new proposals, reviewing existing ones, and accepting or rejecting talks based on their suitability for the event.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features
- Review and manage talk proposals as an organizer/administrator.
- Accept or reject talk proposals based on the event's criteria.
- View a list of all submitted talk proposals.
- Update and edit talk proposals as needed.
- Search and filter talk proposals based on various criteria.

## Installation

To run Talker Manager locally on your machine, follow these steps:

1. Clone the repository from GitHub:

```bash
git clone https://github.com/thiesac/talker-manager.git
cd talker-manager
```

2. Install the project dependencies:

```bash
npm install
```

3. Set up the environment variables:

   - Rename the `.env.example` file to `.env`.
   - Fill in the necessary environment variables, such as database connection details.

4. Start the development server:

```bash
npm start
```

5. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Usage

- As a user, you can create an account and submit talk proposals for events.
- As an organizer/administrator, you can log in and review, accept, or reject talk proposals.
- Organizers can update talk proposals' information as needed.
- Use the search and filter functionality to find specific talk proposals easily.

## Technologies
- Node.js and Express.js for the backend server.
- Other dependencies can be found in the `package.json` file.

## Contributing

Contributions to Talker Manager are welcome! If you find any issues or have ideas for improvements, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make changes and commit them.
4. Push the changes to your fork.
5. Submit a pull request to the `main` branch of the original repository.

## Acknowledgments

I would like to acknowledge and express my gratitude to [Trybe](https://www.betrybe.com/) for their support and guidance throughout the development of this educational resource.
