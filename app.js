const express = require('express')
const session = require('express-session')
const app = express()

const expressLayouts = require('express-ejs-layouts')






const port = process.env.PORT || 3000

app.set('view engine','ejs')
app.set('layout','./layouts/layout')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(expressLayouts)

app.use(addCacheControlHeader)

app.use(session({
  secret:"#secret_key",
  resave:false,
  saveUninitialized:false,
  cookie:{
    maxAge:20 * 1000
  }
}))


const products = [
    {
      product_name: "T-shirt",
      brand: "Nike",
      color: "Black",
      size: "Large",
      price: 29.99,
      discount: 10,
      in_stock: true,
      product_description: "A classic black T-shirt from Nike with a sleek design and comfortable fit.",
      product_image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQKyjawLXC07jJ37LJKxrCsKwRWP22uV5Sy_2o7VVVsm5WTg7p36tH4D8xvUeWFWWGkI7vslR-0rNQd-GibuyOaGZOEmZt-J05DH9_16Oef2QywOAKpc0xv&usqp=CAE",
    },
    {
      product_name: "Running Shoes",
      brand: "Adidas",
      color: "Blue",
      size: "9",
      price: 89.99,
      discount: 5,
      in_stock: false,
      product_description: "High-performance running shoes from Adidas with cushioning and support.",
      product_image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRg6kdX9t1jrX6K_lOV2NoAgQJ99BsXnwo-meufs_vA5NcZ3M4b3Ybg5Dn4IlEv7WuN6MjAh6HZ2EBFjXPSLp4hKvcPCuBtknazovGw57D3eA-iyYFpHFuO&usqp=CAE",
    },
    {
      product_name: "Jeans",
      brand: "Levi's",
      color: "Blue",
      size: "32x30",
      price: 59.99,
      discount: 15,
      in_stock: true,
      product_description: "Classic blue jeans from Levi's with a slim fit and durable denim fabric.",
      product_image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSnblm5FEzsRMzDTLEyYDCub5FN6IJLHYsVrK240-Yet8zq6U2T6wiLlYUQVg9TAj1IPWvtiVZaYWNcEqSyg6sn-O5ZI9oZ1Ohm1ToF_f8&usqp=CAE",
    }
  ]

const medicines = [
    {
      name: "Aspirin",
      brand: "Bayer",
      dosageForm: "Tablet",
      strength: "325 mg",
      price: 5.99
    },
    {
      name: "Acetaminophen",
      brand: "Tylenol",
      dosageForm: "Capsule",
      strength: "500 mg",
      price: 6.99
    },
    {
      name: "Loratadine",
      brand: "Claritin",
      dosageForm: "Tablet",
      strength: "10 mg",
      price: 9.99
    },
    {
      name: "Omeprazole",
      brand: "Prilosec",
      dosageForm: "Capsule",
      strength: "20 mg",
      price: 12.99
    }
  ]
  

const items = [
    {
      id: 1,
      name: "Item 1",
      price: 9.99,
      category: "Electronics",
      color: "Black"
    },
    {
      id: 2,
      name: "Item 2",
      price: 19.99,
      category: "Clothing",
      color: "Blue"
    },
    {
      id: 3,
      name: "Item 3",
      price: 4.99,
      category: "Home",
      color: "Red"
    },
    {
      id: 4,
      name: "Item 4",
      price: 14.99,
      category: "Electronics",
      color: "Silver"
    },
    {
      id: 5,
      name: "Item 5",
      price: 29.99,
      category: "Clothing",
      color: "Green"
    }
  ]
  

app.get('/',(req,res)=>{
    if(req.session.user){
      res.render('index',{ products})
    }
    else{
      res.render('login',{title:"Login"})
    }
})

app.get('/product',(req,res)=>{
    res.render('product',{ medicines})
})


app.get('/list',(req,res)=>{
    res.render('list',{ items})
})

// app.get('/login',(req,res)=>{
//     res.render('login',{title:"Login"})
// })


const credentials={
  username:"Abhi",
  password:"123"
}

function addCacheControlHeader(req, res, next) {
  if (!req.user) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  }
  next();
}

app.post('/login',(req,res)=>{
    let username = req.body.username
    let password = req.body.password
    console.log(req.body);
    if(username === credentials.username && password === credentials.password){
      req.session.user = username
      res.redirect("/")
    }
    else{
      res.render("login",{err:"Invalid username or password",title:"Login"})
    }
})


app.get('/logout',(req,res)=>{
  req.session.destroy(function (err){
    if(err){
      console.log(err);
    }
    else{
      res.redirect('/')
    }
  })
})





app.listen(port,()=>{
    console.log("Listen to the port http://localhost:3000");
})

