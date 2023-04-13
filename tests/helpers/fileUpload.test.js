
import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: 'dwsivkep7',
    api_key: '496488955543978',
    api_secret: '-KN4zexirz4pcnjbkefzatPo1qg',
    secure: true
})


describe( 'Tests in fileUpload', () => {
    test('upload file to cloudinary', async() => { 
        // // fileUpload
        const imageUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
        const res = await fetch( imageUrl ) ;
        const blob = await res.blob() ;
        const file = new File( [blob], 'foto.jpg') ;

        const url = await fileUpload( file ) ;
        expect( typeof url ).toBe('string')

        const segmentUrl = url.split('/');
        const imageId = segmentUrl[ segmentUrl.length -1 ].replace('.png', '');

        await cloudinary.api.delete_resources([ imageId ])

     }, 100000 ) ;
} ) ;