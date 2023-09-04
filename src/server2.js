//Observes that is not readFileSync anymore. Now I'm starting our Stream of type Read. 
import {createReadStream, createWriteStream } from 'fs'

//Will read the file using createdReadStream and on each chunk data will display on stdin. Instead of all at once like previous example.
const file = createReadStream('bigfile')
.on('data', chunk => console.log(chunk.toString()));
