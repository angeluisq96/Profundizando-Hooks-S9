import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { fileUpload } from "../../helpers/fileUpload"
import { loadNotes } from "../../helpers/loadNotes"
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deleteNoteById } from "./"


export const startNewNote = () => {
  return async( dispatch, getState ) => {
    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }
    const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) )
    const resp = await setDoc( newDoc, newNote )
    newNote.id = newDoc.id;
    dispatch( savingNewNote() )    
    dispatch( addNewEmptyNote( newNote ) )    
  }
}

export const startLoadingNotes = () => {
  return async ( dispatch, getState ) => {
    const { uid } = getState().auth;
    const notes = await loadNotes( uid )
    dispatch( setNotes( notes ) )
  }
}

export const startSaveNote = () => {
  return async ( dispatch, getState ) => {
    dispatch(setSaving())
    const { uid } = getState().auth;
    const { active:note } = getState().journal; 
    const noteToFireStore = { ...note };
    delete noteToFireStore.id;
    const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
    await setDoc( docRef, noteToFireStore, { merge: true } )
    dispatch( updateNote( note ) )
  }
}

export const startUploadFiles = ( files = [] ) => {
  return async( dispatch ) => {
    dispatch(setSaving())
    // await fileUpload( files[0] )
    const fileUploadPromises = [];
    for ( const file of files ) {
      fileUploadPromises.push( fileUpload( file ) )
    }
    const photosURLs = await Promise.all( fileUploadPromises )
    dispatch( setPhotosToActiveNote( photosURLs ) )
  }
}

export const startDeletingNote = () => {
  return async( dispatch, getState ) => {
    const { uid } = getState().auth;
    const { active:note } = getState().journal; 
    const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` )
    await deleteDoc( docRef )
    dispatch( deleteNoteById(note.id) )
  }
}



