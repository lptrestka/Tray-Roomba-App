# Tray-Roomba-App
A node.js interpretation of a simple roomba mapping program. 

To install you have a few options:
* clone the repository into a location of your choice.
* click on the green button that says "code", and download the zip folder, then extract it to a location of your choice.

This program requires node js to run, if your machine does not currently have node js:

1. Install Node JS by downloading it for your operating system of choice from the following link: https://nodejs.org/en/download/

2. Run the installer


Following successful install, open command prompt, terminal, or respective command line interface.

1. Navigate to your new repository, for example: cd C:\Users\username\Desktop\Tray-Roomba-App-main

2. Run the program with the command: node .



Program parameters are set in the input.txt file

Instructions for modifying the file are as follows:

Example:

5 5

1 2

1 0

2 2

2 3

NNESEESWNWW

the first line holds the room dimensions (X Y), separated by a single space (all coordinates will be presented in this format)
the second line holds the hoover position
subsequent lines contain the zero or more positions of patches of dirt (one per line)
the next line then always contains the driving instructions (at least one)

-Reference for the above: https://gist.github.com/alirussell/2d200d21f117f8d570667daa7acdbae5#https://gist.github.com/alirussell/2d200d21f117f8d570667daa7acdbae5
