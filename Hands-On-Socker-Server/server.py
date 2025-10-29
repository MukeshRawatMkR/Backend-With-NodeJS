import socket
# 6 =+% ` _
import threading 

def connect_a_client(conn, addr):
   print("New client has been connected")
   data = conn.recv(2048)
   print("data rec from client is: ", data)
   conn.sendall(b"Server has recived your data, thanks")


HOST = "localhost"

PORT = 3000

# created a new socket object
server_socket = socket.socket()

# bind the socket object to the host and port
server_socket.bind((HOST,PORT))

# start listening for new connection
server_socket.listen()

print("Server is listening on ", HOST, PORT)

while True:
    # wait for new connection acceptance
   conn, addr = server_socket.accept() # it is accepting a new connection. 
   t = threading.Thread(target=connect_a_client, args=(conn, addr)) # preparing the thread.
   t.start() # it starts runnning the thread.


   