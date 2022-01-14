import { Storage } from '@capacitor/storage';

const saveAuthData = async (email, password) => {
    await Storage.set({
        key: 'email',
        value: email
    })

    await Storage.set({
        key: 'password',
        value: password
    })
}

const checkIfAuth = async () => {
    const email = await Storage.get({ key: 'email' }).value;
    const password = await Storage.get({ key: 'password'}).value;

    console.log(email);
    console.log(password);
}