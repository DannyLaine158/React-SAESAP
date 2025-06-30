import { useEffect } from "react";
import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ users, setUsers ] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('https://randomuser.me/api/?results=10');
                const data = await res.json();
                setUsers(data.results);
                console.log(data.results);

                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                    navigate('home');
                }
            } catch (error) {
                console.error("Error al obtener usuarios ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const login = (email, password) => {
        const matchedUser = users.find(
            u => u.email === email && u.login.password === password
        );

        // console.log(matchedUser);

        if (matchedUser) {
            const loggedUser = {
                name: matchedUser.name.first,
                email: matchedUser.email,
                picture: matchedUser.picture.large
            }
            setUser(matchedUser);
            localStorage.setItem("user", JSON.stringify(loggedUser));
            navigate('home');
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);