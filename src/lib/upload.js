import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const upload = (file) => {

    const storage = getStorage();
    const date = new Date().getTime()
    const storageRef = ref(storage, `images/${date + file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {

        uploadTask.on('state_changed',
            (snapshot) => {

                // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                const progress = (100 * snapshot.bytesTransferred) / snapshot.totalBytes;
                console.log('Upload is ' + progress + '% done')
            },
            (error) => {
                reject('Something went wrong!' + error.code)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            }
        );
    })
}

export default upload