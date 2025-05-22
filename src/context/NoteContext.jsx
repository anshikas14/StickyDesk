import { createContext, useEffect, useState } from "react";
import Spinner from "../icons/Spinner";
import { db } from "../appwrite/databases";


export const NoteContext = createContext()

const NoteProvider = ({children}) => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedNote, setSelectedNote] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        init();
       },[] )

    const init = async () => {
        try {
            const response = await db.notes.list();
            setNotes(response.documents);
        } catch (err) {
            console.error("Failed to fetch notes:", err);
            setError(err.message || "Failed to connect to database");
        } finally {
            setLoading(false);
        }
    }

    const contextData = { notes, setNotes, selectedNote, setSelectedNote, error };

    return (
    <NoteContext.Provider value={contextData}>
        {loading ? (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                }}
            >
                <Spinner size="100" />
            </div>
        ) : error ? (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    height: "100vh",
                    color: "red",
                    padding: "0 20px",
                    textAlign: "center"
                }}
            >
                <h2>Connection Error</h2>
                <p>{error}</p>
            </div>
        ) : children}
    </NoteContext.Provider>
    );
};

export default NoteProvider;