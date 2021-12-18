/*
This file contains validator function exports that can be reused.
  Currently used to validate schema files.
*/


//Checks for specific image extensions
function isImage (string) {
  return (/\.(gif|jpe?g|png|bmp)$/i).test(string);
}

exports.checkImage = [isImage, 
  'Unsupported file extension! Please use .gif, .jpg/.jpeg, .png, or .bmp.'];
