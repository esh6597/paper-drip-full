/*
This file contains validator function exports that can be reused.
  Currently used to validate schema files.

These validations may be unnecessary for build; client code will
  validate these fields, and admin users will be able to control
  the MongoDB. Keeping here in case I need to enforce.
*/


//Checks for specific image extensions--note that this only
//  checks for easy-to-work-with FILENAME EXTENSIONS, as
//  all images (including user uploaded) will be served
//  from the hard drive the server is running from
//  to save on hosting costs.
function isImage (string) {
  return (/\.(gif|jpe?g|png|bmp)$/).test(string);
}

//Exporting as array to fit schema validation field and include error
exports.checkImage = [isImage, 
  'Unsupported file extension! Please use .gif, .jpg/.jpeg, .png, or .bmp.'];


//Checks for valid email address; does NOT check if
//  address is live; this is why we have the 'unverified'
//  account tier.
//The variety in address syntax is why I've avoided regex
//  for this part.

function isEmail (string) {

  //Checks for LAST @ symbol in string; since emails can have more than
  //  one in the local part (first part of string).
  const wheresAt = string.lastIndexOf('@');
  if (wheresAt === -1) {
    return false;
  }
  const domain = string.slice((wheresAt + 1)); //Excludes @ symbol

  //Tests if length is below 3, the minimum number needed to have a
  //  period + 1 character before and after
  if (domain.length < 3) {
    return false;
  }

  //Domains can have multiple periods as well; checking for last one.
  const wheresPeriod = domain.lastIndexOf('.');

  if (wheresPeriod === -1 //Not found
    || wheresPeriod === 0 //First character
    || wheresPeriod === (domain.length - 1)) { //Last character
    
    return false;
  } else {
    return true;
  }
}

exports.checkEmail = [isEmail,
  'Invalid email address!'];