import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type {AppDispatch, RootState} from '../store';
import { fetchUserData } from './usersSlice.ts';


export const useFetchCheckUserStatus = () => {
    const dispatch = useDispatch<AppDispatch>();
    const loginUser = useSelector((state: RootState) => state.users.loginUser);

    useEffect(() => {
        if (loginUser?.id) {
            dispatch(fetchUserData(loginUser.id));
        }
    }, [loginUser?.id, dispatch]);

    return loginUser;
};