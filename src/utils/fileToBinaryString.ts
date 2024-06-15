export async function fileToBinaryString(file: Blob, callback) {
  const reader = new FileReader();

  reader.onload = function (event) {
    if (event.target.readyState == FileReader.DONE) {
      const binaryString = event.target.result;
      callback(binaryString);
    }
  };

  reader.readAsBinaryString(file);
}
