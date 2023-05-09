const byteSize = (str) => {
  // write your code here
	const encoder = new TextEncoder();
  const encodedArray = encoder.encode(str);
  
  // Return the length of the array
  return encodedArray.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
