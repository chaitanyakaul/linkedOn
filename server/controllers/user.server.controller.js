import mongoose from 'mongoose';


//import models
import User from '../models/user.server.model';

export const getUsers = (req,res) => {
  User.find().exec((err,users) => {
    if(err){
      return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'Users fetched successfully',users});
  });
}
export const addUser = (req,res) => {
  const newUser = new User(req.body);
  newUser.save((err,user) => {
    if(err){
      return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'Todo added successfully',user});
  })
}
export const updateUser = (req,res) => {
  User.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,user) => {
    if(err){
      return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(user);
    console.log('hello bab');
    return res.json({'success':true,'message':'Updated successfully',user});
  })
}
export const getUser = (req,res) => {
  User.find({_id:req.params.id}).exec((err,user) => {
    if(err){
      return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'Todo fetched by id successfully',user});
    }
    else{
      return res.json({'success':false,'message':'Todo with the given id not found'});
    }
  })
}
export const deleteUser = (req,res) => {
  User.findByIdAndRemove(req.params.id, (err,user) => {
    if(err){
      return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':user.userText+' deleted successfully'});
  })
}
