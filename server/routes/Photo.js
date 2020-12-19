const express = require('express');
const multer = require('multer');
const router = express.Router();
const Photo = require('../models/Photo');

const upload = multer({
    limits:{
        fileSize:100000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpeg|jpg|png)$/)){
            cb(new Error('only upload files of the jpeg or jpg format'));
        }
        cb(undefined,true)
    }
});

router.post(
    '/photos',
    upload.single('photo'),
    async (req, res) => {
      try {
        const photo = new Photo(req.body);
        const file = req.file.buffer;
        photo.photo = file;
  
        await photo.save();
        res.status(201).send({ _id: photo._id });
      } catch (error) {
        res.status(500).send({
          upload_error: 'Error while uploading file...Try again later.'
        });
      }
    },
    (error, req, res, next) => {
      if (error) {
        res.status(500).send({
          upload_error: error.message
        });
      }
    }
  );

  router.get('/photos/:id', async (req, res) => {
    try {
      const result = await Photo.findById(req.params.id);
      res.set('Content-Type', 'image/jpeg');
      res.send(result.photo);
    } catch (error) {
      res.status(400).send({ get_error: 'Error while getting photo.' });
    }
  });

module.exports = router;