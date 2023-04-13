
export const fileUpload = async( file ) => {
  if( !file ) throw new Error('File not exist')

  const clurURL = 'https://api.cloudinary.com/v1_1/dwsivkep7/upload'
  const formData = new FormData();
  formData.append('upload_preset','react-journal')
  formData.append('file', file)
  try {
    const resp = await fetch( clurURL, {
      method: 'POST',
      body: formData
    });
    if ( !resp.ok ) throw new Error('Incorrect response on upload file')
    const cloudResp = await resp.json();
    return cloudResp.secure_url;

  } catch(error) {
    // throw new Error(error.message)
    return null
  }
}
