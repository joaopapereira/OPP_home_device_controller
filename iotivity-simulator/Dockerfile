FROM ubuntu:16.04

RUN sed 's/main$/main universe/' -i /etc/apt/sources.list && \
    apt-get update && apt-get install -y software-properties-common && \
    add-apt-repository ppa:webupd8team/java -y && \
    apt-get update && \
    echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections && \
    apt-get install -y oracle-java8-installer libxext-dev libxrender-dev libxtst-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    rm -rf /tmp/*

# Install libgtk as a separate step so that we can share the layer above with
# the netbeans image
RUN apt-get update && apt-get install -y libgtk2.0-0 libcanberra-gtk-module

RUN wget http://mirror.csclub.uwaterloo.ca/eclipse/technology/epp/downloads/release/oxygen/1a/eclipse-java-oxygen-1a-linux-gtk-x86_64.tar.gz -O /tmp/eclipse.tar.gz -q &&\
    echo 'Installing eclipse' && \
    tar -xf /tmp/eclipse.tar.gz -C /opt && \
    rm /tmp/eclipse.tar.gz

ADD run /usr/local/bin/eclipse

RUN chmod +x /usr/local/bin/eclipse && \
    mkdir -p /home/iotivity && \
    echo "iotivity:x:1000:1000:Simulator,,,:/home/iotivity:/bin/bash" >> /etc/passwd && \
    echo "iotivity:x:1000:" >> /etc/group && \
    chown iotivity:iotivity -R /home/iotivity

RUN apt-get install -y x11vnc xvfb

RUN mkdir -p /home/iotivity/.vnc/ && x11vnc -storepasswd 1234 /home/iotivity/.vnc/passwd

RUN chown iotivity:iotivity -R /home/iotivity/.vnc

RUN https://downloads.iotivity.org/tools/simulator/latest

RUN /opt/eclipse/eclipse \
    -application org.eclipse.equinox.p2.director \
    -repository https://downloads.iotivity.org/tools/simulator/latest \
    -installIUs ClientControllerPlugin,Default,ServiceProviderPlugin

USER iotivity
ENV HOME /home/iotivity
WORKDIR /home/iotivity
EXPOSE 5900
CMD /usr/local/bin/eclipse