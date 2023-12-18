const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const Blogs = new Schema({
    blog_id: {type:String},
    title:{type:String},
    content:{type:String},
    sub_content:{type:String},
    create_at:{type:Date}
})

module.exports=mongoose.model("blogs", Blogs)
// hong biet dung khong nhung ma ten phai cung ten voi collection, cai vu viet hoa de hoi thay sau