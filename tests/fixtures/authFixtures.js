export const initialState = {
	status: 'checking',
	uid: null,
	email: null,
	displayName: null,
	photoURL: null,
	errorMessage: null,
}
export const authenticatedState = {
	status: 'auth',
	uid: 'tests',
	email: 'tests@tests.com',
	displayName: 'Tests test',
	photoURL: 'https://tests.jpg',
	errorMessage: null,
}
export const notAuthenticatedState = {
	status: 'not-auth',
	uid: null,
	email: null,
	displayName: null,
	photoURL: null,
	errorMessage: null,
}
export const userTests = {
	uid: 'tests',
	email: 'tests@tests.com',
	displayName: 'Tests test',
	photoURL: 'https://tests.jpg',
}