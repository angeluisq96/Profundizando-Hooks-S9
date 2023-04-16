import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite';
import { addNewEmptyNote, savingNewNote, setActiveNote, startNewNote } from '../../../src/store/journal';
import { userTests } from '../../fixtures/authFixtures'
import { FirebaseDB } from '../../../src/firebase/config';

describe('testing in thunks to journal', () => {
  const dispatch = jest.fn() ;
  const getState = jest.fn() ;
  beforeEach( () => jest.clearAllMocks() ) ;

  test('should startMewNote with nothing', async () => {
    const uid = userTests.uid
    getState.mockReturnValue({ auth:{ uid } })
    await startNewNote()( dispatch, getState )
    expect( dispatch ).toHaveBeenCalledWith( savingNewNote() )
    expect( dispatch ).toHaveBeenCalledWith( addNewEmptyNote( { 
      body:'', 
      title: '', 
      id: expect.any( String ), 
      date: expect.any( Number ), 
    } ) ) ;
    expect( dispatch ).toHaveBeenCalledWith( setActiveNote( { 
      body:'', 
      title: '', 
      id: expect.any( String ), 
      date: expect.any( Number ),
      imageURL: [] 
    } ) );

    const collectRef = collection( FirebaseDB, `${ userTests.uid }/journal/notes` ) ;
    const docs = await getDocs( collectRef ) ;
    const deletePromises = [] ;
    docs.forEach( doc => deletePromises.push( deleteDoc( doc.ref ) ) ) ;
    await Promise.all( deletePromises )
  }, 100000 ) ;
} ) ;