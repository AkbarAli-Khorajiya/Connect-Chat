import { doc, getDoc } from "firebase/firestore";
import { create } from 'zustand';
import { db } from "./firebaseConfig";


const useUserStore = create((set) => ({
    currentUser: null,
    isLoading: true,
    fetchUserInfo: async (userId) => {
        if (!userId) {
            set({
                currentUser: null,
                isLoading: false
            })
        }
        else {
            try {
                const docSnap = await getDoc(doc(db, "users", userId));

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    set({ currentUser: docSnap.data(), isLoading: false })
                } else {
                    console.log("No such document!");
                    set({ currentUser: null, isLoading: false })
                }

            } catch (error) {
                console.log(error)
                set({
                    currentUser: null,
                    isLoading: false
                })
            }
        }
    }
}));

export default useUserStore;
