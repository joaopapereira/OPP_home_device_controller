# Contents
Contents of the docker image:
1. Linux
1. Eclipse
1. Iotivity Plugin for Eclipse

Missing:
1. Start eclipse and x11vnc at the same time
1. Insert RAML configuration using command line
1. Launch the simulator using the command line

# Build docker image
inside this folder execute the command
```
docker build opp-simulator .
```

# Start the image
```
docker run -p 5900:5900 -it opp-simulator:latest x11vnc -forever -usepw -create
```

This will create a VNC server that accepts connections at the address localhost:5900

The password is `1234`