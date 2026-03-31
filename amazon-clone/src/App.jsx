import React, { useContext, useEffect } from 'react';
import Routering from './Router';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { DataContext } from './Component/DataProvider/DataProvider';
import { Type } from './Utility/Actiontype';

export default function App() {
  const [, dispatch] = useContext(DataContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: Type.SET_USER, user });
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Routering />
    </div>
  );
}
