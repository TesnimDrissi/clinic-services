const {users}=require('../database/model')
const cloudinary = require("../utils/cloudinary");

const selectAll = function (req, res) {
    users.find({})
      .then((items) => {
        res.status(200).send(items); 
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  };

  const insertUser = async function(req,res){
    try{
        console.log(cloudinary);
        const result =  await cloudinary.uploader.upload(req.body.image);
        // var imageResult= res.json(result)
     
        users.create(
        {fullname: req.body.fullname,
         address: req.body.address,
         number: req.body.number,
         general_health: req.body.general_health,
         date: req.body.date,
         message: req.body.message,
         image: result.secure_url,
         cloudinary_id : result.public_id
        }
        )
        .then((result) => {
          res.status(200).send(result); 
        })
        .catch((error) => {
          res.status(500).send(error);
          console.log(error);
        });
    }
    catch(error){
    console.log(error);
    }
  }

  const deleteUser = async function(req,res){
    try{

        //const user = await users.findById(req.params._id);

        //await cloudinary.uploader.destroy(users.cloudinary_id);

        users.deleteOne(req.params._id)
        .then((result) => {
          res.status(200).send(result); 
        })
        .catch((error) => {
          
          res.status(500).send(error);
          console.log(error);
        });
    }
    catch(error){
     console.log(error);
    }
  }
//   const updateUser = async function(req,res){
//     try{
//         console.log(cloudinary);
//         const result =  await cloudinary.uploader.upload(req.body.image);
        
     
//         users.findByOneAndUpdate({id:req.params._id},
//         {fullname: req.body.fullname,
//          address: req.body.address,
//          number: req.body.number,
//          general_health: req.body.general_health,
//          date: req.body.date,
//          message: req.body.message,
//          image: result.secure_url,
//          cloudinary_id : result.public_id
//         },
       
//         )
//         .then((result) => {
//           res.status(200).send(result); 
//           console.log(result);
//         })
//         .catch((error) => {
//           res.status(500).send(error);
//           console.log(error);
//         });
//     }
//     catch(error){
//     console.log(error);
//     }
//   }


module.exports={selectAll,insertUser,deleteUser}
