import express from "express"
import cookieParser from "cookie-parser"
const app = express();
app.use(cookieParser())
app.post("/create-cookie", (req,res) => {
    res.set("Set-cookie", "header-cookie=header-value")
    res.cookie("express-cookie", "dark-there", {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
        secure: false
    })
    res.json({msg: "cookies created"})
})
app.get("/read-cookie", (req,res) => {
    console.log(req.headers.cookie);
    console.log("this is from the cookie parser", req.cookies);
    res.json({msg: "read cookie", cookies: req.cookies});
})
app.listen(3000, () => {
    console.log("server is up at port 3000")
})