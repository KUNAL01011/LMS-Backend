import express from 'express';
import { activateUser, getUserInfo, loginUser, logoutUser, registrationUser, socailAuth, updateAccessToken, updateUserInfo } from '../controllers/user.controller';
import { isAuthenticated } from '../middleware/auth';

const userRouter = express.Router();

userRouter.post('/registration',registrationUser);
userRouter.post('/activate-user',activateUser);
userRouter.post('/login',loginUser);
userRouter.post('/logout',isAuthenticated,logoutUser);
userRouter.post('/refresh',updateAccessToken);
userRouter.get("/me",isAuthenticated,getUserInfo);
userRouter.post("/social-auth",socailAuth);
userRouter.put("/update-user-info",isAuthenticated,updateUserInfo);

export default userRouter;