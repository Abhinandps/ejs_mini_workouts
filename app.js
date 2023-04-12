const express = require('express')
const app = express()

const expressLayouts = require('express-ejs-layouts')






const port = process.env.PORT || 3000

app.set('view engine','ejs')
app.set('layout','./layouts/layout')


app.use(expressLayouts)


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
  

  exports.module = products

app.get('/',(req,res)=>{
    res.render('index',{ products})
})


app.listen(port,()=>{
    console.log("Listen to the port http://localhost:3000");
})

