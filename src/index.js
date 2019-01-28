const fs = require('fs');
const Duration = require('./duration.js');

class MP3Cutter {
    /**
     * Cuts mp3 files and creates a new file with it.
     * 
     * @param {src:String, target:String, start:Number, end:Number} o 
     */
    static cut(o = {}) {

        var buffer = new Buffer(fs.statSync(o.src).size);

        try {
            var fd = fs.openSync(o.src, 'r');
            fs.readSync(fd, buffer, 0, buffer.length, 0);

            o.buffer = buffer;

            var outBuffer = MP3Cutter.cutBuffer(o);
            fs.writeFileSync(o.target, outBuffer);
        } catch (e) {
            console.error(e);
        } finally {
            fs.closeSync(fd);
        }
    }
    /**
     * Cuts mp3 files and creates a new file with it.
     * 
     * @param {buffer:Buffer, start:Number, end:Number} o 
     */
    static cutBuffer(o = {}) {
        var buffer = o.buffer,
            size = buffer.length,
            duration = Duration.getDuration(buffer),
            startTime = o.start || 0,
            endTime = o.end || duration;

        var valuePerSecond = size / duration,
            start = startTime * valuePerSecond,
            end = endTime * valuePerSecond;

        try {
            // var out = new Buffer(end-start);
            var out = buffer.slice(start, end)//fs.readSync(fd, out, 0, out.length, start);
            // fs.writeFileSync(o.target, out);
            return out;
        } catch (e) {
            console.error(e);
        } finally {
            // fs.closeSync(fd);
        }
    }

}

module.exports = MP3Cutter;