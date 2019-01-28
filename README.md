# MP3 Cutter
MP3 Cutter is a JavaScript library and a NodeJS module that allows you to cut your MP3 files by seconds.

## NPM
```
npm install --save mp3-cutter
```

## Usage
```
const MP3Cutter = require('mp3-cutter');

MP3Cutter.cut({
    src: 'source.mp3',
    target: 'target.mp3',
    start: 25,
    end: 70 
});
```

### Method
##### ```cut(Object options)```
##### ```outputBuffer cutBuffer(Object options)```

#### Options

##### ```src {String}```
Path to the file to be cut.

##### ```target {String}```
Path of the output file.

##### ```buffer {Buffer}```
Buffer object of audio file.

##### ```start {Number}```
Start position in seconds.

##### ```end {Number}```
End position in seconds.

## License
MP3 Cutter is provided under the [MIT License](https://opensource.org/licenses/MIT).