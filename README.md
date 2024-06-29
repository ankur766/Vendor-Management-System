
# Vendor Management System

Welcome to the Vendor Management System! This application is designed to help organizations efficiently manage their vendors. With features like vendor registration, comprehensive vendor information management, and a user-friendly interface, you can streamline your vendor-related processes with ease.

## Features

- **Vendor Registration**: Effortlessly register new vendors.
- **Vendor Management**: Manage vendor details including contact information, contracts, and performance metrics.
- **User-Friendly Interface**: Enjoy a simple and intuitive user interface for seamless navigation.
## Live Demo

Check out a video demo of the application on YouTube: [Vendor Management System Demo](https://www.youtube.com/watch?v=oKHI4k-7Iss)
https://www.youtube.com/watch?v=oKHI4k-7Iss


## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Getting Started

Follow these steps to set up and run the project locally:

### Clone the Repository

Clone this repository to your local machine using:

```bash
git clone https://github.com/ankur766/Vendor-Management-System.git
```

### Navigate to the Project Directory

```bash
cd Vendor-Management-System
```

### Install Dependencies

Navigate to the `BackendServer` directory and install the necessary dependencies:

```bash
cd BackendServer
npm install
```

### Configure Environment Variables

Create a `.env` file in the `BackendServer` directory and add the following variables:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

### Start the Backend Server

Start the backend server:

```bash
npm start
```

The backend server will be running at `http://localhost:5000`.

## Code Overview

The project is organized into the following directories:

- **BackendServer**: Contains the backend server code and API endpoints.
- **VENDOR SYSTEM**: Contains the frontend code for the Vendor Management System.

### Backend Server

The backend server is built using Node.js and Express. It provides RESTful APIs for managing vendors. The main files and directories include:

- `server.js`: Entry point of the backend server.
- `config/`: Configuration files for the server.
- `models/`: MongoDB models.
- `routes/`: API route handlers.
- `controllers/`: Business logic for the routes.

### Frontend

The frontend is built using React. It provides a user-friendly interface for interacting with the vendor management system. The main files and directories include:

- `src/`: Source code for the React application.
- `src/components/`: React components.
- `src/pages/`: Page components.
- `src/services/`: Services for making API calls.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING](CONTRIBUTING.md) guidelines for more information.

## Contact

If you have any questions or feedback, feel free to reach out to the project maintainers.

---

Happy Coding!

---

For additional help, you can check out our [documentation](docs/documentation.md) or contact our support team at [support@vendor-system.com](mailto:support@vendor-system.com).

---

![Vendor Management System](docs/images/screenshot.png)

---

### How to Use

1. **Register a New Vendor**: Navigate to the vendor registration page and fill in the required details.
2. **Manage Vendors**: Access the vendor management section to view, edit, or delete vendor information.
3. **Monitor Performance**: Keep track of vendor performance metrics in the performance section.

### Future Enhancements

- **Automated Notifications**: Set up automated email notifications for contract renewals and performance reviews.
- **Advanced Reporting**: Generate detailed reports on vendor performance and contract status.
- **Integration with Accounting Systems**: Seamlessly integrate with your accounting software for streamlined payments.

Stay tuned for updates and new features!

---

Thank you for using the Vendor Management System. We hope it makes managing your vendors a breeze!

---

## Additional Documentation

### API Documentation

For detailed information on the API endpoints, refer to the [API Documentation](docs/api.md).

### Frontend Documentation

For details on the frontend structure and components, refer to the [Frontend Documentation](docs/frontend.md).

---

## Troubleshooting

### Common Issues

1. **Database Connection Errors**

   Ensure your MongoDB server is running and the connection string in the `.env` file is correct.

2. **Port Conflicts**

   Make sure the port specified in the `.env` file is not being used by another application.

3. **Dependency Issues**

   Run `npm install` to ensure all dependencies are installed correctly.

For further assistance, check the [FAQ](docs/faq.md) or contact our support team.

---

Happy Coding!
