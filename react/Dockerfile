FROM python:3.8

WORKDIR /app
# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

# Install project dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Install Prettier
RUN npm install -g prettier

# Test Prettier installation
RUN npx prettier --version
COPY . .

CMD ["python3", "main.py"]
