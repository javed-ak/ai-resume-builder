import { atom } from 'recoil'

export const UserAtom = atom({
    key: 'isSignedIn',
    default: false
})