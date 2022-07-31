import base64
import glob

# how to convert base64 to audio
files = glob.glob('full_send/*.txt')

def convertAudio(filename):
    decoded = base64.b64decode(open(filename).read())
    new_filename = filename.split('.')[0] + '.webm'
    with open(new_filename, 'wb') as w:
        w.write(decoded)
    
    converted_filename = new_filename.split('.')[0] + '.wav'

    ff = FFmpeg(
        executable = '/usr/local/bin/ffmpeg',
        inputs = {new_filename: None},
        outputs = {converted_filename: None})
    ff.cmd
    ff.run()


for file in files:
    convertAudio(file)