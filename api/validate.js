/*
This file contains validator function exports that can be reused.
  Currently used to validate schema files.
*/


//Checks for specific image extensions--note that this only
//  checks for easy-to-work-with FILENAME EXTENSIONS, as
//  all images (including user uploaded) will be served
//  from the hard drive the server is running from
//  to save on hosting costs.
function isImage (string) {
  return (/\.(gif|jpe?g|png|bmp)$/i).test(string);
}

exports.checkImage = [isImage, 
  'Unsupported file extension! Please use .gif, .jpg/.jpeg, .png, or .bmp.'];
