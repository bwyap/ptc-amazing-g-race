import express from 'express';
import authentication from './authentication';
import graphqlRoutes from './graphql';


const router = express.Router();


// Use authentication middleware
router.use(authentication);

router.use('/graphql', graphqlRoutes);


export default router;
