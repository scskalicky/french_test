
# PUT AUDIO IN raw audio folder to process

import base64
import glob
from ffmpy import FFmpeg
import os
import re


def log_missing_file(outputdir, filename):
    with open(outputdir + 'missing_files.txt', 'a') as mf:
        mf.write(filename + '\n')

# how to convert base64 to audio
def convertAudio(filename, folder, output_directory):
    # decode the text file
    decoded = base64.b64decode(open(filename).read())
    # create new filename and save as webm format
    new_filename = filename.split('.')[0] + '.webm'
    # output the new decoded file as .webm ( I think this is necessary to then convert to something else, but idk. ffmpeg might be able to take the text just fine. )
    with open(new_filename, 'wb') as w:
      #  print(new_filename)
        w.write(decoded)
        w.close()
    
    # making a new filename
    converted_filename = new_filename.split('.')[0] + '.mp3'

    # strip off the old folder structure so it goes to the output folder instead
    converted_filename = output_directory + re.sub(folder + '/', '', converted_filename)
   # converted_filename = output_directory + converted_filename




    # will exit with error if file already exists.
    ff = FFmpeg(
        executable = '/usr/local/bin/ffmpeg',
        inputs = {new_filename: None},
        outputs = {converted_filename: "-y -nostats -loglevel error"}) # '-y' allows overwriting files. -loglevel error avoids the spam that plays as it is processing (although it can be kind of fun to watch)
    ff.cmd
    
    # If for some reason there is an empty file, ffmpeg will stop processing
    if os.path.getsize(new_filename) == 0:
        log_missing_file(output_directory, filename)
        os.remove(new_filename)
    else:
        ff.run()
        os.remove(new_filename)

folders = glob.glob('raw_audio/*')

for folder in folders:
    # make an output directory?
    output_directory = os.path.dirname(__file__) + '/' +  folder + '/output/'
    print(output_directory)
    if not os.path.exists(output_directory): # if the directory does not exist
        os.mkdir(output_directory)
    files = glob.glob(folder + "/" +  "*.txt")
   # print(files)
    for file in (files):
        print(file)
        print(folder)
        print(output_directory)
        convertAudio(file, folder, output_directory)