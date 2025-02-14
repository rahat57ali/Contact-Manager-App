const express = require('express');
const router = express.Router();
const { 
    getContact, 
    createContact, 
    getContacts, 
    updateContact, 
    deleteContact 
} = require('../controllers/contactController');



router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(getContact);

router.route('/:id').put(updateContact);

router.route('/:id').delete(deleteContact);
router.route('/:id').delete(deleteContact);
router.route('/:id').delete(deleteContact);



module.exports = router;