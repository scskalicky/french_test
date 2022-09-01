
# PUT AUDIO IN raw audio folder to process

import base64
import glob
from ffmpy import FFmpeg

# how to convert base64 to audio
def convertAudio(filename):
    decoded = base64.b64decode(open(filename).read())
    new_filename = filename.split('.')[0] + '.webm'
    print(new_filename[10:])
    with open(new_filename, 'wb') as w:
        print(new_filename)
        w.write(decoded)
    
    converted_filename = new_filename.split('.')[0] + '.wav'

    # will exit with error if file already exists.
    ff = FFmpeg(
        executable = '/usr/local/bin/ffmpeg',
        inputs = {new_filename: None},
        outputs = {converted_filename: None})
    ff.cmd
    ff.run()

folders = glob.glob('raw_audio/*')

for folder in folders:
    files = glob.glob(folder + "/" +  "*.txt")
    print(files)
    for file in files:
        convertAudio(file)