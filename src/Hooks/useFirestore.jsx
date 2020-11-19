import { useState, useEffect } from 'react';
import { appFireStore } from "../firebase/config";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = appFireStore.collection(collection)
            .orderBy("createdAt", "desc")
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                });
                setDocs(documents);
            });

        // Cleanup function to unsubscribe from the collection in case we unmount the image grid component.
        return () => unsub();

    }, [collection]);

    return {docs};
};

export default useFirestore;