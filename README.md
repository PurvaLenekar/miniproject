# Static Website Deployment on Cloud VM

A simple static website deployed on a cloud virtual machine using Microsoft Azure.

The project demonstrates how to host a publicly accessible website on a cloud VM and remotely update website files using SSH.

---

# Features

- Static website using HTML, CSS, and JavaScript
- Hosted on Azure Virtual Machine
- Publicly accessible through VM Public IP
- Remote website updates using SSH
- Web server configuration using Nginx

---

# Technologies Used

## Frontend
- HTML
- CSS
- JavaScript

## Cloud Platform
- Microsoft Azure

## Web Server
- Nginx

---

# Project Structure

static-website/
│
├── index.html
├── style.css
├── script.js
└── README.md

---

# Cloud Deployment Steps

## 1. Create Azure VM

- Create Ubuntu Virtual Machine
- Open ports:
  - 22 (SSH)
  - 80 (HTTP)

---

## 2. Connect to VM

ssh azureuser@VM_PUBLIC_IP

---

## 3. Install Nginx

sudo apt update

sudo apt install nginx -y

---

## 4. Upload Website Files

Copy:
- index.html
- style.css
- script.js

to:

/var/www/html

---

## 5. Restart Nginx

sudo systemctl restart nginx

---

## 6. Access Website

Open:

http://VM_PUBLIC_IP

Website becomes publicly accessible.

---

# Remote Website Update

Connect to VM using SSH:

ssh azureuser@VM_PUBLIC_IP

Edit files:

sudo nano /var/www/html/index.html

Refresh browser to see updates.

---

# Functionalities

- Public website hosting
- Remote file update
- Cloud VM deployment
- Web server configuration

---

# Output

Users can access the deployed website through the public IP address of the Azure VM.

---

# Future Improvements

- Responsive design
- Domain name integration
- HTTPS configuration
- CI/CD deployment
- Advanced UI design

---

# Author

Purva Lenekar
