export const selectUser = state => state?.auth?.user;
export const selectLoggedIn = state => state?.auth?.isLoggedIn;
export const selectUserName = state => state?.auth?.user?.name;
export const selectUserEmail = state => state?.auth?.user?.email;
