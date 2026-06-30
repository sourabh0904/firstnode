import express from "express";

const app = express();

const PORT = 3000;

//middle-ware : express -> to read JSON
app.use(express.json());

const user = [
    {
        id: 1,
        name : 'sourabh',
        email: 'patidarsourabh687@gmail.com',
    }
]

app.get('/userList', (req , res) => {
    res.json(
        {
            data: user,
        }
    );
});

app.post('/user' , (req , res ) => {
    const newUser = req.body;

    if(!user.name || !user.email) {
        return res.json({
            status : '400',
            message : 'please entre both user name and user email.',
        });
    };
    newUser.id = user.length + 1;
    user.push(newUser);

    res.json({
        status:'200',
        message:'user added sucessfully',
    })

});

app.get('/', (req , res) => {
    res.json({
        "name" : "sourabh",
        "email": "patidarsourabh687@gmail.com",
        "id" : "9",
    });
});

app.get('/users/:username' , (req , res) => {
    const user = req.params.username;

    res.json({
        'message':`hello ${user}`,
        'name':'sourabh patidar',
        'email':"patidarsourabh687@gmail.com",
        'id': "10",
    })
})


app.get('/search' , (req, res)=>{
    const keyword = res.query.term;
    if(!keyword) {
        return res.send("please send valid keyword");
    }

    res.json({
        message: `searched keyword ${keyword}`,
        data : [1,2,3],
    });
});

app.listen(PORT, ()=> {
    console.log("server running");
});