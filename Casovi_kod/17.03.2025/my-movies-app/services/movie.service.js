import { getDB } from "../config/db.js";
import { ObjectId } from "mongodb";
export default class MovieService{
    getAll(){ // sekoj povik do baza e asinhron i nema da treba async i koga treba da se povika ke treba await
        return getDB().collection("my-movies").find({}).toArray(); // toArray() se koristi ako se poke podatoci ako e samo 1 ne mora
    }
    getById(id){
        return getDB().collection("my-movies").findOne({_id: new ObjectId(id)});
    }
}