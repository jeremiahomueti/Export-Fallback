//Create an Export Fallback, with Export Default

//Beau Carnes said he was previously referring to 'named' exports, previously, whenever he talked about exports.
//There's also sth called Export Default, this is a Fallback Export, and is often used if you only want to export one thing from a file.



/* If this: 

function subtract(x,y) {return x - y;} 

...is the one thing I want to export from the file, I can just
type, export default and that's all. We know I'm exporting only
that one thing from the file.

See below: 

*/


export default function subtract(x,y) {return x - y;} 

//So know, we know this is just the fallback. 

//...basically, the one thing, we're going to export from the file.