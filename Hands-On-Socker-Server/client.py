import socket
print("starting a new client : Client 1")

HOST = "localhost"
PORT = 3000

client_socket = socket.socket()

client_socket.connect((HOST, PORT)) # client needs to connect to the server socket. 3way handshaking is done here for setting up TCP connection.

client_socket.sendall(b"Hello from the client 1")

response_from_server = client_socket.recv(2048)

print(response_from_server)

# client_socket.close()