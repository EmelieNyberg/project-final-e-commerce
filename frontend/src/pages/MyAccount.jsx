// MyAccount.jsx


import { useEffect } from "react";
import { useUserStore } from "../stores/UserStore";
import { Header } from "../components/Header";
import { LogIn } from "../components/LogIn";

export const MyAccount = () => {
  const { user, setUser, clearUser } = useUserStore();

  useEffect(() => {
    const fetchMyAccount = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        clearUser(); // Om token saknas, rensa användardata
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/users/my-account", {
          method: "GET",
          headers: {
            Authorization: token, // Skicka token i headern
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data); // Uppdatera användardata i Zustand
        } else {
          clearUser(); // Logga ut om token är ogiltig
        }
      } catch (error) {
        console.error("Error fetching account details:", error);
        clearUser(); // Logga ut vid fel
      }
    };

    fetchMyAccount();
  }, [setUser, clearUser]);

  const handleLogout = () => {
    clearUser();
    localStorage.removeItem("accessToken"); // Ta bort token vid utloggning
  };

  return (
    <>
      <Header title="My account" subtitle="My account" />
      {user ? (
        <div>
          <h2>Welcome {user.firstName} {user.lastName}!</h2>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <LogIn />
      )}
    </>
  );
};









// import { useUserStore } from "../stores/UserStore";
// import { Header } from "../components/Header";
// import { LogIn } from "../components/LogIn";

// export const MyAccount = () => {
//   const { user, clearUser } = useUserStore();

//   const handleLogout = () => {
//     clearUser();
//   };

//   return (
//     <>
//       <Header title="My account" subtitle="My account" />
//       {user ? (
//         <div>
//           <h2>Welcome {user.firstName} {user.lastName}!</h2>
//           <button onClick={handleLogout}>Log Out</button>
//         </div>
//       ) : (
//         <LogIn />
//       )}
//     </>
//   );
// };