import socket
print("starting a new client : Client 1")

HOST = "localhost"
PORT = 3000

client_socket = socket.socket()

client_socket.bind((HOST, PORT))

client_socket.sendall(b"Hello from the client 1")

